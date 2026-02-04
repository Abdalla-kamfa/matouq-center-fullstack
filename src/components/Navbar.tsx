import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import logo from '../assets/logo.jpg';
import Button from './Button';
import { TRANSLATIONS } from '../constants';
import { Language } from '../types';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  onOpenModal: () => void;
  onOpenSignUp: () => void;
  onOpenLogin: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, onOpenModal, onOpenSignUp, onOpenLogin }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = TRANSLATIONS[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);

    // Handle special "Home" case
    if (id === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleLanguage = () => {
    setLang(lang === 'ar' ? 'en' : 'ar');
  };

  const navLinks = [
    { label: t.home, href: '#' },
    { label: t.sports, href: '#programs' },
    { label: t.languages, href: '#programs' },
    { label: t.about, href: '#features' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-white py-4 shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer"
            onClick={(e) => scrollToSection(e as any, '#')}
          >
            <img src={logo} alt="Matouq Center" className="h-12 w-auto object-contain" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-slate-600 hover:text-blue-900 font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-3 py-1 rounded-full border border-slate-200 text-sm font-semibold text-slate-600 hover:bg-slate-50 hover:text-orange-600 transition-colors"
            >
              <Globe size={16} />
              <span>{lang === 'ar' ? 'English' : 'عربي'}</span>
            </button>

            <button
              onClick={onOpenLogin}
              className="text-slate-600 font-semibold hover:text-blue-900 transition-colors"
            >
              {lang === 'ar' ? 'دخول' : 'Login'}
            </button>

            <button
              onClick={onOpenSignUp}
              className="text-orange-600 font-semibold hover:text-orange-700 transition-colors"
            >
              {lang === 'ar' ? 'تسجيل حساب' : 'Sign Up'}
            </button>

            <Button onClick={onOpenModal} variant="primary" className="rtl:mr-4 ltr:ml-4 transform hover:scale-105">
              {t.join}
            </Button>
          </div>

          {/* Mobile menu button & Lang Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-slate-600 font-medium"
            >
              <span className="text-sm">{lang === 'ar' ? 'EN' : 'عربي'}</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-blue-900 hover:bg-slate-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-inner text-center">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-900 hover:bg-slate-50"
              onClick={(e) => scrollToSection(e, item.href)}
            >
              {item.label}
            </a>
          ))}
          <div className="mt-4 px-3 flex flex-col gap-2">
            <Button onClick={onOpenLogin} fullWidth variant="outline">
              {lang === 'ar' ? 'دخول' : 'Login'}
            </Button>
            <Button onClick={onOpenSignUp} fullWidth variant="outline">
              {lang === 'ar' ? 'تسجيل حساب' : 'Sign Up'}
            </Button>
            <Button onClick={onOpenModal} fullWidth variant="primary">
              {t.join}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;