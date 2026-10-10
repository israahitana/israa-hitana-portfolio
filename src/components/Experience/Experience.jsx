import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Briefcase, 
  Award,
  MapPin, 
  Calendar
} from 'lucide-react';
import { timelineData } from '../../data/experience';
import { SectionHeading } from '../UI/SectionHeading';

export const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Parcours"
          title="Formation & Expériences"
        />

        {/* Vertical Timeline */}
        <div className="relative mt-12 pl-6 sm:pl-10 border-l-2 border-taupe-300 space-y-10">
          {timelineData.map((item, index) => {
            const isEducation = item.type === 'education';
            const isCertification = item.type === 'certification';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Timeline node marker */}
                <div
                  className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full border-4 border-cream-50 flex items-center justify-center transition-all duration-300 ${
                    item.highlight
                      ? 'bg-mocha-700 text-cream-50 shadow-warm-glow ring-4 ring-mocha-200'
                      : isEducation
                      ? 'bg-taupe-500 text-cream-50 group-hover:bg-mocha-600'
                      : 'bg-charcoal-700 text-cream-50 group-hover:bg-mocha-700'
                  }`}
                >
                  {isCertification ? (
                    <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  ) : isEducation ? (
                    <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  ) : (
                    <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  )}
                </div>

                {/* Timeline Card */}
                <div
                  className={`rounded-2xl p-6 sm:p-7 glass-card transition-all duration-300 border ${
                    item.highlight
                      ? 'border-mocha-300 bg-mocha-50/60 shadow-soft-lg'
                      : 'border-taupe-200 shadow-soft group-hover:border-mocha-300 group-hover:bg-white'
                  }`}
                >
                  {/* Top Header Information */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                          isEducation || isCertification
                            ? 'bg-taupe-200 text-charcoal-800'
                            : 'bg-mocha-100 text-mocha-900 border border-mocha-200/80'
                        }`}
                      >
                        {isCertification ? 'Certification' : isEducation ? 'Formation Académique' : 'Expérience / Stage'}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-medium text-mocha-800 bg-cream-100/90 px-3 py-1 rounded-full border border-taupe-200">
                      <Calendar className="w-3 h-3 text-mocha-600" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {item.status && (
                    <span className="inline-block mt-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-mocha-700 text-cream-50">
                      {item.status}
                    </span>
                  )}

                  {/* Role & Institution */}
                  <h3 className="text-lg sm:text-xl font-bold text-charcoal-900 mt-1">
                    {item.role}
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm text-mocha-800 font-medium mt-1">
                    <span>{item.institution}</span>
                    <span className="text-taupe-400">•</span>
                    <span className="inline-flex items-center gap-1 text-charcoal-500">
                      <MapPin className="w-3 h-3 text-mocha-600" />
                      <span>{item.location}</span>
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-3.5 text-xs sm:text-sm text-charcoal-600 leading-relaxed font-normal">
                    {item.description}
                  </p>

                  {/* Skills associated */}
                  {item.skills && item.skills.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-taupe-100 flex flex-wrap items-center gap-1.5">
                      <span className="text-[11px] font-semibold text-charcoal-400 mr-1">
                        Domaines clés :
                      </span>
                      {item.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-cream-100 text-charcoal-700 border border-taupe-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
