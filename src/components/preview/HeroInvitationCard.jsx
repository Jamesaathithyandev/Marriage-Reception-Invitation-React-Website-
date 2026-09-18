import React, { useState } from 'react';
import { PalaceArch } from '../decorative/PalaceArch';
import { LotusMotif } from '../decorative/LotusMotif';
import { PeacockMotif } from '../decorative/PeacockMotif';
import { OrnamentalDivider } from '../decorative/OrnamentalDivider';

/**
 * HeroInvitationCard: The Primary Royal Wedding Invitation Preview
 * Wedding: Vinay & Kishma
 * Date: Sunday, 25th October 2026
 */
export function HeroInvitationCard() {
  const [archVariant, setArchVariant] = useState('warm-ivory');
  const [crownType, setCrownType] = useState('lotus');

  return (
    <div className="w-full flex flex-col items-center justify-center py-6 sm:py-10 px-4">
      {/* Visual Direction Selector / Interactive Switcher for the user */}
      <div className="mb-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3 bg-ivory-dark/70 backdrop-blur-md p-1.5 rounded-full border border-gold/30 shadow-sm text-xs font-sans">
        <span className="text-palace-green/70 px-3 font-semibold tracking-wider uppercase text-[10px]">
          Arch Theme:
        </span>
        <button
          onClick={() => setArchVariant('warm-ivory')}
          className={`px-4 py-1.5 rounded-full transition-all duration-300 ${
            archVariant === 'warm-ivory'
              ? 'bg-emerald-deep text-gold-light shadow-sm font-medium'
              : 'text-palace-green hover:text-emerald-deep'
          }`}
        >
          Warm Ivory & Gold
        </button>
        <button
          onClick={() => setArchVariant('royal-emerald')}
          className={`px-4 py-1.5 rounded-full transition-all duration-300 ${
            archVariant === 'royal-emerald'
              ? 'bg-emerald-deep text-gold-light shadow-sm font-medium'
              : 'text-palace-green hover:text-emerald-deep'
          }`}
        >
          Royal Emerald
        </button>
        <button
          onClick={() => setArchVariant('peacock-teal')}
          className={`px-4 py-1.5 rounded-full transition-all duration-300 ${
            archVariant === 'peacock-teal'
              ? 'bg-peacock-teal text-gold-light shadow-sm font-medium'
              : 'text-palace-green hover:text-emerald-deep'
          }`}
        >
          Peacock Teal
        </button>

        <div className="h-3 w-[1px] bg-gold/40 mx-1 hidden sm:block" />

        <button
          onClick={() => setCrownType(crownType === 'lotus' ? 'peacock' : 'lotus')}
          className="px-3 py-1.5 rounded-full border border-gold/40 text-palace-green hover:bg-gold/15 transition-all text-[11px] font-medium"
        >
          Crown: {crownType === 'lotus' ? 'Lotus Crest' : 'Peacock Crest'}
        </button>
      </div>

      {/* Main Palace Arch Invitation Card */}
      <div className="relative w-full max-w-xl">
        <PalaceArch
          variant={archVariant}
          crownMotif={crownType}
          className="shadow-2xl"
        >
          {/* Sacred Royal Sanskrit Invocation */}
          <div className="text-center pt-2 pb-3">
            <p className="font-serif text-xs sm:text-sm tracking-royal uppercase text-gold font-medium">
              ॥ श्री गणेशाय नमः ॥
            </p>
            <p className="text-[10px] tracking-monumental text-gold/80 font-caps uppercase mt-0.5">
              Shree Ganeshaya Namaha
            </p>
          </div>

          {/* Delicate Flanking Peacock or Lotus Divider */}
          <div className="my-2 flex justify-center">
            {crownType === 'peacock' ? (
              <PeacockMotif variant="flanking-peacocks" className="opacity-90 max-w-[180px]" />
            ) : (
              <LotusMotif variant="crest" size="sm" className="opacity-90" />
            )}
          </div>

          {/* Royal Invitation Text Header */}
          <div className="text-center mt-3 mb-4 space-y-1">
            <p className="font-script text-2xl sm:text-3xl text-gold-deep">
              Together with their families
            </p>
            <p className="font-sans text-[10px] sm:text-xs uppercase tracking-regal text-palace-green/80 font-medium">
              Cordially invite you to celebrate the wedding of
            </p>
          </div>

          {/* Couple's Names - The Jewel Centerpiece */}
          <div className="text-center py-4 sm:py-6 relative">
            {/* Background Subtle Lotus Bloom Watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
              <LotusMotif variant="crest" size="xl" />
            </div>

            {/* Groom's Name */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-normal tracking-wide text-gold-foil drop-shadow-sm">
              Vinay
            </h1>

            {/* Antique Champagne Gold Ampersand */}
            <div className="flex items-center justify-center my-2 sm:my-3">
              <div className="h-[1px] w-12 sm:w-16 bg-gradient-to-r from-transparent to-gold/70" />
              <span className="font-script text-3xl sm:text-4xl text-lotus-blush mx-3 italic leading-none">
                &
              </span>
              <div className="h-[1px] w-12 sm:w-16 bg-gradient-to-l from-transparent to-gold/70" />
            </div>

            {/* Bride's Name */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-normal tracking-wide text-gold-foil drop-shadow-sm">
              Kishma
            </h1>
          </div>

          {/* Ornamental Divider */}
          <OrnamentalDivider motif="lotus" lineStyle="dual" className="my-3 sm:my-5" />

          {/* Wedding Date Presentation */}
          <div className="text-center space-y-2.5 py-2">
            <div className="inline-block px-6 py-2 rounded-md border-y border-gold/50 bg-gold/5">
              <p className="font-caps text-xs sm:text-sm font-semibold tracking-royal text-gold-deep uppercase">
                Sunday
              </p>
              <p className="font-serif text-2xl sm:text-3xl font-semibold tracking-wide text-emerald-deep py-0.5">
                25<span className="text-sm align-super font-normal text-gold">th</span> October 2026
              </p>
              <p className="font-sans text-[10px] tracking-monumental text-palace-green/70 uppercase">
                Two Thousand Twenty-Six
              </p>
            </div>
          </div>

          {/* Royal Palace Atmosphere / Location Note */}
          <div className="text-center mt-5 mb-3 px-4">
            <p className="font-caps text-[11px] tracking-regal text-gold uppercase font-medium">
              Royal Palace Experience
            </p>
            <p className="font-serif italic text-xs sm:text-sm text-palace-green/80 mt-1 max-w-sm mx-auto leading-relaxed">
              "A celebration of sacred vows, timeless traditions, and joyous union under the royal starlit palace skies."
            </p>
          </div>

          {/* Bottom Auspicious Lotus Seal */}
          <div className="mt-4 flex flex-col items-center justify-center">
            <div className="w-8 h-[1px] bg-gold/40 mb-2" />
            <span className="font-caps text-[9px] tracking-monumental text-gold/70 uppercase">
              Save The Date
            </span>
          </div>
        </PalaceArch>
      </div>

      {/* Aesthetic Assurance Tagline */}
      <p className="mt-6 text-center text-xs font-serif italic text-palace-green/60 max-w-md">
        Bespoke Royal Indian Wedding Stationery • Crafted with Warm Ivory, Deep Emerald, Peacock Teal & Antique Gold Foil
      </p>
    </div>
  );
}

export default HeroInvitationCard;
