import React from 'react';
import { LotusMotif } from '../decorative/LotusMotif';
import { PeacockMotif } from '../decorative/PeacockMotif';
import { OrnamentalDivider } from '../decorative/OrnamentalDivider';
import { RoyalOrnament } from '../decorative/RoyalOrnament';
import { WEDDING_MESSAGES } from '../../data/weddingData';

/**
 * HeroSection — Main Wedding Invitation Hero Card
 *
 * Implements the Royal Palace × Peacock × Lotus aesthetic as luxury stationery:
 * - Sacred Sanskrit invocation with generous breathing room
 * - Cusped Palace Arch crowning the invitation card
 * - Gold foil typography for the couple's names
 * - Symmetrical peacocks, lotus blooms, and emerald foliage
 * - Seamless transition into the couple and events sections
 */
export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[90vh] sm:min-h-screen flex flex-col items-center justify-start overflow-hidden bg-ivory paper-grain pt-8 sm:pt-12 pb-14"
      aria-label="Wedding Invitation Hero"
    >
      {/* ═══════════════════════════════════════════════════════
          BACKGROUND ATMOSPHERE
          ═══════════════════════════════════════════════════════ */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft daylight radial aura */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] sm:w-[950px] h-[450px] bg-gradient-to-b from-gold-champagne/15 via-ivory/0 to-transparent rounded-full blur-3xl" />
        {/* Subtle corner emerald washes */}
        <div className="absolute bottom-0 left-0 w-64 sm:w-80 h-64 sm:h-80 bg-emerald-deep/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 sm:w-80 h-64 sm:h-80 bg-emerald-deep/5 rounded-full blur-3xl" />
        {/* Jali watermark screen */}
        <div className="absolute inset-0 jali-watermark opacity-[0.20]" />
      </div>

      {/* ═══════════════════════════════════════════════════════
          OUTER STATIONERY FRAME (Stationery margins)
          ═══════════════════════════════════════════════════════ */}
      <div className="absolute inset-3 sm:inset-6 md:inset-8 border border-gold/25 pointer-events-none hero-fade-in">
        <div className="absolute inset-1.5 sm:inset-2 border border-gold/15" />
        {/* Four corner brackets */}
        {['top-0 left-0 border-t-2 border-l-2', 'top-0 right-0 border-t-2 border-r-2',
          'bottom-0 left-0 border-b-2 border-l-2', 'bottom-0 right-0 border-b-2 border-r-2'].map((c, i) => (
          <div key={i} className={`absolute w-4 h-4 sm:w-6 sm:h-6 border-gold/50 ${c}`} />
        ))}
      </div>

      {/* ═══════════════════════════════════════════════════════
          PALACE WINDOW GHOST PANELS (Desktop side architecture)
          ═══════════════════════════════════════════════════════ */}
      <div className="hidden xl:block absolute left-8 top-1/2 -translate-y-1/2 pointer-events-none hero-fade-in delay-600">
        <RoyalOrnament variant="palace-window" className="w-16 opacity-25" />
      </div>
      <div className="hidden xl:block absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none hero-fade-in delay-600">
        <RoyalOrnament variant="palace-window" className="w-16 opacity-25" />
      </div>

      {/* ═══════════════════════════════════════════════════════
          MAIN CONTENT COLUMN
          ═══════════════════════════════════════════════════════ */}
      <div className="relative z-10 w-full max-w-2xl mx-auto px-4 sm:px-6 flex flex-col items-center">

        {/* ── TOP HEADER: Sacred Invocation ────────────────── */}
        <div className="text-center mb-6 sm:mb-7 hero-fade-up">
          <div className="inline-flex flex-col items-center">
            <p className="font-serif text-xs sm:text-sm tracking-royal text-gold font-medium">
              {WEDDING_MESSAGES.sacredInvocation}
            </p>
            <div className="flex items-center gap-2 mt-1">
              <div className="h-[0.5px] w-6 sm:w-10 bg-gold/40" />
              <span className="font-caps text-[8px] sm:text-[9px] tracking-monumental text-palace-green/60 uppercase">
                {WEDDING_MESSAGES.invocationMeaning}
              </span>
              <div className="h-[0.5px] w-6 sm:w-10 bg-gold/40" />
            </div>
          </div>
        </div>

        {/* ── PALACE ARCH TOP CROWN ────────────────────────── */}
        <div className="w-full max-w-sm sm:max-w-md hero-arch-reveal delay-200">
          <svg viewBox="0 0 360 96" fill="none" className="w-full h-auto text-gold" aria-hidden="true">
            {/* Outer Cusped Arch */}
            <path
              d="M12 96 C12 44 48 44 76 32 C100 22 130 34 150 16
                 C156 10 160 4 180 0
                 C200 4 204 10 210 16
                 C230 34 260 22 284 32
                 C312 44 348 44 348 96"
              stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"
            />
            {/* Inner Parallel Arch Line */}
            <path
              d="M24 96 C24 52 54 52 80 42 C102 32 130 42 150 28
                 C156 22 160 14 180 10
                 C200 14 204 22 210 28
                 C230 42 258 32 280 42
                 C306 52 336 52 336 96"
              stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 2" opacity="0.65"
            />
            {/* Keystone Medallion */}
            <circle cx="180" cy="0" r="7" fill="#C6A66B" /><circle cx="180" cy="0" r="3.5" fill="#F3E4C8" />
            <circle cx="180" cy="0" r="2.5" fill="#F3E4C8" />
            {/* Arch Peak Accent Beads */}
            {[[150,16],[210,16],[76,32],[284,32]].map(([cx,cy],i) => (
              <circle key={i} cx={cx} cy={cy} r="2" fill="#C6A66B" />
            ))}
            {/* Spandrel Foliage Fills */}
            <path d="M42 70 C50 54 66 50 76 56 C66 58 56 66 42 70 Z" fill="#32114E" fillOpacity="0.18" />
            <path d="M318 70 C310 54 294 50 284 56 C294 58 304 66 318 70 Z" fill="#32114E" fillOpacity="0.18" />
            {/* Pillar Capitals */}
            <rect x="10" y="88" width="18" height="8" rx="1" fill="#C6A66B" fillOpacity="0.4" />
            <rect x="332" y="88" width="18" height="8" rx="1" fill="#C6A66B" fillOpacity="0.4" />
            {/* Pillar Shafts */}
            <rect x="14" y="60" width="10" height="30" rx="2" fill="#C6A66B" fillOpacity="0.10" stroke="#C6A66B" strokeWidth="0.5" strokeOpacity="0.35" />
            <rect x="336" y="60" width="10" height="30" rx="2" fill="#C6A66B" fillOpacity="0.10" stroke="#C6A66B" strokeWidth="0.5" strokeOpacity="0.35" />
          </svg>
        </div>

        {/* ── CORE LUXURY STATIONERY CARD ──────────────────── */}
        <div className="relative w-full -mt-2 sm:-mt-3 hero-scale-reveal delay-400">
          <div className="relative border border-gold/40 rounded-b-2xl rounded-t-sm p-0.5 bg-gradient-to-b from-gold/10 via-transparent to-gold/5 shadow-palace-elevation">
            <div className="relative border border-gold/20 rounded-b-xl rounded-t-sm px-5 sm:px-10 py-7 sm:py-10 bg-ivory-light/95 text-center overflow-hidden">

              {/* Subtle Jali Background inside card */}
              <div className="absolute inset-0 jali-dense opacity-[0.06] pointer-events-none" />

              {/* Corner Lotus Brackets */}
              <div className="absolute top-2 left-2 pointer-events-none opacity-50">
                <LotusMotif variant="corner" size="sm" />
              </div>
              <div className="absolute top-2 right-2 pointer-events-none opacity-50 -scale-x-100">
                <LotusMotif variant="corner" size="sm" />
              </div>
              <div className="absolute bottom-2 left-2 pointer-events-none opacity-50 -scale-y-100">
                <LotusMotif variant="corner" size="sm" />
              </div>
              <div className="absolute bottom-2 right-2 pointer-events-none opacity-50 -scale-x-100 -scale-y-100">
                <LotusMotif variant="corner" size="sm" />
              </div>

              {/* Inner Stationery Inset Hairline */}
              <div className="absolute inset-4 sm:inset-6 border border-gold/20 rounded pointer-events-none" />

              {/* ── WEDDING RECEPTION INVITATION Label ───── */}
              <div className="relative z-10 hero-fade-up delay-600">
                <span className="font-caps text-[10px] sm:text-xs tracking-monumental text-gold-deep uppercase font-semibold">
                  Wedding Reception Invitation
                </span>
              </div>

              {/* Fine Peacock-Eye Divider */}
              <div className="mt-3 mb-4 hero-fade-in delay-800">
                <OrnamentalDivider motif="peacock-eye" lineStyle="dual" />
              </div>

              {/* ── Date & Timing ──────────────────────────── */}
              <div className="relative z-10 hero-fade-up delay-600 space-y-1">
                <p className="font-caps text-xs sm:text-base tracking-royal text-palace-green font-semibold uppercase">
                  Sunday, 25<sup className="text-[9px] font-sans font-normal text-gold-deep">th</sup> October 2026
                </p>
                <p className="font-serif text-xs sm:text-sm text-gold-deep italic font-medium">
                  6:30 PM onwards
                </p>
              </div>

              {/* ── Couple's Names (The Primary Visual Focus) ── */}
              <div className="relative z-10 py-6 sm:py-8 hero-fade-up delay-800">
                {/* Royal Palace Sunburst & Filigree Medallion Halo behind names */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.22]">
                  <svg viewBox="0 0 300 300" fill="none" className="w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] text-gold" aria-hidden="true">
                    {/* Soft radial glow */}
                    <circle cx="150" cy="150" r="130" fill="#C6A66B" fillOpacity="0.06" />
                    {/* Outer fine decorative ring with bead chain */}
                    <circle cx="150" cy="150" r="120" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />
                    <circle cx="150" cy="150" r="105" stroke="currentColor" strokeWidth="1" opacity="0.75" />
                    <circle cx="150" cy="150" r="95" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 2" opacity="0.5" />
                    <circle cx="150" cy="150" r="65" stroke="currentColor" strokeWidth="0.8" opacity="0.7" />
                    
                    {/* 16 Radiating Golden Sunburst Rays */}
                    {Array.from({ length: 16 }, (_, i) => {
                      const angle = (i * 22.5 * Math.PI) / 180;
                      const x1 = 150 + Math.cos(angle) * 70;
                      const y1 = 150 + Math.sin(angle) * 70;
                      const x2 = 150 + Math.cos(angle) * (i % 2 === 0 ? 115 : 100);
                      const y2 = 150 + Math.sin(angle) * (i % 2 === 0 ? 115 : 100);
                      return (
                        <g key={i}>
                          <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth={i % 2 === 0 ? "0.9" : "0.5"} opacity={i % 2 === 0 ? "0.65" : "0.4"} strokeLinecap="round" />
                          {i % 2 === 0 && (
                            <circle cx={x2} cy={y2} r="1.8" fill="currentColor" opacity="0.7" />
                          )}
                        </g>
                      );
                    })}

                    {/* 8-point geometric palace diamond star in center */}
                    <path d="M150 100 L158 142 L200 150 L158 158 L150 200 L142 158 L100 150 L142 142 Z" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.5" />
                    <path d="M150 115 L155 145 L185 150 L155 155 L150 185 L145 155 L115 150 L145 145 Z" stroke="currentColor" strokeWidth="0.6" fill="#C6A66B" fillOpacity="0.08" opacity="0.6" />
                    
                    {/* Concentric bead accents */}
                    {Array.from({ length: 12 }, (_, i) => {
                      const angle = (i * 30 * Math.PI) / 180;
                      const x = 150 + Math.cos(angle) * 95;
                      const y = 150 + Math.sin(angle) * 95;
                      return <circle key={`b-${i}`} cx={x} cy={y} r="1.5" fill="currentColor" opacity="0.6" />;
                    })}
                  </svg>
                </div>

                <h1 className="font-display text-[2.8rem] sm:text-6xl md:text-7xl font-normal tracking-wide text-gold-foil drop-shadow-sm leading-none">
                  Vinay
                </h1>

                <div className="flex items-center justify-center my-3.5 sm:my-4.5">
                  <div className="flex-1 max-w-[3.5rem] sm:max-w-[6rem] h-[1px] bg-gradient-to-r from-transparent to-gold/60" />
                  <div className="mx-3 sm:mx-4 flex flex-col items-center gap-1">
                    <span className="font-script text-3xl sm:text-4xl text-lotus-blush italic leading-none">
                      &amp;
                    </span>
                  </div>
                  <div className="flex-1 max-w-[3.5rem] sm:max-w-[6rem] h-[1px] bg-gradient-to-l from-transparent to-gold/60" />
                </div>

                <h1 className="font-display text-[2.8rem] sm:text-6xl md:text-7xl font-normal tracking-wide text-gold-foil drop-shadow-sm leading-none">
                  Kishma
                </h1>
              </div>

              {/* Lotus Ornamental Divider */}
              <div className="hero-fade-in delay-1000">
                <OrnamentalDivider motif="lotus" lineStyle="dual" />
              </div>

              {/* ── Invitation Text ──────────────────────── */}
              <div className="relative z-10 mt-4 space-y-2 hero-fade-up delay-1000">
                <p className="font-script text-2xl sm:text-3xl text-palace-green/95 leading-snug">
                  With Immense Love and Gratitude
                </p>
                <p className="font-serif italic text-sm sm:text-base text-palace-green/80 max-w-sm sm:max-w-md mx-auto leading-relaxed">
                  "{WEDDING_MESSAGES.leadQuote}"
                </p>
              </div>



              {/* ── Bottom Foliage & Lotus Bloom ─────────── */}
              <div className="mt-3 sm:mt-4 flex justify-center gap-4 sm:gap-6 items-end hero-fade-in delay-1400">
                {/* Left Emerald Leaf */}
                <svg viewBox="0 0 40 50" fill="none" className="w-7 h-9 sm:w-9 sm:h-12 opacity-60">
                  <path d="M20 48 C20 48 4 36 6 18 C10 24 14 34 20 48 Z" fill="#32114E" />
                  <path d="M20 48 C20 48 2 28 8 10 C12 18 16 32 20 48 Z" fill="#32114E" fillOpacity="0.6" />
                  <path d="M20 48 C10 38 8 22 12 8" stroke="#C6A66B" strokeWidth="0.6" strokeLinecap="round" />
                </svg>
                <LotusMotif variant="crest" size="lg" className="opacity-95 drop-shadow-md" />
                {/* Right Emerald Leaf */}
                <svg viewBox="0 0 40 50" fill="none" className="w-7 h-9 sm:w-9 sm:h-12 opacity-60 -scale-x-100">
                  <path d="M20 48 C20 48 4 36 6 18 C10 24 14 34 20 48 Z" fill="#32114E" />
                  <path d="M20 48 C20 48 2 28 8 10 C12 18 16 32 20 48 Z" fill="#32114E" fillOpacity="0.6" />
                  <path d="M20 48 C10 38 8 22 12 8" stroke="#C6A66B" strokeWidth="0.6" strokeLinecap="round" />
                </svg>
              </div>

              {/* ── Bottom Gold Bead Baseline ────────────── */}
              <div className="mt-4 flex items-center justify-center gap-1 hero-fade-in delay-1600">
                {[...Array(7)].map((_, i) => (
                  <div
                    key={i}
                    className={`rounded-full bg-gold ${i === 3 ? 'w-2.5 h-2.5' : 'w-1.5 h-1.5 opacity-60'}`}
                  />
                ))}
              </div>

            </div>
          </div>
        </div>

        {/* ── Subtle Desktop Pillar Capitals ─────────────── */}
        <div className="hidden md:flex w-full max-w-sm justify-between -mt-2 hero-fade-in delay-600 pointer-events-none">
          {[0, 1].map((i) => (
            <div key={i} className="flex flex-col items-center opacity-30 text-gold">
              <div className={`w-6 h-3 border border-gold/60 ${i === 0 ? 'rounded-tl-lg' : 'rounded-tr-lg'} bg-gold/10`} />
              <div className="w-4 h-16 border-x border-gold/40 bg-gold/5" />
              <div className="w-6 h-3 border border-gold/60 rounded-b bg-gold/20" />
            </div>
          ))}
        </div>

      </div>

      {/* ── SECTION TRANSITION DIVIDER ────────────────────── */}
      <div className="w-full max-w-3xl mx-auto px-4 mt-8 pt-4 flex justify-center">
        <RoyalOrnament variant="section-divider" className="opacity-70 text-gold" />
      </div>
    </section>
  );
}

export default HeroSection;
