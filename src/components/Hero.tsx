import { ArrowRight, Trophy, Sparkles, Heart } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data';

interface HeroProps {
  lang: Language;
  onBookClick: () => void;
  onViewWorkClick: () => void;
  onViewFlyerClick: () => void;
}

export default function Hero({ lang, onBookClick, onViewWorkClick, onViewFlyerClick }: HeroProps) {
  const t = TRANSLATIONS[lang];

  return (
    <section id="home" className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Cinematic Visual */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#000000]/65 z-10" /> {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-black/80 z-10" />
        <img
          src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=90&w=1920"
          alt="Cinematic Indian Wedding background"
          className="w-full h-full object-cover scale-105 animate-[pulse_8s_infinite_alternate] transition-all duration-[10000ms] ease-out object-center"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex items-center pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Elegant 25-Year Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-6 animate-pulse">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.twentyFiveYearsBadge}</span>
            </div>

            {/* Bilingual Headings */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5.5xl font-bold text-white tracking-tight leading-tight mb-6">
              hello world
            </h1>

            {/* Sub-heading description */}
            <p className="font-sans text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
              {t.subTagline}
            </p>

            {/* Custom CTA Actions */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onBookClick}
                className="w-full sm:w-auto px-8 py-4 bg-amber-400 hover:bg-amber-500 text-black text-xs font-bold tracking-widest uppercase rounded-sm hover:shadow-lg hover:shadow-amber-400/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{t.bookNow}</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <button
                onClick={onViewWorkClick}
                className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/5 text-white text-xs font-bold tracking-widest uppercase rounded-sm border border-white/20 hover:border-amber-400 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{t.viewWork}</span>
              </button>

              <button
                onClick={onViewFlyerClick}
                className="w-full sm:w-auto px-5 py-3 text-amber-400 hover:text-white text-xs font-bold tracking-wider underline underline-offset-4 decoration-amber-400 hover:decoration-white transition-all text-center flex items-center justify-center gap-1.5"
              >
                <span>{t.viewFlyerBtn}</span>
              </button>
            </div>
          </div>

          {/* Right Floating Statistics Grid */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-4 relative">
            {/* Subtle decorative line element matching the layout in image 4 */}
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-0.5 h-3/4 bg-gradient-to-b from-transparent via-amber-400/30 to-transparent hidden lg:block" />

            {/* Card 1: 25+ Years Experience */}
            <div className="glass-card p-6 flex items-center gap-5 translate-x-0 tracking-wide border-l-2 border-l-amber-400">
              <div className="w-12 h-12 rounded-full bg-amber-400/10 flex items-center justify-center text-amber-400 shrink-0">
                <Trophy className="w-6 h-6" />
              </div>
              <div>
                <div className="font-display text-2.5xl sm:text-3xl font-bold text-white tracking-tight">25+</div>
                <div className="font-sans text-xs sm:text-sm text-gray-400 uppercase font-medium tracking-widest">
                  {lang === 'hi' ? 'वर्षों का भरोसा' : 'Years Experience'}
                </div>
              </div>
            </div>

            {/* Card 2: 5000+ Events Covered */}
            <div className="glass-card p-6 flex items-center gap-5 translate-x-2 border-l-2 border-l-amber-500">
              <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <div className="font-display text-2.5xl sm:text-3xl font-bold text-white tracking-tight">5000+</div>
                <div className="font-sans text-xs sm:text-sm text-gray-400 uppercase font-medium tracking-widest">
                  {lang === 'hi' ? 'कवर किये गए भव्य आयोजन' : 'Events Covered'}
                </div>
              </div>
            </div>

            {/* Card 3: 100% Client Satisfaction */}
            <div className="glass-card p-6 flex items-center gap-5 translate-x-4 border-l-2 border-l-amber-300">
              <div className="w-12 h-12 rounded-full bg-amber-300/10 flex items-center justify-center text-amber-300 shrink-0">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <div className="font-display text-2.5xl sm:text-3xl font-bold text-white tracking-tight">100%</div>
                <div className="font-sans text-xs sm:text-sm text-gray-400 uppercase font-medium tracking-widest">
                  {lang === 'hi' ? 'संतुष्ट खुशहाल परिवार' : 'Client Satisfaction'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cinematic subtle grid frame overlays */}
      <div className="absolute bottom-6 left-12 z-20 hidden md:flex items-center gap-2 font-mono text-[10px] text-gray-500 tracking-wider">
        <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-ping" />
        <span>CINEMATIC GRADE PRESET: COLD GOLD v2.06</span>
      </div>
      <div className="absolute bottom-6 right-12 z-20 hidden md:block font-mono text-[10px] text-gray-500 tracking-widest">
        <span>EST. 1999 // BIHAR & UP</span>
      </div>
    </section>
  );
}
