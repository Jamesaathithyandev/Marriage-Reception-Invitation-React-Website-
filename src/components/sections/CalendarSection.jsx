import React from 'react';
import { CALENDAR_EVENTS } from '../../data/weddingData';
import { buildCombinedGoogleCalendarUrl, downloadICS } from '../../utils/calendarUtils';
import { LotusMotif } from '../decorative/LotusMotif';
import { PeacockMotif } from '../decorative/PeacockMotif';
import { OrnamentalDivider } from '../decorative/OrnamentalDivider';

/**
 * CalendarSection — Add to Calendar with Royal Themed October 2026 Visual
 *
 * Features:
 * - Bespoke palace stationery October 2026 calendar
 * - Eye-catching, prominent royal badges for 24th (Mehendi) & 25th (Wedding Day)
 * - "Add to Google Calendar" button triggers royal curtain transition
 * - "Download .ics" button for Apple Calendar / Outlook / device calendar
 */
export function CalendarSection({ onExternalNavigate }) {
  const year = 2026;
  const month = 9; // October (0-indexed)
  const firstDayOfMonth = new Date(year, month, 1).getDay(); // 0 = Sun
  const daysInMonth = new Date(year, month + 1, 0).getDate(); // 31

  // Event metadata — Reception on 25th October
  const eventDays = {
    25: {
      label: 'Reception',
      time: '6:30 PM',
      isMain: true,
      motif: 'lotus',
    },
  };

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Calendar grid array with empty leading days
  const calendarDays = [
    ...Array(firstDayOfMonth).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  const handleGoogleCalendar = () => {
    const url = buildCombinedGoogleCalendarUrl(CALENDAR_EVENTS);
    if (onExternalNavigate) {
      onExternalNavigate(url);
    } else {
      window.open(url, '_blank', 'noopener');
    }
  };

  const handleDownloadICS = () => {
    downloadICS(CALENDAR_EVENTS);
  };

  return (
    <section
      id="calendar"
      className="relative w-full py-16 sm:py-24 px-3 sm:px-6 md:px-8 bg-ivory paper-grain overflow-hidden"
      aria-label="Add to Calendar"
    >
      {/* Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-b from-gold-champagne/12 via-transparent to-peacock-teal/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 jali-watermark opacity-[0.15]" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center w-full">

        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center justify-center gap-2 sm:gap-3 mb-2">
            <div className="h-[0.5px] w-6 sm:w-14 bg-gradient-to-r from-transparent to-gold" />
            <span className="font-caps text-[9px] sm:text-xs tracking-monumental text-gold-deep uppercase font-semibold">
              Mark the Occasion
            </span>
            <div className="h-[0.5px] w-6 sm:w-14 bg-gradient-to-l from-transparent to-gold" />
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-palace-green font-normal tracking-wide">
            Save the Date
          </h2>
          <div className="mt-3 flex justify-center">
            <OrnamentalDivider motif="peacock-eye" lineStyle="dual" className="max-w-xs" />
          </div>
        </div>

        {/* ── ROYAL CALENDAR CARD ────────────────────────── */}
        <div className="w-full border border-gold/40 rounded-2xl p-0.5 sm:p-1 bg-gradient-to-b from-gold/20 via-transparent to-gold/10 shadow-palace-elevation">
          <div className="relative border border-gold/20 rounded-xl overflow-hidden bg-ivory-light/95">

            {/* Calendar Header: Palace Arch Crown */}
            <div className="relative bg-gradient-to-b from-emerald-deep via-palace-green to-palace-dark px-4 sm:px-6 pt-5 pb-4 text-center overflow-hidden">
              {/* Arch silhouette behind header text */}
              <div className="absolute inset-0 pointer-events-none opacity-20">
                <svg viewBox="0 0 400 80" fill="none" className="w-full h-full" aria-hidden="true">
                  <path d="M0 80 C80 30 160 20 200 10 C240 20 320 30 400 80" stroke="#C6A66B" strokeWidth="1.5" fill="none"/>
                  <path d="M0 80 C80 40 155 32 200 22 C245 32 320 40 400 80" stroke="#C6A66B" strokeWidth="0.7" strokeDasharray="3 2" fill="none"/>
                </svg>
              </div>
              <div className="absolute inset-0 jali-watermark opacity-[0.18] pointer-events-none" />

              {/* Month & Year */}
              <div className="relative z-10">
                <LotusMotif variant="crest" size="md" className="mx-auto mb-2 opacity-95" />
                <h3 className="font-display text-2xl sm:text-3xl font-normal tracking-wider text-gold-champagne leading-tight">
                  October 2026
                </h3>
                <p className="font-caps text-[10px] sm:text-xs tracking-monumental text-gold/90 uppercase font-semibold mt-1">
                  Vinay &amp; Kishma · Wedding Celebrations
                </p>
              </div>
            </div>

            {/* Weekday Labels */}
            <div className="grid grid-cols-7 border-b border-gold/20 bg-ivory/60">
              {weekDays.map((day) => (
                <div key={day} className="py-2.5 text-center">
                  <span className="font-caps text-xs sm:text-sm tracking-wider text-palace-green/85 font-bold uppercase">
                    {day}
                  </span>
                </div>
              ))}
            </div>

            {/* Calendar Days Grid */}
            <div className="grid grid-cols-7 p-2.5 sm:p-4 gap-1.5 sm:gap-2.5">
              {calendarDays.map((day, idx) => {
                if (!day) {
                  return <div key={`empty-${idx}`} className="h-12 sm:h-14 md:h-16 w-full" />;
                }
                const event = eventDays[day];

                if (event) {
                  // ── PROMINENT EYE-CATCHY EVENT DAYS (24 & 25) ──
                  const isMain = Boolean(event.isMain);
                  const shortLabel = isMain ? 'Wedding' : 'Festivities';

                  return (
                    <div
                      key={day}
                      className={`relative h-13 sm:h-15 md:h-17 w-full flex flex-col items-center justify-between py-1 px-0.5 rounded-xl transition-all duration-300 transform hover:scale-105 text-center overflow-hidden ${
                        isMain
                          ? 'bg-gradient-to-b from-emerald-deep via-palace-green to-emerald-night text-gold-light border-2 border-gold shadow-[0_0_16px_rgba(198,166,107,0.55)] z-10'
                          : 'bg-gradient-to-b from-peacock-teal to-peacock-dark text-white border-2 border-gold/80 shadow-[0_0_12px_rgba(107,33,168,0.45)] z-10'
                      }`}
                    >
                      {/* Top Motif Icon */}
                      <div className="w-full flex justify-center items-center h-3.5 sm:h-4 flex-shrink-0">
                        {isMain ? (
                          <LotusMotif variant="crest" size="sm" className="w-5 h-4 sm:w-6 sm:h-5 text-gold-champagne drop-shadow" />
                        ) : (
                          <PeacockMotif variant="feather-crown" size="sm" className="w-5 h-4 sm:w-6 sm:h-5 text-gold drop-shadow" />
                        )}
                      </div>

                      {/* Day Number */}
                      <span className="font-display text-sm sm:text-lg font-bold leading-none tracking-tight text-gold-foil my-auto flex-shrink-0">
                        {day}
                      </span>

                      {/* Event Tagline - Centered & Single-Line */}
                      <div className="w-full flex justify-center flex-shrink-0">
                        <span
                          className={`inline-flex items-center justify-center text-center whitespace-nowrap font-caps text-[7px] sm:text-[8.5px] tracking-wider uppercase font-bold px-1.5 py-0.5 rounded leading-none ${
                            isMain
                              ? 'bg-gold/25 text-gold-bright border border-gold/50 shadow-sm'
                              : 'bg-white/20 text-white border border-white/40 shadow-sm'
                          }`}
                        >
                          {shortLabel}
                        </span>
                      </div>
                    </div>
                  );
                }

                // Regular Day
                return (
                  <div
                    key={day}
                    className="relative h-13 sm:h-15 md:h-17 w-full flex items-center justify-center rounded-lg hover:bg-gold/10 transition-colors duration-150"
                  >
                    <span className="font-serif text-sm sm:text-base font-semibold text-palace-green/75">
                      {day}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* ── HIGHLIGHTED EVENT CARD (RECEPTION) ── */}
            <div className="p-3.5 sm:p-5 border-t border-gold/20 bg-ivory-dark/30">
              
              {/* 25th Reception Card */}
              <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl border border-gold/60 bg-gradient-to-r from-emerald-deep/15 via-gold/15 to-emerald-deep/10 shadow-sm">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-emerald-deep flex flex-col items-center justify-center text-gold-light border-2 border-gold shadow-md flex-shrink-0">
                  <span className="font-caps text-[8.5px] uppercase leading-none text-gold font-bold">Oct</span>
                  <span className="font-display text-lg sm:text-xl font-bold leading-none text-gold-foil mt-0.5">25</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-serif font-bold text-base sm:text-lg text-palace-green">
                      Wedding Reception
                    </span>
                    <span className="text-[9px] font-caps px-2 py-0.5 rounded bg-emerald-deep text-gold-light font-bold">
                      Sunday
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 mt-1.5">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-gold/40 bg-gold/10 text-xs font-serif font-medium text-palace-green">
                      <span className="w-2 h-2 rounded-full bg-gold" />
                      Reception · 6:30 PM onwards
                    </span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* ── ACTION BUTTONS ─────────────────────────────── */}
        <div className="w-full mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">

          {/* Google Calendar Button */}
          <button
            onClick={handleGoogleCalendar}
            className="group relative flex items-center justify-center gap-2.5 px-4 sm:px-5 py-3.5 rounded-xl border border-gold/60 bg-gradient-to-b from-ivory-light to-ivory-dark hover:from-gold/20 hover:to-gold/10 shadow-gold-subtle hover:shadow-gold-glow transition-all duration-300 text-palace-green hover:text-emerald-deep min-h-[48px] active:scale-98"
            aria-label="Add all wedding events to Google Calendar"
          >
            <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 text-gold flex-shrink-0" aria-hidden="true">
              <rect x="2" y="3" width="16" height="15" rx="2" stroke="currentColor" strokeWidth="1.2"/>
              <line x1="2" y1="7" x2="18" y2="7" stroke="currentColor" strokeWidth="1.2"/>
              <line x1="6.5" y1="1" x2="6.5" y2="5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              <line x1="13.5" y1="1" x2="13.5" y2="5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              <circle cx="10" cy="12" r="2.5" fill="#C6A66B"/>
            </svg>
            <span className="font-caps text-xs tracking-royal font-semibold uppercase text-center">
              Add to Google Calendar
            </span>
          </button>

          {/* Download .ics Button */}
          <button
            onClick={handleDownloadICS}
            className="group relative flex items-center justify-center gap-2.5 px-4 sm:px-5 py-3.5 rounded-xl border border-gold/60 bg-gradient-to-b from-ivory-light to-ivory-dark hover:from-gold/20 hover:to-gold/10 shadow-gold-subtle hover:shadow-gold-glow transition-all duration-300 text-palace-green hover:text-emerald-deep min-h-[48px] active:scale-98"
            aria-label="Download all wedding events as .ics calendar file"
          >
            <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 text-gold flex-shrink-0" aria-hidden="true">
              <path d="M10 3 L10 13 M6.5 9.5 L10 13 L13.5 9.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4 14 L4 16 C4 16.55 4.45 17 5 17 L15 17 C15.55 17 16 16.55 16 16 L16 14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
            </svg>
            <span className="font-caps text-xs tracking-royal font-semibold uppercase text-center">
              Download .ics File
            </span>
          </button>
        </div>

        {/* Supporting note */}
        <p className="mt-3 font-serif italic text-xs text-palace-green/60 text-center max-w-sm">
          Compatible with Apple Calendar, Google Calendar, Outlook &amp; all mobile devices.
        </p>

      </div>
    </section>
  );
}

export default CalendarSection;
