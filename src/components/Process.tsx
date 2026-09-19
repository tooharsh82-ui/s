import { Calendar, Compass, Camera, Palette, Box } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS, PROCESS_STEPS } from '../data';

interface ProcessProps {
  lang: Language;
}

export default function Process({ lang }: ProcessProps) {
  const t = TRANSLATIONS[lang];

  // Helper icons associated with each step number
  const stepIconsIndex = [
    <Calendar className="w-5 h-5" key="i1" />,
    <Compass className="w-5 h-5" key="i2" />,
    <Camera className="w-5 h-5" key="i3" />,
    <Palette className="w-5 h-5" key="i4" />,
    <Box className="w-5 h-5" key="i5" />,
  ];

  return (
    <section id="process" className="py-24 sm:py-32 bg-[#0E0E0E] text-white overflow-hidden relative">
      {/* Decorative vertical track line in background */}
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent via-amber-400/20 to-transparent hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-400/10 border border-amber-400/20 text-amber-400 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            <Compass className="w-3.5 h-3.5 animate-spin-slow" />
            <span>{lang === 'hi' ? 'व्यवस्थित कार्यप्रणाली' : 'WORKFLOW METRICS'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {t.howWeWork}
          </h2>
          <div className="w-16 h-1.5 bg-amber-400 mx-auto rounded-full mb-4" />
          <p className="font-sans text-gray-400 text-base sm:text-lg">
            {t.howWeWorkSub}
          </p>
        </div>

        {/* Timeline Flow */}
        <div className="relative max-w-5xl mx-auto flex flex-col gap-12 sm:gap-16">
          {PROCESS_STEPS.map((step, idx) => {
            const isEven = idx % 2 === 0;
            const icon = stepIconsIndex[idx] || <Calendar className="w-5 h-5" />;

            return (
              <div
                key={step.stepNumber}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Visual Step Info Module */}
                <div className="lg:w-1/2 w-full flex justify-center lg:justify-end text-center lg:text-right even:lg:justify-start even:lg:text-left">
                  <div
                    className={`max-w-md w-full glass-card p-8 rounded-lg relative border-l-2 ${
                      isEven ? 'lg:border-l-0 lg:border-r-2 lg:border-r-amber-405 border-l-amber-400' : 'border-l-amber-500'
                    }`}
                  >
                    {/* Floating Step Number Badge */}
                    <div className="font-display text-[8px] font-bold text-amber-400 tracking-widest uppercase mb-1">
                      {lang === 'hi' ? `चरण ${step.stepNumber}` : `STATION ${step.stepNumber}`}
                    </div>
                    
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-white mb-3">
                      {lang === 'hi' ? step.titleHi : step.titleEn}
                    </h3>

                    <p className="font-sans text-sm sm:text-base text-gray-450 leading-relaxed text-gray-300">
                      {lang === 'hi' ? step.descHi : step.descEn}
                    </p>
                  </div>
                </div>

                {/* Center Circle Indicator */}
                <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-black border-2 border-amber-500 flex items-center justify-center shrink-0 z-20 text-amber-400 font-bold hidden lg:flex">
                  {icon}
                </div>

                {/* Spacing Offset Filler Column */}
                <div className="lg:w-1/2 hidden lg:block" />

              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
