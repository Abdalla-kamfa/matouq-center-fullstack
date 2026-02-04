import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

import { submitRegistration } from '../api';

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, lang }) => {
  const t = TRANSLATIONS[lang].modal;
  const isRTL = lang === 'ar';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    childName: '',
    childAge: '',
    program: 'Taekwondo'
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await submitRegistration({
        parentName: formData.name,
        phoneNumber: formData.phone,
        childName: formData.childName,
        childAge: parseInt(formData.childAge),
        selectedProgram: formData.program
      });
      alert(t.success);
      setFormData({ name: '', phone: '', childName: '', childAge: '', program: 'Taekwondo' });
      onClose();
    } catch (error) {
      console.error(error);
      alert('Failed to submit application. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className={`relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 transform transition-all scale-100 ${isRTL ? 'text-right' : 'text-left'}`}>
        <button
          onClick={onClose}
          className={`absolute top-4 text-slate-400 hover:text-slate-600 ${isRTL ? 'left-4' : 'right-4'}`}
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold text-blue-900 mb-6">{t.title}</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              {t.nameLabel}
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
              placeholder={t.namePlaceholder}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              {t.phoneLabel}
            </label>
            <input
              type="tel"
              required
              className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
              placeholder={t.phonePlaceholder}
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                {t.childNameLabel}
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                placeholder={t.childNamePlaceholder}
                value={formData.childName}
                onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                {t.childAgeLabel}
              </label>
              <input
                type="number"
                required
                className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                placeholder={t.childAgePlaceholder}
                value={formData.childAge}
                onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              {t.programLabel}
            </label>
            <select
              className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all bg-white"
              value={formData.program}
              onChange={(e) => setFormData({ ...formData, program: e.target.value })}
            >
              {Object.keys(t.programs || {}).map((key) => (
                <option key={key} value={key.charAt(0).toUpperCase() + key.slice(1)}>
                  {t.programs[key as keyof typeof t.programs]}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
          >
            {t.submit}
          </button>
        </form>
      </div >
    </div >
  );
};

export default Modal;