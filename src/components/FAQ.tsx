import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Language, FAQItem } from '../types';
import { TRANSLATIONS } from '../constants';

interface FAQProps {
  lang: Language;
  items: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ lang, items }) => {
  const t = TRANSLATIONS[lang].faq;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            {t.heading}
          </h2>
        </div>

        <div className="space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-lg overflow-hidden transition-all duration-200 hover:border-blue-200"
            >
              <button
                className="w-full flex items-center justify-between p-5 text-start bg-slate-50/50 hover:bg-slate-50 transition-colors focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-lg font-medium text-slate-900">
                  {item.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-orange-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-slate-400" />
                )}
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                <div className="p-5 pt-0 bg-slate-50/50 text-slate-600 border-t border-slate-100">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;