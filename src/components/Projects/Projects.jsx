import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Users, FolderGit2, ArrowUpRight } from 'lucide-react';
import { Github } from '../UI/Icons';
import { projectsData } from '../../data/projects';
import { SectionHeading } from '../UI/SectionHeading';
import { ProjectMockup } from '../UI/ProjectMockup';
import { Badge } from '../UI/Badge';

export const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-28 relative overflow-hidden bg-cream-100/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Réalisations & Projets"
          title="Projets concrets & Approche logicielle"
          subtitle="Applications web Full-Stack concrètes et interactives développées avec React, Node.js, Express et MongoDB."
        />

        {/* 2 Projets Clés en grille équilibrée */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col rounded-2xl overflow-hidden glass-card glass-card-hover border border-taupe-200/90 shadow-soft"
            >
              {/* Project Visual / Mockup */}
              <div className="relative">
                <ProjectMockup
                  type={project.visualType || 'web'}
                  imageUrl={project.imageUrl}
                  title={project.name}
                />
                
                {/* Domain Pill on top corner */}
                <div className="absolute top-3 left-3 z-10">
                  <Badge variant="mocha" size="sm">
                    {project.domain}
                  </Badge>
                </div>
              </div>

              {/* Project Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal-900 group-hover:text-mocha-900 transition-colors">
                      {project.name}
                    </h3>
                    {project.subtitle && (
                      <p className="text-xs font-semibold text-mocha-700 mt-0.5">
                        {project.subtitle}
                      </p>
                    )}
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-charcoal-600 leading-relaxed font-normal">
                    {project.shortDescription}
                  </p>

                  {/* Highlight Roles if present */}
                  {project.roles && project.roles.length > 0 && (
                    <div className="mt-4 p-2.5 rounded-xl bg-mocha-50/70 border border-mocha-200/70">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-mocha-900 mb-1">
                        <Users className="w-3.5 h-3.5 text-mocha-700" />
                        <span>Rôles pris en charge :</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.roles.map((role, rIdx) => (
                          <span
                            key={rIdx}
                            className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-white text-charcoal-800 border border-mocha-200 shadow-xs"
                          >
                            {role}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Highlights / Features list */}
                  {project.features && project.features.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-taupe-100 space-y-1.5">
                      <span className="text-[11px] font-semibold text-charcoal-400 uppercase tracking-wider block mb-1">
                        Fonctionnalités clés :
                      </span>
                      {project.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-charcoal-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-mocha-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Technologies Tags */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-taupe-100 text-charcoal-700 border border-taupe-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action Links: GitHub */}
                <div className="mt-6 pt-4 border-t border-taupe-200/80 flex items-center justify-between gap-3">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-charcoal-900 bg-cream-100 hover:bg-mocha-700 hover:text-cream-50 px-3.5 py-2 rounded-xl transition-all duration-200 border border-taupe-300/80 shadow-xs"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code GitHub</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </a>
                  ) : (
                    <span className="text-xs text-charcoal-400">Code sur demande</span>
                  )}

                  <span className="text-[11px] font-mono text-mocha-800 bg-mocha-100/70 px-2.5 py-1 rounded-lg">
                    Full-Stack MERN
                  </span>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Section secondaire : D'autres projets en cours d'intégration ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 max-w-2xl mx-auto"
        >
          <div className="glass-card border border-taupe-200/90 shadow-soft rounded-2xl px-8 py-8 flex flex-col items-center text-center gap-4">
            {/* Icône */}
            <div className="w-11 h-11 rounded-xl bg-mocha-100/80 border border-mocha-200/80 flex items-center justify-center shadow-xs">
              <FolderGit2 className="w-5 h-5 text-mocha-700" />
            </div>

            {/* Titre */}
            <h3 className="text-lg sm:text-xl font-bold text-charcoal-900 leading-snug">
              D'autres projets en cours d'intégration
            </h3>

            {/* Description */}
            <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed max-w-lg font-normal">
              De nouveaux travaux en Java&nbsp;/ Spring Boot, C#&nbsp;/ .NET, Android natif et
              Cloud/DevOps viendront enrichir cette section régulièrement. Retrouvez l'ensemble
              de mes dépôts sur mon profil GitHub.
            </p>

            {/* Lien GitHub */}
            <a
              href="https://github.com/israahitana"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-1 text-xs sm:text-sm font-semibold text-charcoal-900 bg-cream-100 hover:bg-mocha-700 hover:text-cream-50 px-5 py-2.5 rounded-xl transition-all duration-200 border border-taupe-300/80 shadow-xs"
            >
              <Github className="w-4 h-4" />
              <span>Consulter mon profil GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
