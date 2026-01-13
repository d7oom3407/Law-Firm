
import React, { useState } from 'react';
import { ArrowUpRight, Scale, CheckCircle, Plus, Minus, ArrowLeft, Mail, Phone, MapPin, Send } from 'lucide-react';
import { FEATURES, SERVICES_LIST, STATS, FAQS } from '../constants';

interface HomeProps {
  lang: 'ar' | 'en';
}

const Home: React.FC<HomeProps> = ({ lang }) => {
  const isRtl = lang === 'ar';
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactData, setContactData] = useState({ name: '', email: '', subject: '', message: '' });

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
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contactData.name && contactData.email && contactData.message) {
      setContactSubmitted(true);
      setTimeout(() => {
        setContactSubmitted(false);
        setContactData({ name: '', email: '', subject: '', message: '' });
      }, 5000);
    }
  };

  const partnerLogos = [
    "https://i0.wp.com/wejdanlaw.sa/wp-content/uploads/2024/08/444Artboard-2-copy.jpg?fit=300%2C206&ssl=1",
    "https://i0.wp.com/wejdanlaw.sa/wp-content/uploads/2024/08/444Artboard-2-copy-7.jpg?fit=300%2C206&ssl=1",
    "https://i0.wp.com/wejdanlaw.sa/wp-content/uploads/2024/08/444Artboard-2-copy-6.jpg?fit=300%2C206&ssl=1",
    "https://i0.wp.com/wejdanlaw.sa/wp-content/uploads/2024/08/444Artboard-2-copy-5.jpg?fit=300%2C206&ssl=1",
    "https://i0.wp.com/wejdanlaw.sa/wp-content/uploads/2024/08/444Artboard-2-copy-4.jpg?fit=300%2C206&ssl=1"
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center text-white overflow-hidden bg-[#050a18] pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=2070" 
            alt="Lady Justice Statue"
            className="w-full h-full object-cover opacity-40 grayscale saturate-50 brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c162d]/95 via-[#0c162d]/80 to-[#0c162d]/98"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h4 className="text-legal-gold text-base md:text-xl mb-6 font-bold tracking-[0.3em] animate-fade-in uppercase">
            {lang === 'ar' ? 'لا دعوى دون اعتبار' : 'No claim without consideration'}
          </h4>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-14 leading-[1.1] animate-fade-in tracking-tight" style={{ animationDelay: '0.2s' }}>
            {lang === 'ar' ? (
              <>نلتزم بأعلى معايير <br /> <span className="text-legal-gold">الشفافية والأخلاقيات</span></>
            ) : (
              <>Committed to the Highest <br /> <span className="text-legal-gold">Standards of Ethics</span></>
            )}
          </h1>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <button 
              onClick={() => scrollToSection('about')}
              className="order-2 sm:order-1 bg-transparent text-white border-2 border-white/20 px-14 py-5 rounded-sm font-black text-lg hover:bg-white hover:text-legal-dark hover:border-white transition-all duration-500 min-w-[220px] active:scale-95 shadow-2xl"
            >
              {lang === 'ar' ? 'من نحن' : 'Who We Are'}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="order-1 sm:order-2 bg-legal-gold text-white px-14 py-5 rounded-sm font-black text-lg flex items-center justify-center gap-3 hover:bg-[#a6855a] transition-all duration-500 shadow-[0_20px_50px_rgba(184,150,107,0.3)] min-w-[240px] active:scale-95 group"
            >
              {lang === 'ar' ? 'اطلب استشارة' : 'Book Consultation'} 
              <ArrowUpRight size={22} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-20 -mt-24 max-w-7xl mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] rounded-sm overflow-hidden bg-white">
          {FEATURES.map((feature, idx) => (
            <div 
              key={idx} 
              className={`p-12 text-center transition-all duration-500 border-gray-100 group ${feature.featured ? 'bg-legal-dark text-white' : 'hover:bg-gray-50 bg-white'} ${idx < FEATURES.length - 1 ? (isRtl ? 'lg:border-l' : 'lg:border-r') : ''}`}
            >
              <div className="flex justify-center mb-8 transform transition-transform group-hover:scale-110 duration-500">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-black mb-5">{feature.title}</h3>
              <p className={`text-base leading-relaxed ${feature.featured ? 'text-gray-400' : 'text-gray-500'}`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-white overflow-hidden scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 space-y-10">
            <div className="flex items-center gap-4">
              <span className="text-legal-gold font-black uppercase tracking-widest text-sm">— {lang === 'ar' ? 'عن المكتب' : 'About Us'}</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-legal-dark leading-tight">
              {lang === 'ar' ? 'من نحن؟' : 'Who Are We?'}
            </h2>
            <p className="text-gray-600 text-xl leading-relaxed max-w-2xl font-medium">
              {lang === 'ar' 
                ? 'في مكتب وجدان الصالحي للمحاماة، نحن نلتزم بتقديم خدمات قانونية شاملة ومحترفة لعملائنا. نحن مكتب محاماة يجمع بين الخبرة الواسعة والرؤية الابتكارية، لنقدم لكم حلاً فعالاً وشخصياً لتحقيق أهدافكم القانونية.'
                : 'At Wejdan Al-Salhi Law Firm, we are committed to providing comprehensive and professional legal services to our clients. We combine extensive experience with innovative vision to provide an effective and personalized solution to achieve your legal goals.'}
            </p>
            
            <div className="flex flex-wrap gap-16 pt-8">
              <div className="text-right">
                <span className="block text-5xl font-black text-legal-dark mb-2">15+</span>
                <span className="text-gray-400 text-xs font-black uppercase tracking-widest">{lang === 'ar' ? 'سنة من الخبرة' : 'Years of Experience'}</span>
              </div>
              <div className="text-right">
                <span className="block text-5xl font-black text-legal-dark mb-2">98%</span>
                <span className="text-gray-400 text-xs font-black uppercase tracking-widest">{lang === 'ar' ? 'قضايا ناجحة' : 'Successful Cases'}</span>
              </div>
              <div className="text-right">
                <span className="block text-5xl font-black text-legal-dark mb-2">1k+</span>
                <span className="text-gray-400 text-xs font-black uppercase tracking-widest">{lang === 'ar' ? 'عميل راضٍ' : 'Satisfied Clients'}</span>
              </div>
            </div>
          </div>
          <div className="flex-1 relative group">
            <div className="absolute -inset-6 bg-legal-gold/10 rounded-sm -z-10 transform rotate-2 group-hover:rotate-0 transition-transform duration-700"></div>
            <div className="w-full aspect-[3/4] overflow-hidden rounded-sm shadow-2xl relative z-10 border-[12px] border-white group-hover:scale-[1.02] transition-transform duration-700">
              <img 
                src="https://img.freepik.com/free-photo/still-life-world-intellectual-property-day_23-2151325900.jpg?semt=ais_hybrid&w=740&q=80" 
                alt="Professional Legal Gavel" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-[#fdfbf7] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h4 className="text-legal-gold font-black mb-6 uppercase tracking-[0.4em]">{lang === 'ar' ? '— خدماتنا —' : '— Our Services —'}</h4>
          <h2 className="text-5xl font-black text-legal-dark mb-24">{lang === 'ar' ? 'ما الذي نختص فيه؟' : 'Our Areas of Expertise'}</h2>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="flex-1 space-y-8 w-full text-right">
              {SERVICES_LIST.slice(0, 9).map((service) => (
                <div key={service.id} className="flex items-center gap-6 group cursor-pointer justify-start bg-white p-4 rounded-sm border border-transparent hover:border-legal-gold/20 hover:shadow-lg transition-all duration-300">
                  <div className="w-14 h-14 bg-legal-bg shadow-inner rounded-full flex items-center justify-center text-legal-gold group-hover:bg-legal-gold group-hover:text-white transition-all duration-500">
                    {service.icon}
                  </div>
                  <span className="text-legal-dark font-black text-xl group-hover:text-legal-gold transition-colors">{service.title}</span>
                </div>
              ))}
            </div>

            <div className="hidden lg:block relative flex-shrink-0 group">
               <div className="w-[420px] h-[620px] rounded-full overflow-hidden border-[20px] border-white shadow-2xl relative">
                 <img 
                  src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=1470" 
                  alt="Gavel Center" 
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                 />
                 <div className="absolute inset-0 bg-legal-dark/30 flex items-center justify-center group-hover:bg-transparent transition-all duration-1000">
                    <div className="p-10 bg-white/95 rounded-full border-2 border-legal-gold/50 shadow-2xl transform group-hover:scale-90 transition-transform">
                      <Scale className="text-legal-dark w-16 h-16" />
                    </div>
                 </div>
               </div>
            </div>

            <div className="flex-1 space-y-8 w-full text-right">
              {SERVICES_LIST.slice(9).map((service) => (
                <div key={service.id} className="flex items-center gap-6 group cursor-pointer justify-start bg-white p-4 rounded-sm border border-transparent hover:border-legal-gold/20 hover:shadow-lg transition-all duration-300">
                  <div className="w-14 h-14 bg-legal-bg shadow-inner rounded-full flex items-center justify-center text-legal-dark group-hover:bg-legal-dark group-hover:text-white transition-all duration-500">
                    {service.icon}
                  </div>
                  <span className="text-legal-dark font-black text-xl group-hover:text-legal-gold transition-colors">{service.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32 bg-white scroll-mt-20 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-24">
            <h4 className="text-legal-gold font-black mb-6 uppercase tracking-[0.4em]">{lang === 'ar' ? '— الأسئلة الشائعة —' : '— Common Questions —'}</h4>
            <h2 className="text-5xl font-black text-legal-dark mb-8">{lang === 'ar' ? 'تساؤلات تهمك' : 'Questions You Care About'}</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {FAQS.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-gray-50 rounded-sm overflow-hidden border border-gray-100 transition-all duration-300"
              >
                <button 
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className={`w-full flex items-center justify-between p-8 text-right transition-all duration-300 ${openFaqIndex === idx ? 'bg-legal-dark text-white' : 'hover:bg-white text-legal-dark'}`}
                >
                  <span className="text-xl font-black">{faq.question}</span>
                  <div className={`p-2 rounded-full ${openFaqIndex === idx ? 'bg-legal-gold text-white' : 'bg-legal-dark/10 text-legal-dark'}`}>
                    {openFaqIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                <div className={`transition-all duration-500 overflow-hidden ${openFaqIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="p-10 text-gray-600 leading-relaxed text-lg bg-white border-t border-gray-50 font-medium">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Clean solid background */}
      <section className="py-40 bg-legal-dark relative text-white">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-24">
            <span className="text-legal-gold font-black uppercase tracking-[0.5em] text-sm">{lang === 'ar' ? '— في أرقام —' : '— In Numbers —'}</span>
            <h2 className="text-5xl font-black mt-6 tracking-tight">{lang === 'ar' ? 'بعض ما حققناه' : 'Our Achievements'}</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-20 text-center">
            {STATS.map((stat) => (
              <div key={stat.id} className="space-y-6 group">
                <div className="flex justify-center text-legal-gold opacity-40 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700 mb-8">
                  {stat.icon}
                </div>
                <div className="text-6xl md:text-8xl font-black tracking-tighter text-white">{stat.value}</div>
                <div className="text-legal-gold font-black uppercase tracking-[0.3em] text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Section - Improved Visibility */}
      <section id="consultation" className="py-32 bg-white scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="relative h-[600px] rounded-sm overflow-hidden group shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1470" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]"
              alt="Consultation Background"
            />
            {/* High-contrast dark overlay to make white text pop */}
            <div className="absolute inset-0 bg-black/75 flex flex-col items-center justify-center text-center p-8 md:p-16 text-white transition-all duration-700">
              <span className="text-lg font-black mb-6 tracking-[0.5em] uppercase text-legal-gold drop-shadow-sm">
                {lang === 'ar' ? 'تحتاج المساعدة؟' : 'Need Help?'}
              </span>
              <h3 className="text-4xl md:text-6xl font-black mb-8 leading-tight drop-shadow-md">
                {lang === 'ar' ? 'احجز استشارتك الآن' : 'Book Your Consultation'}
              </h3>
              <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed opacity-95 italic font-medium drop-shadow-sm">
                {lang === 'ar' 
                  ? 'نحن نستجيب لعملائنا بمسار مهني واضح وواقعي ونوظف مهاراتنا حسب الاختصاص لتحقيق رضى العميل.'
                  : 'We respond to our clients with a clear and realistic professional path and employ our skills according to specialization to achieve client satisfaction.'}
              </p>
              
              {/* Gold button with white text is brand-consistent and highly visible against dark background */}
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-legal-gold text-white px-20 py-5 font-black hover:bg-[#a6855a] transition-all duration-500 uppercase tracking-widest text-xl shadow-[0_15px_40px_rgba(184,150,107,0.4)] active:scale-95"
              >
                {lang === 'ar' ? 'احجز الآن' : 'Book Now'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-gray-400 font-black mb-16 block uppercase tracking-[0.4em] text-sm">— {lang === 'ar' ? 'شركاء النجاح' : 'Success Partners'} —</span>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
            {partnerLogos.map((url, index) => (
              <div key={index} className="bg-white p-4 rounded-sm shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src={url} 
                  className="h-16 md:h-24 w-auto object-contain" 
                  alt={`Partner ${index + 1}`} 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-32 bg-legal-dark text-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="flex-1 space-y-10">
              <span className="text-legal-gold font-black uppercase tracking-[0.4em] text-sm">{lang === 'ar' ? '— تواصل معنا —' : '— Contact Us —'}</span>
              <h2 className="text-5xl font-black leading-tight">{lang === 'ar' ? 'هل لديك تساؤلات قانونية؟' : 'Have Legal Questions?'}</h2>
              <p className="text-gray-400 text-lg font-medium leading-relaxed max-w-xl">
                {lang === 'ar' 
                  ? 'نحن هنا لمساعدتك. قم بتعبئة النموذج وسيقوم أحد خبرائنا القانونيين بالتواصل معك في أقرب وقت ممكن.' 
                  : 'We are here to help. Fill out the form and one of our legal experts will contact you as soon as possible.'}
              </p>
              
              <div className="space-y-8 pt-8">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center text-legal-gold border border-white/10">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-legal-gold uppercase tracking-widest text-xs mb-1">{lang === 'ar' ? 'اتصل بنا' : 'Call Us'}</h4>
                    <p className="text-xl font-bold">00966570571891</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center text-legal-gold border border-white/10">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-legal-gold uppercase tracking-widest text-xs mb-1">{lang === 'ar' ? 'راسلنا' : 'Email Us'}</h4>
                    <p className="text-xl font-bold">contact@wejdanlaw.sa</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center text-legal-gold border border-white/10">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-legal-gold uppercase tracking-widest text-xs mb-1">{lang === 'ar' ? 'موقعنا' : 'Our Office'}</h4>
                    <p className="text-xl font-bold">{lang === 'ar' ? 'الرياض - الوادي' : 'Riyadh - Al-Wadi'}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <div className="bg-white/5 p-10 md:p-12 rounded-sm border border-white/10 shadow-2xl">
                {contactSubmitted ? (
                  <div className="py-20 flex flex-col items-center text-center space-y-6 animate-fade-in">
                    <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center">
                      <CheckCircle size={40} />
                    </div>
                    <h3 className="text-2xl font-black">{lang === 'ar' ? 'تم الإرسال بنجاح' : 'Message Sent!'}</h3>
                    <p className="text-gray-400">{lang === 'ar' ? 'شكراً لتواصلك معنا. سنرد عليك قريباً.' : 'Thank you for reaching out. We will get back to you soon.'}</p>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-gray-400">{lang === 'ar' ? 'الاسم الكامل' : 'Full Name'}</label>
                        <input 
                          type="text" 
                          required
                          value={contactData.name}
                          onChange={(e) => setContactData({...contactData, name: e.target.value})}
                          className="w-full bg-white/5 border border-white/10 p-4 rounded-sm outline-none focus:border-legal-gold transition-colors text-white text-right"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-gray-400">{lang === 'ar' ? 'البريد الإلكتروني' : 'Email'}</label>
                        <input 
                          type="email" 
                          required
                          value={contactData.email}
                          onChange={(e) => setContactData({...contactData, email: e.target.value})}
                          className="w-full bg-white/5 border border-white/10 p-4 rounded-sm outline-none focus:border-legal-gold transition-colors text-white text-right"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-gray-400">{lang === 'ar' ? 'الموضوع' : 'Subject'}</label>
                      <input 
                        type="text" 
                        value={contactData.subject}
                        onChange={(e) => setContactData({...contactData, subject: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 p-4 rounded-sm outline-none focus:border-legal-gold transition-colors text-white text-right"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-gray-400">{lang === 'ar' ? 'رسالتك' : 'Message'}</label>
                      <textarea 
                        required
                        rows={4}
                        value={contactData.message}
                        onChange={(e) => setContactData({...contactData, message: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 p-4 rounded-sm outline-none focus:border-legal-gold transition-colors text-white resize-none text-right"
                      ></textarea>
                    </div>
                    <button 
                      type="submit"
                      className="w-full bg-legal-gold hover:bg-[#a6855a] text-white py-5 rounded-sm font-black text-lg transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
                    >
                      {lang === 'ar' ? 'إرسال الرسالة' : 'Send Message'}
                      <Send size={20} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
