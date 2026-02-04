import { Dumbbell, BookOpen, Shield, Award, Users } from 'lucide-react';
import { ProgramItem, FeatureItem } from './types';

export const TRANSLATIONS = {
  ar: {
    nav: {
      home: "الرئيسية",
      sports: "الرياضة",
      languages: "اللغات",
      about: "من نحن",
      join: "انضم الآن",
      contact: "تواصل معنا"
    },
    hero: {
      badge: "فصول جديدة تبدأ قريباً",
      titleStart: "معًا…",
      titleBlue: "نبني جسدًا قويًا",
      titleOrange: "وعقلًا واثقًا",
      subtitle: "اشترك الآن واحصل على خصم 30% على أول شهر + حصة مجانية للتجربة",
      ctaPrimary: "استكشف البرامج",
      ctaSecondary: "تواصل معنا",
      trusted: "موثوق من قبل ٥٠٠+ عائلة",
      floatCard1Title: "التميز",
      floatCard1Text: "في كل ركلة وكل كلمة.",
      floatCard2Title: "الانضباط",
      floatCard2Text: "بناء الشخصية مدى الحياة.",
      mobileOverlay: "انضم إلى مجتمعنا اليوم"
    },
    programs: {
      headingBadge: "برامجنا",
      headingTitle: "اختر طريقك للنجاح",
      headingSub: "نقدم مسارات متخصصة لكل من اللياقة البدنية والقدرات الذهنية.",
      viewDetails: "عرض التفاصيل",
      items: [
        {
          title: "الأكاديمية الرياضية",
          description: "تدرّب مع الأبطال. تركز برامجنا الرياضية على التطور البدني، الانضباط، والتميز التنافسي.",
          features: ["تايكوندو وفنون قتالية", "تدريب لياقة بدنية احترافي", "مسابقات وطنية", "تنمية الشباب"]
        },
        {
          title: "معهد اللغات",
          description: "افتح أبواباً جديدة باللغات. فصول تفاعلية مصممة لتعزيز الطلاقة والثقة لجميع الأعمار.",
          features: ["متحدثون أصليون خبراء", "دورات العربية والإنجليزية", "أندية محادثة", "مناهج معتمدة"]
        }
      ]
    },
    features: {
      heading: "لماذا تختار مركز معتوق؟",
      subHeading: "نحن نتجاوز مجرد تعليم المهارات. نحن ملتزمون بتعزيز مجتمع من النمو والانضباط والتميز.",
      items: [
        {
          title: "بيئة آمنة",
          description: "سلامتك هي أولويتنا. نحافظ على مرافق حديثة مع بروتوكولات سلامة صارمة وإشراف دقيق."
        },
        {
          title: "مدربون معتمدون",
          description: "تعلّم من الأفضل. مدربونا محترفون معتمدون ولديهم سنوات من الخبرة في مجالاتهم."
        },
        {
          title: "منهج منظم",
          description: "تقدم يمكنك قياسه. تتبع برامجنا معايير معترف بها دولياً للنمو القابل للقياس."
        }
      ]
    },
    testimonials: {
      heading: "قصص نجاح",
      subHeading: "انظر ماذا يقول أولياء الأمور والطلاب عن تجربتهم معنا.",
      items: [
        {
          text: "تحسنت ثقة ابني بنفسه كثيراً بعد انضمامه لصفوف التايكوندو. المدربون رائعون حقاً.",
          author: "سارة م.",
          role: "ولية أمر",
          image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200"
        },
        {
          text: "دروس اللغة الإنجليزية ممتعة وفعالة. لاحظت تطوراً كبيراً في نطق ابنتي خلال شهرين فقط.",
          author: "أحمد ك.",
          role: "ولي أمر",
          image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200"
        },
        {
          text: "منشأة رائعة ومدربون محترفون. أطفالي يحبون المكان وينتظرون موعد التدريب بفارغ الصبر.",
          author: "خالد ع.",
          role: "ولي أمر",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200"
        }
      ]
    },
    faq: {
      heading: "الأسئلة الشائعة",
      items: [
        {
          question: "ما هي الأعمار التي تقبلونها؟",
          answer: "نقبل الأطفال والمراهقين من سن ٥ إلى ١٨ سنة في معظم برامجنا الرياضية واللغوية."
        },
        {
          question: "هل المعلمون معتمدون؟",
          answer: "نعم، جميع مدربينا ومعلمينا يحملون شهادات دولية معتمدة ولديهم سنوات من الخبرة في مجالات تخصصهم."
        },
        {
          question: "كيف يمكنني التسجيل؟",
          answer: "يمكنك زيارة مركزنا مباشرة لتعبئة استمارة التسجيل، أو الاتصال بنا عبر الهاتف لحجز موعد للمقابلة."
        }
      ]
    },
    cta: {
      title: "هل أنت مستعد لتغيير حياتك؟",
      text: "انضم إلينا اليوم للحصول على جلسة تجريبية مجانية في أي من برامجنا الرياضية أو اللغوية.",
      btnPrimary: "احجز تجربة مجانية",
      btnSecondary: "تحميل الكتيب"
    },
    modal: {
      title: "ابدأ رحلتك",
      nameLabel: "اسم ولي الأمر",
      namePlaceholder: "أدخل اسمك الكامل",
      phoneLabel: "رقم الهاتف",
      phonePlaceholder: "05xxxxxxxx",
      childNameLabel: 'اسم الطالب',
      childNamePlaceholder: 'أدخل اسم الطالب',
      childAgeLabel: 'عمر الطالب',
      childAgePlaceholder: 'مثلاً: 10',
      programLabel: 'اختر البرنامج',
      submit: 'إرسال الطلب',
      success: 'تم إرسال الطلب بنجاح! سنتواصل معك قريباً.',
      programs: {
        taekwondo: 'التايكوندو',
        gymnastics: 'الجمباز',
        zumba: 'الزومبا',
        aerobics: 'الأيروبيك',
        quran: 'تحفيظ القرآن الكريم',
        english: 'اللغة الإنجليزية',
        arabic: 'اللغة العربية'
      }
    },
    footer: {
      slogan: "تمكين الأفراد من خلال التميز البدني والكفاءة اللغوية.",
      programs: "البرامج",
      company: "الشركة",
      contact: "اتصل بنا",
      rights: "جميع الحقوق محفوظة لمركز معتوق.",
      privacy: "سياسة الخصوصية",
      terms: "شروط الخدمة",
      links: {
        prog1: "تايكوندو",
        prog2: "لياقة بدنية",
        prog3: "دورات إنجليزية",
        prog4: "عربية لغير الناطقين",
        comp1: "من نحن",
        comp2: "المدربون",
        comp3: "الوظائف",
        comp4: "اتصل بنا"
      },
      address: "المكان: نادي ديم حمد – الشهابية – جوار التأمين الصحي",
      phone: "للاستفسار: 0111613339 – 0917514364 – 0110833386"
    }
  },
  en: {
    nav: {
      home: "Home",
      sports: "Sports",
      languages: "Languages",
      about: "About Us",
      join: "Join Now",
      contact: "Contact"
    },
    hero: {
      badge: "New Classes Starting Soon",
      titleStart: "Building",
      titleBlue: "Strong Bodies",
      titleOrange: "& Sharp Minds",
      subtitle: "Specialized training in Taekwondo and Languages for youth. Unlock your potential at Matouq Center.",
      ctaPrimary: "Explore Programs",
      ctaSecondary: "Contact Us",
      trusted: "Trusted by 500+ Families",
      floatCard1Title: "Excellence",
      floatCard1Text: "In every kick and every word.",
      floatCard2Title: "Discipline",
      floatCard2Text: "Building character for life.",
      mobileOverlay: "Join the community today"
    },
    programs: {
      headingBadge: "Our Programs",
      headingTitle: "Choose Your Path to Success",
      headingSub: "We offer specialized tracks for both physical agility and mental acuity.",
      viewDetails: "View Details",
      items: [
        {
          title: "Sports Academy",
          description: "Train with champions. Our sports programs focus on physical development, discipline, and competitive excellence.",
          features: ["Taekwondo & Martial Arts", "Professional Fitness Training", "National Competitions", "Youth Development"]
        },
        {
          title: "Language Institute",
          description: "Open new doors with language. Interactive classes designed to boost fluency and confidence for all ages.",
          features: ["Expert Native Speakers", "Arabic & English Courses", "Conversational Clubs", "Certified Curriculum"]
        }
      ]
    },
    features: {
      heading: "Why Choose Matouq Center?",
      subHeading: "We go beyond just teaching skills. We are committed to fostering a community of growth, discipline, and excellence.",
      items: [
        {
          title: "Safe Environment",
          description: "Your safety is our priority. We maintain state-of-the-art facilities with strict safety protocols and supervision."
        },
        {
          title: "Certified Coaches",
          description: "Learn from the best. Our instructors are certified professionals with years of experience in their respective fields."
        },
        {
          title: "Structured Curriculum",
          description: "Progress that you can measure. Our programs follow internationally recognized standards for measurable growth."
        }
      ]
    },
    testimonials: {
      heading: "Success Stories",
      subHeading: "See what parents and students have to say about their experience with us.",
      items: [
        {
          text: "My son's confidence improved so much after Taekwondo. The coaches are truly amazing.",
          author: "Sarah M.",
          role: "Parent",
          image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200"
        },
        {
          text: "The English classes are fun and effective. Highly recommended!",
          author: "Ahmed K.",
          role: "Parent",
          image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200"
        },
        {
          text: "Great facility and professional coaches. My kids love it here and look forward to every session.",
          author: "John D.",
          role: "Parent",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200"
        }
      ]
    },
    faq: {
      heading: "Frequently Asked Questions",
      items: [
        {
          question: "What ages do you accept?",
          answer: "We accept children and teenagers from 5 to 18 years old for most of our sports and language programs."
        },
        {
          question: "Are the teachers certified?",
          answer: "Yes, all our coaches and teachers hold international certificates and have years of experience."
        },
        {
          question: "How do I register?",
          answer: "You can visit our center directly to fill out the registration form, or call us to book an appointment."
        }
      ]
    },
    cta: {
      title: "Ready to Transform Your Life?",
      text: "Join us today for a free trial session in any of our sports or language programs.",
      btnPrimary: "Book Free Trial",
      btnSecondary: "Download Brochure"
    },
    modal: {
      title: 'Start Your Journey',
      nameLabel: 'Parent Name',
      namePlaceholder: 'Enter Full Name',
      phoneLabel: 'Phone Number',
      phonePlaceholder: '079...',
      childNameLabel: "Child's Name",
      childNamePlaceholder: "Enter Child's Name",
      childAgeLabel: "Child's Age",
      childAgePlaceholder: 'e.g. 10',
      programLabel: 'Select Program',
      submit: 'Submit Request',
      success: 'Thank you! We will contact you soon.',
      programs: {
        taekwondo: 'Taekwondo',
        gymnastics: 'Gymnastics',
        zumba: 'Zumba',
        aerobics: 'Aerobics',
        quran: 'Quran Memorization',
        english: 'English',
        arabic: 'Arabic'
      }
    },
    footer: {
      slogan: "Empowering individuals through physical excellence and linguistic proficiency.",
      programs: "Programs",
      company: "Company",
      contact: "Contact Us",
      rights: "Matouq Center. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      links: {
        prog1: "Taekwondo",
        prog2: "Fitness & Gym",
        prog3: "English Courses",
        prog4: "Arabic for Non-Speakers",
        comp1: "About Us",
        comp2: "Coaches",
        comp3: "Careers",
        comp4: "Contact"
      },
      address: "123 Sports Avenue, Education District, City",
      phone: "+1 (555) 123-4567"
    }
  }
};