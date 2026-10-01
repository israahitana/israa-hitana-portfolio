import React from 'react';
import { BrainCircuit, Cpu, Layers, Layout, Terminal, Database, Code2 } from 'lucide-react';

export const ProjectMockup = ({ type = 'web', imageUrl, title }) => {
  if (imageUrl) {
    return (
      <div className="relative w-full h-52 sm:h-60 overflow-hidden bg-taupe-100">
        <img
          src={imageUrl}
          alt={title || 'Aperçu du projet'}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/40 via-transparent to-transparent opacity-60"></div>
      </div>
    );
  }

  // Visual Mockups vectoriels stylisés intégrés
  return (
    <div className="relative w-full h-52 sm:h-60 overflow-hidden bg-gradient-to-br from-taupe-100 via-mocha-100/50 to-cream-200 border-b border-taupe-200/70 p-4 flex flex-col justify-between group-hover:bg-gradient-to-br group-hover:from-taupe-200/70 group-hover:to-mocha-200/50 transition-colors duration-500">
      {/* Top browser/window bar */}
      <div className="flex items-center justify-between pb-3 border-b border-taupe-300/40">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-mocha-400/60"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-taupe-400/60"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-taupe-300/60"></span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-cream-50/70 border border-taupe-200/60 text-[10px] font-mono text-charcoal-500">
          <Code2 className="w-3 h-3 text-mocha-600" />
          <span>architecture.io</span>
        </div>
      </div>

      {/* Center abstract schematic based on type */}
      <div className="relative my-auto flex items-center justify-center py-2">
        {type === 'ai' && (
          <div className="relative flex flex-col items-center justify-center">
            {/* Neural network nodes visualization */}
            <div className="flex items-center gap-6 sm:gap-8">
              <div className="flex flex-col gap-2">
                <span className="w-3.5 h-3.5 rounded-full bg-mocha-500 ring-4 ring-mocha-200/70 animate-pulse"></span>
                <span className="w-3.5 h-3.5 rounded-full bg-taupe-500 ring-2 ring-taupe-200"></span>
                <span className="w-3.5 h-3.5 rounded-full bg-mocha-600 ring-2 ring-mocha-200"></span>
              </div>
              <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-cream-50/90 shadow-soft border border-mocha-200/80">
                <BrainCircuit className="w-8 h-8 text-mocha-700" />
                <span className="mt-1 text-[10px] font-mono font-semibold text-charcoal-700">ML_MODEL</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="w-3.5 h-3.5 rounded-full bg-mocha-700 ring-2 ring-mocha-200"></span>
                <span className="w-3.5 h-3.5 rounded-full bg-emerald-600 ring-4 ring-emerald-200/70 animate-pulse"></span>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-2 text-[11px] font-mono text-mocha-800 bg-mocha-100/80 px-2.5 py-0.5 rounded-full">
              <span>accuracy: 94.8%</span>
              <span className="text-mocha-400">•</span>
              <span>loss: 0.042</span>
            </div>
          </div>
        )}

        {type === 'web' && (
          <div className="w-full max-w-[260px] bg-cream-50/90 rounded-lg shadow-soft border border-taupe-200/90 p-2.5 space-y-2">
            <div className="flex items-center justify-between pb-1.5 border-b border-taupe-100">
              <div className="h-2 w-16 bg-mocha-300 rounded"></div>
              <div className="h-2 w-8 bg-taupe-200 rounded"></div>
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              <div className="h-10 bg-mocha-100/60 rounded border border-mocha-200/50 flex items-center justify-center">
                <Layout className="w-4 h-4 text-mocha-600" />
              </div>
              <div className="h-10 bg-taupe-100/60 rounded border border-taupe-200/50 col-span-2 p-1.5 space-y-1">
                <div className="h-1.5 w-12 bg-charcoal-400/40 rounded"></div>
                <div className="h-1.5 w-full bg-charcoal-200 rounded"></div>
              </div>
            </div>
            <div className="flex justify-between items-center pt-1 text-[9px] font-mono text-charcoal-400">
              <span>Vite + React Core</span>
              <span className="text-emerald-600 font-semibold">Ready</span>
            </div>
          </div>
        )}

        {type === 'software' && (
          <div className="w-full max-w-[270px] bg-cream-50/90 rounded-lg shadow-soft border border-taupe-200/90 p-2.5 space-y-2">
            <div className="flex items-center gap-2 text-[11px] font-mono text-charcoal-700 bg-taupe-100/70 px-2 py-1 rounded">
              <Terminal className="w-3.5 h-3.5 text-mocha-700" />
              <span>Modular Architecture Suite</span>
            </div>
            <div className="flex items-center justify-around py-1">
              <div className="flex flex-col items-center">
                <Database className="w-4 h-4 text-mocha-600 mb-0.5" />
                <span className="text-[9px] font-mono text-charcoal-600">Storage</span>
              </div>
              <div className="text-taupe-400 text-xs">⟷</div>
              <div className="flex flex-col items-center">
                <Layers className="w-4 h-4 text-mocha-700 mb-0.5" />
                <span className="text-[9px] font-mono text-charcoal-600">Services</span>
              </div>
              <div className="text-taupe-400 text-xs">⟷</div>
              <div className="flex flex-col items-center">
                <Cpu className="w-4 h-4 text-mocha-800 mb-0.5" />
                <span className="text-[9px] font-mono text-charcoal-600">Client</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom ambient highlight */}
      <div className="flex items-center justify-between text-[11px] text-charcoal-500 font-medium pt-1">
        <span className="uppercase tracking-wider text-[10px] text-mocha-700 font-semibold font-mono">
          {type === 'ai' ? 'Python / Model Inference' : type === 'web' ? 'Frontend / Interactive UI' : 'Software / System Architecture'}
        </span>
        <span className="text-taupe-400">•</span>
        <span className="text-charcoal-600 text-[10px] font-mono">Production Ready</span>
      </div>
    </div>
  );
};
