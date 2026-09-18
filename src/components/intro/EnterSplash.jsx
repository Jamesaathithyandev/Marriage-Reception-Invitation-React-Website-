import React, { useState, useEffect } from 'react';
import { LotusMotif } from '../decorative/LotusMotif';
import { PeacockMotif } from '../decorative/PeacockMotif';

/**
 * EnterSplash.jsx
 * A royal gate screen shown after the loading screen.
 * User clicks "Open Invitation" — this gesture guarantees music autoplay.
 */
export function EnterSplash({ onEnter }) {
  const [visible, setVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Fade in after a brief moment
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const handleEnter = () => {
    setFadeOut(true);
    setTimeout(() => { if (onEnter) onEnter(); }, 650);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-palace-dark select-none transition-opacity duration-650 ${
        fadeOut ? 'opacity-0 pointer-events-none' : visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-palace-deep via-[#071510] to-palace-dark" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[280px] bg-peacock-teal/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 jali-watermark opacity-[0.10] pointer-events-none" />

      {/* Outer stationery frame */}
      <div className="absolute inset-2 sm:inset-4 border border-gold/20 rounded-2xl pointer-events-none" />
      <div className="absolute inset-3 sm:inset-6 border border-gold/10 rounded-xl pointer-events-none" />

      {/* Corner Lotus */}
      <div className="absolute top-3 left-3 sm:top-5 sm:left-5 text-gold/40"><LotusMotif variant="corner" size="sm" /></div>
      <div className="absolute top-3 right-3 sm:top-5 sm:right-5 text-gold/40 -scale-x-100"><LotusMotif variant="corner" size="sm" /></div>
      <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 text-gold/40 -scale-y-100"><LotusMotif variant="corner" size="sm" /></div>
      <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 text-gold/40 -scale-x-100 -scale-y-100"><LotusMotif variant="corner" size="sm" /></div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center gap-4 sm:gap-6 px-6 text-center">

        {/* Sanskrit blessing */}
        <p className="font-serif text-[10px] sm:text-xs tracking-[0.28em] text-gold/70 uppercase">
          &#x0964;&#x0964; &#x0936;&#x094D;&#x0930;&#x0940; &#x0917;&#x0923;&#x0947;&#x0936;&#x093E;&#x092F; &#x0928;&#x092E;&#x0903; &#x0964;&#x0964;
        </p>

        {/* Gold rule */}
        <div className="flex items-center gap-3 w-full max-w-xs">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold/50 to-gold/20" />
          <div className="w-1 h-1 rotate-45 bg-gold/60" />
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-gold/50 to-gold/20" />
        </div>

        {/* Lotus crest */}
        <LotusMotif variant="crest" size="lg" className="w-12 h-12 sm:w-16 sm:h-16 drop-shadow-[0_0_20px_rgba(198,166,107,0.6)]" />

        {/* Couple names */}
        <div className="flex flex-col items-center gap-1">
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-normal tracking-wide text-gold-foil drop-shadow-[0_0_24px_rgba(198,166,107,0.5)] leading-none">
            Vinay
          </h1>
          <span className="font-script text-3xl sm:text-4xl text-lotus-blush italic my-1">&amp;</span>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-normal tracking-wide text-gold-foil drop-shadow-[0_0_24px_rgba(198,166,107,0.5)] leading-none">
            Kishma
          </h1>
        </div>

        {/* Peacock divider */}
        <div className="flex items-center gap-3 w-full max-w-xs">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent" />
          <PeacockMotif variant="feather-crown" size="sm" className="w-12 h-6 sm:w-16 sm:h-8 text-gold opacity-75" />
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent" />
        </div>

        {/* Date */}
        <p className="font-caps text-[10px] sm:text-xs tracking-[0.22em] text-gold/65 uppercase">
          25 October 2026 &bull; Bengaluru
        </p>

        {/* THE ENTER BUTTON */}
        <button
          onClick={handleEnter}
          className="group relative mt-3 sm:mt-4 inline-flex items-center justify-center gap-3 px-10 sm:px-14 py-3.5 sm:py-4 rounded-full border-2 border-gold bg-gradient-to-r from-emerald-deep via-palace-green to-emerald-night hover:from-gold hover:to-gold-deep text-gold-champagne hover:text-palace-dark backdrop-blur-md transition-all duration-300 shadow-[0_0_30px_rgba(198,166,107,0.5)] hover:shadow-[0_0_50px_rgba(198,166,107,1)] active:scale-95 cursor-pointer overflow-hidden"
          aria-label="Open the wedding invitation"
        >
          {/* Shimmer sweep */}
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />

          <LotusMotif variant="small" size="sm" className="w-5 h-5 text-gold group-hover:text-palace-dark opacity-80 transition-colors duration-300" />

          <span className="relative font-caps text-sm sm:text-base tracking-royal uppercase font-bold">
            Open Invitation
          </span>

          <svg viewBox="0 0 20 20" fill="none" className="relative w-4 h-4 group-hover:translate-x-1 transition-transform duration-300">
            <path d="M4 10 H14 M10 6 L14 10 L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <p className="font-serif italic text-[10px] sm:text-xs text-ivory/35 mt-1">
          With Immense Love and Gratitude
        </p>
      </div>
    </div>
  );
}

export default EnterSplash;
