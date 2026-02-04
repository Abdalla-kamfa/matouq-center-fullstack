import React from 'react';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface FooterProps {
  lang: Language;
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].footer;

  return (
    <footer id="contact" className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <span className="font-bold text-2xl text-blue-900 mb-4 block">
              {lang === 'ar' ? 'مركز' : 'Matouq'}<span className="text-orange-600">{lang === 'ar' ? 'معتوق' : 'Center'}</span>
            </span>
            <p className="text-slate-500 mb-6">
              {t.slogan}
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="https://www.facebook.com/profile.php?id=61585885035624" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-900 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-orange-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-900 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4 uppercase text-sm tracking-wider">{t.programs}</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-600 hover:text-orange-600">{t.links.prog1}</a></li>
              <li><a href="#" className="text-slate-600 hover:text-orange-600">{t.links.prog2}</a></li>
              <li><a href="#" className="text-slate-600 hover:text-orange-600">{t.links.prog3}</a></li>
              <li><a href="#" className="text-slate-600 hover:text-orange-600">{t.links.prog4}</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4 uppercase text-sm tracking-wider">{t.company}</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-600 hover:text-blue-900">{t.links.comp1}</a></li>
              <li><a href="#" className="text-slate-600 hover:text-blue-900">{t.links.comp2}</a></li>
              <li><a href="#" className="text-slate-600 hover:text-blue-900">{t.links.comp3}</a></li>
              <li><a href="#" className="text-slate-600 hover:text-blue-900">{t.links.comp4}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4 uppercase text-sm tracking-wider">{t.contact}</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-orange-600 rtl:ml-3 ltr:mr-3 mt-0.5" />
                <span className="text-slate-600">{t.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-orange-600 rtl:ml-3 ltr:mr-3" />
                <span className="text-slate-600" dir="ltr">{t.phone}</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-orange-600 rtl:ml-3 ltr:mr-3" />
                <span className="text-slate-600">info@matouqcenter.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} {t.rights}
          </p>
          <div className="flex space-x-6 rtl:space-x-reverse mt-4 md:mt-0 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-900">{t.privacy}</a>
            <a href="#" className="hover:text-slate-900">{t.terms}</a>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-slate-100 text-center text-xs text-slate-400">
          <span>{lang === 'ar' ? 'تطوير: ' : 'Developed by '}</span>
          <a
            href="https://www.linkedin.com/in/abdallaidris/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium hover:text-slate-600 transition-colors"
          >
            {lang === 'ar' ? 'عبد الله إدريس' : 'Abdalla Idris'}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;