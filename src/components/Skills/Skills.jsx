import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Layout, 
  Server, 
  Database, 
  Layers, 
  Cpu, 
  BrainCircuit, 
  Smartphone,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { skillCategories, learningPhilosophy } from '../../data/skills';
import { SectionHeading } from '../UI/SectionHeading';

// Icon mapping helper
const iconMap = {
  Layout: Layout,
  Server: Server,
  Database: Database,
  Layers: Layers,
  Cpu: Cpu,
  BrainCircuit: BrainCircuit,
  Smartphone: Smartphone,
};

export const Skills = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <section id="skills" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background soft ambient warm gradient */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-taupe-200/30 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-mocha-100/40 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Compétences & Domaines"
          title="Une expertise logicielle structurée par domaines"
          subtitle="Pas de pourcentages arbitraires : une maîtrise concrète articulée autour de technologies modernes, de fondations logicielles solides et de bonnes pratiques d'ingénierie."
        />

        {/* Domain Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = iconMap[category.icon] || Layers;
            const isHovered = hoveredCategory === category.id;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onMouseEnter={() => setHoveredCategory(category.id)}
                onMouseLeave={() => setHoveredCategory(null)}
                className={`group relative rounded-2xl p-6 sm:p-7 transition-all duration-300 glass-card glass-card-hover ${
                  isHovered ? 'border-mocha-400/80 shadow-warm-glow' : 'border-taupe-200 shadow-soft'
                }`}
              >
                {/* Header of the Card */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3.5">
                    <div className="p-3 rounded-xl bg-mocha-100 group-hover:bg-mocha-600 text-mocha-800 group-hover:text-cream-50 transition-colors duration-300 shadow-xs">
                      <IconComponent className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-charcoal-900 group-hover:text-mocha-900 transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-xs text-mocha-700 font-medium">
                        {category.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Brief domain scope description */}
                <p className="text-xs sm:text-sm text-charcoal-600 mb-5 leading-relaxed font-normal">
                  {category.description}
                </p>

                {/* Technology Badges with micro-interactions */}
                <div className="space-y-2">
                  <span className="text-[11px] font-semibold text-charcoal-500 uppercase tracking-wider block">
                    Technologies & Outils clés :
                  </span>
                  
                  <div className="flex flex-wrap gap-2 pt-1">
                    {category.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                          skill.highlight
                            ? 'bg-cream-100/90 text-charcoal-900 border border-taupe-300/80 shadow-xs group-hover:border-mocha-300 group-hover:bg-cream-50'
                            : 'bg-taupe-50/80 text-charcoal-600 border border-taupe-200/60'
                        } hover:scale-105 hover:bg-white hover:text-mocha-900 hover:shadow-xs`}
                        title={skill.category ? `${skill.name} (${skill.category})` : skill.name}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${skill.highlight ? 'bg-mocha-600' : 'bg-taupe-400'}`}></span>
                        <span>{skill.name}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card subtle footer indicator */}
                <div className="mt-6 pt-4 border-t border-taupe-200/60 flex items-center justify-between text-[11px] text-charcoal-400 group-hover:text-mocha-700 transition-colors">
                  <span className="font-mono">{category.skills.length} compétences répertoriées</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 font-medium">
                    <span>Explorer</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Learning Philosophy Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center p-5 rounded-2xl bg-cream-100/60 border border-taupe-200 max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-2 text-mocha-800 text-xs font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5 text-mocha-600" />
            <span>{learningPhilosophy.title}</span>
          </div>
          <p className="text-xs sm:text-sm text-charcoal-600">
            {learningPhilosophy.text}
          </p>
        </motion.div>

      </div>
    </section>
  );
};
