
import React from 'react';
import { Phone, Mail, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

interface FooterProps {
  lang: 'ar' | 'en';
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  const isRtl = lang === 'ar';
  const ArrowIcon = isRtl ? ChevronLeft : ChevronRight;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else if (id === 'home' || id === '') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const logoUrl = "https://i0.wp.com/wejdanlaw.sa/wp-content/uploads/2024/03/L-2.png?w=513&ssl=1";

  const navItems = NAV_ITEMS.map(item => ({
    ...item,
    label: lang === 'en' ? (
      item.id === 'home' ? 'Home' :
      item.id === 'about' ? 'About Us' :
      item.id === 'services' ? 'Services' :
      item.id === 'consultation' ? 'Consultation' :
      item.id === 'contact' ? 'Contact' : 'FAQ'
    ) : item.label
  }));

  return (
    <footer className="bg-legal-dark text-white pt-16 pb-8 border-t border-legal-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          {/* Brand Column */}
          <div className="space-y-8 text-center md:text-right">
            <button onClick={() => scrollToSection('home')} className="inline-block group outline-none">
              <div className="bg-white/95 p-4 rounded-sm shadow-xl transition-all duration-300 group-hover:bg-white group-hover:scale-105 inline-block mb-4">
                <img 
                  src={logoUrl} 
                  alt="Wejdan Law Logo" 
                  className="h-20 w-auto object-contain"
                />
              </div>
            </button>
            <p className="text-gray-400 text-base leading-relaxed">
              {lang === 'ar'
                ? 'نلتزم بتقديم خدمات قانونية شاملة ومحترفة لعملائنا. نحن مكتب محاماة يجمع بين الخبرة الواسعة والرؤية الابتكارية لنقدم لكم حلاً فعالاً وشخصياً لتحقيق أهدافكم القانونية.'
                : 'We are committed to providing comprehensive and professional legal services. We combine extensive experience with innovative vision to provide effective and personalized legal solutions.'}
            </p>
          </div>

          {/* Links Column */}
          <div className="text-center md:text-right">
            <h3 className="text-legal-gold text-xl font-black mb-10 relative inline-block">
              {lang === 'ar' ? 'روابط مهمة' : 'Quick Links'}
              <span className="absolute -bottom-3 right-0 w-16 h-[3px] bg-legal-gold"></span>
            </h3>
            <ul className="space-y-5">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button 
                    onClick={() => scrollToSection(item.href)} 
                    className="flex items-center justify-center md:justify-start gap-3 text-gray-400 hover:text-legal-gold transition-colors font-medium outline-none"
                  >
                    <ArrowIcon size={16} className="text-legal-gold" />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="text-center md:text-right">
            <h3 className="text-legal-gold text-xl font-black mb-10 relative inline-block">
              {lang === 'ar' ? 'تواصل معنا' : 'Contact Us'}
              <span className="absolute -bottom-3 right-0 w-16 h-[3px] bg-legal-gold"></span>
            </h3>
            <ul className="space-y-8">
              <li className="flex flex-col items-center md:items-start gap-2">
                <div className="flex items-center gap-3 text-legal-gold font-bold">
                  <Phone size={20} />
                  <span>{lang === 'ar' ? 'الهاتف' : 'Phone'}</span>
                </div>
                <a href="tel:00966570571891" className="text-gray-400 text-lg hover:text-white transition-colors">00966570571891</a>
              </li>
              <li className="flex flex-col items-center md:items-start gap-2">
                <div className="flex items-center gap-3 text-legal-gold font-bold">
                  <Mail size={20} />
                  <span>{lang === 'ar' ? 'البريد الإلكتروني' : 'Email'}</span>
                </div>
                <a href="mailto:contact@wejdanlaw.sa" className="text-gray-400 text-lg hover:text-white transition-colors">contact@wejdanlaw.sa</a>
              </li>
              <li className="flex flex-col items-center md:items-start gap-2">
                <div className="flex items-center gap-3 text-legal-gold font-bold">
                  <MapPin size={20} />
                  <span>{lang === 'ar' ? 'الموقع' : 'Location'}</span>
                </div>
                <span className="text-gray-400 text-sm leading-relaxed max-w-[250px]">
                  {lang === 'ar' 
                    ? 'الرياض - الوادي - طريق أبو بكر الصديق - 13313' 
                    : 'Riyadh - Al-Wadi - Abu Bakr Al-Siddiq Road - 13313'}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <p>© 2024 {lang === 'ar' ? 'مكتب وجدان الصالحي للمحاماة. جميع الحقوق محفوظة.' : 'Wejdan Al-Salhi Law Firm. All rights reserved.'}</p>
          <div className="flex gap-8">
            <button className="hover:text-legal-gold transition-colors outline-none">{lang === 'ar' ? 'شروط الاستخدام' : 'Terms of Use'}</button>
            <button className="hover:text-legal-gold transition-colors outline-none">{lang === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
