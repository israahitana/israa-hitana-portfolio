import React from 'react';

/**
 * Arrière-plan décoratif inspiré du code : symboles, mots-clés, petites lignes de code,
 * points lumineux et connexions fines. Animations CSS uniquement (transform/opacity),
 * placées derrière le contenu, sans interaction. Désactivées avec prefers-reduced-motion
 * (voir index.css).
 */
const tokens = [
  { t: '</>', top: '9%', left: '5%', cls: 'text-2xl', d: 22, delay: 0 },
  { t: '{ }', top: '15%', right: '7%', cls: 'text-3xl', d: 26, delay: 3 },
  { t: 'const', top: '27%', left: '11%', cls: 'text-sm', d: 24, delay: 6 },
  { t: '=>', top: '36%', right: '12%', cls: 'text-2xl', d: 20, delay: 2 },
  { t: '( )', top: '47%', left: '6%', cls: 'text-xl', d: 23, delay: 8 },
  { t: 'function', top: '58%', right: '8%', cls: 'text-sm', d: 28, delay: 4 },
  { t: '</>', top: '68%', left: '9%', cls: 'text-xl', d: 21, delay: 10 },
  { t: '{ }', top: '78%', right: '13%', cls: 'text-2xl', d: 25, delay: 1 },
  { t: '=>', top: '88%', left: '8%', cls: 'text-xl', d: 19, delay: 5 },
  { t: 'const', top: '94%', right: '10%', cls: 'text-xs', d: 27, delay: 7 },
  { t: 'function()', top: '42%', left: '24%', cls: 'text-xs hidden lg:block', d: 26, delay: 9 },
  { t: '( ) => { }', top: '22%', right: '25%', cls: 'text-xs hidden lg:block', d: 24, delay: 11 },
];

const lines = [
  { top: '19%', left: '3%', w: [28, 44, 20], d: 30, delay: 2 },
  { top: '52%', right: '4%', w: [36, 18, 40], d: 34, delay: 6 },
  { top: '73%', left: '4%', w: [22, 38, 26], d: 32, delay: 12 },
  { top: '33%', right: '3%', w: [30, 24], d: 36, delay: 9 },
];

const nodes = [
  { x: 18, y: 14 }, { x: 34, y: 24 }, { x: 52, y: 12 }, { x: 70, y: 28 },
  { x: 86, y: 18 }, { x: 24, y: 52 }, { x: 46, y: 62 }, { x: 66, y: 50 },
  { x: 82, y: 70 }, { x: 30, y: 86 }, { x: 58, y: 90 },
];
const links = [[0, 1], [1, 2], [2, 3], [3, 4], [1, 5], [5, 6], [6, 7], [3, 7], [7, 8], [6, 9], [6, 10]];

export const CodeBackground = () => (
  <div aria-hidden="true" className="code-bg fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none">
    <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] max-w-full bg-taupe-200/20 rounded-full blur-[100px]" />
    <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] max-w-full bg-mocha-200/15 rounded-full blur-[120px]" />

    {/* Connexions fines entre points */}
    <svg className="absolute inset-0 w-full h-full stroke-taupe-400 text-mocha-400" viewBox="0 0 100 100" preserveAspectRatio="none">
      {links.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y}
          strokeWidth="0.15" vectorEffect="non-scaling-stroke" strokeDasharray="2 5"
          className="code-bg-link" style={{ animationDelay: `${i * 1.3}s` }}
        />
      ))}
    </svg>

    {/* Points lumineux */}
    {nodes.map((n, i) => (
      <span
        key={i}
        className="code-bg-dot absolute w-1.5 h-1.5 rounded-full bg-mocha-400"
        style={{ left: `${n.x}%`, top: `${n.y}%`, animationDelay: `${i * 0.9}s`, animationDuration: `${12 + (i % 4) * 2}s` }}
      />
    ))}

    {/* Petites lignes de code */}
    {lines.map((l, i) => (
      <div
        key={i}
        className="code-bg-float absolute hidden sm:flex flex-col gap-1.5"
        style={{ top: l.top, left: l.left, right: l.right, animationDuration: `${l.d}s`, animationDelay: `${l.delay}s` }}
      >
        {l.w.map((w, j) => (
          <span key={j} className="h-[3px] rounded-full bg-taupe-400/60" style={{ width: `${w * 2}px`, marginLeft: j === 1 ? 14 : 0 }} />
        ))}
      </div>
    ))}

    {/* Symboles et mots-clés */}
    {tokens.map((k, i) => (
      <div
        key={i}
        className={`code-bg-float absolute font-mono font-medium tracking-wider text-taupe-600 ${k.cls}`}
        style={{ top: k.top, left: k.left, right: k.right, animationDuration: `${k.d}s`, animationDelay: `${k.delay}s` }}
      >
        {k.t}
      </div>
    ))}
  </div>
);
