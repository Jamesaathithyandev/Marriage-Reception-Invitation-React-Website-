import React from 'react';
import { WEDDING_COUPLE } from '../../data/weddingData';
import { LotusMotif } from '../decorative/LotusMotif';
import { PeacockMotif } from '../decorative/PeacockMotif';
import { OrnamentalDivider } from '../decorative/OrnamentalDivider';

/**
 * CoupleSection — The Bride & The Groom
 *
 * Requirements:
 * - Vinay: S/o Mrs. Aarthi & Mr. Shashi Bhushan Sahani
 * - Kishma: D/o Mrs. Sangita & Mr. Francis Xavier
 * - Desktop: Vinay — decorative centerpiece — Kishma
 * - Mobile: Stack vertically
 * - No generic profile cards; rendered as bespoke luxury Indian royal stationery.
 */
export function CoupleSection() {
  const { groom, bride } = WEDDING_COUPLE;

  return (
    <section
      id="couple"
      className="relative w-full py-16 sm:py-24 px-4 sm:px-6 md:px-8 bg-ivory paper-grain overflow-hidden"
      aria-label="The Royal Couple"
    >
      {/* ── Background Subtle Light & Jali ───────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] h-[500px] bg-gradient-to-b from-gold-champagne/15 via-transparent to-lotus-blush/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 jali-watermark opacity-[0.16]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">

        {/* ── SECTION HEADER ───────────────────────────────── */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center justify-center gap-3 mb-2">
            <div className="h-[0.5px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-gold" />
            <span className="font-caps text-[10px] sm:text-xs tracking-monumental text-gold-deep uppercase font-semibold">
              The Sacred Union
            </span>
            <div className="h-[0.5px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-gold" />
          </div>

          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-palace-green font-normal tracking-wide">
            The Bride <span className="font-script text-3xl sm:text-4xl text-gold-deep mx-1">&amp;</span> The Groom
          </h2>

          <div className="mt-3 flex justify-center">
            <OrnamentalDivider motif="lotus" lineStyle="dual" className="max-w-xs" />
          </div>
        </div>

        {/* ── LUXURY STATIONERY CARD (COUPLE PRESENTATION) ─── */}
        <div className="relative w-full border border-gold/35 rounded-2xl p-1 bg-gradient-to-b from-gold/15 via-transparent to-gold/10 shadow-palace-elevation">
          <div className="relative border border-gold/20 rounded-xl p-6 sm:p-10 md:p-14 bg-ivory-light/95 overflow-hidden">

            {/* Subtle inner jali lattice */}
            <div className="absolute inset-0 jali-dense opacity-[0.05] pointer-events-none" />

            {/* Corner lotus brackets */}
            <div className="absolute top-2 left-2 pointer-events-none opacity-40">
              <LotusMotif variant="corner" size="sm" />
            </div>
            <div className="absolute top-2 right-2 pointer-events-none opacity-40 -scale-x-100">
              <LotusMotif variant="corner" size="sm" />
            </div>
            <div className="absolute bottom-2 left-2 pointer-events-none opacity-40 -scale-y-100">
              <LotusMotif variant="corner" size="sm" />
            </div>
            <div className="absolute bottom-2 right-2 pointer-events-none opacity-40 -scale-x-100 -scale-y-100">
              <LotusMotif variant="corner" size="sm" />
            </div>

            {/* Inner margin hairline */}
            <div className="absolute inset-3 sm:inset-5 border border-gold/15 rounded-lg pointer-events-none" />

            {/* ── DESKTOP: 3-COLUMN (Groom — Centerpiece — Bride) | MOBILE: STACKED ── */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-11 gap-8 md:gap-4 items-center">

              {/* ── GROOM: VINAY (Left Wing) ───────────────── */}
              <div className="md:col-span-5 flex flex-col items-center text-center px-2 sm:px-4">
                {/* Role Pill */}
                <div className="mb-2">
                  <span className="font-caps text-xs sm:text-sm tracking-monumental text-gold-deep uppercase font-bold">
                    {groom.role}
                  </span>
                </div>

                {/* Groom Name */}
                <h3 className="font-display text-4xl sm:text-5xl md:text-6xl font-normal tracking-wide text-gold-foil drop-shadow-sm leading-tight">
                  {groom.name}
                </h3>

                {/* Peacock Feather Accent */}
                <div className="my-3 flex justify-center opacity-90">
                  <PeacockMotif variant="feather-crown" size="md" className="w-14 h-8 opacity-95" />
                </div>

                {/* Parentage Line */}
                <div className="space-y-1.5 mt-1">
                  <p className="font-serif italic text-sm sm:text-base text-gold-deep font-semibold">
                    {groom.relation}
                  </p>
                  <p className="font-serif text-lg sm:text-xl md:text-2xl text-palace-green font-semibold leading-snug">
                    {groom.parents}
                  </p>
                  <span className="font-caps text-[10px] sm:text-xs tracking-monumental text-palace-green/70 uppercase block pt-1 font-semibold">
                    {groom.heritage}
                  </span>
                </div>
              </div>

              {/* ── CENTERPIECE: SACRED EMBLEM (Center) ─────── */}
              <div className="md:col-span-1 flex flex-col items-center justify-center my-2 md:my-0">
                {/* Mobile divider line */}
                <div className="w-28 h-[1px] bg-gradient-to-r from-transparent via-gold/60 to-transparent md:hidden mb-4" />

                <div className="relative flex flex-col items-center">
                  {/* Decorative Radial Sun / Lotus Ring */}
                  <div className="w-18 h-18 sm:w-22 sm:h-22 rounded-full border border-gold/50 bg-gradient-to-b from-ivory to-ivory-dark flex flex-col items-center justify-center shadow-gold-subtle">
                    <LotusMotif variant="crest" size="md" className="opacity-95 -mt-1" />
                    <span className="font-script text-3xl sm:text-4xl text-gold-deep leading-none mt-0.5">
                      &amp;
                    </span>
                  </div>

                  {/* Vertical connecting hairlines (Desktop only) */}
                  <div className="hidden md:block absolute -top-8 w-[1px] h-6 bg-gradient-to-t from-gold/50 to-transparent" />
                  <div className="hidden md:block absolute -bottom-8 w-[1px] h-6 bg-gradient-to-b from-gold/50 to-transparent" />
                </div>

                {/* Mobile divider line */}
                <div className="w-28 h-[1px] bg-gradient-to-r from-transparent via-gold/60 to-transparent md:hidden mt-4" />
              </div>

              {/* ── BRIDE: KISHMA (Right Wing) ──────────────── */}
              <div className="md:col-span-5 flex flex-col items-center text-center px-2 sm:px-4">
                {/* Role Pill */}
                <div className="mb-2">
                  <span className="font-caps text-xs sm:text-sm tracking-monumental text-gold-deep uppercase font-bold">
                    {bride.role}
                  </span>
                </div>

                {/* Bride Name */}
                <h3 className="font-display text-4xl sm:text-5xl md:text-6xl font-normal tracking-wide text-gold-foil drop-shadow-sm leading-tight">
                  {bride.name}
                </h3>

                {/* Lotus Motif Accent */}
                <div className="my-3 flex justify-center opacity-90">
                  <LotusMotif variant="crest" size="md" className="w-14 h-9 opacity-95" />
                </div>

                {/* Parentage Line */}
                <div className="space-y-1.5 mt-1">
                  <p className="font-serif italic text-sm sm:text-base text-gold-deep font-semibold">
                    {bride.relation}
                  </p>
                  <p className="font-serif text-lg sm:text-xl md:text-2xl text-palace-green font-semibold leading-snug">
                    {bride.parents}
                  </p>
                  <span className="font-caps text-[10px] sm:text-xs tracking-monumental text-palace-green/70 uppercase block pt-1 font-semibold">
                    {bride.heritage}
                  </span>
                </div>
              </div>

            </div>

            {/* ── BLESSING FOOTER QUOTE ───────────────────── */}
            <div className="relative z-10 mt-10 pt-7 border-t border-gold/20 text-center">
              <p className="font-serif italic text-sm sm:text-base text-palace-green/80 max-w-lg mx-auto leading-relaxed">
                "Together with their families, they seek your blessings as they step into a lifetime of shared dreams and everlasting love."
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default CoupleSection;
