import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, CheckCircle2, Sparkles, FolderGit2 } from 'lucide-react';
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
          subtitle="Découvrez une sélection de projets représentatifs de mes compétences : Intelligence Artificielle, traitement de données en Python, et applications web modulaires en React."
        />

        {/* Natural Projects Grid (No artificial filters) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col rounded-2xl overflow-hidden glass-card glass-card-hover border border-taupe-200/90 shadow-soft"
            >
              {/* Project Visual / Image Mockup */}
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
                  <h3 className="text-xl font-bold text-charcoal-900 group-hover:text-mocha-900 transition-colors">
                    {project.name}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-charcoal-600 leading-relaxed font-normal">
                    {project.shortDescription}
                  </p>

                  {/* Highlights / Features list */}
                  {project.features && project.features.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-taupe-100 space-y-1.5">
                      <span className="text-[11px] font-semibold text-charcoal-400 uppercase tracking-wider block mb-1">
                        Points clés de réalisation :
                      </span>
                      {project.features.slice(0, 3).map((feat, fIdx) => (
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

                {/* Footer Action Links: GitHub & Live Demo */}
                <div className="mt-6 pt-4 border-t border-taupe-200/80 flex items-center justify-between gap-3">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-charcoal-800 hover:text-mocha-800 transition-colors py-1 focus:outline-none"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code GitHub</span>
                      <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                    </a>
                  ) : (
                    <span className="text-xs text-charcoal-400">Code sur demande</span>
                  )}

                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-mocha-700 text-cream-50 hover:bg-mocha-800 transition-colors shadow-xs"
                    >
                      <span>Démo Live</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-[11px] font-mono text-mocha-800 bg-mocha-100/70 px-2 py-0.5 rounded">
                      Projet d'ingénierie
                    </span>
                  )}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Scalability Banner: Future Projects */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 p-6 rounded-2xl glass-card border border-dashed border-mocha-300 text-center max-w-2xl mx-auto"
        >
          <div className="w-10 h-10 rounded-full bg-mocha-100 text-mocha-800 flex items-center justify-center mx-auto mb-3">
            <FolderGit2 className="w-5 h-5" />
          </div>
          <h4 className="text-base font-bold text-charcoal-900">
            D'autres projets en cours d'intégration
          </h4>
          <p className="mt-1 text-xs sm:text-sm text-charcoal-600">
            De nouveaux travaux en Java / Spring Boot, C# / .NET, Android natif et Cloud/DevOps viendront enrichir cette section régulièrement. Retrouvez l'ensemble de mes dépôts sur mon profil GitHub.
          </p>
          <div className="mt-4">
            <a
              href="https://github.com/israahitana"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-mocha-800 hover:text-mocha-950 underline underline-offset-4"
            >
              <span>Consulter mon profil GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
