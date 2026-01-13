
import React from 'react';
import { 
  Scale, Shield, Users, Briefcase, Award, CheckCircle, 
  Handshake, Lightbulb, UserCheck, HeartHandshake,
  Landmark, Gavel, FileText, Landmark as Bank, Building2,
  Users2, Calculator, BadgePercent, Globe2, Phone, Mail, MapPin,
  Target, Zap, Clock, ShieldCheck, PenTool, TrendingUp, HandHelping
} from 'lucide-react';

export const NAV_ITEMS = [
  { id: 'home', label: 'الرئيسية', href: 'home' },
  { id: 'about', label: 'من نحن', href: 'about' },
  { id: 'services', label: 'خدماتنا', href: 'services' },
  { id: 'faq', label: 'الأسئلة المتكررة', href: 'faq' },
  { id: 'contact', label: 'تواصل معنا', href: 'contact' },
];

export const FEATURES = [
  {
    title: 'الابتكار والتطوير',
    description: 'نتبنى أحدث التقنيات والتطورات القانونية لنكون دائماً في صدارة تقديم الخدمات القانونية',
    icon: <Lightbulb className="w-10 h-10 text-legal-gold" />
  },
  {
    title: 'الشفافية والأخلاقيات',
    description: 'نلتزم بأعلى معايير الشفافية والأخلاقيات في كل جوانب عملنا، مما يضمن النزاهة والثقة في التعامل معنا',
    icon: <Handshake className="w-10 h-10 text-legal-gold" />
  },
  {
    title: 'خبرة متخصصة',
    description: 'يتكون فريقنا من محامين ذوي خبرة في مجالات متنوعة، مما يسمح لنا بتقديم خدمات قانونية شاملة ومتكاملة',
    icon: <Users2 className="w-10 h-10 text-legal-gold" />,
    featured: true
  },
  {
    title: 'التفرغ للعملاء',
    description: 'نحن نهتم بتلبية احتياجات عملائنا والعمل على تحقيق تطلعاتهم القانونية',
    icon: <HandHelping className="w-10 h-10 text-legal-gold" />
  }
];

export const SERVICES_LIST = [
  { id: 1, title: 'الاستشارات القانونية المتخصصة', icon: <Scale size={18} /> },
  { id: 2, title: 'خدمة التمثيل القانوني', icon: <Building2 size={18} /> },
  { id: 3, title: 'تسوية النزاعات', icon: <CheckCircle size={18} /> },
  { id: 4, title: 'خدمة العقود والاتفاقيات', icon: <FileText size={18} /> },
  { id: 5, title: 'خدمة الزكاة والضريبة', icon: <Calculator size={18} /> },
  { id: 6, title: 'خدمة المعاملات المتفردة لقطاع الأعمال والشركات', icon: <Zap size={18} /> },
  { id: 7, title: 'الخدمات القانونية التجارية', icon: <Briefcase size={18} /> },
  { id: 8, title: 'خدمة إدارة المخاطر', icon: <ShieldCheck size={18} /> },
  { id: 9, title: 'خدمة الأحوال الشخصية', icon: <Users size={18} /> },
  { id: 10, title: 'خدمة متعلقات الأملاك والعقارات', icon: <Building2 size={18} /> },
  { id: 11, title: 'تصنيف المقاولين', icon: <UserCheck size={18} /> },
  { id: 12, title: 'التركات والوصايا', icon: <FileText size={18} /> },
  { id: 13, title: 'الاستشارات المالية', icon: <Calculator size={18} /> },
  { id: 14, title: 'القضايا العمالية', icon: <Briefcase size={18} /> },
  { id: 15, title: 'منازعات تأمينية مصرفية', icon: <Bank size={18} /> },
  { id: 16, title: 'خدمة إعادة الهيكلة القانونية', icon: <TrendingUp size={18} /> },
  { id: 17, title: 'خدمات الشراكة بين القطاع الخاص والعام', icon: <HeartHandshake size={18} /> },
];

export const STATS = [
  { id: 1, value: '18', label: 'محامي مختص', icon: <Users2 className="w-10 h-10" /> },
  { id: 2, value: '33', label: 'جائزة تكريم', icon: <Award className="w-10 h-10" /> },
  { id: 3, value: '1,091', label: 'قضية ناجحة', icon: <Gavel className="w-10 h-10" /> },
  { id: 4, value: '94', label: 'عميل راضٍ', icon: <Users className="w-10 h-10" /> },
];

export const FAQS = [
  { question: 'هل كل مسألة تُسايرني يجب أن تصل للمحكمة؟', answer: 'ليس بالضرورة. هناك العديد من الطرق البديلة لتسوية المنازعات قبل الوصول للمحكمة مثل التفاوض والوساطة.' },
  { question: 'كيف يتم فترة معاملاتي القانونية في المكتب؟', answer: 'نحن نتبع نظاماً دقيقاً في متابعة المعاملات وإطلاع العميل على المستجدات عبر تقارير دورية.' },
  { question: 'ماذا يجب عليّ إحضاره عند لقائي الأول بالمحام؟', answer: 'يفضل إحضار كافة المستندات والوثائق المتعلقة بالحالة وهوية الأطراف المعنية.' },
  { question: 'كم عادةً تستغرق العملية القانونية؟', answer: 'تختلف المدة بناءً على نوع القضية وتعقيداتها، ولكننا نسعى دائماً للإنجاز ضمن جدول زمني واضح.' },
  { question: 'ما هو نوع القضايا التي يعمل عليها مكتب المحاماة؟', answer: 'نحن نعمل على مختلف القضايا التجارية، العمالية، الجنائية، والأحوال الشخصية وحوكمة الشركات.' },
  { question: 'ما مدى الخبرة التي يمتلكها مكتب المحاماة لديكم؟', answer: 'يمتلك مكتبنا خبرة تمتد لأكثر من 15 عاماً في الأنظمة والقضاء السعودي.' },
];
