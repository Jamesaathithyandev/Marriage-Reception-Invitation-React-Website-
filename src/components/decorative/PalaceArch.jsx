import React from 'react';
import { LotusMotif } from './LotusMotif';
import { PeacockMotif } from './PeacockMotif';

/**
 * PalaceArch: Reusable Mughal / Rajasthani Cusped Arch Container
 * Creates authentic multi-foil cusped arch silhouettes with dual gold hairlines and pinnacle finials.
 */
export function PalaceArch({
  children,
  variant = 'warm-ivory', // 'warm-ivory' | 'royal-emerald' | 'peacock-teal'
  crownMotif = 'lotus', // 'lotus' | 'peacock' | 'finial' | 'none'
  className = '',
  innerClassName = '',
  hasDualBorder = true,
  hasCornerAccents = true,
}) {
  const getThemeStyles = () => {
    switch (variant) {
      case 'royal-emerald':
        return {
          wrapper: 'bg-emerald-deep text-ivory-light shadow-palace-elevation border-gold/40',
          inner: 'bg-gradient-to-b from-palace-green to-emerald-dark text-ivory',
          goldStroke: '#DFC48E',
          accentColor: 'text-gold-light',
        };
      case 'peacock-teal':
        return {
          wrapper: 'bg-peacock-teal text-ivory-light shadow-palace-elevation border-gold/40',
          inner: 'bg-gradient-to-b from-peacock-dark to-emerald-dark text-ivory',
          goldStroke: '#DFC48E',
          accentColor: 'text-gold-light',
        };
      case 'warm-ivory':
      default:
        return {
          wrapper: 'bg-ivory-light text-palace-green shadow-royal-card border-gold/35',
          inner: 'bg-ivory-warm/90 text-palace-green',
          goldStroke: '#C6A66B',
          accentColor: 'text-emerald-deep',
        };
    }
  };

  const theme = getThemeStyles();

  return (
    <div
      className={`relative w-full max-w-xl mx-auto rounded-t-[140px] md:rounded-t-[180px] p-2.5 sm:p-4 transition-all duration-500 ${theme.wrapper} ${className}`}
    >
      {/* Outer Gold Hairline Arch Frame */}
      <div
        className={`relative w-full rounded-t-[130px] md:rounded-t-[170px] border border-gold/40 p-3 sm:p-5 ${
          hasDualBorder ? 'gold-dual-ring' : ''
        }`}
      >
        {/* Crown Motif / Finial */}
        {crownMotif !== 'none' && (
          <div className="absolute -top-7 sm:-top-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
            {crownMotif === 'lotus' && (
              <LotusMotif variant="crest" size="lg" className="drop-shadow-[0_4px_12px_rgba(198,166,107,0.5)]" />
            )}
            {crownMotif === 'peacock' && (
              <PeacockMotif variant="feather-crown" size="lg" className="drop-shadow-[0_4px_12px_rgba(198,166,107,0.5)]" />
            )}
            {crownMotif === 'finial' && (
              <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
                <path d="M20 2 L25 14 L20 22 L15 14 Z" fill="#C6A66B" stroke="#9E7E45" strokeWidth="1.1" />
                <circle cx="20" cy="24" r="3" fill="#C6A66B" />
                <circle cx="20" cy="32" r="1.5" fill="#4A0E4E" />
              </svg>
            )}
          </div>
        )}

        {/* Top Cusped Polylobe Arch SVG Header Vector */}
        <div className="w-full max-w-md mx-auto pt-4 sm:pt-6 pb-2">
          <svg
            viewBox="0 0 320 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto text-gold"
          >
            {/* Outer Decorative Cusped Arch Line */}
            <path
              d="M10 85 C10 40 45 40 70 30 C95 20 125 32 145 15 C152 8 156 3 160 0 C164 3 168 8 175 15 C195 32 225 20 250 30 C275 40 310 40 310 85"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              fill="none"
              opacity="0.85"
            />
            {/* Inner Parallel Arch Line */}
            <path
              d="M20 85 C20 48 50 48 74 38 C96 28 124 38 144 24 C151 18 155 12 160 8 C165 12 169 18 176 24 C196 38 224 28 246 38 C270 48 300 48 300 85"
              stroke="currentColor"
              strokeWidth="1.1"
              strokeDasharray="2 2"
              fill="none"
              opacity="0.65"
            />
            {/* Accent Beads along Arch Peaks */}
            <circle cx="160" cy="8" r="3.5" fill="#C6A66B" /><circle cx="160" cy="8" r="1.5" fill="#F3E4C8" />
            <circle cx="145" cy="24" r="1.5" fill="#C6A66B" />
            <circle cx="175" cy="24" r="1.5" fill="#C6A66B" />
            <circle cx="74" cy="38" r="1.5" fill="#C6A66B" />
            <circle cx="246" cy="38" r="1.5" fill="#C6A66B" />
          </svg>
        </div>

        {/* Card Content Area */}
        <div className={`relative rounded-b-lg px-3 sm:px-6 py-4 ${theme.inner} ${innerClassName}`}>
          {children}
        </div>

        {/* Bottom Corner Flourishes */}
        {hasCornerAccents && (
          <div className="flex justify-between items-center px-2 pt-3">
            <svg viewBox="0 0 30 30" fill="none" className="w-7 h-7 text-gold/85">
              <path d="M0 30 L0 10 C0 20 10 20 20 20 L30 20" stroke="currentColor" strokeWidth="0.8" />
              <circle cx="8" cy="22" r="1.5" fill="currentColor" />
            </svg>
            <div className="h-[1px] flex-1 mx-4 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
            <svg viewBox="0 0 30 30" fill="none" className="w-7 h-7 text-gold/85">
              <path d="M30 30 L30 10 C30 20 20 20 10 20 L0 20" stroke="currentColor" strokeWidth="0.8" />
              <circle cx="22" cy="22" r="1.5" fill="currentColor" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}

export default PalaceArch;
