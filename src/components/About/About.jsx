import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  MapPin, 
  Calendar, 
  Code, 
  Layers, 
  BrainCircuit, 
  Smartphone, 
  Database, 
  GitBranch, 
  FileText, 
  CheckCircle2, 
  Compass 
} from 'lucide-react';
import { Github, Linkedin } from '../UI/Icons';
import { profileData } from '../../data/profile';
import { SectionHeading } from '../UI/SectionHeading';
import { Button } from '../UI/Button';
import { Badge } from '../UI/Badge';

export const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden bg-cream-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="À propos de moi"
          title="Ingénierie logicielle & Vision multi-domaines"
          subtitle="Au-delà du simple développement web, je conçois des solutions logicielles complètes, pérennes et orientées vers la résolution de défis concrets."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Bio cards & Key Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Main Narrative Card */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 shadow-soft border border-taupe-200">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-mocha-100 text-mocha-800">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal-900">
                    Développeuse logicielle polyvalente
                  </h3>
                  <p className="text-xs font-medium text-mocha-700">
                    Rigueur d'ingénierie, curiosité technique & proactivité
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-charcoal-700 leading-relaxed font-normal">
                {profileData.aboutBio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Action row inside card */}
              <div className="mt-6 pt-6 border-t border-taupe-200/80 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <a
                    href={profileData.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-taupe-100 text-charcoal-800 hover:bg-taupe-200 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={profileData.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-taupe-100 text-charcoal-800 hover:bg-taupe-200 transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>
                </div>

                <Button
                  href={profileData.socialLinks.cvUrl}
                  target="_blank"
                  variant="outline"
                  size="sm"
                  icon={FileText}
                >
                  Télécharger mon CV complet
                </Button>
              </div>
            </div>

            {/* Practical information grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-card rounded-xl p-4 sm:p-5 flex items-start gap-3.5 border border-taupe-200 shadow-xs">
                <div className="p-2 rounded-lg bg-mocha-100 text-mocha-800 mt-0.5">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-charcoal-500 uppercase tracking-wider">Formation</span>
                  <p className="text-sm font-bold text-charcoal-900 mt-0.5">Élève Ingénieur Génie Logiciel</p>
                  <p className="text-xs text-charcoal-600">Dernière année (PFE en vue)</p>
                </div>
              </div>

              <div className="glass-card rounded-xl p-4 sm:p-5 flex items-start gap-3.5 border border-taupe-200 shadow-xs">
                <div className="p-2 rounded-lg bg-mocha-100 text-mocha-800 mt-0.5">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-charcoal-500 uppercase tracking-wider">Disponibilité</span>
                  <p className="text-sm font-bold text-charcoal-900 mt-0.5">Stage PFE 2026</p>
                  <p className="text-xs text-charcoal-600">Février / Mars (4 à 6 mois)</p>
                </div>
              </div>

              <div className="glass-card rounded-xl p-4 sm:p-5 flex items-start gap-3.5 border border-taupe-200 shadow-xs">
                <div className="p-2 rounded-lg bg-mocha-100 text-mocha-800 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-charcoal-500 uppercase tracking-wider">Localisation & Mobilité</span>
                  <p className="text-sm font-bold text-charcoal-900 mt-0.5">Tunisie</p>
                  <p className="text-xs text-charcoal-600">Mobile : France & International</p>
                </div>
              </div>

              <div className="glass-card rounded-xl p-4 sm:p-5 flex items-start gap-3.5 border border-taupe-200 shadow-xs">
                <div className="p-2 rounded-lg bg-mocha-100 text-mocha-800 mt-0.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-charcoal-500 uppercase tracking-wider">Positionnement</span>
                  <p className="text-sm font-bold text-charcoal-900 mt-0.5">Software Developer</p>
                  <p className="text-xs text-charcoal-600">Conception, Web, Mobile, Data & IA</p>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Visual Domain Breakdown Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="bg-gradient-to-br from-charcoal-900 to-mocha-900 text-cream-50 p-6 sm:p-7 rounded-2xl shadow-soft-lg">
              <h3 className="text-lg font-bold tracking-tight text-cream-50">
                Piliers d'intervention logicielle
              </h3>
              <p className="text-xs sm:text-sm text-taupe-200 mt-1">
                Une approche transverse et rigoureuse du cycle de vie des applications :
              </p>

              <div className="mt-5 space-y-3">
                {profileData.domains.map((domain, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-charcoal-800/80 border border-mocha-700/50 hover:border-mocha-500/70 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-mocha-400"></span>
                      <h4 className="text-sm font-bold text-cream-100">{domain.title}</h4>
                    </div>
                    <p className="text-xs text-taupe-300 mt-1 leading-normal pl-4 font-normal">
                      {domain.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Engineering Values Banner */}
            <div className="glass-card rounded-2xl p-5 border border-taupe-200 shadow-xs flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-mocha-800 uppercase tracking-wide">État d'esprit</span>
                <p className="text-sm font-bold text-charcoal-900 mt-0.5">Clean Code, Architecture & Agilité</p>
                <p className="text-xs text-charcoal-600">Orientation solutions concrètes et adaptabilité rapide</p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-mocha-100 flex items-center justify-center text-mocha-700 shrink-0">
                <Code className="w-5 h-5" />
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
