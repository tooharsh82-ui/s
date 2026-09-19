import { Heart, Instagram, Facebook, Youtube, Flame } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data';

interface FooterProps {
  lang: Language;
}

export default function Footer({ lang }: FooterProps) {
  const t = TRANSLATIONS[lang];

  return (
    <footer className="bg-black text-gray-400 font-sans border-t border-white/5 py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 sm:gap-8 items-start mb-16 text-left">
          
          {/* Column 1: Brand & Bio */}
          <div className="md:col-span-4 flex flex-col items-start">
            <a href="#home" className="flex items-center gap-3 mb-6 group">
              <div className="relative w-10 h-10 bg-white/5 rounded-lg border border-amber-400/20 p-1 flex items-center justify-center">
                <img
                  src="/input_file_0.png"
                  alt="Raj Video Logo"
                  className="w-full h-full object-contain filter invert"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <span className="absolute font-serif text-sm font-bold text-amber-400">RV</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg font-bold tracking-wider text-white">
                  {t.brandName}
                </span>
                <span className="font-mono text-[8px] tracking-widest text-[#F4C430] uppercase">
                  {t.brandSubtitle}
                </span>
              </div>
            </a>
            
            <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-sm">
              {lang === 'hi'
                ? "राज वीडियो पिछले 25 वर्षों से बिहार और उत्तर प्रदेश के परिवारों के चेहरे पर मुस्कान बिखेर रहा है। हमारी विशेषज्ञ टीम हर मांगलिक कार्य को शाही फिल्म जैसा रूप देती है।"
                : "Capturing pristine wedding emotions for over 25 years. We document traditional legacy events across Bihar & UP with high-end cinematic equipment."}
            </p>

            {/* Social Media Indicators */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/5 hover:border-amber-400 text-gray-400 hover:text-amber-400 flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/5 hover:border-amber-400 text-gray-400 hover:text-amber-400 flex items-[#center] justify-center transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/5 hover:border-amber-400 text-gray-400 hover:text-amber-400 flex items-center justify-center transition-all"
                aria-label="Youtube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-2 flex flex-col items-start">
            <h4 className="font-display text-xs uppercase tracking-widest text-white font-bold mb-6">
              {t.quickLinks}
            </h4>
            <div className="flex flex-col gap-3 text-sm">
              <a href="#home" className="hover:text-amber-400 transition-colors uppercase text-xs">{lang === 'hi' ? 'होम' : 'Home'}</a>
              <a href="#about" className="hover:text-amber-400 transition-colors uppercase text-xs">{lang === 'hi' ? 'संस्थापक' : 'About'}</a>
              <a href="#services" className="hover:text-amber-400 transition-colors uppercase text-xs">{lang === 'hi' ? 'सेवा पैकेज' : 'Packages'}</a>
              <a href="#portfolio" className="hover:text-amber-400 transition-colors uppercase text-xs">{lang === 'hi' ? 'कविताओं' : 'Portfolio'}</a>
              <a href="#gallery" className="hover:text-amber-400 transition-colors uppercase text-xs">{lang === 'hi' ? 'गैलरी' : 'Gallery'}</a>
            </div>
          </div>

          {/* Column 3: Services */}
          <div className="md:col-span-3 flex flex-col items-start">
            <h4 className="font-display text-xs uppercase tracking-widest text-white font-bold mb-6">
              {t.services}
            </h4>
            <div className="flex flex-col gap-3 text-sm">
              <a href="#services" className="hover:text-amber-400 transition-colors">{lang === 'hi' ? 'तिलक और हल्दी उत्सव कवरेज' : 'Tilak & Haldi Sangeet'}</a>
              <a href="#services" className="hover:text-amber-400 transition-colors">{lang === 'hi' ? 'कैंडिड जयमाला फोटोग्राफी' : 'Candid Jaimala Photography'}</a>
              <a href="#services" className="hover:text-[#F4C430] transition-colors">{lang === 'hi' ? 'सिनेमैटिक वेडिग फिल्म्स' : 'Cinematic Wedding Teasers'}</a>
              <a href="#services" className="hover:text-amber-400 transition-colors">{lang === 'hi' ? 'वाटरप्रूफ करिश्मा एलबम' : 'Deluxe Karizma Albums'}</a>
              <a href="#services" className="hover:text-amber-400 transition-colors">{lang === 'hi' ? '4K एरियल ड्रोन वीडियोग्राफी' : '4K Aerial Drone Coverage'}</a>
            </div>
          </div>

          {/* Column 4: Contact details summary */}
          <div className="md:col-span-3 flex flex-col items-start">
            <h4 className="font-display text-xs uppercase tracking-widest text-white font-bold mb-6">
              {lang === 'hi' ? 'कार्यालय विवरण' : 'OFFICE CONTACTS'}
            </h4>
            <div className="flex flex-col gap-3 text-sm">
              <p className="text-gray-300">
                📍 Bind Toli, Ara, Bihar
              </p>
              <p className="font-mono text-gray-300 tracking-wider">
                📞 9334424964
              </p>
              <p className="text-gray-400 line-clamp-1">
                ✉️ rkmalakar9334@gmail.com
              </p>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#F4C430]/10 border border-amber-400/20 text-amber-400 rounded-sm text-[10px] font-mono uppercase tracking-wider mt-2">
                <Flame className="w-3 h-3 text-amber-400 animate-pulse" />
                <span>Open 7 Days // 9AM - 9PM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer bottom lines */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <p className="text-xs text-gray-500">
            {t.copyright}
          </p>
          <p className="text-xs text-gray-600 flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3 h-3 text-amber-500 fill-amber-500" />
            <span>for Bihar & UP families • {lang === 'hi' ? 'सदाबहार यादें' : 'Preserving Memories'}</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
