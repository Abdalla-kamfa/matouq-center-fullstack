import { LucideIcon } from 'lucide-react';

export type Language = 'ar' | 'en';

export interface NavItem {
  label: string;
  href: string;
}

export interface ProgramItem {
  id: string;
  title: string;
  description: string;
  features: string[];
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  text: string;
  author: string;
  role: string;
  image: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}