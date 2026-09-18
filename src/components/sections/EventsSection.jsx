import React from 'react';
import { WEDDING_EVENTS } from '../../data/weddingData';
import { LotusMotif } from '../decorative/LotusMotif';
import { OrnamentalDivider } from '../decorative/OrnamentalDivider';

/**
 * EventsSection — Royal Wedding Reception Celebration
 *
 * Dedicated to the Grand Wedding Reception of Vinay & Kishma on Sunday, 25th October 2026.
 */
export function EventsSection() {
  const reception = WEDDING_EVENTS[0] || {
    title: 'Wedding Reception',
    day: 'Sunday',
    date: '25th October 2026',
    time: '6:30 PM onwards',
    description:
      'A grand celebratory evening banquet with dinner, heartfelt toasts, joyful beginnings, and royal festivities.',
  };

  return (
    <section
      id="events"
      className="relative w-full py-16 sm:py-24 px-4 sm:px-6 md:px-8 bg-ivory paper-grain overflow-hidden"
      aria-label="Wedding Reception Celebration"
    >
      {/* ── Background Aura & Jali Lattice ───────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[600px] bg-gradient-to-b from-gold-champagne/12 via-transparent to-peacock-teal/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 jali-watermark opacity-[0.16]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">

        {/* ── SECTION HEADER ───────────────────────────────── */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center justify-center gap-3 mb-2">
            <div className="h-[0.5px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-gold" />
            <span className="font-caps text-[10px] sm:text-xs tracking-monumental text-gold-deep uppercase font-semibold">
              The Evening Celebration
            </span>
            <div className="h-[0.5px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-gold" />
          </div>

          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-palace-green font-normal tracking-wide">
            Reception Celebration
          </h2>
          <p className="font-serif italic text-xs sm:text-sm text-palace-green/70 mt-1 max-w-md mx-auto">
            "Join us for a royal evening of celebratory banquet, heartfelt toasts, music, and new beginnings."
          </p>

          <div className="mt-3 flex justify-center">
            <OrnamentalDivider motif="peacock-eye" lineStyle="dual" className="max-w-xs" />
          </div>
        </div>

        {/* ── RECEPTION CENTERPIECE CARD ─────────────────────── */}
        <div className="relative w-full max-w-xl mx-auto flex flex-col items-center">

          {/* Top Decorative Medallion */}
          <div className="mb-5 flex items-center justify-center">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-gold ring-4 ring-gold/30 bg-ivory-light flex items-center justify-center shadow-gold-glow">
              <LotusMotif variant="crest" size="md" className="w-8 h-8 sm:w-10 sm:h-10 text-gold-deep" />
            </div>
          </div>

          <div className="w-full relative border border-gold/60 rounded-2xl p-0.5 bg-gradient-to-b from-gold/30 via-gold/15 to-emerald-deep/10 shadow-gold-glow transition-all duration-300 hover:-translate-y-1">
            {/* Card Content Container */}
            <div className="relative border border-gold/20 rounded-xl px-5 sm:px-8 py-7 sm:py-8 bg-ivory-light/95 overflow-hidden text-center">

              {/* Corner ambient color wash */}
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-gradient-to-br from-gold/20 via-gold/10 to-transparent rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-gradient-to-tr from-emerald-deep/15 via-gold/10 to-transparent rounded-full blur-2xl pointer-events-none" />

              {/* Subtle Jali Background in Card */}
              <div className="absolute inset-0 jali-dense opacity-[0.04] pointer-events-none" />

              {/* Inner Double Hairline Inset */}
              <div className="absolute inset-2 sm:inset-3 border border-gold/15 rounded-lg pointer-events-none" />

              {/* Main Event Highlight Badge */}
              <div className="mb-3 flex justify-center">
                <span className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1 rounded-full border border-gold/60 bg-gradient-to-r from-emerald-deep via-[#32114E] to-emerald-deep text-gold-champagne text-[9.5px] sm:text-xs font-caps tracking-wider sm:tracking-royal uppercase font-bold shadow-sm whitespace-nowrap">
                  <span className="text-gold text-[8px] sm:text-[10px]">★</span>
                  <span>Grand Celebration Banquet</span>
                  <span className="text-gold text-[8px] sm:text-[10px]">★</span>
                </span>
              </div>

              {/* Day & Date Line */}
              <div className="space-y-0.5 mb-2">
                <span className="font-caps text-xs sm:text-sm tracking-monumental uppercase font-bold block text-gold-deep">
                  {reception.day}
                </span>
                <p className="font-serif font-semibold text-base sm:text-lg text-palace-green">
                  {reception.date}
                </p>
              </div>

              {/* Event Title */}
              <h3 className="font-caps text-3xl sm:text-4xl md:text-5xl font-semibold tracking-wider leading-tight my-2.5 text-gold-foil">
                {reception.title}
              </h3>

              {/* Time Pill Badge */}
              <div className="my-2.5 sm:my-3 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/60 bg-gold/10 text-xs sm:text-sm font-serif font-medium text-palace-green whitespace-nowrap">
                <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold-deep flex-shrink-0" aria-hidden="true">
                  <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M8 4.5 V8 L10.5 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
                <span className="tracking-wide font-medium">{reception.time}</span>
              </div>

              {/* Event Description */}
              <p className="font-serif italic text-sm sm:text-base text-palace-green/85 leading-relaxed mt-2 max-w-md mx-auto">
                "{reception.description}"
              </p>

              {/* Evening Highlights / Flow */}
              <div className="mt-6 pt-4 border-t border-gold/25 grid grid-cols-3 gap-2 text-center">
                <div className="space-y-0.5">
                  <span className="font-caps text-[9px] text-gold-deep uppercase font-bold block">6:30 PM</span>
                  <span className="font-serif text-xs text-palace-green/90">Guest Welcome</span>
                </div>
                <div className="space-y-0.5 border-x border-gold/20">
                  <span className="font-caps text-[9px] text-gold-deep uppercase font-bold block">7:15 PM</span>
                  <span className="font-serif text-xs text-palace-green/90">Royal Arrival</span>
                </div>
                <div className="space-y-0.5">
                  <span className="font-caps text-[9px] text-gold-deep uppercase font-bold block">7:45 PM</span>
                  <span className="font-serif text-xs text-palace-green/90">Dinner & Toasts</span>
                </div>
              </div>

              {/* Bottom Motif Accent */}
              <div className="mt-5 flex items-center justify-center opacity-80">
                <LotusMotif variant="crest" size="md" className="w-10 h-7 text-gold" />
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default EventsSection;
