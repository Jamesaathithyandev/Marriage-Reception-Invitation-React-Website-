import React from 'react';
import { LotusMotif } from '../decorative/LotusMotif';
import { PeacockMotif } from '../decorative/PeacockMotif';
import { OrnamentalDivider } from '../decorative/OrnamentalDivider';
import { RoyalCard } from '../decorative/RoyalCard';

/**
 * DesignSystemShowcase: Comprehensive Foundation Style Guide & Component Reference
 */
export function DesignSystemShowcase() {
  const colors = [
    {
      name: 'Warm Ivory',
      hex: '#F7F1E3',
      role: 'Primary Background & Stationery Canvas',
      textDark: true,
      category: 'Foundation',
    },
    {
      name: 'Imperial Purple',
      hex: '#4A0E4E',
      role: 'Royal Accent, Ink & Contrast Sections',
      textDark: false,
      category: 'Jewel Tones',
    },
    {
      name: 'Royal Velvet',
      hex: '#3B0764',
      role: 'Regal Deep Accent & Button Tone',
      textDark: false,
      category: 'Jewel Tones',
    },
    {
      name: 'Muted Royal Blue',
      hex: '#315A78',
      role: 'Twilight Sky, Depth & Secondary Jewel',
      textDark: false,
      category: 'Jewel Tones',
    },
    {
      name: 'Lotus Blush',
      hex: '#D99A9D',
      role: 'Floral Motifs, Romance & Soft Accents',
      textDark: true,
      category: 'Floral Accent',
    },
    {
      name: 'Antique Gold',
      hex: '#C6A66B',
      role: 'Foil Hairlines, Arches & Royal Framing',
      textDark: true,
      category: 'Metallic Foil',
    },
    {
      name: 'Midnight Royal',
      hex: '#240046',
      role: 'Deep Architectural Base & Typography',
      textDark: false,
      category: 'Foundation',
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto py-10 px-4 sm:px-6 space-y-12">
      {/* Header */}
      <div className="text-center space-y-2">
        <span className="font-caps text-xs tracking-monumental text-gold uppercase">
          Foundation System Guide
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-emerald-deep font-semibold">
          Royal Palace × Peacock × Lotus
        </h2>
        <p className="font-sans text-xs sm:text-sm text-palace-green/70 max-w-xl mx-auto">
          Established design tokens, typography scales, architectural motifs, and reusable components for Vinay & Kishma's luxury digital wedding stationery.
        </p>
        <div className="flex justify-center pt-2">
          <OrnamentalDivider motif="lotus" className="max-w-md" />
        </div>
      </div>

      {/* 1. Color Palette System */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-gold" />
          <h3 className="font-caps text-sm tracking-royal uppercase text-palace-green font-bold">
            1. Royal Color Harmony Palette
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {colors.map((c) => (
            <div
              key={c.hex}
              className="rounded-xl border border-gold/30 p-4 shadow-sm bg-ivory-light flex flex-col justify-between transition-transform hover:-translate-y-1 duration-300"
            >
              <div
                className="w-full h-24 rounded-lg border border-black/10 shadow-inner flex items-center justify-center relative overflow-hidden"
                style={{ backgroundColor: c.hex }}
              >
                {/* Subtle sheen highlight */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/20 pointer-events-none" />
                <span
                  className={`font-mono text-xs font-semibold px-2 py-1 rounded bg-black/20 backdrop-blur-sm ${
                    c.textDark ? 'text-palace-green' : 'text-ivory'
                  }`}
                >
                  {c.hex}
                </span>
              </div>
              <div className="mt-3">
                <div className="flex justify-between items-center">
                  <h4 className="font-serif font-semibold text-base text-palace-green">{c.name}</h4>
                  <span className="text-[10px] font-caps uppercase tracking-wider text-gold-deep bg-gold/10 px-2 py-0.5 rounded">
                    {c.category}
                  </span>
                </div>
                <p className="text-xs text-palace-green/70 mt-1 leading-snug">{c.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Typography Scale */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-gold" />
          <h3 className="font-caps text-sm tracking-royal uppercase text-palace-green font-bold">
            2. Typographic Hierarchy
          </h3>
        </div>

        <RoyalCard variant="stationery-ivory" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 border-b border-gold/30">
            <div>
              <span className="text-[10px] font-caps uppercase tracking-wider text-gold-deep">
                Display Font • Cinzel Decorative
              </span>
              <p className="font-display text-4xl sm:text-5xl text-gold-foil mt-1">
                Vinay & Kishma
              </p>
              <p className="text-xs text-palace-green/60 mt-1 font-mono">
                Font: Cinzel Decorative | Used for: Couple Names & Hero Display
              </p>
            </div>

            <div>
              <span className="text-[10px] font-caps uppercase tracking-wider text-gold-deep">
                Romantic Flourish Script • Alex Brush / Pinyon Script
              </span>
              <p className="font-script text-3xl sm:text-4xl text-emerald-deep mt-1">
                Together with their families
              </p>
              <p className="text-xs text-palace-green/60 mt-1 font-mono">
                Font: Alex Brush | Used for: Invitations, Save the Date & Accents
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <span className="text-[10px] font-caps uppercase tracking-wider text-gold-deep">
                Serif Headline • Cormorant Garamond
              </span>
              <p className="font-serif text-2xl font-semibold text-emerald-deep mt-1">
                The Royal Wedding Union
              </p>
              <p className="text-xs text-palace-green/60 mt-1 font-mono">
                Font: Cormorant Garamond
              </p>
            </div>

            <div>
              <span className="text-[10px] font-caps uppercase tracking-wider text-gold-deep">
                Small Caps Editorial • Cinzel
              </span>
              <p className="font-caps text-sm font-semibold tracking-royal text-gold uppercase mt-1">
                Sunday, 25th October 2026
              </p>
              <p className="text-xs text-palace-green/60 mt-1 font-mono">
                Font: Cinzel (Tracked Caps)
              </p>
            </div>

            <div>
              <span className="text-[10px] font-caps uppercase tracking-wider text-gold-deep">
                Editorial Body Text • Montserrat
              </span>
              <p className="font-sans text-xs text-palace-green/80 mt-1 leading-relaxed">
                With joy and gratitude, we invite you to be a part of our sacred wedding celebrations.
              </p>
              <p className="text-xs text-palace-green/60 mt-1 font-mono">
                Font: Montserrat / Sans
              </p>
            </div>
          </div>
        </RoyalCard>
      </section>

      {/* 3. Palace Architectural Shapes & Reusable Elements */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-gold" />
          <h3 className="font-caps text-sm tracking-royal uppercase text-palace-green font-bold">
            3. Palace Visual Language & Architectural Motifs
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Cusped Arch Blueprint */}
          <div className="bg-ivory-light border border-gold/30 rounded-xl p-5 shadow-sm text-center flex flex-col items-center">
            <span className="text-[10px] font-caps uppercase tracking-wider text-gold-deep mb-3">
              Mughal Cusped Arch
            </span>
            <div className="w-full py-4 px-2 border-hairline-gold rounded-t-full bg-ivory-warm">
              <svg viewBox="0 0 160 50" fill="none" className="w-full text-gold">
                <path
                  d="M5 45 C5 20 25 20 40 15 C55 10 65 18 75 8 C78 4 80 0 80 0 C80 0 82 4 85 8 C95 18 105 10 120 15 C135 20 155 20 155 45"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
              </svg>
              <p className="font-caps text-[10px] text-palace-green/70 mt-2 uppercase tracking-wider">
                Multi-foil arch profile
              </p>
            </div>
            <p className="text-xs text-palace-green/70 mt-3">
              Authentic Rajasthani polylobe arch styling for hero cards and ceremony banners.
            </p>
          </div>

          {/* Jali Lattice Screen */}
          <div className="bg-ivory-light border border-gold/30 rounded-xl p-5 shadow-sm text-center flex flex-col items-center">
            <span className="text-[10px] font-caps uppercase tracking-wider text-gold-deep mb-3">
              Royal Jali Lattice Pattern
            </span>
            <div className="w-full h-24 rounded-lg jali-dense border border-gold/30 bg-ivory-warm" />
            <p className="text-xs text-palace-green/70 mt-3">
              Geometric stone lattice screen watermark providing depth and palace texture.
            </p>
          </div>

          {/* Fine Gold Stationery Hairlines */}
          <div className="bg-ivory-light border border-gold/30 rounded-xl p-5 shadow-sm text-center flex flex-col items-center justify-between">
            <span className="text-[10px] font-caps uppercase tracking-wider text-gold-deep mb-3">
              Dual Gold Hairlines & Foil
            </span>
            <div className="w-full space-y-3 py-2">
              <OrnamentalDivider motif="diamond" lineStyle="dual" />
              <OrnamentalDivider motif="lotus" lineStyle="single" />
              <OrnamentalDivider motif="peacock-eye" lineStyle="dual" />
            </div>
            <p className="text-xs text-palace-green/70 mt-3">
              Dual gold hairline tramlines emulating bespoke foil-stamped stationery.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Peacock & Lotus Motifs */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-gold" />
          <h3 className="font-caps text-sm tracking-royal uppercase text-palace-green font-bold">
            4. Peacock & Lotus Motif Library
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 bg-ivory-light border border-gold/30 rounded-xl text-center flex flex-col items-center justify-center">
            <LotusMotif variant="crest" size="lg" />
            <span className="font-caps text-[10px] tracking-wider text-gold-deep mt-2 uppercase">
              Lotus Crest
            </span>
            <span className="text-[9px] text-palace-green/60">Lotus Blush & Gold</span>
          </div>

          <div className="p-4 bg-ivory-light border border-gold/30 rounded-xl text-center flex flex-col items-center justify-center">
            <PeacockMotif variant="feather-crown" size="lg" />
            <span className="font-caps text-[10px] tracking-wider text-gold-deep mt-2 uppercase">
              Peacock Plume
            </span>
            <span className="text-[9px] text-palace-green/60">Peacock Teal & Emerald</span>
          </div>

          <div className="p-4 bg-ivory-light border border-gold/30 rounded-xl text-center flex flex-col items-center justify-center">
            <PeacockMotif variant="single-feather" size="lg" />
            <span className="font-caps text-[10px] tracking-wider text-gold-deep mt-2 uppercase">
              Feather Eye
            </span>
            <span className="text-[9px] text-palace-green/60">Teal & Royal Blue</span>
          </div>

          <div className="p-4 bg-ivory-light border border-gold/30 rounded-xl text-center flex flex-col items-center justify-center">
            <LotusMotif variant="corner" size="lg" />
            <span className="font-caps text-[10px] tracking-wider text-gold-deep mt-2 uppercase">
              Floral Corner
            </span>
            <span className="text-[9px] text-palace-green/60">Corner Stationery Frame</span>
          </div>
        </div>
      </section>

      {/* 5. Reusable Container Cards */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-gold" />
          <h3 className="font-caps text-sm tracking-royal uppercase text-palace-green font-bold">
            5. Reusable Royal Stationery Containers
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <RoyalCard variant="stationery-ivory">
            <div className="text-center space-y-2">
              <span className="font-caps text-[10px] tracking-monumental text-gold-deep uppercase">
                Card Variant 1: Warm Ivory Stationery
              </span>
              <h4 className="font-serif text-xl font-semibold text-emerald-deep">
                Traditional Ceremony Frame
              </h4>
              <p className="font-sans text-xs text-palace-green/75 leading-relaxed">
                Clean warm ivory background with fine corner brackets, dual hairline framing, and subtle elevation shadow.
              </p>
            </div>
          </RoyalCard>

          <RoyalCard variant="royal-emerald">
            <div className="text-center space-y-2">
              <span className="font-caps text-[10px] tracking-monumental text-gold-light uppercase">
                Card Variant 2: Royal Emerald & Gold
              </span>
              <h4 className="font-serif text-xl font-semibold text-ivory">
                Evening Sangeet & Reception
              </h4>
              <p className="font-sans text-xs text-ivory/80 leading-relaxed">
                Deep emerald velvet background with champagne gold accents, providing royal evening majesty.
              </p>
            </div>
          </RoyalCard>
        </div>
      </section>
    </div>
  );
}

export default DesignSystemShowcase;
