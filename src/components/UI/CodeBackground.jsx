import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Arrière-plan animé subtil inspiré du développement logiciel.
 * Conserve la teinte crème/taupe/beige, ultra discret, fluide et accessible.
 * Respecte prefers-reduced-motion : désactive toutes les animations si besoin.
 */
export const CodeBackground = () => {
  const prefersReducedMotion = useReducedMotion();

  // Symboles de code et tokens flottants avec positions et vitesses variées
  const floatingTokens = [
    { text: '{ }', top: '8%', left: '6%', size: 'text-2xl sm:text-3xl', duration: 18, delay: 0 },
    { text: '</>', top: '16%', right: '8%', size: 'text-xl sm:text-2xl', duration: 22, delay: 1 },
    { text: 'const dev = true;', top: '28%', left: '12%', size: 'text-xs sm:text-sm font-mono', duration: 25, delay: 2 },
    { text: '( )', top: '38%', right: '14%', size: 'text-lg sm:text-xl', duration: 20, delay: 3 },
    { text: '[ ]', top: '48%', left: '5%', size: 'text-xl sm:text-2xl', duration: 19, delay: 1.5 },
    { text: ';', top: '56%', right: '6%', size: 'text-3xl sm:text-4xl font-mono', duration: 16, delay: 0.5 },
    { text: '<Component />', top: '65%', left: '10%', size: 'text-xs sm:text-sm font-mono', duration: 24, delay: 2.5 },
    { text: 'async () => { }', top: '75%', right: '12%', size: 'text-xs sm:text-sm font-mono', duration: 21, delay: 3.5 },
    { text: '<>', top: '84%', left: '7%', size: 'text-xl sm:text-2xl', duration: 17, delay: 1 },
    { text: 'git commit', top: '92%', right: '15%', size: 'text-xs font-mono', duration: 23, delay: 2 },
    { text: '{ ...props }', top: '42%', left: '22%', size: 'text-xs font-mono hidden lg:block', duration: 26, delay: 4 },
    { text: 'npm run build', top: '22%', right: '24%', size: 'text-xs font-mono hidden lg:block', duration: 24, delay: 3 },
  ];

  // Particules lumineuses discrètes
  const particles = [
    { top: '12%', left: '30%', size: 'w-2 h-2', duration: 14 },
    { top: '24%', right: '35%', size: 'w-1.5 h-1.5', duration: 16 },
    { top: '45%', left: '40%', size: 'w-2 h-2', duration: 18 },
    { top: '62%', right: '28%', size: 'w-2.5 h-2.5', duration: 15 },
    { top: '80%', left: '32%', size: 'w-1.5 h-1.5', duration: 20 },
    { top: '88%', right: '40%', size: 'w-2 h-2', duration: 17 },
  ];

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none"
    >
      {/* Lignes fines et géométries de connexion douces */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.14] stroke-taupe-400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="code-circuit-pattern"
            width="120"
            height="120"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 60 40 M 60 40 L 100 40 M 100 40 L 100 80 M 100 80 L 40 80 M 40 80 L 40 120"
              fill="none"
              strokeWidth="0.8"
              strokeDasharray="3 5"
            />
            <circle cx="60" cy="40" r="2" fill="currentColor" opacity="0.4" />
            <circle cx="100" cy="80" r="2" fill="currentColor" opacity="0.4" />
            <circle cx="40" cy="80" r="2" fill="currentColor" opacity="0.4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#code-circuit-pattern)" />
      </svg>

      {/* Particules flottantes douces — désactivées si prefers-reduced-motion */}
      {!prefersReducedMotion && particles.map((p, idx) => (
        <motion.div
          key={`particle-${idx}`}
          style={{ top: p.top, left: p.left, right: p.right }}
          animate={{
            y: [-12, 12, -12],
            opacity: [0.15, 0.35, 0.15],
            scale: [0.9, 1.2, 0.9],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className={`absolute rounded-full bg-mocha-400 ${p.size} blur-[0.5px]`}
        />
      ))}

      {/* Symboles et snippets de code flottants très discrets — désactivés si prefers-reduced-motion */}
      {!prefersReducedMotion && floatingTokens.map((token, idx) => (
        <motion.div
          key={`token-${idx}`}
          style={{
            top: token.top,
            left: token.left,
            right: token.right,
          }}
          animate={{
            y: [-14, 14, -14],
            x: [-6, 6, -6],
            rotate: [-2, 2, -2],
          }}
          transition={{
            duration: token.duration,
            delay: token.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className={`absolute font-mono font-medium text-taupe-600/20 dark:text-taupe-700/20 select-none tracking-wider ${token.size}`}
        >
          {token.text}
        </motion.div>
      ))}

      {/* Gradations ambiantes chaleureuses pour préserver la douceur du thème crème */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-taupe-200/20 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-mocha-200/15 rounded-full blur-[120px] -z-10" />
    </div>
  );
};
