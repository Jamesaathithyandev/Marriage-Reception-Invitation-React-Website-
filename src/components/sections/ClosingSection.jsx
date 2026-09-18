import React from 'react';
import { LotusMotif } from '../decorative/LotusMotif';

/**
 * ClosingSection — Grand Final Emotional Curtain Call
 *
 * Features a lavishly detailed palace arch filled with:
 * - Dense botanical foliage & flowering vines along the arch frame
 * - Rich peacock feather fans at the base
 * - Full lotus garden at ground level
 * - Completed architectural pillars with ornate capitals
 * - Multi-layered background atmosphere
 */
export function ClosingSection() {
  return (
    <section
      id="closing"
      className="relative w-full py-20 sm:py-28 px-4 sm:px-6 md:px-8 bg-ivory paper-grain overflow-hidden text-center"
      aria-label="Closing Message"
    >
      {/* ── Rich Multi-layer Atmosphere ─────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Central warm gold halo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[650px] bg-gradient-to-b from-gold-champagne/22 via-ivory/0 to-lotus-blush/12 rounded-full blur-3xl" />
        {/* Corner emerald washes */}
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-deep/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-deep/8 rounded-full blur-3xl" />
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-peacock-teal/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-peacock-teal/5 rounded-full blur-3xl" />
        {/* Jali watermark */}
        <div className="absolute inset-0 jali-watermark opacity-[0.20]" />
        {/* Subtle radial vignette from centre */}
        <div className="absolute inset-0 bg-radial-gold" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">

        {/* ── GRAND PALACE ARCH — fully filled, lush ─── */}
        <div className="w-full max-w-xl mx-auto mb-2 sm:mb-4">
          <svg viewBox="0 0 480 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" aria-hidden="true">

            {/* ═══ BACKGROUND: warm gradient sky behind arch ═══ */}
            <defs>
              <radialGradient id="archSky" cx="50%" cy="55%" r="55%">
                <stop offset="0%" stopColor="#F5E8CB" stopOpacity="0.4"/>
                <stop offset="100%" stopColor="#F7F1E3" stopOpacity="0"/>
              </radialGradient>
              <radialGradient id="goldGlow" cx="50%" cy="40%" r="45%">
                <stop offset="0%" stopColor="#C6A66B" stopOpacity="0.12"/>
                <stop offset="100%" stopColor="#C6A66B" stopOpacity="0"/>
              </radialGradient>
            </defs>
            <ellipse cx="240" cy="180" rx="200" ry="160" fill="url(#archSky)"/>
            <ellipse cx="240" cy="140" rx="150" ry="120" fill="url(#goldGlow)"/>

            {/* ═══ LUSH FOLIAGE — LEFT SIDE ═══ */}
            {/* Main left branch trunk */}
            <path d="M30 310 C45 270 52 230 55 185 C62 195 65 215 58 240 C68 228 72 208 68 185 C78 198 80 220 74 248 C84 232 88 210 82 185 C95 200 96 225 88 255"
              stroke="#32114E" strokeWidth="2" fill="none" opacity="0.7"/>
            {/* Secondary left branches */}
            <path d="M55 185 C44 172 40 158 46 148 C48 158 52 170 55 185 Z" fill="#32114E" fillOpacity="0.55" stroke="#32114E" strokeWidth="0.8"/>
            <path d="M68 185 C55 165 54 148 62 138 C62 152 65 168 68 185 Z" fill="#32114E" fillOpacity="0.5"/>
            <path d="M82 185 C68 162 67 142 78 130 C77 148 80 166 82 185 Z" fill="#32114E" fillOpacity="0.5"/>
            {/* Left palm/foliage leaves */}
            {[
              [55,185, -18,-8], [68,185,-20,-10], [82,185,-22,-12],
              [58,240,-16,-6], [74,248,-14,-5], [88,255,-12,-4],
            ].map(([x,y,dx,dy],i) => (
              <ellipse key={i} cx={x+dx} cy={y+dy} rx="14" ry="6"
                transform={`rotate(${-35+i*8} ${x+dx} ${y+dy})`}
                fill="#32114E" fillOpacity="0.38" stroke="#32114E" strokeWidth="0.5"/>
            ))}
            {/* Left decorative hanging flowers (lotus buds) */}
            {[[52,155],[66,138],[80,128]].map(([cx,cy],i) => (
              <g key={`lbud-${i}`}>
                <path d={`M${cx} ${cy+12} C${cx-6} ${cy+7} ${cx-4} ${cy} ${cx} ${cy-6} C${cx+4} ${cy} ${cx+6} ${cy+7} ${cx} ${cy+12} Z`}
                  fill="#D99A9D" fillOpacity="0.85" stroke="#C6A66B" strokeWidth="0.8"/>
                <path d={`M${cx} ${cy+12} C${cx-11} ${cy+8} ${cx-8} ${cy} ${cx-3} ${cy-3} C${cx-3} ${cy+4} ${cx-1} ${cy+9} ${cx} ${cy+12} Z`}
                  fill="#DCA8AB" fillOpacity="0.7"/>
                <path d={`M${cx} ${cy+12} C${cx+11} ${cy+8} ${cx+8} ${cy} ${cx+3} ${cy-3} C${cx+3} ${cy+4} ${cx+1} ${cy+9} ${cx} ${cy+12} Z`}
                  fill="#DCA8AB" fillOpacity="0.7"/>
                <circle cx={cx} cy={cy-6} r="2" fill="#C6A66B"/>
                <line x1={cx} y1={cy+12} x2={cx} y2={cy+18} stroke="#32114E" strokeWidth="1"/>
              </g>
            ))}

            {/* ═══ LUSH FOLIAGE — RIGHT SIDE (mirrored) ═══ */}
            <path d="M450 310 C435 270 428 230 425 185 C418 195 415 215 422 240 C412 228 408 208 412 185 C402 198 400 220 406 248 C396 232 392 210 398 185 C385 200 384 225 392 255"
              stroke="#32114E" strokeWidth="2" fill="none" opacity="0.7"/>
            <path d="M425 185 C436 172 440 158 434 148 C432 158 428 170 425 185 Z" fill="#32114E" fillOpacity="0.55" stroke="#32114E" strokeWidth="0.8"/>
            <path d="M412 185 C425 165 426 148 418 138 C418 152 415 168 412 185 Z" fill="#32114E" fillOpacity="0.5"/>
            <path d="M398 185 C412 162 413 142 402 130 C403 148 400 166 398 185 Z" fill="#32114E" fillOpacity="0.5"/>
            {[
              [425,185,18,-8],[412,185,20,-10],[398,185,22,-12],
              [422,240,16,-6],[406,248,14,-5],[392,255,12,-4],
            ].map(([x,y,dx,dy],i) => (
              <ellipse key={i} cx={x+dx} cy={y+dy} rx="14" ry="6"
                transform={`rotate(${35-i*8} ${x+dx} ${y+dy})`}
                fill="#32114E" fillOpacity="0.38" stroke="#32114E" strokeWidth="0.5"/>
            ))}
            {[[428,155],[414,138],[400,128]].map(([cx,cy],i) => (
              <g key={`rbud-${i}`}>
                <path d={`M${cx} ${cy+12} C${cx-6} ${cy+7} ${cx-4} ${cy} ${cx} ${cy-6} C${cx+4} ${cy} ${cx+6} ${cy+7} ${cx} ${cy+12} Z`}
                  fill="#D99A9D" fillOpacity="0.85" stroke="#C6A66B" strokeWidth="0.8"/>
                <path d={`M${cx} ${cy+12} C${cx-11} ${cy+8} ${cx-8} ${cy} ${cx-3} ${cy-3} C${cx-3} ${cy+4} ${cx-1} ${cy+9} ${cx} ${cy+12} Z`}
                  fill="#DCA8AB" fillOpacity="0.7"/>
                <path d={`M${cx} ${cy+12} C${cx+11} ${cy+8} ${cx+8} ${cy} ${cx+3} ${cy-3} C${cx+3} ${cy+4} ${cx+1} ${cy+9} ${cx} ${cy+12} Z`}
                  fill="#DCA8AB" fillOpacity="0.7"/>
                <circle cx={cx} cy={cy-6} r="2" fill="#C6A66B"/>
                <line x1={cx} y1={cy+12} x2={cx} y2={cy+18} stroke="#32114E" strokeWidth="1"/>
              </g>
            ))}

            {/* ═══ ORNATE PILLARS ═══ */}
            {/* Left pillar shaft */}
            <rect x="72" y="185" width="22" height="125" rx="2" fill="#C6A66B" fillOpacity="0.10" stroke="#C6A66B" strokeWidth="1" strokeOpacity="0.65"/>
            <rect x="75" y="188" width="16" height="119" rx="1" fill="none" stroke="#C6A66B" strokeWidth="0.4" strokeOpacity="0.35"/>
            {/* Left pillar capital */}
            <rect x="66" y="178" width="34" height="10" rx="2" fill="#C6A66B" fillOpacity="0.4" stroke="#C6A66B" strokeWidth="0.8"/>
            <rect x="70" y="173" width="26" height="7" rx="1" fill="#C6A66B" fillOpacity="0.25"/>
            {/* Left pillar base */}
            <rect x="66" y="308" width="34" height="10" rx="2" fill="#C6A66B" fillOpacity="0.4" stroke="#C6A66B" strokeWidth="0.8"/>
            <rect x="62" y="315" width="42" height="5" rx="1" fill="#C6A66B" fillOpacity="0.25"/>
            {/* Pillar fluting details */}
            {[79,83,87].map(x => (
              <line key={x} x1={x} y1="190" x2={x} y2="308" stroke="#C6A66B" strokeWidth="0.4" strokeOpacity="0.3"/>
            ))}

            {/* Right pillar shaft */}
            <rect x="386" y="185" width="22" height="125" rx="2" fill="#C6A66B" fillOpacity="0.10" stroke="#C6A66B" strokeWidth="1" strokeOpacity="0.65"/>
            <rect x="389" y="188" width="16" height="119" rx="1" fill="none" stroke="#C6A66B" strokeWidth="0.4" strokeOpacity="0.35"/>
            <rect x="380" y="178" width="34" height="10" rx="2" fill="#C6A66B" fillOpacity="0.4" stroke="#C6A66B" strokeWidth="0.8"/>
            <rect x="384" y="173" width="26" height="7" rx="1" fill="#C6A66B" fillOpacity="0.25"/>
            <rect x="380" y="308" width="34" height="10" rx="2" fill="#C6A66B" fillOpacity="0.4" stroke="#C6A66B" strokeWidth="0.8"/>
            <rect x="376" y="315" width="42" height="5" rx="1" fill="#C6A66B" fillOpacity="0.25"/>
            {[393,397,401].map(x => (
              <line key={x} x1={x} y1="190" x2={x} y2="308" stroke="#C6A66B" strokeWidth="0.4" strokeOpacity="0.3"/>
            ))}

            {/* ═══ GRAND PALACE ARCH — triple-line, ornate ═══ */}
            {/* Outermost arch */}
            <path d="M78 310 C78 200 118 165 160 130 C188 107 214 90 240 76 C266 90 292 107 320 130 C362 165 402 200 402 310"
              stroke="#C6A66B" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
            {/* Second inner arch */}
            <path d="M92 310 C92 208 128 175 168 142 C194 121 216 106 240 92 C264 106 286 121 312 142 C352 175 388 208 388 310"
              stroke="#C6A66B" strokeWidth="1.2" strokeDasharray="5 3" fill="none" opacity="0.7"/>
            {/* Third innermost hairline */}
            <path d="M106 310 C106 218 138 186 176 156 C200 136 218 122 240 110 C262 122 280 136 304 156 C342 186 374 218 374 310"
              stroke="#C6A66B" strokeWidth="0.6" fill="none" opacity="0.4"/>

            {/* Arch bead accents */}
            {[[160,130],[320,130],[128,175],[352,175],[95,228],[385,228],[92,270],[388,270]].map(([cx,cy],i) => (
              <circle key={i} cx={cx} cy={cy} r="3" fill="#C6A66B" stroke="#9E7E45" strokeWidth="0.6"/>
            ))}

            {/* ═══ KEYSTONE APEX — detailed sunburst ═══ */}
            <circle cx="240" cy="76" r="12" fill="#C6A66B" fillOpacity="0.18" stroke="#C6A66B" strokeWidth="1"/>
            <circle cx="240" cy="76" r="8" fill="#C6A66B" fillOpacity="0.3" stroke="#C6A66B" strokeWidth="1.2"/>
            <circle cx="240" cy="76" r="4.5" fill="#DFC48E" stroke="#C6A66B" strokeWidth="1"/>
            <circle cx="240" cy="76" r="2" fill="#C6A66B"/>
            {/* Radiating spokes from keystone */}
            {Array.from({length:12},(_,i) => {
              const a = (i*30) * Math.PI/180;
              return <line key={i} x1="240" y1="76"
                x2={240+Math.sin(a)*18} y2={76-Math.cos(a)*18}
                stroke="#C6A66B" strokeWidth="0.6" strokeOpacity="0.45"/>;
            })}

            {/* ═══ ARCH SPANDREL FOLIAGE (fills the side spaces) ═══ */}
            {/* Left spandrel dense foliage */}
            <g opacity="0.55">
              <path d="M90 280 C112 260 132 248 148 252 C132 258 112 268 90 280 Z" fill="#32114E"/>
              <path d="M90 262 C108 240 128 228 145 232 C128 240 110 254 90 262 Z" fill="#32114E" fillOpacity="0.7"/>
              <path d="M92 245 C110 222 128 210 145 214 C128 224 112 238 92 245 Z" fill="#32114E" fillOpacity="0.5"/>
              <path d="M98 228 C115 205 132 194 148 198 C132 210 116 224 98 228 Z" fill="#32114E" fillOpacity="0.4"/>
            </g>
            {/* Right spandrel */}
            <g opacity="0.55">
              <path d="M390 280 C368 260 348 248 332 252 C348 258 368 268 390 280 Z" fill="#32114E"/>
              <path d="M390 262 C372 240 352 228 335 232 C352 240 370 254 390 262 Z" fill="#32114E" fillOpacity="0.7"/>
              <path d="M388 245 C370 222 352 210 335 214 C352 224 368 238 388 245 Z" fill="#32114E" fillOpacity="0.5"/>
              <path d="M382 228 C365 205 348 194 332 198 C348 210 364 224 382 228 Z" fill="#32114E" fillOpacity="0.4"/>
            </g>

            {/* ═══ PEACOCK FEATHER FANS inside arch ═══ */}
            {/* Left peacock fan */}
            <g opacity="0.35">
              {[
                {x:110,y:260,rot:-50},{x:95,y:230,rot:-38},{x:88,y:200,rot:-25}
              ].map(({x,y,rot},i) => (
                <g key={i} transform={`rotate(${rot} ${x} ${y})`}>
                  <line x1="110" y1="295" x2={x} y2={y} stroke="#C6A66B" strokeWidth="0.8"/>
                  <ellipse cx={x} cy={y} rx="10" ry="16" fill="#6B21A8" fillOpacity="0.7"/>
                  <ellipse cx={x} cy={y+2} rx="6" ry="10" fill="#315A78"/>
                  <circle cx={x} cy={y} r="3" fill="#DFC48E"/>
                  <circle cx={x} cy={y} r="1.2" fill="#32114E"/>
                </g>
              ))}
            </g>
            {/* Right peacock fan */}
            <g opacity="0.35">
              {[
                {x:370,y:260,rot:50},{x:385,y:230,rot:38},{x:392,y:200,rot:25}
              ].map(({x,y,rot},i) => (
                <g key={i} transform={`rotate(${rot} ${x} ${y})`}>
                  <line x1="370" y1="295" x2={x} y2={y} stroke="#C6A66B" strokeWidth="0.8"/>
                  <ellipse cx={x} cy={y} rx="10" ry="16" fill="#6B21A8" fillOpacity="0.7"/>
                  <ellipse cx={x} cy={y+2} rx="6" ry="10" fill="#315A78"/>
                  <circle cx={x} cy={y} r="3" fill="#DFC48E"/>
                  <circle cx={x} cy={y} r="1.2" fill="#32114E"/>
                </g>
              ))}
            </g>

            {/* ═══ LUSH LOTUS GARDEN — BASE ═══ */}
            {/* Ground base line */}
            <line x1="50" y1="315" x2="430" y2="315" stroke="#C6A66B" strokeWidth="0.8" strokeOpacity="0.5"/>

            {/* Full lotus blooms at ground — 5 flowers */}
            {[110, 168, 240, 312, 370].map(x => (
              <g key={x} opacity="0.85">
                {/* Stem */}
                <line x1={x} y1="315" x2={x} y2="295" stroke="#32114E" strokeWidth="1.5"/>
                {/* Outer petals */}
                <path d={`M${x} 295 C${x-9} 288 ${x-8} 278 ${x-3} 272 C${x-4} 280 ${x-2} 289 ${x} 295 Z`} fill="#C8898D" stroke="#A0666A" strokeWidth="0.9" fillOpacity="0.9"/>
                <path d={`M${x} 295 C${x+9} 288 ${x+8} 278 ${x+3} 272 C${x+4} 280 ${x+2} 289 ${x} 295 Z`} fill="#C8898D" stroke="#A0666A" strokeWidth="0.9" fillOpacity="0.9"/>
                <path d={`M${x} 295 C${x-14} 290 ${x-12} 279 ${x-5} 273 C${x-6} 281 ${x-4} 290 ${x} 295 Z`} fill="#DCA8AB" fillOpacity="0.8"/>
                <path d={`M${x} 295 C${x+14} 290 ${x+12} 279 ${x+5} 273 C${x+6} 281 ${x+4} 290 ${x} 295 Z`} fill="#DCA8AB" fillOpacity="0.8"/>
                {/* Centre petal */}
                <path d={`M${x} 268 C${x-3} 277 ${x-2} 287 ${x} 295 C${x+2} 287 ${x+3} 277 ${x} 268 Z`} fill="#DFC48E" stroke="#C6A66B" strokeWidth="1"/>
                {/* Stamen */}
                <circle cx={x} cy={286} r="2.5" fill="#C6A66B" fillOpacity="0.7"/>
                <circle cx={x} cy={268} r="2" fill="#C6A66B"/>
                {/* Base leaf pair */}
                <path d={`M${x} 310 C${x-8} 305 ${x-12} 295 ${x-6} 290 C${x-6} 298 ${x-3} 306 ${x} 310 Z`} fill="#32114E" fillOpacity="0.5"/>
                <path d={`M${x} 310 C${x+8} 305 ${x+12} 295 ${x+6} 290 C${x+6} 298 ${x+3} 306 ${x} 310 Z`} fill="#32114E" fillOpacity="0.5"/>
              </g>
            ))}

            {/* Ground bead chain */}
            {Array.from({length:20},(_,i) => 60+i*19).map(x => (
              <circle key={x} cx={x} cy="317" r={x===60+9*19?3.2:1.6} fill="#C6A66B"
                fillOpacity={x===60+9*19?1:0.45}/>
            ))}

            {/* ═══ ARCH HANGING ORNAMENTS — gold drops ═══ */}
            {[[160,130],[240,76],[320,130]].map(([cx,cy],i) => (
              <g key={i}>
                <line x1={cx} y1={cy+8} x2={cx} y2={cy+22} stroke="#C6A66B" strokeWidth="0.8" strokeOpacity="0.7"/>
                <circle cx={cx} cy={cy+24} r="3" fill="#C6A66B" stroke="#9E7E45" strokeWidth="0.6"/>
                <circle cx={cx} cy={cy+24} r="1.4" fill="#F5E0A0"/>
              </g>
            ))}
          </svg>
        </div>

        {/* ── CLOSING MESSAGE ─────────────────────────────────── */}
        <div className="space-y-5 sm:space-y-7 max-w-xl">

          {/* Emotional tagline — bolder weight */}
          <p className="font-script text-2xl sm:text-3xl md:text-4xl text-palace-green leading-relaxed font-medium drop-shadow-sm" style={{fontWeight: 600}}>
            "Your presence and blessings would mean the world to us."
          </p>

          {/* Gold ornamental divider with rich lotus */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1px] flex-1 max-w-[5rem] bg-gradient-to-r from-transparent to-gold" />
            <LotusMotif variant="crest" size="md" className="opacity-95 w-14 h-14 sm:w-16 sm:h-16" />
            <div className="h-[1px] flex-1 max-w-[5rem] bg-gradient-to-l from-transparent to-gold" />
          </div>

          {/* Couple Names — bold, visible */}
          <div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-wide text-gold-foil drop-shadow-md leading-none">
              Vinay &amp; Kishma
            </h2>
            <p className="font-caps text-sm sm:text-base tracking-monumental text-gold-deep uppercase mt-4 font-bold">
              Sunday, 25th October 2026
            </p>
          </div>

          {/* Love sign-off — stronger weight */}
          <div className="pt-1">
            <p className="font-serif italic text-base sm:text-lg text-palace-green/85 leading-relaxed font-medium">
              "With immense love, joy, and gratitude —"
            </p>
            <p className="font-serif font-bold text-lg sm:text-2xl text-palace-green mt-2">
              The Sahani &amp; Xavier Families
            </p>
          </div>

          {/* Bottom full-bloom lotus centrepiece */}
          <div className="flex justify-center gap-4 sm:gap-6 items-end pt-2">
            {/* Left emerald leaf */}
            <svg viewBox="0 0 30 48" fill="none" className="w-6 h-10 sm:w-8 sm:h-12 opacity-65">
              <path d="M15 46 C15 46 2 34 4 16 C8 22 11 32 15 46 Z" fill="#32114E" stroke="#32114E" strokeWidth="0.5"/>
              <path d="M15 46 C15 46 0 26 5 8 C9 16 12 30 15 46 Z" fill="#32114E" fillOpacity="0.55"/>
              <path d="M15 46 C8 36 6 20 10 6" stroke="#C6A66B" strokeWidth="0.7" strokeLinecap="round"/>
            </svg>
            <LotusMotif variant="bloom" size="lg" className="opacity-95 w-28 h-28 sm:w-36 sm:h-36" />
            {/* Right emerald leaf */}
            <svg viewBox="0 0 30 48" fill="none" className="w-6 h-10 sm:w-8 sm:h-12 opacity-65 -scale-x-100">
              <path d="M15 46 C15 46 2 34 4 16 C8 22 11 32 15 46 Z" fill="#32114E" stroke="#32114E" strokeWidth="0.5"/>
              <path d="M15 46 C15 46 0 26 5 8 C9 16 12 30 15 46 Z" fill="#32114E" fillOpacity="0.55"/>
              <path d="M15 46 C8 36 6 20 10 6" stroke="#C6A66B" strokeWidth="0.7" strokeLinecap="round"/>
            </svg>
          </div>


          {/* Sacred sign-off */}
          <p className="font-serif text-sm sm:text-base tracking-royal text-gold font-semibold">
            ॥ शुभ विवाह ॥
          </p>

        </div>
      </div>
    </section>
  );
}

export default ClosingSection;
