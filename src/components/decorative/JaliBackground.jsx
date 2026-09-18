import React from 'react';

/**
 * JaliBackground: Palace Architectural Lattice & Atmospheric Background
 * Combines warm ivory paper texture, geometric Rajasthani jali overlay, and radial ambient palace lighting.
 */
export function JaliBackground({ children, opacity = 'subtle', showPalaceVignette = true }) {
  const opacityClass = {
    subtle: 'opacity-[0.35]',
    medium: 'opacity-[0.55]',
    prominent: 'opacity-[0.75]',
  }[opacity] || 'opacity-[0.35]';

  return (
    <div className="relative min-h-screen w-full bg-ivory paper-grain overflow-x-clip flex flex-col">
      {/* Ambient Royal Palace Radial Vignette Glow */}
      {showPalaceVignette && (
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-gold-champagne/10 via-lotus-soft/5 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-deep/5 rounded-full blur-3xl" />
          <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-peacock-teal/5 rounded-full blur-3xl" />
        </div>
      )}

      {/* Repeating Royal Jali Screen Pattern */}
      <div
        className={`fixed inset-0 jali-watermark pointer-events-none z-0 transition-opacity duration-700 ${opacityClass}`}
      />

      {/* Decorative Outer Border Lines (Simulates luxury invitation envelope liner / stationery margin) */}
      <div className="fixed inset-3 sm:inset-6 border border-gold/20 pointer-events-none z-10 hidden md:block">
        {/* Fine gold corner bracket accents */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-gold/40" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-gold/40" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-gold/40" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-gold/40" />
      </div>

      {/* Page Content */}
      <div className="relative z-10 flex-1 flex flex-col">
        {children}
      </div>
    </div>
  );
}

export default JaliBackground;
