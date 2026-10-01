import React from 'react';
import { ArrowUp, Mail, Heart, Code2 } from 'lucide-react';
import { Github, Linkedin } from '../UI/Icons';
import { profileData } from '../../data/profile';

const navLinks = [
  { name: 'Accueil', href: '#home' },
  { name: 'À propos', href: '#about' },
  { name: 'Compétences', href: '#skills' },
  { name: 'Projets', href: '#projects' },
  { name: 'Parcours', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-charcoal-950 text-cream-100 pt-16 pb-12 border-t border-mocha-900/60 overflow-hidden">
      {/* Background ambient warm glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-mocha-800/10 rounded-full blur-2xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-charcoal-800">
          
          {/* Brand info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-xl bg-mocha-700 text-cream-50 flex items-center justify-center font-bold text-sm shadow-inner">
                IH
              </div>
              <span className="text-xl font-bold text-cream-50 tracking-tight">
                {profileData.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-taupe-300 max-w-sm">
              {profileData.role} • Ingénierie logicielle & solutions numériques modernes (Web, Logiciel, Mobile, Data & IA).
            </p>
          </div>

          {/* Quick Navigation */}
          <nav className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs sm:text-sm text-taupe-300 hover:text-cream-50 hover:underline underline-offset-4 transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={profileData.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-charcoal-800 text-taupe-200 hover:text-cream-50 hover:bg-charcoal-700 transition-colors border border-charcoal-700"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profileData.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-charcoal-800 text-taupe-200 hover:text-cream-50 hover:bg-charcoal-700 transition-colors border border-charcoal-700"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profileData.socialLinks.email}`}
              className="p-2 rounded-xl bg-charcoal-800 text-taupe-200 hover:text-cream-50 hover:bg-charcoal-700 transition-colors border border-charcoal-700"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-mocha-700 hover:bg-mocha-600 text-cream-50 transition-colors shadow-xs ml-2"
              aria-label="Retour en haut"
              title="Retour en haut"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-taupe-400 gap-4">
          <div className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} {profileData.name}. Tous droits réservés.</span>
          </div>

          <div className="flex items-center gap-1 text-taupe-400">
            <span>Conçu & développé avec</span>
            <Code2 className="w-3.5 h-3.5 text-mocha-400 mx-0.5" />
            <span>React & Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
