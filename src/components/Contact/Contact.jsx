import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle, 
  AlertCircle, 
  Copy, 
  Check, 
  ArrowUpRight,
  Clock,
  Sparkles
} from 'lucide-react';
import { Github, Linkedin } from '../UI/Icons';
import { profileData } from '../../data/profile';
import { SectionHeading } from '../UI/SectionHeading';
import { Button } from '../UI/Button';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.socialLinks.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status.submitting) return;

    const name = formData.name.trim();
    const email = formData.email.trim();
    const subject = formData.subject.trim();
    const message = formData.message.trim();

    if (!name || !email || !message) {
      setStatus({ submitting: false, submitted: false, error: 'Veuillez renseigner tous les champs obligatoires.' });
      return;
    }
    if (!EMAIL_REGEX.test(email)) {
      setStatus({ submitting: false, submitted: false, error: "Veuillez saisir une adresse email valide." });
      return;
    }
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setStatus({
        submitting: false,
        submitted: false,
        error: "Le formulaire n'est pas encore configuré. Vous pouvez m'écrire directement par email.",
      });
      return;
    }

    setStatus({ submitting: true, submitted: false, error: null });

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          from_email: email,
          reply_to: email,
          subject: subject || 'Nouveau message depuis le portfolio',
          message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus({
        submitting: false,
        submitted: false,
        error: "L'envoi a échoué. Veuillez réessayer dans un instant ou m'écrire directement par email.",
      });
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden bg-cream-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Contact & Opportunités"
          title="Échangeons sur votre projet ou votre opportunité"
          subtitle="Ouverte aux opportunités professionnelles, aux projets collaboratifs et aux échanges autour du développement logiciel et des technologies numériques."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct coordinates & Availability Status */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Quick Status Card */}
            <div className="glass-card rounded-2xl p-6 border border-taupe-200 shadow-soft">
              <div className="flex items-center gap-2.5 text-xs font-bold text-mocha-800 uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4 text-mocha-600" />
                <span>DISPONIBLE POUR DE NOUVELLES OPPORTUNITÉS</span>
              </div>
              <h3 className="text-xl font-bold text-charcoal-900">
                Disponible pour de nouvelles opportunités
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-charcoal-600 leading-relaxed font-normal">
                Je suis disponible pour échanger autour de projets, d'opportunités professionnelles et de collaborations dans le domaine du développement logiciel.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3">
              {/* Email Card with Copy button */}
              <div className="glass-card rounded-xl p-4 border border-taupe-200 shadow-xs flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-mocha-100 text-mocha-800">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-charcoal-400 uppercase tracking-wider">Email</span>
                    <a
                      href={`mailto:${profileData.socialLinks.email}`}
                      className="text-sm font-semibold text-charcoal-900 hover:text-mocha-800 transition-colors break-all block"
                    >
                      {profileData.socialLinks.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-taupe-100 hover:bg-taupe-200 text-charcoal-700 transition-colors shrink-0"
                  title="Copier l'adresse email"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn Card */}
              <a
                href={profileData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-xl p-4 border border-taupe-200 shadow-xs flex items-center justify-between group hover:border-mocha-300 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-mocha-100 text-mocha-800 group-hover:bg-mocha-600 group-hover:text-cream-50 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-charcoal-400 uppercase tracking-wider">LinkedIn</span>
                    <p className="text-sm font-semibold text-charcoal-900 group-hover:text-mocha-800 transition-colors">
                      in/israa-hitana-28a041339
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-charcoal-400 group-hover:text-mocha-700 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* GitHub Card */}
              <a
                href={profileData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-xl p-4 border border-taupe-200 shadow-xs flex items-center justify-between group hover:border-mocha-300 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-mocha-100 text-mocha-800 group-hover:bg-mocha-600 group-hover:text-cream-50 transition-colors">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-charcoal-400 uppercase tracking-wider">GitHub</span>
                    <p className="text-sm font-semibold text-charcoal-900 group-hover:text-mocha-800 transition-colors">
                      github.com/israahitana
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-charcoal-400 group-hover:text-mocha-700 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Location Card */}
              <div className="glass-card rounded-xl p-4 border border-taupe-200 shadow-xs flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-mocha-100 text-mocha-800">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-charcoal-400 uppercase tracking-wider">Localisation</span>
                  <p className="text-sm font-semibold text-charcoal-900">
                    {profileData.location}
                  </p>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-taupe-200 shadow-soft">
              <h3 className="text-xl font-bold text-charcoal-900 mb-1">
                Envoyez-moi un message
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-600 mb-6 font-normal">
                Remplissez ce formulaire et je prendrai contact avec vous sans délai.
              </p>

              {status.submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold">Message envoyé avec succès !</h4>
                    <p className="text-xs text-emerald-800 mt-1">
                      Merci pour votre prise de contact. Je vous répondrai très prochainement.
                    </p>
                  </div>
                </div>
              )}

              {status.error && (
                <div className="mb-6 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold">Envoi impossible</h4>
                    <p className="text-xs text-amber-800 mt-1">{status.error}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-charcoal-700 uppercase tracking-wider mb-1.5">
                      Nom complet <span className="text-mocha-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Votre nom ou entreprise"
                      className="w-full px-4 py-2.5 rounded-xl bg-cream-50/80 border border-taupe-300 text-charcoal-900 placeholder-charcoal-400 text-sm focus:outline-none focus:border-mocha-600 focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-charcoal-700 uppercase tracking-wider mb-1.5">
                      Adresse Email <span className="text-mocha-600">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="nom@exemple.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-cream-50/80 border border-taupe-300 text-charcoal-900 placeholder-charcoal-400 text-sm focus:outline-none focus:border-mocha-600 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-charcoal-700 uppercase tracking-wider mb-1.5">
                    Sujet
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Proposition de Stage PFE, collaboration, projet..."
                    className="w-full px-4 py-2.5 rounded-xl bg-cream-50/80 border border-taupe-300 text-charcoal-900 placeholder-charcoal-400 text-sm focus:outline-none focus:border-mocha-600 focus:bg-white transition-colors"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-charcoal-700 uppercase tracking-wider mb-1.5">
                    Message <span className="text-mocha-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Présentez brièvement vos besoins, le contexte de votre opportunité de stage ou votre projet..."
                    className="w-full px-4 py-2.5 rounded-xl bg-cream-50/80 border border-taupe-300 text-charcoal-900 placeholder-charcoal-400 text-sm focus:outline-none focus:border-mocha-600 focus:bg-white transition-colors resize-none"
                  ></textarea>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs text-charcoal-500 font-normal">
                    <span className="text-mocha-600">*</span> Champs obligatoires
                  </span>

                  <Button
                    type="submit"
                    variant="mocha"
                    size="md"
                    disabled={status.submitting}
                    icon={Send}
                    iconPosition="right"
                  >
                    {status.submitting ? 'Envoi en cours...' : 'Envoyer le message'}
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
