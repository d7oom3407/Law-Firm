
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

const App: React.FC = () => {
  const [lang, setLang] = useState<'ar' | 'en'>('ar');

  const toggleLang = () => {
    setLang(prev => prev === 'ar' ? 'en' : 'ar');
    const html = document.documentElement;
    if (lang === 'ar') {
      html.dir = 'ltr';
      html.lang = 'en';
    } else {
      html.dir = 'rtl';
      html.lang = 'ar';
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar lang={lang} toggleLang={toggleLang} />
      <main className="flex-grow">
        <Home lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
};

export default App;
