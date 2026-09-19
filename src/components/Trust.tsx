import * as Icons from 'lucide-react';
import { Language } from '../types';
import { TRUST_ITEMS, TRANSLATIONS } from '../data';

interface TrustProps {
  lang: Language;
}

export default function Trust({ lang }: TrustProps) {
  const t = TRANSLATIONS[lang];

  return (
    <section id="trust" className="py-24 sm:py-32 bg-[#0C0C0C] text-white overflow-hidden border-b border-white/5 relative">
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-amber-400/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-400/10 border border-amber-400/20 text-amber-400 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            <Icons.CheckCircle2 className="w-3.5 h-3.5" />
            <span>{lang === 'hi' ? 'भरोसा और गुणवत्ता' : 'TRUST & EXCELLENCE'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {t.whyTrustUs}
          </h2>
          <div className="w-16 h-1.5 bg-amber-400 mx-auto rounded-full mb-4" />
          <p className="font-sans text-gray-400 text-base sm:text-lg">
            {t.whyTrustUsSub}
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TRUST_ITEMS.map((item) => {
            // Dynamically instantiate lucide icon based on name
            const IconComponent = (Icons as any)[item.iconName] || Icons.CheckCircle2;

            return (
              <div
                key={item.id}
                className="group relative bg-[#121212]/70 hover:bg-[#161616] p-8 rounded-lg border border-white/5 hover:border-amber-400/40 hover:shadow-2xl hover:shadow-amber-400/10 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Accent Background Tag */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber-400/5 to-transparent rounded-tr-lg rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Icon Frame */}
                  <div className="w-12 h-12 rounded-lg bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center mb-6 group-hover:bg-[#F4C430] group-hover:text-black transition-all duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Trust Card Title */}
                  <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-amber-450 transition-colors duration-200">
                    {lang === 'hi' ? item.titleHi : item.titleEn}
                  </h3>

                  {/* Trust Card Description */}
                  <p className="font-sans text-sm sm:text-base text-gray-400 leading-relaxed">
                    {lang === 'hi' ? item.descHi : item.descEn}
                  </p>
                </div>

                {/* Corner detail */}
                <div className="mt-8 flex justify-end">
                  <div className="w-5 h-1 bg-white/10 group-hover:w-16 group-hover:bg-[#F4C430] transition-all duration-300" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
