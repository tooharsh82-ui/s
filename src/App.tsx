/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Trust from './components/Trust';
import AboutOwner from './components/AboutOwner';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import PhotoGallery from './components/PhotoGallery';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import OriginalFlyerModal from './components/OriginalFlyerModal';
import { Language } from './types';
import { TRANSLATIONS } from './data';
import { Info, Sparkles, Check } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<Language>('hi');
  const [isFlyerModalOpen, setIsFlyerModalOpen] = useState(false);
  const [showInteractiveToast, setShowInteractiveToast] = useState(true);

  // Set page title dynamically depending on selected language
  useEffect(() => {
    document.title = lang === 'hi' 
      ? "राज वीडियो - 25 वर्षों का भरोसा, शादी फोटोग्राफी और सिनेमैटिक फिल्म्स"
      : "Raj Video - 25 Years of Trust, Premium Photography & Cinematic Wedding Films";
  }, [lang]);

  // Handle scrolling to contact section smoothly
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle scrolling to portfolio section smoothly
  const handleScrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookPackageClick = (packageName: string) => {
    handleScrollToContact();
    // Simulate interactive booking log trigger
    console.log(`User initiated booking for package: ${packageName}`);
  };

  return (
    <div className="relative bg-[#0B0B0B] text-white min-h-screen selection:bg-amber-400 selection:text-black">
      
      {/* Dynamic interactive announcement bar under header */}
      <div className="bg-amber-400 text-black py-2.5 px-4 text-center text-xs font-bold tracking-wide flex items-center justify-center gap-2 relative z-40">
        <Sparkles className="w-4 h-4 fill-black animate-pulse" />
        <span>
          {lang === 'hi' 
            ? "⭐ राज वीडियो आरा के 25 वर्ष पूर्ण - इस विवाह सीजन पर मिल रहा है विशेष ड्रोन उपहार! हमारी टीम से संपर्क करें।" 
            : "⭐ Celebrating 25 Glorious Years of Raj Video Ara - Get Free Aerial Drone Coverage this wedding season! Call now."}
        </span>
      </div>

      {/* Header Container */}
      <Header
        lang={lang}
        setLang={setLang}
        onBookClick={handleScrollToContact}
      />

      {/* Floating Floating Interactive Assist Overlay banner */}
      {showInteractiveToast && (
        <div className="fixed bottom-6 left-6 z-40 max-w-sm bg-black/90 border border-amber-400/30 rounded-md p-4 shadow-2xl backdrop-blur flex items-start gap-3.5 animate-fade-in-up">
          <div className="w-8 h-8 rounded-full bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
            <Info className="w-4 h-4" />
          </div>
          <div className="text-left">
            <h5 className="font-display text-xs font-bold text-white tracking-wide uppercase mb-1">
              {lang === 'hi' ? 'इंटरैक्टिव पूर्वावलोकन' : 'INTERACTIVE DEMO ACTIVE'}
            </h5>
            <p className="font-sans text-[11px] text-gray-400 leading-normal">
              {TRANSLATIONS[lang].interactiveModeOn}
            </p>
            <button
              onClick={() => setShowInteractiveToast(false)}
              className="mt-2 text-[10px] font-mono text-amber-400 hover:text-white font-bold flex items-center gap-1"
            >
              <Check className="w-3 h-3 stroke-[3px]" />
              <span>{lang === 'hi' ? 'गॉट इट!' : 'Got it!'}</span>
            </button>
          </div>
        </div>
      )}

      {/* Sub-sections layout flow */}
      <main className="relative">
        <Hero
          lang={lang}
          onBookClick={handleScrollToContact}
          onViewWorkClick={handleScrollToPortfolio}
          onViewFlyerClick={() => setIsFlyerModalOpen(true)}
        />
        
        <Trust lang={lang} />
        
        <AboutOwner lang={lang} />
        
        <Services
          lang={lang}
          onBookPackage={handleBookPackageClick}
          onViewFlyerClick={() => setIsFlyerModalOpen(true)}
        />
        
        <Portfolio lang={lang} />
        
        <PhotoGallery lang={lang} />
        
        <Process lang={lang} />
        
        <Testimonials lang={lang} />
        
        <Contact lang={lang} />
      </main>

      {/* Global visual Footer */}
      <Footer lang={lang} />

      {/* Lightbox original scanning brochure flyer modal */}
      <OriginalFlyerModal
        lang={lang}
        isOpen={isFlyerModalOpen}
        onClose={() => setIsFlyerModalOpen(false)}
        onContactClick={handleScrollToContact}
      />
    </div>
  );
}
