import React from 'react';
import Button from './Button';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface HeroProps {
  lang: Language;
  onOpenModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ lang, onOpenModal }) => {
  const t = TRANSLATIONS[lang].hero;
  const isRTL = lang === 'ar';
  const ChevronIcon = isRTL ? ChevronLeft : ChevronRight;

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPrograms = () => {
    document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative pt-24 pb-12 lg:pt-32 lg:pb-0 overflow-hidden bg-slate-50">
      <div className="lg:grid lg:grid-cols-2 lg:gap-24 h-full">

        {/* Content Side */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pr-0 lg:rtl:pl-16 lg:ltr:pr-0 flex flex-col justify-center h-full pb-16 lg:pb-32">
          <div className="lg:max-w-xl xl:max-w-2xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-sm font-semibold mb-6">
              <span className="flex h-2 w-2 rounded-full bg-orange-600 rtl:ml-2 ltr:mr-2"></span>
              {t.badge}
            </div>
            <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl mb-6 leading-tight">
              {t.titleStart} <span className="text-blue-900">{t.titleBlue}</span> {t.titleOrange}
            </h1>
            <p className="mt-4 max-w-md mx-auto text-base text-slate-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl lg:mx-0">
              {t.subtitle}
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start gap-4">
              <Button onClick={onOpenModal} variant="primary" className="w-full sm:w-auto flex items-center gap-2">
                {t.ctaPrimary} <ChevronIcon size={18} />
              </Button>
              <Button onClick={scrollToContact} variant="outline" className="w-full sm:w-auto mt-3 sm:mt-0">
                {t.ctaSecondary}
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm text-slate-500 font-medium">
              <div className="flex -space-x-2 rtl:space-x-reverse">
                {[1, 2, 3, 4].map((i) => (
                  <img key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src={`https://images.unsplash.com/photo-${i % 2 === 0 ? '1507003211169-0a1dd7228f2d' : '1573496359142-b8d87734a5a2'}?q=80&w=100&auto=format&fit=crop`} alt="User" />
                ))}
              </div>
              <p>{t.trusted}</p>
            </div>
          </div>
        </div>

        {/* Visual Side - Desktop Split */}
        <div className="relative hidden lg:block h-full min-h-[600px]">
          {/* Slanted overlay - Flipping skew direction based on language for visual balance */}
          <div className={`absolute inset-0 bg-blue-900 transform origin-top overflow-hidden border-white ${isRTL ? 'skew-x-12 -translate-x-20 ltr:border-l-8 rtl:border-r-8' : '-skew-x-12 translate-x-20 border-l-8'}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-slate-900/90 mix-blend-multiply z-10"></div>
            {/* Background Image: Confident Student */}
            <img
              className={`absolute inset-0 w-full h-full object-cover transform scale-150 ${isRTL ? '-skew-x-12 -translate-x-48' : 'skew-x-12 -translate-x-32'}`}
              src="https://images.unsplash.com/photo-1529390003361-593232f572f3?q=80&w=1200"
              alt="Confident Student"
            />

            {/* Floating Cards Element inside visual */}
            <div className={`absolute top-1/4 z-20 text-white max-w-xs ${isRTL ? 'right-1/4 skew-x-[-12deg]' : 'left-1/4 skew-x-12'}`}>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-2xl">
                <h3 className="text-2xl font-bold text-orange-400 mb-2">{t.floatCard1Title}</h3>
                <p className="text-slate-100">{t.floatCard1Text}</p>
              </div>
            </div>

            <div className={`absolute bottom-1/4 z-20 text-white max-w-xs ${isRTL ? 'left-1/4 skew-x-[-12deg]' : 'right-1/4 skew-x-12'}`}>
              <div className="bg-orange-600/90 backdrop-blur-md p-6 rounded-2xl shadow-2xl">
                <h3 className="text-2xl font-bold mb-2">{t.floatCard2Title}</h3>
                <p className="text-orange-50">{t.floatCard2Text}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Visual Replacement */}
        <div className="relative lg:hidden h-64 sm:h-72 md:h-96 w-full mt-8">
          <img
            className="w-full h-full object-cover rounded-xl shadow-xl"
            src="https://images.unsplash.com/photo-1529390003361-593232f572f3?q=80&w=800"
            alt="Confident Student"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent rounded-xl flex items-end p-6">
            <p className="text-white font-bold text-lg">{t.mobileOverlay}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;