import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowDown, 
  Download, 
  Mail, 
  Sparkles, 
  Layers, 
  BrainCircuit, 
  Terminal, 
  ArrowUpRight 
} from 'lucide-react';
import { Github, Linkedin } from '../UI/Icons';
import { profileData } from '../../data/profile';
import { Button } from '../UI/Button';

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden bg-warm-radial"
    >
      {/* Subtle background ambient mesh elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[350px] bg-gradient-to-r from-taupe-200/40 via-mocha-200/30 to-cream-200/50 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-subtle"></div>
      
      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 subtle-dot-pattern opacity-40 pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Status Badge: Stage PFE */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cream-100/90 border border-mocha-200/80 shadow-xs mb-6 sm:mb-8"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
            </span>
            <span className="text-xs sm:text-sm font-medium text-charcoal-800">
              {profileData.status} • {profileData.location}
            </span>
          </motion.div>

          {/* Main Name & Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-charcoal-950 font-sans leading-[1.1]"
          >
            {profileData.name}
          </motion.h1>

          {/* Subtitle / Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-mocha-800 via-mocha-600 to-taupe-600 bg-clip-text text-transparent"
          >
            {profileData.role}
          </motion.div>

          {/* Core Philosophy & Value Proposition */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-base sm:text-lg md:text-xl text-charcoal-600 max-w-2xl leading-relaxed font-normal"
          >
            {profileData.headline}
          </motion.p>

          {/* Interactive Domain Pill Carousel / Highlights */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-3xl"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-taupe-100/90 text-charcoal-800 border border-taupe-200">
              <Layers className="w-3.5 h-3.5 text-mocha-700" />
              Software Architecture
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-taupe-100/90 text-charcoal-800 border border-taupe-200">
              <Terminal className="w-3.5 h-3.5 text-mocha-700" />
              Web & Backend Systems
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-taupe-100/90 text-charcoal-800 border border-taupe-200">
              <BrainCircuit className="w-3.5 h-3.5 text-mocha-700" />
              Data & Machine Learning
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-taupe-100/90 text-charcoal-800 border border-taupe-200">
              <Sparkles className="w-3.5 h-3.5 text-mocha-700" />
              Mobile & Cloud Ready
            </span>
          </motion.div>

          {/* Primary Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            <Button
              href="#projects"
              size="lg"
              variant="primary"
              icon={ArrowDown}
              iconPosition="right"
            >
              Découvrir mes projets
            </Button>

            <Button
              href={profileData.socialLinks.cvUrl}
              target="_blank"
              size="lg"
              variant="secondary"
              icon={Download}
              iconPosition="left"
            >
              Télécharger mon CV
            </Button>

            <Button
              href="#contact"
              size="lg"
              variant="outline"
              icon={Mail}
              iconPosition="left"
            >
              Me contacter
            </Button>
          </motion.div>

          {/* Social Links & Quick Connect */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex items-center justify-center gap-4 text-charcoal-600"
          >
            <span className="text-xs font-medium uppercase tracking-wider text-charcoal-500 mr-1">
              Réseaux professionnels :
            </span>
            <a
              href={profileData.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-cream-100 hover:bg-taupe-200 text-charcoal-800 hover:text-charcoal-950 transition-all shadow-xs border border-taupe-200/80 hover:-translate-y-0.5"
              aria-label="Profil GitHub d'Israa Hitana"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={profileData.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-cream-100 hover:bg-taupe-200 text-charcoal-800 hover:text-charcoal-950 transition-all shadow-xs border border-taupe-200/80 hover:-translate-y-0.5"
              aria-label="Profil LinkedIn d'Israa Hitana"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${profileData.socialLinks.email}`}
              className="p-2.5 rounded-xl bg-cream-100 hover:bg-taupe-200 text-charcoal-800 hover:text-charcoal-950 transition-all shadow-xs border border-taupe-200/80 hover:-translate-y-0.5"
              aria-label="Envoyer un email à Israa Hitana"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
