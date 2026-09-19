import { MapPin, ShieldCheck, Star } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data';

interface AboutOwnerProps {
  lang: Language;
}

export default function AboutOwner({ lang }: AboutOwnerProps) {
  const t = TRANSLATIONS[lang];

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#0E0E0E] text-white overflow-hidden border-t border-b border-white/5">
      {/* Decorative vertical texts behind column */}
      <div className="absolute right-6 top-12 opacity-5 select-none hidden xl:block">
        <span className="font-display text-8xl font-black tracking-widest text-vertical text-white">RAJ VIDEO</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Photo Frame with Large Transparent Text behind it */}
          <div className="lg:col-span-6 relative flex justify-center items-center h-[500px] md:h-[600px] w-full">
            {/* Outline Text "OWNER" */}
            <div className="absolute -top-4 left-4 text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-transparent stroke-text select-none text-white/5 tracking-wider leading-none font-display">
              OWNER
            </div>

            {/* Outline Text "CHUNNU JI" */}
            <div className="absolute -bottom-6 right-0 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-transparent stroke-text select-none text-amber-400/5 tracking-widest leading-none font-display text-right">
              CHUNNU JI
            </div>

            {/* Glowing Accent Ring behind portrait */}
            <div className="absolute w-72 h-72 rounded-full bg-amber-400/5 blur-3xl z-0" />

            {/* Chunnu Ji Portrait Frame */}
            <div className="relative z-10 w-full max-w-sm sm:max-w-md h-[400px] sm:h-[500px] bg-gradient-to-t from-black/80 to-transparent rounded-lg overflow-hidden border border-white/5 group shadow-2xl shadow-black/80">
              {/* Gold frame brackets */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-amber-400 z-20" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-amber-400 z-20" />

              <img
                src="/input_file_1.png"
                alt="Chunnu Ji - Founder of Raj Video"
                className="w-full h-full object-contain object-bottom transition-all duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // If image fails to resolve, we show a highly styled camera lens backdrop
                  e.currentTarget.src = "https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=600";
                  e.currentTarget.className = "w-full h-full object-cover grayscale object-top";
                }}
              />
              
              {/* Profile Card Label at bottom of image */}
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/80 to-transparent flex items-end justify-between border-t border-white/5">
                <div>
                  <h4 className="font-display text-lg font-bold text-amber-400 tracking-wide">
                    {lang === 'hi' ? 'चुन्नू जी' : 'Chunnu Ji'}
                  </h4>
                  <p className="font-mono text-[10px] uppercase text-gray-400 tracking-wider">
                    {lang === 'hi' ? 'संस्थापक और क्रिएटिव डायरेक्टर' : 'Founder & Creative Director'}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-amber-400 font-mono text-xs font-bold px-2 py-1 bg-amber-400/10 rounded-sm">
                  <Star className="w-3 h-3 fill-amber-400" />
                  <span>25+ YRS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Text Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            <span className="font-mono text-xs uppercase tracking-widest text-amber-400 font-semibold mb-3">
              {t.aboutOwnerTitle}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-4.5xl font-bold tracking-tight text-white mb-2">
              {lang === 'hi' ? 'चुन्नू जी' : 'Chunnu Ji'}
            </h2>
            <div className="font-display text-xs uppercase tracking-wide text-gray-400 mb-6 border-l-2 border-amber-400 pl-3">
              {t.founderDesignation}
            </div>

            {/* Paragraphs */}
            <div className="font-sans text-gray-300 space-y-6 text-sm sm:text-base leading-relaxed mb-8">
              <p>{t.ownerBio1}</p>
              <p>{t.ownerBio2}</p>
            </div>

            {/* Primary locations list */}
            <div className="bg-white/5 rounded-sm p-5 border border-white/5 mb-6">
              <div className="flex items-center gap-2 text-amber-400 font-display text-xs uppercase font-medium tracking-wider mb-2">
                <MapPin className="w-4 h-4" />
                <span>{t.serviceLocationsLabel}</span>
              </div>
              <p className="font-serif text-lg text-white font-semibold">
                {t.locationsList}
              </p>
              <p className="font-mono text-[10px] text-gray-500 tracking-wide uppercase mt-1">
                {lang === 'hi' ? '*बिहार और उत्तर प्रदेश के प्रमुख जिलों में उपलब्ध' : '*Available across all district codes of BIH & UP'}
              </p>
            </div>

            {/* Team details paragraph */}
            <div className="flex gap-3 items-start font-sans text-xs sm:text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-6">
              <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <p>{t.teamExperienceText}</p>
            </div>
          </div>

        </div>
      </div>

      {/* Styled vector overlay details to make it feel like a high-end designer agency website */}
      <style>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.05);
        }
        .text-vertical {
          writing-mode: vertical-lr;
        }
      `}</style>
    </section>
  );
}
