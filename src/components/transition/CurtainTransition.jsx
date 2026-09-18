import React, { useEffect, useState } from 'react';
import { LotusMotif } from '../decorative/LotusMotif';

/**
 * CurtainTransition — Royal Indian Palace Velvet Drape Transition
 *
 * Flow (intro → main, with generous hold for the user to settle):
 *  1. isActive triggers → drapes sweep IN from left + right (~1.2s)
 *  2. Drapes HOLD fully closed for ~3.5s — the golden royal seal glows.
 *     onMidpoint() fires at t=1200ms so the page content swaps underneath.
 *  3. Drapes sweep OPEN to the sides (~1.5s), revealing the invitation.
 *  4. onComplete() fires and curtains unmount.
 *
 * For the navigation curtain (Get Directions / Calendar) the same timings apply
 * but the hold is shorter (~1.5s) so the user isn't waiting too long just for a link.
 *
 * Props:
 *  - isActive      {boolean}  Mount → starts close → hold → open sequence
 *  - onMidpoint    {function} Fires when curtains are fully closed (swap content)
 *  - onComplete    {function} Fires when curtains have fully parted and can unmount
 *  - holdMs        {number}   How long curtains stay fully closed (ms). Default 3500.
 *  - navMode       {boolean}  Shorter hold (1500ms) for navigation curtains.
 */
