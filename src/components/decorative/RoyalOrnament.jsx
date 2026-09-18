import React from 'react';

/**
 * RoyalOrnament — Palace Architecture & Ornamental Elements
 *
 * Variants:
 *  'jali-panel'       — Geometric Rajasthani jali lattice tile (full SVG, scalable)
 *  'palace-window'    — Scalloped arched Mughal window opening shape
 *  'arch-border'      — Full-width ornamental arch border for section transitions
 *  'pillar-pair'      — Flanking architectural pillar pair
 *  'border-strip'     — Horizontal gold ornamental tramline strip with repeating motifs
 *  'section-divider'  — Royal section separator with arch, beads, and lotus
 */
export function RoyalOrnament({ variant = 'border-strip', className = '' }) {

  /* ── Geometric Jali Panel ────────────────────────────────── */
  if (variant === 'jali-panel') {
    return (
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        {/* Outer octagonal frame */}
        <path
          d="M36 4 L84 4 L116 36 L116 84 L84 116 L36 116 L4 84 L4 36 Z"
          stroke="#C6A66B" strokeWidth="1.2" fill="none"
        />
        {/* Inner octagon */}
        <path
          d="M42 12 L78 12 L108 42 L108 78 L78 108 L42 108 L12 78 L12 42 Z"
          stroke="#C6A66B" strokeWidth="0.6" fill="none" opacity="0.6"
        />
        {/* Diagonal lattice lines */}
        <line x1="4" y1="36" x2="36" y2="4" stroke="#C6A66B" strokeWidth="0.5" opacity="0.4"/>
        <line x1="4" y1="84" x2="36" y2="116" stroke="#C6A66B" strokeWidth="0.5" opacity="0.4"/>
        <line x1="84" y1="4" x2="116" y2="36" stroke="#C6A66B" strokeWidth="0.5" opacity="0.4"/>
        <line x1="84" y1="116" x2="116" y2="84" stroke="#C6A66B" strokeWidth="0.5" opacity="0.4"/>
        {/* Centre diamond flower */}
        <path d="M60 40 L80 60 L60 80 L40 60 Z" stroke="#C6A66B" strokeWidth="0.8" fill="none"/>
        <path d="M60 48 L72 60 L60 72 L48 60 Z" stroke="#6B21A8" strokeWidth="0.6" fill="#6B21A8" fillOpacity="0.15"/>
        {/* Inner petal cross */}
        <line x1="60" y1="40" x2="60" y2="80" stroke="#C6A66B" strokeWidth="0.4" opacity="0.5"/>
        <line x1="40" y1="60" x2="80" y2="60" stroke="#C6A66B" strokeWidth="0.4" opacity="0.5"/>
        {/* Corner bead accents */}
        {[[60,4],[116,60],[60,116],[4,60]].map(([cx,cy],i) => (
          <circle key={i} cx={cx} cy={cy} r="2.5" fill="#C6A66B"/>
        ))}
        <circle cx="60" cy="60" r="3" fill="#C6A66B"/>
        <circle cx="60" cy="60" r="1.5" fill="#DFC48E"/>
      </svg>
    );
  }

  /* ── Palace Window Shape ─────────────────────────────────── */
  if (variant === 'palace-window') {
    return (
      <svg
        viewBox="0 0 100 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        {/* Window outer arch — trefoil / polylobed */}
        <path
          d="M10 140 L10 60 C10 40 20 30 30 24 C35 21 40 18 50 14
             C60 18 65 21 70 24 C80 30 90 40 90 60 L90 140 Z"
          stroke="#C6A66B" strokeWidth="1.2" fill="none"
        />
        {/* Inner scalloped arch top */}
        <path
          d="M20 140 L20 65 C20 48 28 38 36 32 C41 28 45 25 50 22
             C55 25 59 28 64 32 C72 38 80 48 80 65 L80 140"
          stroke="#C6A66B" strokeWidth="0.7" strokeDasharray="2 2" fill="none" opacity="0.7"
        />
        {/* Trefoil lobes at the crown */}
        <circle cx="50" cy="22" r="9" stroke="#C6A66B" strokeWidth="0.8" fill="none" />
        <circle cx="36" cy="30" r="6" stroke="#C6A66B" strokeWidth="0.7" fill="none" opacity="0.7"/>
        <circle cx="64" cy="30" r="6" stroke="#C6A66B" strokeWidth="0.7" fill="none" opacity="0.7"/>
        {/* Crown keystone bead */}
        <circle cx="50" cy="14" r="3" fill="#C6A66B"/>
        <circle cx="50" cy="14" r="1.5" fill="#F3E4C8"/>
        {/* Jali fill inside window — small diamond grid */}
        <g opacity="0.2" stroke="#C6A66B" strokeWidth="0.5">
          {[35,45,55,65].map(x => (
            <line key={x} x1={x} y1="50" x2={x} y2="130"/>
          ))}
          {[60,75,90,105,120,135].map(y => (
            <line key={y} x1="20" y1={y} x2="80" y2={y}/>
          ))}
        </g>
        {/* Side bead accents */}
        <circle cx="10" cy="60" r="2" fill="#C6A66B"/>
        <circle cx="90" cy="60" r="2" fill="#C6A66B"/>
        {/* Base plinth */}
        <rect x="8" y="136" width="84" height="4" rx="1" fill="#C6A66B" fillOpacity="0.3" stroke="#C6A66B" strokeWidth="0.6"/>
      </svg>
    );
  }

  /* ── Full-width Arch Border (section top/bottom) ────────── */
  if (variant === 'arch-border') {
    return (
      <svg
        viewBox="0 0 800 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        className={`w-full h-auto ${className}`}
        aria-hidden="true"
      >
        {/* Ground line */}
        <line x1="0" y1="55" x2="800" y2="55" stroke="#C6A66B" strokeWidth="0.8"/>
        <line x1="0" y1="58" x2="800" y2="58" stroke="#C6A66B" strokeWidth="0.3" opacity="0.5"/>
        {/* Repeating cusped arches */}
        {[0,1,2,3,4,5,6,7].map(i => {
          const x = i * 100 + 50;
          return (
            <g key={i}>
              <path
                d={`M${x-50} 55 C${x-50} 30 ${x-30} 20 ${x} 12 C${x+30} 20 ${x+50} 30 ${x+50} 55`}
                stroke="#C6A66B" strokeWidth="0.9" fill="none"
              />
              <circle cx={x} cy={12} r="2" fill="#C6A66B"/>
              <circle cx={x-30} cy={28} r="1.2" fill="#C6A66B" opacity="0.7"/>
              <circle cx={x+30} cy={28} r="1.2" fill="#C6A66B" opacity="0.7"/>
            </g>
          );
        })}
        {/* Decorative lotus at centre of each arch spandrel */}
        {[0,1,2,3,4,5,6,7].map(i => {
          const x = i * 100 + 50;
          return (
            <g key={`lotus-${i}`} opacity="0.35">
              <path d={`M${x} 42 C${x-4} 35 ${x-3} 28 ${x} 25 C${x+3} 28 ${x+4} 35 ${x} 42 Z`} fill="#D99A9D"/>
              <path d={`M${x} 42 C${x-8} 40 ${x-6} 32 ${x-2} 28 C${x-3} 34 ${x-2} 40 ${x} 42 Z`} fill="#D99A9D" fillOpacity="0.8"/>
              <path d={`M${x} 42 C${x+8} 40 ${x+6} 32 ${x+2} 28 C${x+3} 34 ${x+2} 40 ${x} 42 Z`} fill="#D99A9D" fillOpacity="0.8"/>
              <circle cx={x} cy={25} r="1.5" fill="#C6A66B"/>
            </g>
          );
        })}
      </svg>
    );
  }

  /* ── Flanking Pillar Pair ────────────────────────────────── */
  if (variant === 'pillar-pair') {
    const Pillar = ({ flip = false }) => (
      <svg
        viewBox="0 0 50 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-8 sm:w-10 md:w-12 h-auto ${flip ? '-scale-x-100' : ''} ${className}`}
        aria-hidden="true"
      >
        {/* Capital / top bracket */}
        <path d="M5 20 Q25 8 45 20 L48 30 L2 30 Z" fill="#C6A66B" fillOpacity="0.35" stroke="#C6A66B" strokeWidth="0.8"/>
        <rect x="15" y="8" width="20" height="6" rx="2" fill="#C6A66B" fillOpacity="0.5"/>
        {/* Shaft */}
        <rect x="18" y="30" width="14" height="230" rx="2" fill="#C6A66B" fillOpacity="0.08" stroke="#C6A66B" strokeWidth="0.6"/>
        {/* Fluting lines on shaft */}
        <line x1="22" y1="34" x2="22" y2="255" stroke="#C6A66B" strokeWidth="0.3" opacity="0.4"/>
        <line x1="25" y1="34" x2="25" y2="255" stroke="#C6A66B" strokeWidth="0.3" opacity="0.4"/>
        <line x1="28" y1="34" x2="28" y2="255" stroke="#C6A66B" strokeWidth="0.3" opacity="0.4"/>
        {/* Repeating bead rings on shaft */}
        {[70,110,150,190,230].map(y => (
          <rect key={y} x="17" y={y} width="16" height="3" rx="1.5" fill="#C6A66B" fillOpacity="0.25"/>
        ))}
        {/* Jali panel inset on shaft */}
        <rect x="20" y="50" width="10" height="16" rx="1" stroke="#C6A66B" strokeWidth="0.5" strokeOpacity="0.4" fill="none"/>
        <path d="M20 58 L30 50 M20 50 L30 58" stroke="#C6A66B" strokeWidth="0.3" opacity="0.3"/>
        {/* Base plinth */}
        <rect x="10" y="260" width="30" height="8" rx="2" fill="#C6A66B" fillOpacity="0.3" stroke="#C6A66B" strokeWidth="0.6"/>
        <rect x="6" y="268" width="38" height="6" rx="2" fill="#C6A66B" fillOpacity="0.25" stroke="#C6A66B" strokeWidth="0.5"/>
        <rect x="2" y="274" width="46" height="5" rx="1" fill="#C6A66B" fillOpacity="0.2" stroke="#C6A66B" strokeWidth="0.5"/>
      </svg>
    );
    return (
      <div className={`flex justify-between items-start w-full pointer-events-none ${className}`}>
        <Pillar />
        <Pillar flip />
      </div>
    );
  }

  /* ── Horizontal Border Strip ─────────────────────────────── */
  if (variant === 'border-strip') {
    return (
      <svg
        viewBox="0 0 600 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        className={`w-full h-auto ${className}`}
        aria-hidden="true"
      >
        {/* Outer tramlines */}
        <line x1="0" y1="1" x2="600" y2="1" stroke="#C6A66B" strokeWidth="0.8"/>
        <line x1="0" y1="19" x2="600" y2="19" stroke="#C6A66B" strokeWidth="0.8"/>
        {/* Inner fine lines */}
        <line x1="0" y1="4" x2="600" y2="4" stroke="#C6A66B" strokeWidth="0.3" opacity="0.5"/>
        <line x1="0" y1="16" x2="600" y2="16" stroke="#C6A66B" strokeWidth="0.3" opacity="0.5"/>
        {/* Repeating diamond + bead row */}
        {Array.from({length: 20}, (_, i) => {
          const x = i * 30 + 15;
          return (
            <g key={i}>
              <path d={`M${x} 6 L${x+6} 10 L${x} 14 L${x-6} 10 Z`} stroke="#C6A66B" strokeWidth="0.5" fill="#C6A66B" fillOpacity="0.15"/>
              <circle cx={x} cy={10} r="1" fill="#C6A66B" opacity="0.6"/>
            </g>
          );
        })}
        {/* Centre lotus accent */}
        <path d="M300 4 C297 7 296 10 300 16 C304 10 303 7 300 4 Z" fill="#D99A9D" fillOpacity="0.7"/>
        <circle cx="300" cy="4" r="2" fill="#C6A66B"/>
      </svg>
    );
  }

  /* ── Section Divider (arch + lotus + beads) ─────────────── */
  return (
    <svg
      viewBox="0 0 500 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      className={`w-full max-w-2xl h-auto ${className}`}
      aria-hidden="true"
    >
      {/* Left line */}
      <line x1="0" y1="25" x2="180" y2="25" stroke="#C6A66B" strokeWidth="0.8"/>
      <line x1="0" y1="28" x2="175" y2="28" stroke="#C6A66B" strokeWidth="0.3" opacity="0.5"/>
      {/* Left bead chain */}
      {[20,40,60,80,100,120,140,160].map(x => (
        <circle key={x} cx={x} cy={25} r={x===160?2:1.2} fill="#C6A66B" fillOpacity={x===160?1:0.5}/>
      ))}
      {/* Centre ornament — mini arch over lotus */}
      <path d="M190 44 C190 30 205 22 250 18 C295 22 310 30 310 44" stroke="#C6A66B" strokeWidth="1"/>
      <path d="M200 44 C200 33 212 26 250 22 C288 26 300 33 300 44" stroke="#C6A66B" strokeWidth="0.5" strokeDasharray="2 1" opacity="0.6"/>
      {/* Lotus in the arch */}
      <path d="M250 40 C244 32 242 24 250 18 C258 24 256 32 250 40 Z" fill="#D99A9D" fillOpacity="0.7" stroke="#C6A66B" strokeWidth="0.6"/>
      <path d="M250 40 C238 36 232 28 236 22 C240 28 246 36 250 40 Z" fill="#D99A9D" fillOpacity="0.5"/>
      <path d="M250 40 C262 36 268 28 264 22 C260 28 254 36 250 40 Z" fill="#D99A9D" fillOpacity="0.5"/>
      <circle cx="250" cy="18" r="3" fill="#C6A66B"/>
      <circle cx="250" cy="18" r="1.5" fill="#F3E4C8"/>
      {/* Arch peak beads */}
      <circle cx="190" cy="44" r="2" fill="#C6A66B"/>
      <circle cx="310" cy="44" r="2" fill="#C6A66B"/>
      {/* Right bead chain */}
      {[340,360,380,400,420,440,460,480].map(x => (
        <circle key={x} cx={x} cy={25} r={x===340?2:1.2} fill="#C6A66B" fillOpacity={x===340?1:0.5}/>
      ))}
      {/* Right line */}
      <line x1="320" y1="25" x2="500" y2="25" stroke="#C6A66B" strokeWidth="0.8"/>
      <line x1="325" y1="28" x2="500" y2="28" stroke="#C6A66B" strokeWidth="0.3" opacity="0.5"/>
    </svg>
  );
}

export default RoyalOrnament;
