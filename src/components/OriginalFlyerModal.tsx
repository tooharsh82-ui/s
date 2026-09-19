import { X, ZoomIn, Download, HelpCircle, PhoneCall, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data';

interface OriginalFlyerModalProps {
  lang: Language;
  isOpen: boolean;
  onClose: () => void;
  onContactClick: () => void;
}

export default function OriginalFlyerModal({ lang, isOpen, onClose, onContactClick }: OriginalFlyerModalProps) {
  if (!isOpen) return null;
  const t = TRANSLATIONS[lang];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8 animate-fade-in-up">
      {/* Lightbox backdrop */}
      <div className="absolute inset-0 cursor-pointer" onClick={onClose} />

      {/* Close button top right */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 hover:bg-amber-400 hover:text-black text-white hover:scale-110 transition-all z-50 cursor-pointer"
        title={t.closeBtn}
      >
        <X className="w-6 h-6" />
      </button>

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl bg-[#141414] rounded-lg border border-amber-400/25 overflow-hidden shadow-2xl shadow-yellow-400/5 z-45 max-h-[90vh] flex flex-col justify-between">
        
        {/* Header bar */}
        <div className="p-4 sm:px-6 bg-[#0B0B0B] border-b border-white/5 flex items-center justify-between text-left">
          <div>
            <h3 className="font-serif text-lg font-bold text-amber-450 text-amber-400">
              {t.originalFlyerTitle}
            </h3>
            <p className="font-mono text-[9px] uppercase tracking-widest text-gray-500">
              {lang === 'hi' ? 'ऑफ़लाइन मुद्रित विवरण पत्र' : 'SCAN OF AUTHENTIC RATE BROCHURE'}
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-1 bg-amber-400/10 px-2.5 py-1 text-amber-400 text-xs font-mono font-bold rounded">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>ARAA REGIONAL BRAND</span>
          </div>
        </div>

        {/* Scrollable image segment */}
        <div className="flex-1 overflow-y-auto p-4 flex flex-col items-center bg-black/60 min-h-[300px]">
          
          <div className="relative group rounded overflow-hidden border border-white/10 max-w-lg shadow-xl shadow-black/80 bg-stone-900">
            {/* Direct image rendering pointed strictly to /input_file_2.png (Image 3) */}
            <img
              src="/input_file_2.png"
              alt="Raj Video Original Rate Chart flyer"
              className="max-w-full h-auto object-contain font-serif text-xs text-center p-8 bg-stone-150 text-black block rounded"
              referrerPolicy="no-referrer"
              onError={(e) => {
                // Highly detailed alternative mockup flyer render in case it fails in standalone runs
                e.currentTarget.style.display = 'none';
              }}
            />

            {/* Simulated Zoom indicator overlay */}
            <div className="absolute top-4 right-4 bg-black/80 p-2 rounded-sm border border-white/15 text-amber-400 z-10 font-mono text-[10px] uppercase tracking-widest flex items-center gap-1.5 pointer-events-none">
              <ZoomIn className="w-3.5 h-3.5" />
              <span>HIGH RESOLUTION ORIGINAL</span>
            </div>

            {/* Offline backup flyer presentation view */}
            <div className="p-8 text-black bg-stone-100 max-w-lg text-left font-sans block select-none border-t border-gray-300">
              <div className="flex items-center gap-3 mb-6 border-b border-gray-300 pb-4">
                <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white text-xl font-bold font-serif">
                  राज
                </div>
                <div>
                  <h4 className="font-serif text-xl font-black tracking-wide text-gray-900 leading-none">राज वीडियो</h4>
                  <span className="font-mono text-xs tracking-wider text-gray-600">📞 9334424964</span>
                </div>
              </div>

              <div className="space-y-4 text-xs leading-relaxed text-gray-800">
                <p className="font-bold underline text-sm text-gray-950 uppercase tracking-wider mb-2">वीडियोग्राफी और फोटोग्राफी सेवाएँ - एक पूरी योजना</p>
                
                <ol className="list-decimal pl-4 space-y-2.5 font-medium">
                  <li>चारों दिनों के कार्यक्रमों की पूरी <span className="font-bold text-gray-950">full hd (1080p)</span> वीडियोग्राफी और फोटोग्राफी कवरेज।</li>
                  <li>एक बड़ा खास शादी एलबम (12x36 इंच का वाटरप्रूफ एलिगेंट करिश्मा आकार, 40 पन्ने)।</li>
                  <li>सभी मांगलिक अवसरों का <span className="font-bold text-gray-950">hd (hd)</span> वीडियो फुटेज पेन ड्राइव में सुरक्षित।</li>
                </ol>

                <p className="font-bold pt-2 text-gray-950 border-t border-gray-200">विवाह के विशेष दिन के लिए खास:</p>
                <ul className="list-disc pl-4 space-y-1">
                  <li>कैंडिड फोटोग्राफी (प्राकृतिक पलों को सहेजने के लिए)।</li>
                  <li>एक अलग 25 पन्नों की खूबसूरत कैंडिड फोटो बुक।</li>
                  <li>विवाह की खास फिल्मी अंदाज़ में वीडियोग्राफी (Cinematic Wedding Film)।</li>
                  <li>लगभग 12 मिनट का विस्तृत सिनेमैटिक वीडियो।</li>
                  <li>1-2 मिनट का आकर्षक जादुई टीज़र (Teaser) वीडियो।</li>
                </ul>

                <p className="font-bold pt-2 text-gray-950 border-t border-gray-200">अतिरिक्त खास सेवाएं:</p>
                <p className="font-medium">1. ड्रोन कैमरा कवरेज (Drone Camera Aerial Series) - हवाई नज़ारों के लिए।</p>

                <div className="flex justify-between items-baseline pt-4 border-t-2 border-dashed border-gray-300 mt-4 bg-amber-400/5 p-3 rounded">
                  <span className="text-sm font-bold text-gray-900">कुल राशि:</span>
                  <span className="text-2xl font-black text-amber-700">₹85,000/- मात्र</span>
                </div>
                
                <p className="text-[10px] text-gray-600 italic text-center mt-2">"अपनी अनमोल यादों को खास बनाएं, राज वीडियो के साथ।"</p>
              </div>
            </div>
          </div>

          {/* Prompt explaining how the pamphlet was scanned */}
          <p className="font-mono text-[10px] text-gray-500 tracking-wider text-center mt-4">
            *THIS IS THE EXACT ARCHIVED LEGAL BOOKING PAMPHLET VERIFIED BY CHUNNU JI
          </p>

        </div>

        {/* Footer controls bar */}
        <div className="p-5 bg-[#0B0B0B] border-t border-white/5 flex flex-col sm:flex-row gap-3 items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-gray-400 font-mono">
            <HelpCircle className="w-4 h-4 text-amber-400" />
            <span>{lang === 'hi' ? 'दरों में कस्टमाइज़ेशन संभव है।' : 'Discounts apply on multi-day events.'}</span>
          </div>

          <div className="flex gap-2 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onContactClick();
              }}
              className="flex-1 sm:flex-none px-6 py-2.5 bg-amber-400 text-black text-xs font-bold tracking-widest uppercase rounded-sm hover:bg-amber-300 transition-colors flex items-center justify-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>{lang === 'hi' ? 'अभी कॉल करें' : 'CALL TO BOOK'}</span>
            </button>

            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-5 py-2.5 bg-white/5 border border-white/10 text-white text-xs font-bold tracking-widest uppercase rounded-sm hover:bg-white/10 transition-all"
            >
              {t.closeBtn}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
