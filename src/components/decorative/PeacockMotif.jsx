import React from 'react';

/**
 * Reusable Royal Peacock Motifs — Redesigned for bold, elegant, realistic appearance.
 */
export function PeacockMotif({ variant = 'feather-crown', className = '', size = 'md' }) {
  const sizeClasses = {
    sm:     'w-10 h-10 sm:w-12 sm:h-12',
    md:     'w-16 h-16 sm:w-20 sm:h-20',
    lg:     'w-24 h-24 sm:w-28 sm:h-28',
    xl:     'w-36 h-36 sm:w-48 sm:h-48',
    custom: '',
  };

  /* ─────────────────────────────────────────────────────────────
     FEATHER-CROWN — 7 radiating peacock feathers from a gold base
     Used in EventsSection card bottom accent & HeroSection
     ───────────────────────────────────────────────────────────── */
  if (variant === 'feather-crown') {
    const feathers = [
      { dx: -52, dy: -26, rot: -48 },
      { dx: -34, dy: -48, rot: -30 },
      { dx: -16, dy: -56, rot: -14 },
      { dx:   0, dy: -60, rot:   0 },
      { dx:  16, dy: -56, rot:  14 },
      { dx:  34, dy: -48, rot:  30 },
      { dx:  52, dy: -26, rot:  48 },
    ];
    const bx = 70, by = 72;
    return (
      <svg viewBox="0 0 140 82" fill="none" xmlns="http://www.w3.org/2000/svg"
        className={`${sizeClasses[size]} ${className}`} aria-hidden="true">
        {/* Feather quills + eyes */}
        {feathers.map(({ dx, dy, rot }, i) => {
          const tx = bx + dx, ty = by + dy;
          return (
            <g key={i}>
              {/* Quill shaft */}
              <path d={`M${bx} ${by} Q${bx + dx * 0.5} ${by + dy * 0.55} ${tx} ${ty}`}
                stroke="#C6A66B" strokeWidth="1.1" strokeLinecap="round"/>
              {/* Feather fronds */}
              <path d={`M${bx + dx*0.35} ${by + dy*0.38} C${bx + dx*0.25} ${by + dy*0.25} ${bx + dx*0.15} ${by + dy*0.28} ${bx + dx*0.08} ${by + dy*0.32}`}
                stroke="#32114E" strokeWidth="0.6" strokeLinecap="round" opacity="0.55"/>
              <path d={`M${bx + dx*0.35} ${by + dy*0.38} C${bx + dx*0.45} ${by + dy*0.25} ${bx + dx*0.55} ${by + dy*0.28} ${bx + dx*0.62} ${by + dy*0.32}`}
                stroke="#32114E" strokeWidth="0.6" strokeLinecap="round" opacity="0.55"/>
              {/* Feather eye — outer teal */}
              <g transform={`rotate(${rot} ${tx} ${ty})`}>
                <ellipse cx={tx} cy={ty} rx="8" ry="12" fill="#6B21A8" stroke="#C6A66B" strokeWidth="1"/>
                {/* Inner blue */}
                <ellipse cx={tx} cy={ty + 1.5} rx="4.5" ry="7" fill="#315A78"/>
                {/* Dark pupil */}
                <ellipse cx={tx} cy={ty + 1} rx="2.2" ry="3.5" fill="#3B0764"/>
                {/* Gold highlight */}
                <circle cx={tx} cy={ty - 1} r="2.2" fill="#DFC48E"/>
                <circle cx={tx} cy={ty - 1} r="0.9" fill="#F5E0A0"/>
              </g>
            </g>
          );
        })}
        {/* Gold base mount / kalash */}
        <path d="M56 74 C62 68 78 68 84 74 L82 80 L58 80 Z" fill="#C6A66B"/>
        <ellipse cx="70" cy="73" rx="7" ry="3.5" fill="#DFC48E" stroke="#C6A66B" strokeWidth="0.8"/>
        <circle cx="70" cy="72" r="2" fill="#C6A66B"/>
      </svg>
    );
  }

  /* ─────────────────────────────────────────────────────────────
     SINGLE-FEATHER — One tall peacock feather with full eye detail
     ───────────────────────────────────────────────────────────── */
  if (variant === 'single-feather') {
    return (
      <svg viewBox="0 0 50 90" fill="none" xmlns="http://www.w3.org/2000/svg"
        className={`${sizeClasses[size]} ${className}`} aria-hidden="true">
        {/* Quill */}
        <path d="M25 88 Q26 52 25 5" stroke="#C6A66B" strokeWidth="1.5" strokeLinecap="round"/>
        {/* Fronds */}
        <path d="M25 48 C15 36 10 24 16 13 C21 26 24 38 25 48 Z" fill="#32114E" fillOpacity="0.65" stroke="#C6A66B" strokeWidth="0.5"/>
        <path d="M25 48 C35 36 40 24 34 13 C29 26 26 38 25 48 Z" fill="#32114E" fillOpacity="0.65" stroke="#C6A66B" strokeWidth="0.5"/>
        {/* Eye outer */}
        <ellipse cx="25" cy="18" rx="10" ry="14" fill="#6B21A8" stroke="#C6A66B" strokeWidth="1.2"/>
        {/* Inner teardrop */}
        <path d="M25 10 C20 16 20 24 25 29 C30 24 30 16 25 10 Z" fill="#315A78"/>
        {/* Pupil */}
        <ellipse cx="25" cy="20" rx="3.5" ry="5" fill="#3B0764"/>
        <circle cx="25" cy="18" r="3" fill="#DFC48E"/>
        <circle cx="25" cy="18" r="1.2" fill="#F5E0A0"/>
      </svg>
    );
  }

  /* ─────────────────────────────────────────────────────────────
     FLANKING-PEACOCKS — Two peacocks facing each other around a centre
     Used in ClosingSection
     ───────────────────────────────────────────────────────────── */
  if (variant === 'flanking-peacocks') {
    return null;
  }

  /* ─────────────────────────────────────────────────────────────
     FULL-PEACOCK — Standing profile with spread tail fan
     ───────────────────────────────────────────────────────────── */
  if (variant === 'full-peacock') {
    return (
      <svg viewBox="0 0 160 220" fill="none" xmlns="http://www.w3.org/2000/svg"
        className={`${sizeClasses[size]} ${className}`} aria-hidden="true">
        {/* Tail Fan */}
        {[
          [-60,-20],[-44,-36],[-26,-46],[-8,-50],[8,-50],
          [26,-46],[44,-36],[60,-20],
        ].map(([dx,dy],i) => {
          const x = 80+dx, y = 150+dy;
          return (
            <g key={i}>
              <path d={`M80 150 Q${80+dx*0.45} ${150+dy*0.4} ${x} ${y}`}
                stroke="#C6A66B" strokeWidth="1.2" strokeLinecap="round"/>
              <g transform={`rotate(${-30+i*10} ${x} ${y})`}>
                <ellipse cx={x} cy={y} rx="8" ry="12" fill="#6B21A8" stroke="#C6A66B" strokeWidth="0.8"/>
                <ellipse cx={x} cy={y+2} rx="4.5" ry="7" fill="#315A78"/>
                <ellipse cx={x} cy={y+1} rx="2.2" ry="3.5" fill="#3B0764"/>
                <circle cx={x} cy={y} r="2.5" fill="#DFC48E"/>
                <circle cx={x} cy={y} r="1" fill="#F5E0A0"/>
              </g>
            </g>
          );
        })}
        {/* Neck */}
        <path d="M72 148 C70 140 68 128 70 118 C72 110 76 106 80 104 C84 106 88 110 90 118 C92 128 90 140 88 148 Z"
          fill="#6B21A8" stroke="#C6A66B" strokeWidth="1.2"/>
        {/* Body */}
        <ellipse cx="80" cy="162" rx="18" ry="22" fill="#32114E" stroke="#C6A66B" strokeWidth="1.2"/>
        {/* Wing highlights */}
        <path d="M64 155 C60 162 62 172 68 178 C70 170 68 162 64 155 Z" fill="#6B21A8" fillOpacity="0.5"/>
        <path d="M96 155 C100 162 98 172 92 178 C90 170 92 162 96 155 Z" fill="#6B21A8" fillOpacity="0.5"/>
        {/* Head */}
        <circle cx="80" cy="100" r="12" fill="#6B21A8" stroke="#C6A66B" strokeWidth="1.2"/>
        {/* Crest */}
        {[-10,-4,0,4,10].map((dx,i) => (
          <g key={i}>
            <line x1={80+dx*0.5} y1="89" x2={80+dx} y2={75-Math.abs(dx)*0.8}
              stroke="#C6A66B" strokeWidth="0.8" strokeLinecap="round"/>
            <circle cx={80+dx} cy={75-Math.abs(dx)*0.8} r="1.8" fill="#C6A66B"/>
          </g>
        ))}
        {/* Eye */}
        <circle cx="85" cy="98" r="3" fill="#F3E4C8"/>
        <circle cx="86" cy="98" r="1.5" fill="#32114E"/>
        <circle cx="86.5" cy="97.5" r="0.5" fill="white"/>
        {/* Beak */}
        <path d="M91 101 L98 104 L91 106 Z" fill="#C6A66B"/>
        {/* Legs */}
        <line x1="74" y1="183" x2="72" y2="210" stroke="#C6A66B" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="86" y1="183" x2="88" y2="210" stroke="#C6A66B" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M72 210 L66 214 M72 210 L72 215 M72 210 L78 213" stroke="#C6A66B" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M88 210 L94 214 M88 210 L88 215 M88 210 L82 213" stroke="#C6A66B" strokeWidth="1.2" strokeLinecap="round"/>
        <ellipse cx="80" cy="216" rx="20" ry="3" fill="#32114E" fillOpacity="0.15"/>
      </svg>
    );
  }

  /* ─────────────────────────────────────────────────────────────
     FEATHER-FAN — Wide radiating fan, for section backgrounds
     ───────────────────────────────────────────────────────────── */
  if (variant === 'feather-fan') {
    return (
      <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-auto ${className}`} aria-hidden="true">
        {[
          {dx:-180,dy:-30,rot:-50},{dx:-140,dy:-80,rot:-38},
          {dx:-90,dy:-120,rot:-25},{dx:-40,dy:-145,rot:-12},
          {dx:0,dy:-155,rot:0},
          {dx:40,dy:-145,rot:12},{dx:90,dy:-120,rot:25},
          {dx:140,dy:-80,rot:38},{dx:180,dy:-30,rot:50},
        ].map(({dx,dy,rot},i) => {
          const x = 200+dx, y = 195+dy;
          return (
            <g key={i}>
              <path d={`M200 195 Q${200+dx*0.45} ${195+dy*0.4} ${x} ${y}`}
                stroke="#C6A66B" strokeWidth="1.3" strokeLinecap="round"/>
              <g transform={`rotate(${rot} ${x} ${y})`}>
                <ellipse cx={x} cy={y} rx="14" ry="18" fill="#6B21A8" stroke="#C6A66B" strokeWidth="1.2"/>
                <ellipse cx={x} cy={y+2} rx="8" ry="10" fill="#315A78"/>
                <ellipse cx={x} cy={y+1} rx="4" ry="6" fill="#3B0764"/>
                <circle cx={x} cy={y} r="3.5" fill="#DFC48E"/>
                <circle cx={x} cy={y} r="1.4" fill="#F5E0A0"/>
              </g>
            </g>
          );
        })}
        <path d="M188 196 C192 190 208 190 212 196 L210 200 L190 200 Z" fill="#C6A66B" fillOpacity="0.6"/>
        <circle cx="200" cy="197" r="4" fill="#C6A66B"/>
        <circle cx="200" cy="197" r="2" fill="#DFC48E"/>
      </svg>
    );
  }

  // Default fallback
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"
      className={`${sizeClasses[size]} ${className}`} aria-hidden="true">
      <path d="M20 3 C12 12 10 24 20 37 C30 24 28 12 20 3 Z" fill="#6B21A8" stroke="#C6A66B" strokeWidth="0.75"/>
      <ellipse cx="20" cy="16" rx="4" ry="6" fill="#315A78" stroke="#C6A66B" strokeWidth="0.5"/>
      <circle cx="20" cy="16" r="1.5" fill="#C6A66B"/>
    </svg>
  );
}

export default PeacockMotif;
