import React, { useState, useCallback, useRef } from 'react';

import { LoadingScreen } from './components/intro/LoadingScreen';
import { CurtainTransition } from './components/transition/CurtainTransition';
import { HeroSection } from './components/hero/HeroSection';
import { CoupleSection } from './components/sections/CoupleSection';
import { WeddingMessageSection } from './components/sections/WeddingMessageSection';
import { EventsSection } from './components/sections/EventsSection';
import { CountdownSection } from './components/sections/CountdownSection';
import { CalendarSection } from './components/sections/CalendarSection';
import { RsvpSection } from './components/sections/RsvpSection';
import { LocationSection } from './components/sections/LocationSection';
import { ClosingSection } from './components/sections/ClosingSection';
import { RevealOnScroll } from './components/common/RevealOnScroll';
import { JaliBackground } from './components/decorative/JaliBackground';
import { LotusMotif } from './components/decorative/LotusMotif';
import { OrnamentalDivider } from './components/decorative/OrnamentalDivider';
import { BackgroundMusic } from './components/common/BackgroundMusic';

/**
 * App — Royal Wedding Invitation Flow
 *
 * 1. LOADING SCREEN (stage: 'loading')
 *    Sacred invocation, animated lotus mandala, "Open Invitation" CTA.
 *
 * 2. ROYAL CURTAIN TRANSITION (stage: 'transition')
 *    Emerald velvet drapes with the glowing royal seal medallion (V & K 24 & 25 · 10 · 2026).
 *    Curtains part majestically to reveal the main wedding invitation.
 *
 * 3. MAIN EXPERIENCE (stage: 'main')
 *    Full wedding invitation experience with royal navigation curtains for external actions.
 */
