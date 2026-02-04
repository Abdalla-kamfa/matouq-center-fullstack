import React from 'react';
import { Quote, Star } from 'lucide-react';
import { Language, TestimonialItem } from '../types';
import { TRANSLATIONS } from '../constants';

interface TestimonialsProps {
  lang: Language;
  items: TestimonialItem[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ lang, items }) => {
  const t = TRANSLATIONS[lang].testimonials;

  return (
    <section className="py-20 bg-orange-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            {t.heading}
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-500 mx-auto">
            {t.subHeading}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100 relative mt-8 md:mt-0"
            >
              <div className="absolute -top-4 rtl:right-8 ltr:left-8 bg-orange-600 rounded-full p-2 shadow-md z-10">
                <Quote className="h-5 w-5 text-white" />
              </div>

              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-slate-600 mb-6 italic leading-relaxed">
                "{item.text}"
              </p>

              <div className="flex items-center">
                <img
                  src={item.image}
                  alt={item.author}
                  className="h-12 w-12 rounded-full object-cover border-2 border-slate-100"
                />
                <div className="rtl:mr-3 ltr:ml-3">
                  <p className="text-sm font-bold text-slate-900">{item.author}</p>
                  <p className="text-xs text-slate-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;