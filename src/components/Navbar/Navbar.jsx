import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Code2 } from 'lucide-react';
import { profileData } from '../../data/profile';

const navLinks = [
  { name: 'Accueil', href: '#home' },
  { name: 'À propos', href: '#about' },
  { name: 'Compétences', href: '#skills' },
  { name: 'Projets', href: '#projects' },
  { name: 'Parcours', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Toggle sticky style
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Detect active section
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav-scrolled py-3'
          : 'bg-cream-50/70 backdrop-blur-md py-4 sm:py-5 border-b border-taupe-200/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#home"
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="Israa Hitana - Accueil"
          >
            <div className="w-10 h-10 rounded-xl bg-charcoal-900 text-cream-50 flex items-center justify-center font-bold text-base shadow-sm transition-transform duration-300 group-hover:scale-105 border border-mocha-700/50">
              IH
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg text-charcoal-900 tracking-tight leading-none group-hover:text-mocha-800 transition-colors">
                {profileData.name}
              </span>
              <span className="text-[11px] font-medium text-mocha-700 tracking-wide mt-1">
                {profileData.role}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-taupe-100/70 p-1.5 rounded-full border border-taupe-200/70 shadow-xs">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-charcoal-950 bg-cream-50 font-semibold shadow-xs'
                      : 'text-charcoal-600 hover:text-charcoal-950 hover:bg-cream-50/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Stage PFE / Contact Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-mocha-700 text-cream-50 hover:bg-mocha-800 transition-all shadow-xs hover:shadow-soft active:scale-95"
            >
              <span>Stage PFE</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-taupe-100 text-charcoal-800 hover:bg-taupe-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-mocha-500"
              aria-expanded={mobileMenuOpen}
              aria-label="Ouvrir le menu de navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Animated Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav border-b border-taupe-200 px-4 pt-3 pb-6 space-y-2 animate-fadeIn shadow-soft-lg">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-cream-100 text-mocha-900 font-semibold border border-mocha-200/60'
                      : 'text-charcoal-700 hover:bg-taupe-100'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="pt-4 border-t border-taupe-200/80 flex flex-col gap-2">
            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="w-full text-center py-2.5 px-4 rounded-xl text-sm font-semibold bg-mocha-700 text-cream-50 hover:bg-mocha-800 transition-colors shadow-xs"
            >
              Me contacter pour un PFE
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
