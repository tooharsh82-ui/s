import { Star, MessageSquare } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS, TESTIMONIALS } from '../data';

interface TestimonialsProps {
  lang: Language;
}

export default function Testimonials({ lang }: TestimonialsProps) {
  const t = TRANSLATIONS[lang];

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-[#0C0C0C] text-white overflow-hidden border-t border-b border-white/5 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-amber-400/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-400/10 border border-amber-400/20 text-amber-400 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{lang === 'hi' ? 'खुशहाल परिवार' : 'HEARTFELT THANKS'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {t.whatFamiliesSay}
          </h2>
          <div className="w-16 h-1.5 bg-amber-400 mx-auto rounded-full mb-4" />
          <p className="font-sans text-gray-400 text-base sm:text-lg">
            {t.whatFamiliesSaySub}
          </p>
        </div>

        {/* 3 Testimonial Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="bg-[#121212]/80 border border-white/5 p-8 sm:p-10 rounded-lg hover:border-amber-400/40 hover:shadow-2xl hover:shadow-amber-400/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Top half / review text */}
              <div>
                {/* Visual quote indicator */}
                <span className="font-serif text-6xl text-amber-400/20 leading-none block h-4 select-none">“</span>
                <p className="font-sans text-sm sm:text-base text-gray-350 leading-relaxed italic mb-8 relative z-10 text-gray-300">
                  {lang === 'hi' ? review.reviewHi : review.reviewEn}
                </p>
              </div>

              {/* Bottom half / user info */}
              <div className="border-t border-white/5 pt-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* User Profile avatar */}
                  <img
                    src={review.avatarUrl}
                    alt={lang === 'hi' ? review.nameHi : review.nameEn}
                    className="w-12 h-12 rounded-full object-cover border border-amber-400/30"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200";
                    }}
                  />
                  <div className="text-left">
                    <h4 className="font-display text-sm font-bold text-white">
                      {lang === 'hi' ? review.nameHi : review.nameEn}
                    </h4>
                    <span className="font-mono text-[9px] text-amber-400 uppercase font-bold tracking-widest block">
                      {lang === 'hi' ? review.locationHi : review.locationEn}
                    </span>
                  </div>
                </div>

                {/* Rating score stars */}
                <div className="flex items-center gap-0.5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#F4C430] text-[#F4C430]" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
