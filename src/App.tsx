import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Modal from './components/Modal';
import SignUpModal from './components/SignUpModal';
import LoginModal from './components/LoginModal';
import { Language, ProgramItem, TestimonialItem, FAQItem } from './types';
import { TRANSLATIONS } from './constants';
import { fetchPrograms, fetchTestimonials, fetchFAQs } from './api';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('ar');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [programs, setPrograms] = useState<ProgramItem[]>([]);
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>([]);
  const [faqs, setFaqs] = useState<FAQItem[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [programsData, testimonialsData, faqsData] = await Promise.all([
          fetchPrograms(language),
          fetchTestimonials(language),
          fetchFAQs(language)
        ]);
        setPrograms(programsData);
        setTestimonials(testimonialsData);
        setFaqs(faqsData);
      } catch (error) {
        console.error("Failed to load data", error);
        // Fallback or empty state could be handled here
      }
    };
    loadData();
  }, [language]);

  const t = TRANSLATIONS[language].cta;

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenSignUp = () => {
    setIsSignUpOpen(true);
  };

  const handleCloseSignUp = () => {
    setIsSignUpOpen(false);
  };

  const handleOpenLogin = () => {
    setIsLoginOpen(true);
  };

  const handleCloseLogin = () => {
    setIsLoginOpen(false);
  };

  return (
    // Direction set at the root level for full app RTL/LTR toggle
    <div dir={language === 'ar' ? 'rtl' : 'ltr'} className={`min-h-screen flex flex-col bg-white ${language === 'ar' ? 'font-[Cairo]' : 'font-[Inter]'}`}>
      <Navbar lang={language} setLang={setLanguage} onOpenModal={handleOpenModal} onOpenSignUp={handleOpenSignUp} onOpenLogin={handleOpenLogin} />
      <main className="flex-grow">
        <Hero lang={language} onOpenModal={handleOpenModal} />
        <Programs lang={language} items={programs} />
        <Features lang={language} />
        <Testimonials lang={language} items={testimonials} />
        <FAQ lang={language} items={faqs} />

        {/* Call to Action Section */}
        <section className="bg-orange-600 py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">{t.title}</h2>
            <p className="text-orange-100 text-lg mb-8">
              {t.text}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={handleOpenModal}
                className="bg-white text-orange-600 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-slate-100 transition-colors"
              >
                {t.btnPrimary}
              </button>
              <button className="bg-orange-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg border border-orange-500 hover:bg-orange-800 transition-colors">
                {t.btnSecondary}
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer lang={language} />
      <WhatsAppButton />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} lang={language} />
      <SignUpModal isOpen={isSignUpOpen} onClose={handleCloseSignUp} />
      <LoginModal isOpen={isLoginOpen} onClose={handleCloseLogin} />
    </div>
  );
};

export default App;