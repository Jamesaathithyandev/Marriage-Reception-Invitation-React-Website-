import React from 'react';

/**
 * Reusable Royal Lotus Motifs — Redesigned for bold, elegant, realistic appearance.
 * All variants now feature thick strokes, rich fills, layered petals, and detailed stamens.
 * No origami or flat geometric look — these should feel like hand-painted Indian botanical art.
 */
export function LotusMotif({ variant = 'crest', className = '', size = 'md' }) {
  const sizeClasses = {
    sm:     'w-8 h-8 sm:w-10 sm:h-10',
    md:     'w-14 h-14 sm:w-16 sm:h-16',
    lg:     'w-20 h-20 sm:w-24 sm:h-24',
    xl:     'w-32 h-32 sm:w-40 sm:h-40',
    custom: '',
  };

  /* ─────────────────────────────────────────────────────────────────
     CREST  — Compact upright lotus crown used as section header icon
     Fully filled, layered petals, bold strokes, golden stamen
     ───────────────────────────────────────────────────────────────── */
  if (variant === 'crest') {
    return (
      <svg
        viewBox="0 0 100 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${sizeClasses[size]} ${className}`}
        aria-hidden="true"
      >
        {/* Lily-pad base leaves */}
        <path d="M50 84 C20 84 6 70 12 55 C24 65 38 76 50 84 Z" fill="#3B0764" fillOpacity="0.55" stroke="#C6A66B" strokeWidth="1.2"/>
        <path d="M50 84 C80 84 94 70 88 55 C76 65 62 76 50 84 Z" fill="#3B0764" fillOpacity="0.55" stroke="#C6A66B" strokeWidth="1.2"/>
        {/* Base water ripple */}
        <ellipse cx="50" cy="84" rx="28" ry="4" fill="#581C87" fillOpacity="0.12" stroke="#581C87" strokeWidth="0.5"/>

        {/* Outer back petals (wide, full) */}
        <path d="M50 78 C18 62 8 36 20 14 C30 34 44 60 50 78 Z" fill="#C8898D" stroke="#A0666A" strokeWidth="1.3" fillOpacity="0.9"/>
        <path d="M50 78 C82 62 92 36 80 14 C70 34 56 60 50 78 Z" fill="#C8898D" stroke="#A0666A" strokeWidth="1.3" fillOpacity="0.9"/>

        {/* Mid outer petals */}
        <path d="M50 76 C30 58 24 34 34 10 C40 30 46 54 50 76 Z" fill="#DCA8AB" stroke="#C6A66B" strokeWidth="1.1" fillOpacity="0.95"/>
        <path d="M50 76 C70 58 76 34 66 10 C60 30 54 54 50 76 Z" fill="#DCA8AB" stroke="#C6A66B" strokeWidth="1.1" fillOpacity="0.95"/>

        {/* Inner flanking petals */}
        <path d="M50 73 C38 54 36 30 44 8 C47 28 49 52 50 73 Z" fill="#ECC5C8" stroke="#C6A66B" strokeWidth="1" fillOpacity="0.98"/>
        <path d="M50 73 C62 54 64 30 56 8 C53 28 51 52 50 73 Z" fill="#ECC5C8" stroke="#C6A66B" strokeWidth="1" fillOpacity="0.98"/>

        {/* Central crown petal — tallest, gold-tipped */}
        <path d="M50 4 C44 20 41 42 50 73 C59 42 56 20 50 4 Z" fill="#DFC48E" stroke="#C6A66B" strokeWidth="1.4"/>
        {/* Central petal inner vein */}
        <path d="M50 10 C48 26 47 44 50 68" stroke="#B8933F" strokeWidth="0.7" strokeLinecap="round"/>

        {/* Stamen cluster */}
        <ellipse cx="50" cy="55" rx="5" ry="3.5" fill="#C6A66B" fillOpacity="0.6"/>
        {[[-4,0],[4,0],[0,-3],[-2.5,-2],[2.5,-2]].map(([dx,dy],i) => (
          <circle key={i} cx={50+dx} cy={55+dy} r="1.2" fill="#DFC48E"/>
        ))}

        {/* Apex bead */}
        <circle cx="50" cy="4" r="2.5" fill="#C6A66B" stroke="#8B6B34" strokeWidth="0.8"/>

        {/* Base bead chain */}
        {[50,42,58,34,66,26,74].map((x,i) => (
          <circle key={i} cx={x} cy="84" r={x===50?2.8:x===42||x===58?1.8:1.2} fill="#C6A66B" fillOpacity={x===50?1:0.65}/>
        ))}
      </svg>
    );
  }

  /* ─────────────────────────────────────────────────────────────────
     DIVIDER — Horizontal line with a bold centred lotus
     ───────────────────────────────────────────────────────────────── */
  if (variant === 'divider') {
    return (
      <div className={`flex items-center justify-center gap-3 w-full my-4 ${className}`}>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-gold/40 to-gold/80" />
        <svg viewBox="0 0 80 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-10 flex-shrink-0">
          {/* Base leaves */}
          <path d="M40 44 C22 44 14 36 18 26 C24 32 32 39 40 44 Z" fill="#3B0764" fillOpacity="0.5" stroke="#C6A66B" strokeWidth="0.9"/>
          <path d="M40 44 C58 44 66 36 62 26 C56 32 48 39 40 44 Z" fill="#3B0764" fillOpacity="0.5" stroke="#C6A66B" strokeWidth="0.9"/>
          {/* Outer petals */}
          <path d="M40 42 C22 34 16 20 22 8 C28 20 36 33 40 42 Z" fill="#C8898D" stroke="#A0666A" strokeWidth="1" fillOpacity="0.85"/>
          <path d="M40 42 C58 34 64 20 58 8 C52 20 44 33 40 42 Z" fill="#C8898D" stroke="#A0666A" strokeWidth="1" fillOpacity="0.85"/>
          {/* Inner petals */}
          <path d="M40 40 C30 30 28 16 34 4 C37 16 39 30 40 40 Z" fill="#DCA8AB" stroke="#C6A66B" strokeWidth="0.9" fillOpacity="0.95"/>
          <path d="M40 40 C50 30 52 16 46 4 C43 16 41 30 40 40 Z" fill="#DCA8AB" stroke="#C6A66B" strokeWidth="0.9" fillOpacity="0.95"/>
          {/* Centre petal */}
          <path d="M40 3 C36 13 34 26 40 40 C46 26 44 13 40 3 Z" fill="#DFC48E" stroke="#C6A66B" strokeWidth="1.1"/>
          {/* Stamen */}
          <circle cx="40" cy="28" r="3" fill="#C6A66B" fillOpacity="0.7"/>
          <circle cx="40" cy="4" r="2" fill="#C6A66B"/>
        </svg>
        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-gold/40 to-gold/80" />
      </div>
    );
  }

  /* ─────────────────────────────────────────────────────────────────
     CORNER — Corner bracket motif
     ───────────────────────────────────────────────────────────────── */
  if (variant === 'corner') {
    return (
      <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${sizeClasses[size]} ${className}`} aria-hidden="true">
        {/* L-frame */}
        <path d="M2 2 L40 2 C28 2 18 12 18 24 L18 48 L2 48 Z" fill="none" stroke="#C6A66B" strokeWidth="1.5"/>
        <path d="M5 5 L32 5 C23 5 16 13 16 22 L16 42 L5 42 Z" fill="none" stroke="#C6A66B" strokeWidth="0.6" strokeOpacity="0.55"/>
        {/* Small lotus at corner joint */}
        <path d="M14 14 C20 8 24 10 22 16 C18 18 16 18 14 14 Z" fill="#D99A9D" fillOpacity="0.85" stroke="#C6A66B" strokeWidth="0.8"/>
        <path d="M14 14 C12 20 14 24 18 22 C16 18 14 16 14 14 Z" fill="#ECC5C8" fillOpacity="0.7" stroke="#C6A66B" strokeWidth="0.5"/>
        <circle cx="4" cy="4" r="2" fill="#C6A66B"/>
        <circle cx="18" cy="48" r="1.5" fill="#C6A66B" fillOpacity="0.7"/>
      </svg>
    );
  }

  /* ─────────────────────────────────────────────────────────────────
     BLOOM — Full blooming lotus with water, used in closing section
     Rich, layered, with detailed stamens and water reflection
     ───────────────────────────────────────────────────────────────── */
  if (variant === 'bloom') {
    return (
      <svg viewBox="0 0 200 210" fill="none" xmlns="http://www.w3.org/2000/svg"
        className={`${sizeClasses[size]} ${className}`} aria-hidden="true">
        {/* Stem */}
        <path d="M100 140 C97 155 99 170 100 178" stroke="#3B0764" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Curved side stems */}
        <path d="M100 160 C88 155 78 148 72 138" stroke="#3B0764" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M100 160 C112 155 122 148 128 138" stroke="#3B0764" strokeWidth="1.5" strokeLinecap="round"/>

        {/* Lily pad left */}
        <path d="M72 138 C50 138 40 124 48 112 C56 120 66 130 74 138 C80 132 84 126 82 118 L72 138 Z"
          fill="#3B0764" fillOpacity="0.5" stroke="#3B0764" strokeWidth="0.8"/>
        {/* Lily pad right */}
        <path d="M128 138 C150 138 160 124 152 112 C144 120 134 130 126 138 C120 132 116 126 118 118 L128 138 Z"
          fill="#3B0764" fillOpacity="0.5" stroke="#3B0764" strokeWidth="0.8"/>
        {/* Main lily pad */}
        <path d="M100 178 C62 178 44 160 52 142 C66 156 84 168 100 174 C116 168 134 156 148 142 C156 160 138 178 100 178 Z"
          fill="#3B0764" fillOpacity="0.45" stroke="#3B0764" strokeWidth="1"/>
        <path d="M100 174 L100 178" stroke="#3B0764" strokeWidth="0.8"/>
        {/* Water ripples */}
        <ellipse cx="100" cy="182" rx="48" ry="8" stroke="#581C87" strokeWidth="0.8" fill="#581C87" fillOpacity="0.08"/>
        <ellipse cx="100" cy="186" rx="34" ry="5" stroke="#581C87" strokeWidth="0.5" fill="none" opacity="0.35"/>
        <ellipse cx="100" cy="190" rx="20" ry="3" stroke="#581C87" strokeWidth="0.4" fill="none" opacity="0.25"/>

        {/* === BACK ROW — outermost, wide petals === */}
        {/* Far left back */}
        <path d="M100 130 C72 118 54 92 58 62 C70 86 88 114 100 130 Z" fill="#B87A7D" stroke="#9A6063" strokeWidth="1.2" fillOpacity="0.85"/>
        {/* Far right back */}
        <path d="M100 130 C128 118 146 92 142 62 C130 86 112 114 100 130 Z" fill="#B87A7D" stroke="#9A6063" strokeWidth="1.2" fillOpacity="0.85"/>
        {/* Far left outer */}
        <path d="M100 132 C68 125 46 102 46 70 C62 92 82 120 100 132 Z" fill="#C8898D" stroke="#A0666A" strokeWidth="1.1" fillOpacity="0.9"/>
        {/* Far right outer */}
        <path d="M100 132 C132 125 154 102 154 70 C138 92 118 120 100 132 Z" fill="#C8898D" stroke="#A0666A" strokeWidth="1.1" fillOpacity="0.9"/>

        {/* === MID ROW — medium, cupped petals === */}
        <path d="M100 128 C76 116 62 90 68 58 C76 80 90 108 100 128 Z" fill="#DCA8AB" stroke="#C6A66B" strokeWidth="1.2" fillOpacity="0.95"/>
        <path d="M100 128 C124 116 138 90 132 58 C124 80 110 108 100 128 Z" fill="#DCA8AB" stroke="#C6A66B" strokeWidth="1.2" fillOpacity="0.95"/>
        <path d="M100 126 C82 112 74 86 80 52 C86 74 94 104 100 126 Z" fill="#E3BBBE" stroke="#C6A66B" strokeWidth="1" fillOpacity="0.98"/>
        <path d="M100 126 C118 112 126 86 120 52 C114 74 106 104 100 126 Z" fill="#E3BBBE" stroke="#C6A66B" strokeWidth="1" fillOpacity="0.98"/>

        {/* === INNER ROW — upright, tall petals === */}
        <path d="M100 124 C88 106 86 78 92 44 C95 68 98 98 100 124 Z" fill="#ECC5C8" stroke="#C6A66B" strokeWidth="1" fillOpacity="1"/>
        <path d="M100 124 C112 106 114 78 108 44 C105 68 102 98 100 124 Z" fill="#ECC5C8" stroke="#C6A66B" strokeWidth="1" fillOpacity="1"/>

        {/* === CENTRE CROWN PETAL — golden, tallest === */}
        <path d="M100 28 C94 46 90 72 100 120 C110 72 106 46 100 28 Z" fill="#DFC48E" stroke="#C6A66B" strokeWidth="1.6"/>
        {/* Centre vein */}
        <path d="M100 34 C98 52 97 72 100 110" stroke="#B8933F" strokeWidth="0.9" strokeLinecap="round"/>

        {/* === STAMEN CLUSTER === */}
        <ellipse cx="100" cy="100" rx="10" ry="7" fill="#C6A66B" fillOpacity="0.55"/>
        {[[-7,0],[7,0],[0,-5],[-4.5,-3.5],[4.5,-3.5],[-6,-1],[6,-1],[0,2]].map(([dx,dy],i) => (
          <circle key={i} cx={100+dx} cy={100+dy} r="2" fill="#DFC48E" stroke="#B8933F" strokeWidth="0.5"/>
        ))}
        {/* Stamen tips */}
        {[[-8,-4],[8,-4],[0,-8],[-5,-6],[5,-6]].map(([dx,dy],i) => (
          <circle key={i} cx={100+dx} cy={100+dy} r="1.2" fill="#F5E0A0"/>
        ))}
        {/* Pollen centre */}
        <circle cx="100" cy="96" r="4.5" fill="#C6A66B" stroke="#9E7E45" strokeWidth="1"/>
        <circle cx="100" cy="96" r="2" fill="#F5E0A0"/>

        {/* Apex tip bead */}
        <circle cx="100" cy="28" r="3" fill="#C6A66B" stroke="#8B6B34" strokeWidth="1"/>
      </svg>
    );
  }

  /* ─────────────────────────────────────────────────────────────────
     BORDER-GARLAND — Full-width repeating lotus vine
     ───────────────────────────────────────────────────────────────── */
  if (variant === 'border-garland') {
    return (
      <svg viewBox="0 0 600 70" fill="none" xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet" className={`w-full h-auto ${className}`} aria-hidden="true">
        {/* Undulating vine */}
        <path d="M0 40 Q50 22 100 40 Q150 58 200 40 Q250 22 300 40 Q350 58 400 40 Q450 22 500 40 Q550 58 600 40"
          stroke="#3B0764" strokeWidth="1.2" fill="none" opacity="0.55"/>
        {/* Main lotus blooms */}
        {[100, 300, 500].map(x => (
          <g key={x}>
            {/* Outer petals */}
            <path d={`M${x} 40 C${x-12} 34 ${x-10} 22 ${x-4} 16 C${x-5} 26 ${x-3} 34 ${x} 40 Z`} fill="#C8898D" stroke="#A0666A" strokeWidth="0.9" fillOpacity="0.85"/>
            <path d={`M${x} 40 C${x+12} 34 ${x+10} 22 ${x+4} 16 C${x+5} 26 ${x+3} 34 ${x} 40 Z`} fill="#C8898D" stroke="#A0666A" strokeWidth="0.9" fillOpacity="0.85"/>
            <path d={`M${x} 40 C${x-18} 36 ${x-16} 24 ${x-8} 18 C${x-10} 29 ${x-6} 36 ${x} 40 Z`} fill="#DCA8AB" fillOpacity="0.75" stroke="#C6A66B" strokeWidth="0.7"/>
            <path d={`M${x} 40 C${x+18} 36 ${x+16} 24 ${x+8} 18 C${x+10} 29 ${x+6} 36 ${x} 40 Z`} fill="#DCA8AB" fillOpacity="0.75" stroke="#C6A66B" strokeWidth="0.7"/>
            {/* Centre petal */}
            <path d={`M${x} 12 C${x-3} 22 ${x-2} 32 ${x} 40 C${x+2} 32 ${x+3} 22 ${x} 12 Z`} fill="#DFC48E" stroke="#C6A66B" strokeWidth="1"/>
            {/* Stamen */}
            <circle cx={x} cy={32} r="2.5" fill="#C6A66B" fillOpacity="0.7"/>
            <circle cx={x} cy={12} r="2" fill="#C6A66B"/>
            {/* Flanking leaves */}
            <path d={`M${x-20} 36 C${x-28} 28 ${x-30} 18 ${x-22} 14 C${x-22} 22 ${x-20} 30 ${x-20} 36 Z`} fill="#3B0764" fillOpacity="0.55"/>
            <path d={`M${x+20} 36 C${x+28} 28 ${x+30} 18 ${x+22} 14 C${x+22} 22 ${x+20} 30 ${x+20} 36 Z`} fill="#3B0764" fillOpacity="0.55"/>
          </g>
        ))}
        {/* Small buds at troughs */}
        {[0, 200, 400, 600].map(x => (
          <g key={`bud-${x}`}>
            <path d={`M${x} 40 C${x-2} 46 ${x-1} 52 ${x} 56 C${x+1} 52 ${x+2} 46 ${x} 40 Z`} fill="#D99A9D" fillOpacity="0.65" stroke="#C6A66B" strokeWidth="0.6"/>
            <circle cx={x} cy={57} r="1.8" fill="#C6A66B" fillOpacity="0.7"/>
          </g>
        ))}
        {/* Leaves mid-vine */}
        {[50, 150, 250, 350, 450, 550].map(x => (
          <g key={`leaf-${x}`} opacity="0.5">
            <path d={`M${x} 35 C${x-7} 28 ${x-5} 18 ${x} 15 C${x} 22 ${x} 30 ${x} 35 Z`} fill="#3B0764"/>
            <path d={`M${x} 35 C${x+7} 28 ${x+5} 18 ${x} 15 C${x} 22 ${x} 30 ${x} 35 Z`} fill="#3B0764" fillOpacity="0.7"/>
          </g>
        ))}
      </svg>
    );
  }

  // Minimal fallback
  return (
    <svg viewBox="0 0 40 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${sizeClasses[size]} ${className}`} aria-hidden="true">
      <path d="M20 2 C14 12 11 26 20 44 C29 26 26 12 20 2 Z" fill="#DFC48E" stroke="#C6A66B" strokeWidth="1.5"/>
      <path d="M20 44 C8 36 4 22 10 12 C12 22 16 34 20 44 Z" fill="#C8898D" fillOpacity="0.9" stroke="#C6A66B" strokeWidth="1"/>
      <path d="M20 44 C32 36 36 22 30 12 C28 22 24 34 20 44 Z" fill="#C8898D" fillOpacity="0.9" stroke="#C6A66B" strokeWidth="1"/>
      <path d="M20 42 C14 32 12 18 16 6 C18 18 19 32 20 42 Z" fill="#DCA8AB" fillOpacity="0.95" stroke="#C6A66B" strokeWidth="0.9"/>
      <path d="M20 42 C26 32 28 18 24 6 C22 18 21 32 20 42 Z" fill="#DCA8AB" fillOpacity="0.95" stroke="#C6A66B" strokeWidth="0.9"/>
      <circle cx="20" cy="2" r="2.2" fill="#C6A66B"/>
    </svg>
  );
}

export default LotusMotif;
