import React from 'react';

/**
 * Arrière-plan premium et discret : dégradés en couches, halos flous qui dérivent très lentement,
 * lignes fluides, fine grille de points et quelques détails techniques minuscules.
 * Animations transform/opacity uniquement (GPU), très lentes ; statique avec prefers-reduced-motion.
 */
export const CodeBackground = () => (
  <div aria-hidden="true" className="code-bg fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none">
    {/* Couche 1 : dégradé de base */}
    <div
      className="absolute inset-0"
      style={{
        backgroundImage:
          'linear-gradient(180deg, rgba(245, 241, 233, 0.55) 0%, rgba(250, 248, 245, 0) 45%, rgba(235, 227, 214, 0.45) 100%)',
      }}
    />

    {/* Couche 2 : halos doux en dérive lente */}
    <div className="code-bg-halo code-bg-halo-a absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full bg-taupe-200/45 blur-[110px]" />
    <div className="code-bg-halo code-bg-halo-b absolute top-1/3 -right-40 w-[560px] h-[560px] rounded-full bg-mocha-200/25 blur-[130px]" />
    <div className="code-bg-halo code-bg-halo-c absolute -bottom-40 left-1/4 w-[520px] h-[520px] rounded-full bg-taupe-300/25 blur-[120px]" />

    {/* Couche 3 : grille de points estompée */}
    <div
      className="absolute inset-0 opacity-60"
      style={{
        backgroundImage: 'radial-gradient(rgba(137, 108, 89, 0.15) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        WebkitMaskImage: 'radial-gradient(ellipse at center, transparent 35%, #000 100%)',
        maskImage: 'radial-gradient(ellipse at center, transparent 35%, #000 100%)',
      }}
    />

    {/* Couche 4 : lignes fluides */}
    <svg className="code-bg-waves absolute inset-x-0 top-0 w-full h-full text-taupe-500" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" fill="none">
      <path className="code-bg-wave code-bg-wave-a" d="M-100 220 C 200 120, 420 330, 720 230 S 1220 120, 1560 260" stroke="currentColor" strokeWidth="1" opacity="0.22" />
      <path className="code-bg-wave code-bg-wave-b" d="M-100 560 C 240 470, 460 680, 780 580 S 1240 470, 1560 610" stroke="currentColor" strokeWidth="1" opacity="0.18" />
      <path className="code-bg-wave code-bg-wave-c" d="M-100 800 C 300 720, 540 880, 860 790 S 1260 700, 1560 820" stroke="currentColor" strokeWidth="1" opacity="0.14" />
    </svg>

    {/* Couche 5 : détails techniques minuscules */}
    <span className="code-bg-detail absolute top-[14%] right-[6%] font-mono text-[11px] tracking-widest text-taupe-600 hidden sm:block">{'</>'}</span>
    <span className="code-bg-detail absolute top-[58%] left-[4%] font-mono text-[11px] tracking-widest text-taupe-600 hidden sm:block" style={{ animationDelay: '-9s' }}>{'{ }'}</span>
    <span className="code-bg-detail absolute bottom-[10%] right-[9%] font-mono text-[11px] tracking-widest text-taupe-600 hidden sm:block" style={{ animationDelay: '-18s' }}>{'=>'}</span>
  </div>
);