export function App() {
  // ── Flow State Machine ──────────────────────────────────
  const [stage, setStage] = useState('loading'); // 'loading' | 'transition' | 'main'
  const [revealedMain, setRevealedMain] = useState(false);

  const handleCurtainMidpoint = useCallback(() => setRevealedMain(true), []);
  const handleCurtainComplete = useCallback(() => setStage('main'), []);

  const handleStartMusic = useCallback(() => {
    if (musicRef.current) musicRef.current.start();
  }, []);

  // Loading screen completes -> go directly to royal curtain reveal
  const handleLoadingComplete = useCallback(() => {
    if (musicRef.current) musicRef.current.start();
    setStage('transition');
  }, []);

  const [navCurtainActive, setNavCurtainActive] = useState(false);
  const musicRef = useRef(null);
  const pendingNavUrl = useRef(null);

  /**
   * Triggered by LocationSection / CalendarSection when user clicks
   * "Get Directions" or "Add to Google Calendar".
   * Closes the velvet drapes, opens the external URL during the pause,
   * then reopens the drapes — preserving the cinematic palace atmosphere.
   */
  const handleExternalNavigate = useCallback((url) => {
    if (navCurtainActive) return; // Debounce: prevent double-trigger
    pendingNavUrl.current = url;
    setNavCurtainActive(true);
  }, [navCurtainActive]);

  /**
   * Called when the navigation curtain is fully CLOSED (midpoint).
   * We open the external URL here — during the regal pause while drapes are shut.
   */
  const handleNavCurtainMidpoint = useCallback(() => {
    if (pendingNavUrl.current) {
      window.open(pendingNavUrl.current, '_blank', 'noopener,noreferrer');
    }
  }, []);

  /**
   * Called when the navigation curtain has fully REOPENED.
   * Reset state so it can be triggered again later.
   */
  const handleNavCurtainComplete = useCallback(() => {
    setNavCurtainActive(false);
    pendingNavUrl.current = null;
  }, []);

  return (
    <>
      {/* Music plays across all stages */}
      <BackgroundMusic ref={musicRef} />

      {/* 0. LOADING SCREEN */}
      {stage === 'loading' && (
        <LoadingScreen
          onStartMusic={handleStartMusic}
          onComplete={handleLoadingComplete}
        />
      )}

      {/* 1. ROYAL CURTAIN ENTRANCE TRANSITION */}
      {stage === 'transition' && (
        <CurtainTransition
          isActive={true}
          startClosed={true}
          holdMs={2200}
          onMidpoint={handleCurtainMidpoint}
          onComplete={handleCurtainComplete}
        />
      )}

      {/* 2. MAIN WEDDING INVITATION EXPERIENCE */}
      {(stage === 'main' || (stage === 'transition' && revealedMain)) && (
        <JaliBackground opacity="subtle" showPalaceVignette>

          {/* â”€â”€ NAVIGATION CURTAIN (for Get Directions / Calendar) â”€ */}
          {navCurtainActive && (
            <CurtainTransition
              isActive={true}
              navMode={true}
              onMidpoint={handleNavCurtainMidpoint}
              onComplete={handleNavCurtainComplete}
            />
          )}

          {/* ── Fixed Royal Header (Follows on scroll) ─────── */}
          <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-gold/45 bg-gradient-to-r from-ivory-light/95 via-ivory/95 to-ivory-light/95 backdrop-blur-md shadow-[0_4px_24px_rgba(198,166,107,0.18)]">
            <div className="max-w-6xl mx-auto px-3 sm:px-8 py-2 sm:py-3.5 flex items-center justify-between gap-2">
              {/* Monogram Brand */}
              <div className="flex items-center gap-2 sm:gap-3.5 min-w-0">
                <LotusMotif variant="crest" size="sm" className="opacity-95 w-7 h-7 sm:w-10 sm:h-10 flex-shrink-0 drop-shadow-sm" />
                <div className="flex flex-col justify-center min-w-0">
                  <span className="font-display text-sm sm:text-xl font-bold tracking-wide sm:tracking-wider text-emerald-deep block leading-tight whitespace-nowrap">
                    Vinay <span className="text-gold font-normal">&amp;</span> Kishma
                  </span>
                  <span className="font-caps text-[9px] sm:text-xs tracking-wider sm:tracking-monumental text-gold-deep uppercase block font-semibold whitespace-nowrap mt-0.5">
                    25 · 10 · 2026
                  </span>
                </div>
              </div>

              {/* Elegant Navbar RSVP Prompt & CTA */}
              <div className="flex items-center gap-2 sm:gap-5 flex-shrink-0">
                <span className="hidden lg:inline font-serif italic text-sm sm:text-base text-palace-green/90 font-medium">
                  Will you be attending the Reception?
                </span>
                <button
                  onClick={() => {
                    const rsvpEl = document.getElementById('rsvp');
                    if (rsvpEl) {
                      rsvpEl.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="
                    group relative inline-flex items-center gap-1.5 sm:gap-2.5 px-3.5 sm:px-6 py-1.5 sm:py-2.5 rounded-full
                    bg-gradient-to-r from-emerald-deep via-palace-green to-emerald-deep
                    border border-gold/70 hover:border-gold
                    shadow-gold-glow hover:shadow-[0_0_20px_rgba(198,166,107,0.45)]
                    hover:scale-[1.02] active:scale-[0.98]
                    transition-all duration-300 cursor-pointer overflow-hidden flex-shrink-0
                  "
                  aria-label="RSVP for Vinay and Kishma wedding"
                >
                  <span className="text-gold text-[10px] sm:text-sm">✦</span>
                  <span className="font-caps text-[10px] sm:text-sm font-bold tracking-wider sm:tracking-royal text-gold-champagne uppercase drop-shadow-sm whitespace-nowrap">
                    Count Me In
                  </span>
                  <span className="text-gold text-[10px] sm:text-sm">✦</span>
                </button>
              </div>
            </div>
          </header>

          {/* ── Main Sections Flow ───────────────────────────── */}
          <main className="w-full flex flex-col items-center pt-20 sm:pt-24">

            {/* 1 — Hero Invitation Card */}
            <HeroSection />

            {/* 2 — The Couple */}
            <RevealOnScroll className="w-full">
              <CoupleSection />
            </RevealOnScroll>

            {/* 3 — Wedding Message */}
            <RevealOnScroll className="w-full">
              <WeddingMessageSection />
            </RevealOnScroll>

            {/* 4 — Events Timeline */}
            <RevealOnScroll className="w-full">
              <EventsSection />
            </RevealOnScroll>

            {/* 5 — Auspicious Countdown */}
            <RevealOnScroll className="w-full">
              <CountdownSection />
            </RevealOnScroll>

            {/* 6 — Venue & Satellite Map */}
            <RevealOnScroll className="w-full">
              <LocationSection onExternalNavigate={handleExternalNavigate} />
            </RevealOnScroll>

            {/* 7 — Add to Calendar */}
            <RevealOnScroll className="w-full">
              <CalendarSection onExternalNavigate={handleExternalNavigate} />
            </RevealOnScroll>

            {/* 8 — Sacred RSVP & Live Headcount */}
            <RevealOnScroll className="w-full">
              <RsvpSection />
            </RevealOnScroll>

            {/* 9 — Grand Closing */}
            <RevealOnScroll className="w-full">
              <ClosingSection />
            </RevealOnScroll>

          </main>

          {/* ── Royal Palace Footer ─────────────────────────── */}
          <footer className="w-full border-t border-gold/30 bg-ivory-dark/60 py-14 px-4 text-center">
            <div className="max-w-md mx-auto space-y-4">
              <LotusMotif variant="crest" size="lg" className="mx-auto opacity-90" />
              <div className="space-y-1.5">
                <h4 className="font-display text-xl sm:text-2xl text-palace-green font-normal tracking-wider">
                  Vinay <span className="font-script text-3xl text-gold-deep">&amp;</span> Kishma
                </h4>
                <p className="font-caps text-xs sm:text-sm tracking-monumental text-gold-deep uppercase font-semibold">
                  Sunday, 25th October 2026 · Bengaluru
                </p>
              </div>
              <div className="flex justify-center">
                <OrnamentalDivider motif="lotus" lineStyle="dual" className="max-w-xs opacity-60" />
              </div>
              <p className="font-serif italic text-sm text-palace-green/75 max-w-sm mx-auto leading-relaxed">
                "Two Hearts. Two Traditions. One Beautiful Beginning."
              </p>
              <span className="font-caps text-[10px] sm:text-xs tracking-monumental text-palace-green/60 uppercase block pt-2">
                With Immense Love and Gratitude
              </span>
            </div>
          </footer>

        </JaliBackground>
      )}
    </>
  );
}

export default App;


