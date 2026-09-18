import React from 'react';

/**
 * RoyalCard: Reusable Luxury Indian Wedding Stationery Card Frame
 */
export function RoyalCard({
  children,
  className = '',
  innerClassName = '',
  variant = 'stationery-ivory', // 'stationery-ivory' | 'royal-emerald' | 'peacock-accent'
  hasCornerBrackets = true,
  hasDualBorders = true,
}) {
  const getCardStyles = () => {
    switch (variant) {
      case 'royal-emerald':
        return {
          wrapper: 'bg-emerald-deep text-ivory-light shadow-palace-elevation border-gold/40',
          inner: 'bg-gradient-to-b from-palace-green to-emerald-dark',
          accent: 'text-gold-light',
        };
      case 'peacock-accent':
        return {
          wrapper: 'bg-ivory-light text-palace-green shadow-royal-card border-peacock-teal/30',
          inner: 'bg-ivory/95',
          accent: 'text-peacock-teal',
        };
      case 'stationery-ivory':
      default:
        return {
          wrapper: 'bg-ivory-light text-palace-green shadow-royal-card border-gold/40',
          inner: 'bg-ivory-warm/80',
          accent: 'text-emerald-deep',
        };
    }
  };

  const styles = getCardStyles();

  return (
    <div
      className={`relative rounded-xl border p-2 sm:p-3 transition-all duration-300 ${styles.wrapper} ${className}`}
    >
      {/* Inner Framing Container */}
      <div
        className={`relative rounded-lg p-5 sm:p-8 ${styles.inner} ${
          hasDualBorders ? 'border border-gold/30 gold-dual-ring' : 'border border-gold/25'
        } ${innerClassName}`}
      >
        {/* Corner Accents */}
        {hasCornerBrackets && (
          <>
            {/* Top Left */}
            <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t border-l border-gold" />
            <div className="absolute top-2.5 left-2.5 w-1.5 h-1.5 border-t border-l border-gold/60" />
            
            {/* Top Right */}
            <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t border-r border-gold" />
            <div className="absolute top-2.5 right-2.5 w-1.5 h-1.5 border-t border-r border-gold/60" />

            {/* Bottom Left */}
            <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b border-l border-gold" />
            <div className="absolute bottom-2.5 left-2.5 w-1.5 h-1.5 border-b border-l border-gold/60" />

            {/* Bottom Right */}
            <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b border-r border-gold" />
            <div className="absolute bottom-2.5 right-2.5 w-1.5 h-1.5 border-b border-r border-gold/60" />
          </>
        )}

        {children}
      </div>
    </div>
  );
}

export default RoyalCard;
