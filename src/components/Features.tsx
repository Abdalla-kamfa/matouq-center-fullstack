import React from 'react';
import { Shield, Award, Users } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface FeaturesProps {
  lang: Language;
}

const Features: React.FC<FeaturesProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].features;
  const icons = [Shield, Award, Users];

  return (
    <section id="features" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-500 blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-orange-500 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold sm:text-4xl mb-4">
            {t.heading}
          </h2>
          <p className="text-lg text-slate-300">
            {t.subHeading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.items.map((feature, index) => {
            const Icon = icons[index];
            return (
              <div 
                key={index} 
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-orange-500/50 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center p-3 bg-blue-900 rounded-lg shadow-lg mb-6">
                  <Icon className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;