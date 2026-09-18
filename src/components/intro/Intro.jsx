import React, { useState, useEffect, useRef } from 'react';
import { LotusMotif } from '../decorative/LotusMotif';
import { PeacockMotif } from '../decorative/PeacockMotif';

/**
 * Intro.jsx: Richly decorated video-box intro.
 * Large centered video with palace arch crown, couple names, ornamental borders.
 */
export function Intro({
  onComplete,
  videoSrc = '/assets/wedding-intro.mp4',
}) {
  const [videoAvailable, setVideoAvailable] = useState(Boolean(videoSrc));
  const videoRef = useRef(null);

  const handleProceed = () => {
    if (onComplete) onComplete();
  };

  useEffect(() => {
    if (videoRef.current && videoAvailable) {
      videoRef.current.play().catch(() => {});
    }
  }, [videoAvailable]);

  return (
    <div
      className="fixed inset-0 z-50 w-full h-[100dvh] bg-palace-dark flex flex-col items-center justify-between select-none overflow-hidden"
      role="region"
      aria-label="Wedding Video Intro"
    >
      {/* ── AMBIENT BACKGROUND ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-palace-deep via-[#0a1f18] to-palace-dark z-0" />
      {/* Gold glow halos */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gold/5 rounded-full blur-3xl pointer-events-none z-[1]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-peacock-teal/8 rounded-full blur-3xl pointer-events-none z-[1]" />
      <div className="absolute inset-0 jali-watermark opacity-[0.10] pointer-events-none z-[1]" />

      {/* ── OUTER STATIONERY FRAME ── */}
      <div className="absolute inset-2 sm:inset-3 border border-gold/25 rounded-2xl pointer-events-none z-[3]" />
      <div className="absolute inset-3 sm:inset-5 border border-gold/10 rounded-xl pointer-events-none z-[3]" />
      {/* Corner Lotus */}
      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 text-gold/50 z-[4]"><LotusMotif variant="corner" size="sm" /></div>
      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gold/50 -scale-x-100 z-[4]"><LotusMotif variant="corner" size="sm" /></div>
      <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 text-gold/50 -scale-y-100 z-[4]"><LotusMotif variant="corner" size="sm" /></div>
      <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 text-gold/50 -scale-x-100 -scale-y-100 z-[4]"><LotusMotif variant="corner" size="sm" /></div>

      {/* ── TOP: Sacred Invocation + Couple Names ── */}
      <header className="relative z-10 flex flex-col items-center pt-4 sm:pt-5 flex-shrink-0 px-4">
        {/* Sanskrit Blessing */}
        <p className="font-serif text-[10px] sm:text-xs tracking-[0.25em] uppercase text-gold/75 font-medium mb-1">
          &#x0964;&#x0964; &#x0936;&#x094D;&#x0930;&#x0940; &#x0917;&#x0923;&#x0947;&#x0936;&#x093E;&#x092F; &#x0928;&#x092E;&#x0903; &#x0964;&#x0964;
        </p>

        {/* Thin gold rule */}
        <div className="flex items-center gap-2 w-full max-w-xs sm:max-w-sm mb-2 sm:mb-3">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold/50 to-gold/20" />
          <div className="w-1 h-1 rotate-45 bg-gold/60 flex-shrink-0" />
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-gold/50 to-gold/20" />
        </div>

        {/* Couple Names */}
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="text-right">
            <h1 className="font-display text-xl sm:text-3xl md:text-4xl font-normal tracking-wide text-gold-foil drop-shadow-[0_0_12px_rgba(198,166,107,0.5)] leading-tight">
              Vinay
            </h1>
          </div>
          <div className="flex flex-col items-center gap-0.5 px-1 sm:px-2">
            <div className="h-px w-4 sm:w-6 bg-gold/40" />
            <span className="font-script text-lg sm:text-2xl md:text-3xl text-lotus-blush italic leading-none drop-shadow-sm">&amp;</span>
            <div className="h-px w-4 sm:w-6 bg-gold/40" />
          </div>
          <div className="text-left">
            <h1 className="font-display text-xl sm:text-3xl md:text-4xl font-normal tracking-wide text-gold-foil drop-shadow-[0_0_12px_rgba(198,166,107,0.5)] leading-tight">
              Kishma
            </h1>
          </div>
        </div>

        {/* Peacock divider */}
        <div className="mt-1.5 sm:mt-2 flex items-center gap-2 sm:gap-3">
          <div className="flex-1 h-px w-12 sm:w-20 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
          <PeacockMotif variant="feather-crown" size="sm" className="w-10 h-5 sm:w-14 sm:h-7 text-gold opacity-80" />
          <div className="flex-1 h-px w-12 sm:w-20 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        </div>
      </header>

      {/* ── CENTER: Palace Arch Crown + Video Box ── */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center w-full px-3 sm:px-8 md:px-16 min-h-0 py-1 sm:py-2">

        {/* Palace Arch Crown above video */}
        <div className="relative flex flex-col items-center -mb-1 z-20 drop-shadow-[0_4px_12px_rgba(198,166,107,0.4)]">
          <LotusMotif variant="crest" size="md" className="w-7 h-7 sm:w-9 sm:h-9" />
        </div>
        <div className="w-full max-w-[260px] sm:max-w-xs md:max-w-sm -mb-2 z-20 relative">
          <svg viewBox="0 0 320 55" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto text-gold">
            <path d="M5 52 C5 28 38 28 62 20 C88 11 118 22 140 9 C149 4 154 1 160 0 C166 1 171 4 180 9 C202 22 232 11 258 20 C282 28 315 28 315 52" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M15 52 C15 34 44 34 67 26 C91 18 119 27 140 16 C149 11 154 6 160 5 C166 6 171 11 180 16 C201 27 229 18 253 26 C276 34 305 34 305 52" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.6"/>
            <circle cx="160" cy="0" r="2" fill="#DFC48E"/>
            <circle cx="140" cy="9" r="1.5" fill="#C6A66B"/>
            <circle cx="180" cy="9" r="1.5" fill="#C6A66B"/>
            <circle cx="62" cy="20" r="1.2" fill="#C6A66B"/>
            <circle cx="258" cy="20" r="1.2" fill="#C6A66B"/>
          </svg>
        </div>

        {/* Video Frame */}
        <div className="relative w-full max-w-3xl mx-auto z-10">
          {/* Outer glow ring */}
          <div className="absolute -inset-[4px] rounded-2xl bg-gradient-to-br from-gold via-gold-champagne/60 to-gold z-0" />
          <div className="absolute -inset-[9px] rounded-[22px] border border-gold/25 z-0" />
          {/* Side ornamental peacock dots */}
          <div className="absolute left-[-28px] top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-1.5 items-center">
            {[...Array(5)].map((_, i) => (
              <div key={i} className={`rounded-full bg-gold/60 ${i === 2 ? 'w-2 h-2' : 'w-1 h-1'}`} />
            ))}
          </div>
          <div className="absolute right-[-28px] top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-1.5 items-center">
            {[...Array(5)].map((_, i) => (
              <div key={i} className={`rounded-full bg-gold/60 ${i === 2 ? 'w-2 h-2' : 'w-1 h-1'}`} />
            ))}
          </div>

          {/* Video */}
          <div className="relative rounded-2xl overflow-hidden shadow-[0_0_70px_rgba(198,166,107,0.5)] z-10 bg-palace-dark">
            {videoAvailable ? (
              <video
                ref={videoRef}
                src={videoSrc}
                autoPlay
                playsInline
                muted
                onEnded={handleProceed}
                onError={() => setVideoAvailable(false)}
                className="w-full h-auto max-h-[44vh] sm:max-h-[50vh] md:max-h-[54vh] object-contain block"
              />
            ) : (
              <div className="w-full aspect-video flex flex-col items-center justify-center bg-gradient-to-b from-emerald-deep to-palace-dark">
                <p className="font-caps text-gold text-sm tracking-wider">Video unavailable</p>
              </div>
            )}
          </div>
        </div>

        {/* Below video: date badge */}
        <div className="mt-2 sm:mt-3 flex items-center gap-2 sm:gap-3">
          <div className="h-px w-8 sm:w-14 bg-gradient-to-r from-transparent to-gold/50" />
          <div className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1 rounded-full border border-gold/40 bg-palace-deep/60 backdrop-blur-sm shadow-[0_0_12px_rgba(198,166,107,0.2)]">
            <span className="text-gold/70 text-[9px]">✦</span>
            <p className="font-caps text-[10px] sm:text-xs font-semibold tracking-royal text-gold-bright uppercase">
              25 October 2026
            </p>
            <span className="text-gold/70 text-[9px]">✦</span>
          </div>
          <div className="h-px w-8 sm:w-14 bg-gradient-to-l from-transparent to-gold/50" />
        </div>
      </main>

      {/* ── BOTTOM: Single Skip Button ── */}
      <footer className="relative z-10 flex flex-col items-center gap-1 flex-shrink-0 pb-4 sm:pb-5 px-4">
        <button
          onClick={handleProceed}
          className="group inline-flex items-center justify-center gap-2 px-8 sm:px-12 py-2.5 sm:py-3 rounded-full border-2 border-gold bg-gradient-to-r from-emerald-deep via-palace-green to-emerald-night hover:from-gold hover:to-gold-deep text-gold-champagne hover:text-palace-dark backdrop-blur-md transition-all duration-300 shadow-[0_0_24px_rgba(198,166,107,0.45)] hover:shadow-[0_0_40px_rgba(198,166,107,0.95)] active:scale-95 cursor-pointer"
          aria-label="Skip Introduction and Enter Invitation"
        >
          <span className="font-caps text-xs sm:text-sm tracking-royal uppercase font-bold">
            Skip Intro &bull; Enter Invitation
          </span>
          <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300">
            <path d="M4 10 H14 M10 6 L14 10 L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <span className="text-[8px] sm:text-[9px] font-caps tracking-monumental text-gold/45 uppercase mt-0.5">
          Palace Experience &bull; Click to Enter
        </span>
      </footer>
    </div>
  );
}

export default Intro;

