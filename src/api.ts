import { ProgramItem, TestimonialItem, FAQItem } from './types';

// const API_BASE_URL = 'http://localhost:8080/api';

export const fetchPrograms = async (lang: string): Promise<ProgramItem[]> => {
    // Return mock data directly
    const isAr = lang === 'ar';
    return [
        // Sports Category
        {
            id: '1',
            title: isAr ? 'التايكوندو' : 'Taekwondo',
            description: isAr
                ? 'ثقة + انضباط + قوة'
                : 'Confidence + Discipline + Strength',
            features: isAr
                ? ['دفاع عن النفس', 'بطولات', 'لياقة']
                : ['Self Defense', 'Tournaments', 'Fitness']
        },
        {
            id: '2',
            title: isAr ? 'الجمباز' : 'Gymnastics',
            description: isAr
                ? 'مرونة + تركيز + رشاقة'
                : 'Flexibility + Focus + Agility',
            features: isAr
                ? ['حركات بهلوانية', 'توازن', 'تقوية عضلات']
                : ['Acrobatics', 'Balance', 'Muscle Strength']
        },
        {
            id: '3',
            title: isAr ? 'الزومبا' : 'Zumba',
            description: isAr
                ? 'لياقة + صحة + طاقة إيجابية'
                : 'Fitness + Health + Positive Energy',
            features: isAr
                ? ['حرق دهون', 'موسيقى', 'متعة']
                : ['Fat Loss', 'Music', 'Fun']
        },
        {
            id: '4',
            title: isAr ? 'الأيروبيك' : 'Aerobics',
            description: isAr
                ? 'صحة قلب أفضل + لياقة بدنية عالية'
                : 'Better Heart Health + High Fitness',
            features: isAr
                ? ['كارديو', 'تحمل', 'نشاط']
                : ['Cardio', 'Endurance', 'Activity']
        },
        // Academic Category
        {
            id: '5',
            title: isAr ? 'تحفيظ القرآن الكريم' : 'Quran Memorization',
            description: isAr
                ? 'حفظ + تجويد + قيم إسلامية'
                : 'Memorization + Tajweed + Islamic Values',
            features: isAr
                ? ['تلاوة صحيحة', 'قصص الأنبياء', 'أخلاق']
                : ['Correct Recitation', 'Prophets Stories', 'Ethics']
        },
        {
            id: '6',
            title: isAr ? 'اللغة الإنجليزية' : 'English Language',
            description: isAr
                ? 'محادثة + قواعد + ثقة'
                : 'Conversation + Grammar + Confidence',
            features: isAr
                ? ['تأسيس', 'محادثة', 'مناهج دولية']
                : ['Foundation', 'Conversation', 'Global Curriculum']
        },
        {
            id: '7',
            title: isAr ? 'اللغة العربية' : 'Arabic Language',
            description: isAr
                ? 'فصاحة + بيان + إتقان'
                : 'Eloquence + Clarity + Mastery',
            features: isAr
                ? ['تأسيس قراءة', 'نحو وصرف', 'خط عربي']
                : ['Reading Basics', 'Grammar', 'Calligraphy']
        }
    ];
};

export const fetchTestimonials = async (lang: string): Promise<TestimonialItem[]> => {
    const isAr = lang === 'ar';
    return [
        {
            id: '1',
            author: isAr ? 'أحمد محمد' : 'Ahmed Mohamed',
            role: isAr ? 'ولي أمر' : 'Parent',
            text: isAr
                ? 'لاحظت تحسناً كبيراً في انضباط ابني وثقته بنفسه منذ انضمامه لصفوف التايكوندو. المدربون رائعون.'
                : 'I noticed a huge improvement in my son\'s discipline and confidence since joining Taekwondo.',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop'
        },
        {
            id: '2',
            author: isAr ? 'سارة علي' : 'Sara Ali',
            role: isAr ? 'طالبة' : 'Student',
            text: isAr
                ? 'دروس اللغة الإنجليزية ممتعة جداً، وقد تحسنت مهارات المحادثة لدي بشكل ملحوظ خلال فترة قصيرة.'
                : 'English lessons are very fun, and my speaking skills improved significantly in a short time.',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop'
        },
        {
            id: '3',
            author: isAr ? 'خالد عبدالله' : 'Khaled Abdullah',
            role: isAr ? 'ولي أمر' : 'Parent',
            text: isAr
                ? 'بيئة المركز ممتازة وآمنة، واهتمامهم باللياقة البدنية للصغار شيء مميز حقاً. أنصح به.'
                : 'The center\'s environment is excellent and safe. Their focus on kids\' fitness is truly special.',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop'
        }
    ];
};

export const fetchFAQs = async (lang: string): Promise<FAQItem[]> => {
    const isAr = lang === 'ar';
    return [
        {
            id: '1',
            question: isAr ? 'ما هي الأنشطة المتاحة في المركز؟' : 'What activities are available?',
            answer: isAr
                ? 'نقدم مجموعة متنوعة من الأنشطة تشمل التايكوندو، برامج اللياقة البدنية، ودورات اللغة الإنجليزية لمختلف الأعمار.'
                : 'We offer a variety of activities including Taekwondo, fitness programs, and English courses for all ages.'
        },
        {
            id: '2',
            question: isAr ? 'هل توفرون خدمة المواصلات؟' : 'Do you offer transportation?',
            answer: isAr
                ? 'نعم، نوفر خدمة نقل آمنة ومريحة للطلاب من وإلى المركز وتغطي معظم مناطق المدينة.'
                : 'Yes, we provide safe and comfortable transportation for students to and from the center.'
        },
        {
            id: '3',
            question: isAr ? 'كيف يمكنني التسجيل؟' : 'How can I register?',
            answer: isAr
                ? 'يمكنك التسجيل بسهولة عن طريق زيارة المركز مباشرة أو التواصل معنا عبر الهاتف أو الواتساب لحجز مقعدك.'
                : 'You can easily register by visiting the center directly or contacting us via phone or WhatsApp.'
        }
    ];
};

// const API_BASE_URL = 'http://localhost:8080/api';
const API_BASE_URL = 'http://localhost:8080/api';

export const submitRegistration = async (data: any): Promise<any> => {
    const response = await fetch(`${API_BASE_URL}/registrations`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    if (!response.ok) {
        throw new Error('Failed to submit registration');
    }
    return response.json();
};
