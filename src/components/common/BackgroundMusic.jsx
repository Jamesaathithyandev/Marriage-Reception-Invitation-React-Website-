import React, { useEffect, useRef, useState, useImperativeHandle, forwardRef, useCallback } from 'react';

/**
 * BackgroundMusic.jsx
 *
 * Plays the romantic classical wedding theme "Mast Magan".
 * Features:
 * - Immediate synchronous playback on the "Open Invitation" click
 * - Reliable Pause / Play toggle that stops instantly and stays stopped
 * - Safe volume handling for desktop and mobile/iOS (no unhandled mutations)
 * - Transparent fallback to online raw CDN if local file is missing
 * - Floating royal pill button with animated sound equalizer bars
 */
const PRIMARY_SRC = '/assets/bg-music.mp3';
const FALLBACK_SRC = 'https://raw.githubusercontent.com/Jamesaathithyandev/Marriage-Invitation-React-Website-/main/public/assets/bg-music.mp3';

export const BackgroundMusic = forwardRef(function BackgroundMusic(
  { src = PRIMARY_SRC, volume = 0.35 },
  ref
) {
  const audioRef = useRef(null);
  const fadeTimerRef = useRef(null);
  const userPausedRef = useRef(false);

  const [playing, setPlaying] = useState(false);
  const [visible, setVisible] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);
  const [needsGesture, setNeedsGesture] = useState(false);

  // Safely set audio volume (catches iOS WebKit read-only constraint)
  const safeSetVolume = (audio, vol) => {
    try {
      audio.volume = Math.min(Math.max(vol, 0), 1);
    } catch (_) {}
  };

  const clearFadeTimer = () => {
    if (fadeTimerRef.current) {
      clearInterval(fadeTimerRef.current);
      fadeTimerRef.current = null;
    }
  };

  const fadeVolumeTo = (audio, target, durationMs = 800) => {
    clearFadeTimer();
    const steps = 20;
    const interval = durationMs / steps;
    let current = 0.08;
    safeSetVolume(audio, current);

    const delta = (target - current) / steps;
    fadeTimerRef.current = setInterval(() => {
      current = Math.min(current + delta, target);
      safeSetVolume(audio, current);
      if (current >= target) {
        clearFadeTimer();
      }
    }, interval);
  };

  const playAudio = useCallback(async (audioInstance) => {
    const audio = audioInstance || audioRef.current;
    if (!audio) return false;

    try {
      audio.muted = false;
      safeSetVolume(audio, volume);
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        await playPromise;
      }
      setPlaying(true);
      setNeedsGesture(false);
      fadeVolumeTo(audio, volume, 800);
      return true;
    } catch (err) {
      console.warn('Playback requires user activation:', err?.message);
      setPlaying(false);
      setNeedsGesture(true);
      return false;
    }
  }, [volume]);

  // Expose start() via ref — called synchronously on "Open Invitation" click
  useImperativeHandle(ref, () => ({
    start: () => {
      userPausedRef.current = false;
      const audio = audioRef.current;
      if (audio) {
        playAudio(audio);
      }
    },
    toggle: (e) => {
      toggle(e);
    },
  }));

  useEffect(() => {
    const audio = new Audio(src);
    audio.loop = true;
    audio.preload = 'auto';
    safeSetVolume(audio, volume);
    audioRef.current = audio;

    // Direct event listeners on HTMLAudioElement keep React state 100% in sync
    const handleAudioPlay = () => setPlaying(true);
    const handleAudioPause = () => setPlaying(false);

    audio.addEventListener('play', handleAudioPlay);
    audio.addEventListener('pause', handleAudioPause);

    // Fallback to hosted CDN if local asset fails to load
    audio.onerror = () => {
      if (audio.src !== FALLBACK_SRC) {
        console.info('Switching to fallback audio source...');
        audio.src = FALLBACK_SRC;
        audio.load();
      }
    };

    // Attempt autoplay immediately
    playAudio(audio).then((success) => {
      if (!success) {
        setNeedsGesture(true);
      }
    });

    // Fade in pill smoothly after brief delay
    const pillTimer = setTimeout(() => setFadeIn(true), 200);

    // One-time interaction fallback: ONLY if autoplay was blocked AND user hasn't paused
    const handleFirstUnlock = () => {
      if (userPausedRef.current) return;
      if (audio && audio.paused) {
        playAudio(audio).then((started) => {
          if (started) {
            window.removeEventListener('click', handleFirstUnlock);
            window.removeEventListener('touchstart', handleFirstUnlock);
          }
        });
      }
    };

    window.addEventListener('click', handleFirstUnlock, { passive: true });
    window.addEventListener('touchstart', handleFirstUnlock, { passive: true });

    return () => {
      clearTimeout(pillTimer);
      clearFadeTimer();
      window.removeEventListener('click', handleFirstUnlock);
      window.removeEventListener('touchstart', handleFirstUnlock);
      audio.removeEventListener('play', handleAudioPlay);
      audio.removeEventListener('pause', handleAudioPause);
      audio.pause();
      audio.src = '';
    };
  }, [src, playAudio, volume]);

  const toggle = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
      if (e.nativeEvent) {
        e.nativeEvent.stopImmediatePropagation?.();
      }
    }

    const audio = audioRef.current;
    if (!audio) return;

    clearFadeTimer();

    if (!audio.paused) {
      // User explicitly requested pause
      userPausedRef.current = true;
      audio.pause();
      setPlaying(false);
      setNeedsGesture(false);
    } else {
      // User explicitly requested play
      userPausedRef.current = false;
      playAudio(audio);
    }
  };

  const pillClass = [
    'fixed bottom-3.5 right-3.5 sm:bottom-6 sm:right-6 z-[200] transition-all duration-700',
    visible && fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
  ].join(' ');

  return (
    <>
      {/* Invisible fullscreen tap overlay — active only when initial autoplay was completely blocked */}
      {needsGesture && !userPausedRef.current && (
        <div
          className="fixed inset-0 z-[199] cursor-pointer"
          onClick={() => {
            if (!userPausedRef.current) playAudio();
          }}
          onTouchStart={() => {
            if (!userPausedRef.current) playAudio();
          }}
          aria-label="Tap to enable music"
        />
      )}

      {/* Floating royal music pill */}
      {visible && (
        <div className={pillClass}>
          <button
            type="button"
            onClick={toggle}
            className="group flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-gold/55 bg-palace-dark/90 backdrop-blur-md shadow-[0_0_18px_rgba(198,166,107,0.3)] hover:shadow-[0_0_28px_rgba(198,166,107,0.65)] hover:border-gold/90 transition-all duration-300 cursor-pointer active:scale-95 select-none"
            aria-label={playing ? 'Pause music' : 'Play music'}
          >
            {/* Animated Equalizer Bars */}
            <div className="flex items-end gap-[3px] h-4 w-5 flex-shrink-0">
              {[0.15, 0, 0.3].map((delay, i) => (
                <div
                  key={i}
                  style={{
                    width: '3px',
                    borderRadius: '9999px',
                    backgroundColor: playing ? '#C6A66B' : 'rgba(198,166,107,0.35)',
                    height: playing ? '14px' : '4px',
                    transition: 'height 0.3s ease',
                    animation: playing
                      ? `musicBarAnim 0.75s ease-in-out ${delay}s infinite alternate`
                      : 'none',
                  }}
                />
              ))}
            </div>

            {/* Song Label */}
            <span className="font-caps text-[9px] sm:text-[10px] tracking-wider text-gold-champagne/80 group-hover:text-gold-champagne uppercase leading-none whitespace-nowrap">
              {needsGesture && !userPausedRef.current ? 'Tap for Music' : playing ? 'Mast Magan' : 'Play Music'}
            </span>

            {/* Icon */}
            <span className="text-gold/65 group-hover:text-gold leading-none flex-shrink-0">
              {playing ? (
                <svg viewBox="0 0 12 12" fill="currentColor" className="w-3 h-3">
                  <rect x="1" y="1" width="3.5" height="10" rx="1" />
                  <rect x="7.5" y="1" width="3.5" height="10" rx="1" />
                </svg>
              ) : (
                <svg viewBox="0 0 12 12" fill="currentColor" className="w-3 h-3">
                  <path d="M2 1.5 L11 6 L2 10.5 Z" />
                </svg>
              )}
            </span>
          </button>

          <style>{`
            @keyframes musicBarAnim {
              from { height: 4px; }
              to   { height: 14px; }
            }
          `}</style>
        </div>
      )}
    </>
  );
});

export default BackgroundMusic;
