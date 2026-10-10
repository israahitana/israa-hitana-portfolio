import React from 'react';

/**
 * Arrière-plan statique et discret : dégradés doux crème/taupe et fine grille de points
 * estompée sur les bords. Aucune animation : léger et sans impact sur la lisibilité.
 */
export const CodeBackground = () => (
  <div aria-hidden="true" className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage:
          'radial-gradient(60% 50% at 8% 6%, rgba(220, 202, 190, 0.35), transparent 70%), radial-gradient(55% 45% at 95% 40%, rgba(235, 227, 214, 0.55), transparent 70%), radial-gradient(60% 50% at 20% 100%, rgba(196, 171, 155, 0.22), transparent 70%)',
      }}
    />
    <div
      className="absolute inset-0 opacity-60"
      style={{
        backgroundImage: 'radial-gradient(rgba(137, 108, 89, 0.16) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        WebkitMaskImage: 'radial-gradient(ellipse at center, transparent 35%, #000 100%)',
        maskImage: 'radial-gradient(ellipse at center, transparent 35%, #000 100%)',
      }}
    />
  </div>
);
