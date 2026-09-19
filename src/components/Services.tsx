import { Sparkles, Check, Flame, ChevronRight, HelpCircle } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS, SERVICE_PACKAGES } from '../data';

interface ServicesProps {
  lang: Language;
  onBookPackage: (packageName: string) => void;
  onViewFlyerClick: () => void;
}

export default function Services({ lang, onBookPackage, onViewFlyerClick }: ServicesProps) {
  const t = TRANSLATIONS[lang];

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#0B0B0B] text-white relative overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-400/5 blur-[120px] rounded-full z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-400/10 border border-amber-400/20 text-amber-400 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            <Flame className="w-3.5 h-3.5" />
            <span>{lang === 'hi' ? 'सर्वश्रेष्ठ दरें एवं पैकेज' : 'EXCLUSIVE PRICING & DEALS'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {t.ourServices}
          </h2>
          <div className="w-16 h-1.5 bg-amber-400 mx-auto rounded-full mb-4" />
          <p className="font-sans text-gray-400 text-base sm:text-lg">
            {t.ourServicesSub}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto items-stretch">
          
          {SERVICE_PACKAGES.map((pkg) => {
            const isPopular = pkg.isPopular;
            const pkgName = lang === 'hi' ? pkg.nameHi : pkg.nameEn;
            const pkgDesc = lang === 'hi' ? pkg.descriptionHi : pkg.descriptionEn;
            const features = lang === 'hi' ? pkg.featuresHi : pkg.featuresEn;

            return (
              <div
                key={pkg.id}
                className={`relative flex flex-col justify-between rounded-lg p-8 sm:p-10 transition-all duration-300 ${
                  isPopular
                    ? 'bg-[#121212] border-2 border-amber-400 shadow-2xl shadow-amber-400/10 scale-102 lg:-translate-y-2'
                    : 'bg-[#101010] border border-white/5 hover:border-white/20'
                }`}
              >
                {/* Popular Highlight Badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-gold-gradient text-black font-display font-bold text-xs tracking-widest uppercase shadow-lg shadow-amber-500/30">
                      <Sparkles className="w-3.5 h-3.5 fill-black" />
                      {t.popularBadge}
                    </span>
                  </div>
                )}

                {/* Card Top Section */}
                <div>
                  <div className="flex items-center justify-between mb-4 mt-2">
                    <h3 className="font-serif text-2xl font-bold tracking-wide text-white">
                      {pkgName}
                    </h3>
                  </div>

                  <p className="font-sans text-sm text-gray-400 leading-relaxed mb-8">
                    {pkgDesc}
                  </p>

                  {/* Price Banner */}
                  <div className="border-t border-b border-white/5 py-5 mb-8 flex items-baseline gap-3">
                    <span className="text-gray-400 font-mono text-xs uppercase tracking-widest">{t.startingFrom}</span>
                    <span className="font-display text-4xl sm:text-5xl font-black text-amber-400 tracking-tight">
                      {pkg.price}
                    </span>
                    <span className="text-gray-500 font-mono text-xs">/ {lang === 'hi' ? 'पूर्ण उत्सव' : 'Full Event'}</span>
                  </div>

                  {/* Features Bullet List */}
                  <div className="space-y-3.5 mb-10">
                    <span className="text-xs font-mono uppercase text-gray-400 tracking-widest block mb-4">
                      {lang === 'hi' ? 'विशेषताओं की विस्तृत सूची:' : 'Package Inclusions:'}
                    </span>
                    {features.map((feat, idx) => (
                      <div key={idx} className="flex gap-3 items-start text-left">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          isPopular ? 'bg-amber-400/20 text-amber-400' : 'bg-white/10 text-white'
                        }`}>
                          <Check className="w-3 h-3 stroke-[3px]" />
                        </div>
                        <span className="font-sans text-sm sm:text-base text-gray-200 font-medium">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="mt-auto pt-6 border-t border-white/5 flex flex-col gap-3">
                  <button
                    onClick={() => onBookPackage(pkgName)}
                    className={`w-full py-4 text-xs font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isPopular
                        ? 'bg-amber-400 hover:bg-[#F4C430] text-black hover:shadow-lg hover:shadow-amber-400/20'
                        : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                  >
                    <span>{t.bookNow}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={onViewFlyerClick}
                    className="text-xs text-gray-400 hover:text-amber-400 underline underline-offset-4 font-mono tracking-wider pt-2 text-center transition-colors"
                  >
                    {lang === 'hi' ? 'चुन्नू जी का मूल छपा पैम्फलेट देखें 📄' : 'See Chunnu Ji’s original printing flyer 📄'}
                  </button>
                </div>
              </div>
            );
          })}

        </div>

        {/* Note block */}
        <div className="max-w-3xl mx-auto text-center mt-16 bg-white/5 p-6 rounded-sm border border-white/5">
          <div className="inline-flex items-center gap-1.5 text-amber-400 font-mono text-xs uppercase tracking-widest mb-1.5">
            <HelpCircle className="w-4 h-4" />
            <span>{lang === 'hi' ? 'विशेष पूछताछ' : 'CUSTOM REQUIREMENTS?'}</span>
          </div>
          <p className="font-sans text-sm text-gray-400 leading-relaxed">
            {lang === 'hi' 
              ? "यदि आपकी शादी बक्सर, पटना, आरा से बाहर किसी अन्य जिले में है, या आप अतिरिक्त कैमरा यूनिट जोड़ना चाहते हैं, तो बेझिझक हमसे चर्चा करें। हम आपकी ज़रूरतों के हिसाब से कस्टमाइज़ ऑफर तैयार करेंगे।"
              : "If your celebrations are happening outside of Patna, Ara, or Buxar, or you want to arrange custom crane cameras, multicams or on-site studio printing, click Book Now to talk directly to Chunnu Ji."}
          </p>
        </div>

      </div>
    </section>
  );
}