export function CurtainTransition({
  isActive,
  onMidpoint,
  onComplete,
  holdMs,
  navMode = false,
  startClosed = false,
}) {
  // Timing constants (all in ms from isActive=true)
  const CLOSE_DURATION = startClosed ? 0 : 1200;
  const HOLD_DURATION  = holdMs ?? (navMode ? 1500 : 2500);
  const OPEN_DURATION  = 1500;

  const HOLD_START     = CLOSE_DURATION;
  const OPEN_START     = HOLD_START + HOLD_DURATION;
  const TOTAL_DURATION = OPEN_START + OPEN_DURATION;

  // 'idle' | 'closing' | 'holding' | 'opening' | 'done'
  const [phase, setPhase] = useState(startClosed ? 'holding' : 'idle');

  useEffect(() => {
    if (!isActive) {
      setPhase('idle');
      return;
    }

    if (startClosed) {
      setPhase('holding');
      if (onMidpoint) onMidpoint();
    } else {
      setPhase('closing');
    }

    // Drapes fully closed → fire midpoint immediately so page can swap underneath
    const closeTimer = !startClosed
      ? setTimeout(() => {
          setPhase('holding');
          if (onMidpoint) onMidpoint();
        }, HOLD_START)
      : null;

    // Hold expires → start opening
    const openTimer = setTimeout(() => {
      setPhase('opening');
    }, OPEN_START);

    // Drapes fully open → done
    const completeTimer = setTimeout(() => {
      setPhase('done');
      if (onComplete) onComplete();
    }, TOTAL_DURATION);

    return () => {
      if (closeTimer) clearTimeout(closeTimer);
      clearTimeout(openTimer);
      clearTimeout(completeTimer);
    };
  }, [isActive, startClosed]); // eslint-disable-line react-hooks/exhaustive-deps

  if (phase === 'idle' || phase === 'done') return null;

  const isClosing = phase === 'closing';
  const isHolding = phase === 'holding';
  const isOpening = phase === 'opening';

  const leftClass  = isClosing ? 'curtain-close-left'
    : isHolding ? 'translate-x-0'
    : isOpening ? 'curtain-open-left'
    : '-translate-x-full';

  const rightClass = isClosing ? 'curtain-close-right'
    : isHolding ? 'translate-x-0'
    : isOpening ? 'curtain-open-right'
    : 'translate-x-full';

  return (
    <div
      aria-hidden="true"
      role="presentation"
      className="fixed inset-0 z-[60] flex pointer-events-none"
      style={{ overflow: 'hidden' }}
    >
      {/* ── LEFT DRAPE ─────────────────────────────────────── */}
      <div className={`relative w-1/2 h-full flex-shrink-0 origin-left overflow-hidden ${leftClass}`}>
        {/* Velvet base */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-deep via-palace-green to-emerald-night" />
        <div className="absolute inset-0 bg-gradient-to-t from-peacock-dark/45 via-transparent to-transparent" />
        <DrapeFolds />
        {/* Gold centre seam */}
        <div className="absolute top-0 right-0 w-[3px] h-full bg-gradient-to-b from-gold-champagne via-gold to-gold-deep opacity-95 shadow-[0_0_12px_rgba(198,166,107,0.5)]" />
        <div className="absolute top-0 right-[7px] w-[0.5px] h-full bg-gold/40" />
        {/* Gold horizontal trim */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-deep via-gold-champagne to-gold-deep" />
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-deep via-gold-champagne to-gold-deep" />
        <div className="absolute inset-0 jali-watermark opacity-[0.12]" />
        {/* Centre seam top tassel */}
        <div className="absolute top-0 right-0 translate-x-1/2 z-10"><Tassel /></div>
        {/* Velvet sheen */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent drape-shimmer" />
      </div>

      {/* ── RIGHT DRAPE ────────────────────────────────────── */}
      <div className={`relative w-1/2 h-full flex-shrink-0 origin-right overflow-hidden ${rightClass}`}>
        <div className="absolute inset-0 bg-gradient-to-bl from-emerald-deep via-palace-green to-emerald-night" />
        <div className="absolute inset-0 bg-gradient-to-t from-peacock-dark/45 via-transparent to-transparent" />
        <DrapeFolds />
        <div className="absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-gold-champagne via-gold to-gold-deep opacity-95 shadow-[0_0_12px_rgba(198,166,107,0.5)]" />
        <div className="absolute top-0 left-[7px] w-[0.5px] h-full bg-gold/40" />
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-deep via-gold-champagne to-gold-deep" />
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-deep via-gold-champagne to-gold-deep" />
        <div className="absolute inset-0 jali-watermark opacity-[0.12]" />
        <div className="absolute top-0 left-0 -translate-x-1/2 z-10"><Tassel /></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-white/[0.04] to-transparent drape-shimmer" />
      </div>

      {/* ── CENTRE ROYAL SEAL — perfectly centered overlay ── */}
      {isHolding && (
        <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center">
          <div className="curtain-medallion relative flex flex-col items-center justify-center text-center">
            {/* Outer glow ring */}
            <div className="absolute w-56 h-56 sm:w-64 sm:h-64 rounded-full border border-gold/35 animate-ping-slow opacity-40" />
            {/* Inner seal */}
            <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full border-2 border-gold bg-palace-deep/95 backdrop-blur-md shadow-[0_0_45px_rgba(198,166,107,0.7),inset_0_0_20px_rgba(198,166,107,0.15)] flex flex-col items-center justify-center px-5 py-4 text-center">
              <LotusMotif variant="crest" size="md" className="opacity-95 w-9 h-9 sm:w-11 sm:h-11 -mt-1 text-gold" />
              <span className="font-display text-xl sm:text-2xl font-bold text-gold-foil tracking-widest mt-1.5 leading-none whitespace-nowrap">
                V &amp; K
              </span>
              <div className="w-20 h-[0.5px] bg-gradient-to-r from-transparent via-gold to-transparent my-2" />
              <span className="font-caps text-[9px] sm:text-[10.5px] tracking-wider text-gold-champagne uppercase font-bold whitespace-nowrap leading-none block text-center">
                25 · 10 · 2026
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ── Internal: Vertical velvet fold lighting panels ─────────── */
function DrapeFolds() {
  return (
    <>
      {[
        { left: '8%',  w: '6%',  opacity: 0.15, type: 'dark' },
        { left: '20%', w: '8%',  opacity: 0.08, type: 'dark' },
        { left: '38%', w: '5%',  opacity: 0.18, type: 'dark' },
        { left: '55%', w: '7%',  opacity: 0.10, type: 'dark' },
        { left: '72%', w: '6%',  opacity: 0.14, type: 'dark' },
        { left: '86%', w: '5%',  opacity: 0.07, type: 'dark' },
        { left: '14%', w: '2%',  opacity: 0.08, type: 'light' },
        { left: '46%', w: '2%',  opacity: 0.06, type: 'light' },
        { left: '78%', w: '2%',  opacity: 0.07, type: 'light' },
      ].map((f, i) => (
        <div
          key={i}
          className="absolute top-0 h-full pointer-events-none"
          style={{
            left: f.left,
            width: f.w,
            opacity: f.opacity,
            background: f.type === 'dark' ? 'black' : 'white',
          }}
        />
      ))}
    </>
  );
}

/* ── Internal: Gold tassel finial ────────────────────────────── */
function Tassel() {
  return (
    <svg viewBox="0 0 28 60" fill="none" className="w-7 h-16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <ellipse cx="14" cy="8" rx="7" ry="5" fill="#C6A66B" stroke="#9E7E45" strokeWidth="0.8" />
      <ellipse cx="14" cy="7" rx="5" ry="3.5" fill="#DFC48E" />
      <rect x="12.5" y="12" width="3" height="14" rx="1.5" fill="#A48248" />
      <ellipse cx="14" cy="28" rx="6" ry="4" fill="#C6A66B" stroke="#9E7E45" strokeWidth="0.75" />
      {[10, 12, 14, 16, 18].map((x, i) => (
        <line key={i} x1={x} y1="31" x2={x + (i % 2 === 0 ? -0.5 : 0.5)} y2="56"
          stroke="#C6A66B" strokeWidth="0.9" strokeLinecap="round" />
      ))}
      <path d="M10 56 Q14 60 18 56" stroke="#A48248" strokeWidth="0.75" fill="none" />
    </svg>
  );
}

export default CurtainTransition;
