
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

interface NavbarProps {
  lang: 'ar' | 'en';
  toggleLang: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, toggleLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const logoUrl = "https://i0.wp.com/wejdanlaw.sa/wp-content/uploads/2024/03/L-2.png?w=513&ssl=1";

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-legal-dark shadow-2xl py-2 border-b border-legal-gold/30' : 'bg-legal-dark py-4 border-b border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* Logo Container with background for visibility - On the right in RTL */}
          <button 
            onClick={() => scrollToSection('home')} 
            className="flex items-center group outline-none order-last md:order-last"
          >
            <div className="bg-white/95 p-2 rounded-sm shadow-lg transition-all duration-300 group-hover:bg-white group-hover:scale-105">
              <img 
                src={logoUrl} 
                alt="Wejdan Law Logo" 
                className="h-10 md:h-14 w-auto object-contain"
              />
            </div>
          </button>

          {/* Desktop Nav - On the left in RTL */}
          <div className="hidden lg:flex items-center gap-10 order-first md:order-first">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.href)}
                className="text-white hover:text-legal-gold transition-all text-sm md:text-base font-bold tracking-wide relative group outline-none"
              >
                {item.label}
                <span className="absolute bottom-[-6px] left-0 w-0 h-[2px] bg-legal-gold transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center order-first">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white p-2 hover:bg-white/5 rounded-sm transition-colors outline-none border border-white/10"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 bg-black/70 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Mobile Nav Sidebar */}
      <div className={`lg:hidden fixed top-0 right-0 w-[300px] h-full bg-legal-dark z-50 shadow-2xl transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-10 border-b border-white/10 pb-6">
            <div className="bg-white p-2 rounded-sm">
              <img src={logoUrl} alt="Logo" className="h-8 w-auto" />
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white p-1 hover:bg-white/10 rounded-full transition-colors">
              <X size={24} />
            </button>
          </div>
          
          <div className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-right px-4 py-4 text-lg font-bold text-white hover:text-legal-gold hover:bg-white/5 border-b border-white/5 transition-all rounded-sm outline-none"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="mt-auto pt-10 border-t border-white/10">
            <p className="text-legal-gold text-center font-black text-sm uppercase tracking-widest mb-4">تواصل معنا</p>
            <div className="flex flex-col gap-3 text-center text-gray-400 text-sm font-medium">
              <a href="tel:00966570571891" className="hover:text-white transition-colors">00966570571891</a>
              <a href="mailto:contact@wejdanlaw.sa" className="hover:text-white transition-colors">contact@wejdanlaw.sa</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
