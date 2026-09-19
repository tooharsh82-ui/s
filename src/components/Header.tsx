import { useState, useEffect } from 'react';
import { Menu, X, Globe, PhoneCall } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  onBookClick: () => void;
}

export default function Header({ lang, setLang, onBookClick }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLang(lang === 'hi' ? 'en' : 'hi');
  };

  const menuItems = [
    { name: t.quickLinks, href: '#home' },
    { name: lang === 'hi' ? 'हमारे बारे में' : 'About', href: '#about' },
    { name: t.services, href: '#services' },
    { name: t.portfolio, href: '#portfolio' },
    { name: lang === 'hi' ? 'कार्यप्रक्रिया' : 'Process', href: '#process' },
    { name: t.contact, href: '#contact' },
  ];

  return (
    <header
      id="header-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav border-b border-white/5 py-3 shadow-lg shadow-black/50'
          : 'bg-gradient-to-b from-black/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <a href="#home" className="flex items-center gap-3 group">
            {/* Display uploaded brand logo */}
            <div className="relative w-12 h-12 bg-white/5 rounded-lg overflow-hidden border border-amber-400/20 p-1 flex items-center justify-center transition-all group-hover:border-amber-400">
              <img
                src="/input_file_0.png"
                alt="Raj Video Logo"
                className="w-full h-full object-contain filter invert"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback if local image doesn't resolve in some environments
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className="absolute font-serif text-lg font-bold text-amber-400">RV</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl sm:text-2xl font-bold tracking-wider text-white group-hover:text-amber-400 transition-colors">
                {t.brandName}
              </span>
              <span className="font-mono text-[9px] tracking-widest text-amber-400/80 uppercase">
                {t.brandSubtitle}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-sans text-sm font-medium tracking-wide text-gray-300 hover:text-amber-400 transition-colors uppercase"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language switch button */}
            <button
              onClick={toggleLanguage}
              className="px-3 py-1.5 rounded-full border border-amber-400/30 bg-amber-400/5 hover:bg-amber-400/10 hover:border-amber-400 text-xs font-semibold tracking-wider text-amber-400 flex items-center gap-1.5 transition-all"
              title="Toggle Language / भाषा बदलें"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang === 'hi' ? '🇬🇧 EN' : '🇮🇳 हि'}</span>
            </button>

            <button
              onClick={onBookClick}
              className="relative overflow-hidden px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-400 text-black text-xs font-bold tracking-widest uppercase rounded-sm hover:shadow-lg hover:shadow-amber-500/20 hover:scale-[1.02] transition-all flex items-center gap-2"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>{t.bookNow}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            {/* Mobile Language switch */}
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-full border border-amber-400/20 bg-amber-400/5 text-amber-400 text-xs font-bold"
            >
              {lang === 'hi' ? 'EN' : 'हिन्दी'}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full min-h-[40vh] bg-[#0E0E0E] border-b border-white/5 px-6 py-8 flex flex-col gap-6 shadow-2xl animate-fade-in-up">
          <div className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-display text-lg font-medium text-gray-200 hover:text-amber-400 py-2 border-b border-white/5 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 mt-4">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full py-3.5 bg-amber-400 text-black text-sm font-bold tracking-widest uppercase text-center rounded-sm transition-all flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>{t.bookNow}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
