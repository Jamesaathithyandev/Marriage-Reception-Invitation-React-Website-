import React, { useState, useEffect } from 'react';
import { WEDDING_DATE_CONFIG } from '../../data/weddingData';
import { LotusMotif } from '../decorative/LotusMotif';
import { OrnamentalDivider } from '../decorative/OrnamentalDivider';

/**
 * CountdownSection — Live Auspicious Moments Countdown
 *
 * Counts down live to: Sunday, 25th October 2026
 * Displays: Days, Hours, Minutes, Seconds in royal palace-window arched kiosks.
 */
export function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const target = new Date(WEDDING_DATE_CONFIG.targetDateISO).getTime();
    const now = new Date().getTime();
    const difference = target - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isCompleted: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isCompleted: false,
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Days', value: String(timeLeft.days).padStart(2, '0') },
    { label: 'Hours', value: String(timeLeft.hours).padStart(2, '0') },
    { label: 'Minutes', value: String(timeLeft.minutes).padStart(2, '0') },
    { label: 'Seconds', value: String(timeLeft.seconds).padStart(2, '0') },
  ];

  return (
    <section
      id="countdown"
      className="relative w-full py-16 sm:py-24 px-4 sm:px-6 md:px-8 bg-ivory paper-grain overflow-hidden text-center"
      aria-label="Wedding Countdown"
    >
      {/* ── Background Subtle Warmth ──────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[450px] bg-gradient-to-b from-gold-champagne/15 via-transparent to-lotus-blush/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 jali-watermark opacity-[0.14]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">

        {/* ── Section Header ───────────────────────────────── */}
        <div className="mb-8 sm:mb-12">
          <div className="inline-flex items-center justify-center gap-3 mb-2">
            <div className="h-[0.5px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-gold" />
            <span className="font-caps text-[10px] sm:text-xs tracking-monumental text-gold-deep uppercase font-semibold">
              The Auspicious Countdown
            </span>
            <div className="h-[0.5px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-gold" />
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-palace-green font-normal tracking-wide">
            Until The <span className="font-script text-4xl sm:text-5xl text-gold-deep">Celebration</span>
          </h2>
          <p className="font-serif italic text-sm sm:text-base text-palace-green/80 mt-2 font-medium">
            Sunday, 25th October 2026 · 6:30 PM onwards · Bengaluru
          </p>

          <div className="mt-4 flex justify-center">
            <OrnamentalDivider motif="lotus" lineStyle="dual" className="max-w-xs" />
          </div>
        </div>

        {/* ── 4 PALACE-ARCHED COUNTDOWN KIOSKS ─────────────── */}
        <div className="w-full max-w-2xl grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 px-2">
          {timeUnits.map((unit, index) => (
            <div
              key={unit.label}
              className="relative group"
            >
              {/* Card Outer Border & Shadow */}
              <div className="relative border border-gold/40 rounded-b-2xl rounded-t-lg p-0.5 bg-gradient-to-b from-gold/20 via-transparent to-gold/10 shadow-palace-elevation transition-transform duration-300 hover:-translate-y-1">

                {/* Palace Arch Silhouette at Kiosk Top */}
                <div className="w-full bg-ivory-light/95 rounded-t-md pt-2.5 px-3 flex justify-center">
                  <svg viewBox="0 0 100 24" fill="none" className="w-24 sm:w-28 h-auto text-gold" aria-hidden="true">
                    <path
                      d="M0 24 C10 12 25 6 40 6 C46 6 48 2 50 0 C52 2 54 6 60 6 C75 6 90 12 100 24"
                      stroke="currentColor"
                      strokeWidth="1"
                    />
                    <circle cx="50" cy="0" r="2" fill="#C6A66B" />
                  </svg>
                </div>

                {/* Number & Unit Display */}
                <div className="border-t-0 border border-gold/20 rounded-b-xl px-2 py-4 sm:py-5 bg-ivory-light/95">
                  <div className="font-display text-4xl sm:text-5xl md:text-6xl text-gold-foil font-normal tracking-tight leading-none">
                    {unit.value}
                  </div>
                  <span className="font-caps text-xs sm:text-sm tracking-monumental text-palace-green/85 uppercase font-semibold block mt-2">
                    {unit.label}
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* ── Auspicious Blessing Tagline ──────────────────── */}
        <div className="mt-10 sm:mt-12 flex flex-col items-center">
          <LotusMotif variant="crest" size="md" className="opacity-95 mb-3" />
          <p className="font-script text-xl sm:text-2xl text-palace-green/90 leading-tight">
            "Every passing moment brings us closer to a lifetime of togetherness."
          </p>
        </div>

      </div>
    </section>
  );
}

export default CountdownSection;
