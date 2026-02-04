import React from 'react';
import { Shield, Activity, Music, Heart, Moon, Languages, PenTool, CheckCircle } from 'lucide-react';
import { Language, ProgramItem } from '../types';
import { TRANSLATIONS } from '../constants';

interface ProgramsProps {
  lang: Language;
  items: ProgramItem[];
}

const Programs: React.FC<ProgramsProps> = ({ lang, items }) => {
  const t = TRANSLATIONS[lang].programs;

  // Mapping icons to the data
  const icons = [Shield, Activity, Music, Heart, Moon, Languages, PenTool];
  // Mapping colors to the data (Alternating or Categorized)
  const colors = ['orange', 'blue', 'orange', 'blue', 'orange', 'blue', 'orange'];

  // Mapping specific images 
  const images = [
    "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=800", // Taekwondo
    "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=800", // Gymnastics
    "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800", // Zumba
    "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800", // Aerobics
    "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?q=80&w=800", // Quran
    "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800", // English
    "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=800"  // Arabic
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-orange-600 font-semibold tracking-wide uppercase">{t.headingBadge}</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {t.headingTitle}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            {t.headingSub}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-10">
          {items.map((program, index) => {
            const Icon = icons[index] || icons[0];
            const colorTheme = colors[index] || 'orange';
            const image = images[index] || images[0];

            return (
              <div
                key={index}
                className="group relative flex flex-col overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white border border-slate-100 ring-1 ring-slate-900/5 w-full md:w-[calc(50%-2.5rem)] lg:w-[calc(33.333%-2.5rem)]"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className={`absolute inset-0 opacity-20 transition-opacity duration-300 group-hover:opacity-10 ${colorTheme === 'orange' ? 'bg-orange-600' : 'bg-blue-900'}`}></div>
                  <img
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src={image}
                    alt={program.title}
                  />
                  <div className="absolute top-4 rtl:left-4 ltr:right-4 bg-white p-3 rounded-full shadow-md">
                    <Icon className={`h-6 w-6 ${colorTheme === 'orange' ? 'text-orange-600' : 'text-blue-900'}`} />
                  </div>
                </div>

                <div className="flex-1 p-8 flex flex-col justify-between">
                  <div>
                    <h3 className={`text-2xl font-bold ${colorTheme === 'orange' ? 'text-orange-600' : 'text-blue-900'} mb-3`}>
                      {program.title}
                    </h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {program.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {program.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className={`flex-shrink-0 h-5 w-5 ${colorTheme === 'orange' ? 'text-orange-500' : 'text-blue-500'} rtl:ml-3 ltr:mr-3 mt-0.5`} />
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    className={`w-full py-3 px-4 rounded-lg font-medium transition-colors duration-200 
                      ${colorTheme === 'orange'
                        ? 'bg-orange-50 text-orange-700 hover:bg-orange-100'
                        : 'bg-blue-50 text-blue-900 hover:bg-blue-100'}`}
                  >
                    {t.viewDetails}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;