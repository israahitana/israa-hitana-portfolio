import React from 'react';
import { 
  CheckCircle2, 
  Clock, 
  Calendar, 
  Layers, 
  Wrench, 
  ShieldCheck, 
  AlertTriangle, 
  CheckSquare, 
  Sparkles,
  Code2
} from 'lucide-react';

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

  // Visual Mockups vectoriels haute fidélité intégrés
  return (
    <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-gradient-to-br from-cream-100 via-taupe-100/70 to-mocha-100/60 border-b border-taupe-200/80 p-4 flex flex-col justify-between group-hover:from-taupe-100 group-hover:to-cream-200 transition-colors duration-500 select-none">
      
      {/* Top browser/window bar */}
      <div className="flex items-center justify-between pb-2.5 border-b border-taupe-200/70">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-mocha-400/60"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-taupe-400/60"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/60"></span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-cream-50/80 border border-taupe-200/80 text-[10px] font-mono text-charcoal-600">
          <Code2 className="w-3 h-3 text-mocha-600" />
          <span>{type === 'todo' ? 'app.todo.dev' : 'maintenance.sys'}</span>
        </div>
      </div>

      {/* Visual content based on project type */}
      <div className="relative my-auto py-2">
        {type === 'todo' && (
          <div className="w-full max-w-[310px] mx-auto bg-cream-50/95 rounded-xl shadow-soft border border-taupe-200/90 p-3 space-y-2">
            {/* Header / Stats row */}
            <div className="flex items-center justify-between pb-1.5 border-b border-taupe-200/60 text-[10px]">
              <div className="flex items-center gap-1.5 font-bold text-charcoal-800">
                <CheckSquare className="w-3.5 h-3.5 text-mocha-700" />
                <span>Mes Tâches Personnelles</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold text-[9px]">
                84% Réalisées
              </span>
            </div>

            {/* Task Items */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between p-1.5 rounded-lg bg-white border border-taupe-100 shadow-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 rounded bg-emerald-600 flex items-center justify-center text-white">
                    <CheckCircle2 className="w-3 h-3" />
                  </div>
                  <span className="text-[11px] font-medium text-charcoal-700 line-through opacity-70">
                    Conception architecture backend
                  </span>
                </div>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-taupe-100 text-charcoal-600 font-medium">
                  Terminé
                </span>
              </div>

              <div className="flex items-center justify-between p-1.5 rounded-lg bg-white border border-mocha-200 shadow-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 rounded border border-mocha-400 bg-mocha-50"></div>
                  <span className="text-[11px] font-medium text-charcoal-900">
                    Authentification JWT & Vue Calendrier
                  </span>
                </div>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 font-medium">
                  En cours
                </span>
              </div>

              <div className="flex items-center justify-between p-1.5 rounded-lg bg-white border border-taupe-100 opacity-80">
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 rounded border border-taupe-300"></div>
                  <span className="text-[11px] font-medium text-charcoal-600">
                    Tableau de bord de statistiques
                  </span>
                </div>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-mocha-100 text-mocha-800 font-medium">
                  Priorité haute
                </span>
              </div>
            </div>
          </div>
        )}

        {type === 'maintenance' && (
          <div className="w-full max-w-[310px] mx-auto bg-cream-50/95 rounded-xl shadow-soft border border-taupe-200/90 p-3 space-y-2">
            {/* Maintenance header */}
            <div className="flex items-center justify-between pb-1.5 border-b border-taupe-200/60 text-[10px]">
              <div className="flex items-center gap-1.5 font-bold text-charcoal-800">
                <Wrench className="w-3.5 h-3.5 text-mocha-700" />
                <span>Système GMAO & Équipements</span>
              </div>
              <div className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-600" />
                <span className="text-[9px] font-semibold text-charcoal-600">Rôles RBAC</span>
              </div>
            </div>

            {/* Roles pill */}
            <div className="flex items-center gap-1.5 text-[9px] text-charcoal-600 py-0.5">
              <span className="px-1.5 py-0.5 rounded bg-mocha-100 text-mocha-900 font-semibold">Admin</span>
              <span className="text-taupe-400">•</span>
              <span className="px-1.5 py-0.5 rounded bg-taupe-100 text-charcoal-800 font-medium">Responsable</span>
              <span className="text-taupe-400">•</span>
              <span className="px-1.5 py-0.5 rounded bg-taupe-100 text-charcoal-800 font-medium">Technicien</span>
            </div>

            {/* Equipment status card */}
            <div className="grid grid-cols-2 gap-1.5 pt-0.5">
              <div className="p-2 rounded-lg bg-white border border-taupe-200/80 shadow-xs">
                <span className="text-[9px] font-mono text-charcoal-500 block">Équipement #EQ-42</span>
                <span className="text-[10px] font-bold text-charcoal-900">Moteur Industriel A</span>
                <span className="mt-1 inline-flex items-center gap-1 text-[9px] text-emerald-700 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Opérationnel
                </span>
              </div>

              <div className="p-2 rounded-lg bg-white border border-amber-200 shadow-xs">
                <span className="text-[9px] font-mono text-charcoal-500 block">Panne déclarée</span>
                <span className="text-[10px] font-bold text-charcoal-900">Intervention requise</span>
                <span className="mt-1 inline-flex items-center gap-1 text-[9px] text-amber-700 font-medium">
                  <AlertTriangle className="w-2.5 h-2.5" />
                  Pièces en stock : 12
                </span>
              </div>
            </div>
          </div>
        )}

        {type !== 'todo' && type !== 'maintenance' && (
          <div className="w-full max-w-[270px] mx-auto bg-cream-50/90 rounded-lg shadow-soft border border-taupe-200/90 p-2.5 space-y-2">
            <div className="flex items-center gap-2 text-[11px] font-mono text-charcoal-700 bg-taupe-100/70 px-2 py-1 rounded">
              <Layers className="w-3.5 h-3.5 text-mocha-700" />
              <span>Full-Stack Application</span>
            </div>
          </div>
        )}
      </div>

      {/* Bottom ambient highlight */}
      <div className="flex items-center justify-between text-[11px] text-charcoal-500 font-medium pt-1">
        <span className="uppercase tracking-wider text-[10px] text-mocha-700 font-semibold font-mono">
          {type === 'todo' ? 'React • Node.js • Express • MongoDB' : 'GMAO • RBAC • Interventions • Stock'}
        </span>
        <span className="text-taupe-400">•</span>
        <span className="text-charcoal-600 text-[10px] font-mono font-medium">Full-Stack MERN</span>
      </div>
    </div>
  );
};
