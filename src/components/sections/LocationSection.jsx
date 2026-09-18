import React from 'react';
import { WEDDING_VENUE } from '../../data/weddingData';
import { LotusMotif } from '../decorative/LotusMotif';
import { RoyalOrnament } from '../decorative/RoyalOrnament';
import { OrnamentalDivider } from '../decorative/OrnamentalDivider';

/**
 * LocationSection — Venue & Map
 *
 * Features:
 * - Palace doorway arch framing the venue details
 * - Satellite map embed in a royal gold-bordered frame (no Maps API)
 * - "Get Directions" triggers the curtain transition, then opens Google Maps
 * - Full address from centralized data
 */
export function LocationSection({ onExternalNavigate }) {

  const handleGetDirections = () => {
    const url = WEDDING_VENUE.googleMapsSearchUrl;
    if (onExternalNavigate) {
      onExternalNavigate(url);
    } else {
      window.open(url, '_blank', 'noopener');
    }
  };

  return (
    <section
      id="venue"
      className="relative w-full py-16 sm:py-24 px-4 sm:px-6 md:px-8 bg-ivory paper-grain overflow-hidden"
      aria-label="Wedding Venue and Location"
    >
      {/* Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-emerald-deep/5 via-transparent to-gold-champagne/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 jali-watermark opacity-[0.15]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">

        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center justify-center gap-3 mb-2">
            <div className="h-[0.5px] w-8 sm:w-14 bg-gradient-to-r from-transparent to-gold" />
            <span className="font-caps text-[10px] sm:text-xs tracking-monumental text-gold-deep uppercase font-semibold">
              Where To Find Us
            </span>
            <div className="h-[0.5px] w-8 sm:w-14 bg-gradient-to-l from-transparent to-gold" />
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-palace-green font-normal tracking-wide">
            The Venue
          </h2>
          <div className="mt-3 flex justify-center">
            <OrnamentalDivider motif="lotus" lineStyle="dual" className="max-w-xs" />
          </div>
        </div>


        {/* ── EMBEDDED MAP CARD ─────────────────────────────── */}
        <div className="w-full border border-gold/45 rounded-2xl p-1 bg-gradient-to-b from-gold/20 via-transparent to-gold/10 shadow-palace-elevation overflow-hidden">
          <div className="relative border border-gold/20 rounded-xl overflow-hidden bg-ivory-light/95">

            {/* Map Frame Header */}
            <div className="relative bg-gradient-to-r from-palace-green via-emerald-deep to-palace-dark px-5 py-3.5 flex items-center justify-between">
              <div className="absolute inset-0 jali-watermark opacity-[0.15] pointer-events-none" />
              <div className="relative z-10 flex items-center gap-2.5">
                <LotusMotif variant="crest" size="md" className="w-9 h-9 opacity-95 text-gold" />
                <div>
                  <p className="font-display text-base sm:text-lg font-normal tracking-wide text-gold-champagne leading-tight">
                    {WEDDING_VENUE.name}
                  </p>
                  <p className="font-caps text-[9px] sm:text-[10px] tracking-monumental text-gold/80 uppercase font-semibold">
                    Bannerghatta Road · Bangalore
                  </p>
                </div>
              </div>
              {/* Satellite badge */}
              <div className="relative z-10 px-2.5 py-1 rounded border border-gold/40 bg-gold/10">
                <span className="font-caps text-[9px] sm:text-[10px] tracking-wider text-gold uppercase font-bold">Satellite View</span>
              </div>
            </div>

            {/* Google Maps Satellite Iframe */}
            <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
              <iframe
                title="Tranquil Wedding Venue - Bannerghatta Road, Bangalore"
                src="https://maps.google.com/maps?q=Tranquil+Wedding+Venue,+Sakalavara+Road,+Bannerghatta+Road,+Bangalore+560083,+India&t=k&z=17&output=embed&iwloc=near"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              {/* Vignette overlay to blend with our palette */}
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_40px_rgba(198,166,107,0.12)]" />
              {/* Corner Bead Accents over map */}
              {['top-2 left-2', 'top-2 right-2', 'bottom-2 left-2', 'bottom-2 right-2'].map((pos, i) => (
                <div key={i} className={`absolute ${pos} w-3 h-3 pointer-events-none`}>
                  <div className="w-2 h-2 rounded-full bg-gold/70 shadow-sm" />
                </div>
              ))}
            </div>

            {/* Address Strip */}
            <div className="px-5 sm:px-7 py-5 border-t border-gold/25 bg-ivory-light/90">
              <div className="flex items-start gap-3.5">
                {/* Palace-pin icon (SVG) */}
                <svg viewBox="0 0 14 20" fill="none" className="w-4 h-6 flex-shrink-0 mt-0.5 text-gold" aria-hidden="true">
                  <path d="M7 0 C3.13 0 0 3.13 0 7 C0 12.25 7 20 7 20 C7 20 14 12.25 14 7 C14 3.13 10.87 0 7 0 Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="0.8"/>
                  <circle cx="7" cy="7" r="2.5" fill="currentColor"/>
                </svg>
                <div>
                  <p className="font-serif font-semibold text-base sm:text-lg text-palace-green leading-tight mb-1.5">
                    {WEDDING_VENUE.name}
                  </p>
                  {WEDDING_VENUE.address.map((line, i) => (
                    <p key={i} className="font-serif text-sm sm:text-base text-palace-green/80 leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ── GET DIRECTIONS BUTTON ────────────────────────── */}
        <button
          onClick={handleGetDirections}
          className="
            group relative mt-7 inline-flex items-center justify-center gap-3
            w-auto px-8 py-3.5 sm:py-4 rounded-xl
            border border-gold/70 bg-gradient-to-r from-emerald-deep via-palace-green to-emerald-deep
            hover:border-gold shadow-gold-glow hover:shadow-[0_0_24px_rgba(198,166,107,0.5)]
            hover:scale-[1.02] active:scale-[0.98]
            text-gold-champagne
            transition-all duration-300 cursor-pointer overflow-hidden
          "
          aria-label="Open Google Maps directions to Tranquil Wedding Venue"
        >
          {/* Navigation Arrow Icon */}
          <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 text-gold group-hover:text-gold-champagne flex-shrink-0 transition-colors duration-300" aria-hidden="true">
            <path d="M10 2 L18 10 L10 18 L10 13 C5.58 13 2 14.58 2 18 C2 10 5.58 7 10 7 Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="font-caps text-sm sm:text-base tracking-royal font-bold uppercase whitespace-nowrap">
            Get Directions
          </span>
          {/* Golden sweep hover effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-champagne/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
        </button>

        {/* Decorative bottom pillar pair */}
        <div className="w-full max-w-xs mt-8 opacity-30">
          <RoyalOrnament variant="border-strip" className="opacity-60 text-gold" />
        </div>

      </div>
    </section>
  );
}

export default LocationSection;
