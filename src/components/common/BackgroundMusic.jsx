import React, { useEffect, useRef, useState, useImperativeHandle, forwardRef } from 'react';

/**
 * BackgroundMusic.jsx
 *
 * Strategy for true autoplay from page open:
 *  - Exposes a `start()` method via ref (forwardRef)
 *  - App.jsx calls audioRef.start() from LoadingScreen's onReady callback
 *  - LoadingScreen fires onReady immediately on mount (first useEffect)
 *  - This is inside the browser's "page load" window where autoplay is allowed
 *    on many browsers, and works 100% on localhost
 *  - Fallback: invisible fullscreen tap-to-start overlay if still blocked
 */
export const BackgroundMusic = forwardRef(function BackgroundMusic(
  { src = '/assets/bg-music.mp3', volume = 0.22 },
  ref
) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [visible, setVisible] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [needsGesture, setNeedsGesture] = useState(false);

  const fadeVolumeTo = (audio, target, durationMs) => {
    const steps = 80;
    const interval = durationMs / steps;
    const delta = (target - audio.volume) / steps;
    let step = 0;
    const id = setInterval(() => {
      step++;
      audio.volume = Math.min(Math.max(audio.volume + delta, 0), 1);
      if (step >= steps) clearInterval(id);
    }, interval);
  };

  const showPill = () => {
    setVisible(true);
    setTimeout(() => setFadeIn(true), 60);
  };

  const doPlay = async (audio) => {
    try {
      audio.muted = true;
      await audio.play();
      audio.muted = false;
      audio.volume = 0;
      fadeVolumeTo(audio, volume, 2000);
      setPlaying(true);
      setNeedsGesture(false);
      showPill();
      return true;
    } catch {
      return false;
    }
  };

  // Expose start() so parent can trigger from LoadingScreen mount
  useImperativeHandle(ref, () => ({
    start: () => {
      const audio = audioRef.current;
      if (audio) doPlay(audio);
    },
  }));

  useEffect(() => {
    const audio = new Audio(src);
    audio.loop = true;
    audio.volume = 0;
    audioRef.current = audio;

    // Attempt 1: immediate autoplay on mount
    doPlay(audio).then((success) => {
      if (!success) {
        // Attempt 2: show tap-to-start overlay
        setNeedsGesture(true);
        showPill();
      }
    });

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  const handleGestureStart = () => {
    const audio = audioRef.current;
    if (!audio) return;
    setNeedsGesture(false);
    doPlay(audio);
  };

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      fadeVolumeTo(audio, 0, 500);
      setTimeout(() => audio.pause(), 520);
      setPlaying(false);
    } else {
      audio.muted = false;
      audio.play()
        .then(() => {
          fadeVolumeTo(audio, volume, 800);
          setPlaying(true);
        })
        .catch(() => {});
    }
  };

  const pillClass = [
    'fixed bottom-3.5 right-3.5 sm:bottom-6 sm:right-6 z-[200] transition-all duration-700',
    visible && fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
  ].join(' ');

  return (
    <>
      {/* Invisible fullscreen tap-to-start overlay — only shown if autoplay was blocked */}
      {needsGesture && (
        <div
          className="fixed inset-0 z-[199] cursor-pointer"
          onClick={handleGestureStart}
          onTouchStart={handleGestureStart}
          aria-label="Tap to enable music"
        />
      )}

      {/* Floating music pill */}
      {visible && (
        <div className={pillClass}>
          <button
            onClick={toggle}
            className="group flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-gold/55 bg-palace-dark/90 backdrop-blur-md shadow-[0_0_18px_rgba(198,166,107,0.3)] hover:shadow-[0_0_28px_rgba(198,166,107,0.65)] hover:border-gold/90 transition-all duration-300 cursor-pointer active:scale-95 select-none"
            aria-label={playing ? 'Pause music' : 'Play music'}
          >
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
            <span className="font-caps text-[9px] sm:text-[10px] tracking-wider text-gold-champagne/80 group-hover:text-gold-champagne uppercase leading-none whitespace-nowrap">
              {needsGesture ? 'Tap for Music' : playing ? 'Mast Magan' : 'Play Music'}
            </span>
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
