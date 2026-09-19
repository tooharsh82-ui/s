import { useState } from 'react';
import { MapPin, Phone, Mail, Link, MessageSquareHeart, Check, Copy } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data';

interface ContactProps {
  lang: Language;
}

export default function Contact({ lang }: ContactProps) {
  const t = TRANSLATIONS[lang];
  const [copied, setCopied] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showNumber, setShowNumber] = useState(false);

  const phoneNumber = "9334424964";
  const emailAddress = "rkmalakar9334@gmail.com";

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#0B0B0B] text-white overflow-hidden border-t border-white/5">
      {/* Background neon radial glow and golden grid overlays */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-amber-400/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(244,196,48,0.05),transparent)] pointer-events-none" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Main CTA Core Layout */}
        <div className="glass-card p-10 sm:p-16 rounded-xl border border-amber-400/20 backdrop-blur-md shadow-2xl relative">
          
          {/* Subtle logo vector outline behind text */}
          <div className="absolute right-4 bottom-4 font-black font-display text-8xl text-white/5 select-none tracking-widest leading-none pointer-events-none">
            CALL
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-400/15 border border-amber-400/25 text-amber-400 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
            <MessageSquareHeart className="w-3.5 h-3.5" />
            <span>{lang === 'hi' ? 'बुकिंग और संपर्क करे' : 'GET IN TOUCH'}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            {t.captureDayHead}
          </h2>
          <div className="w-20 h-1.5 bg-amber-400 mx-auto rounded-full mb-12" />

          {/* Contact Details cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            
            {/* Card 1: Address */}
            <div className="bg-black/50 p-6 rounded-lg border border-white/5 text-center flex flex-col items-center hover:border-amber-400/30 transition-colors">
              <div className="w-10 h-10 rounded-full bg-amber-400/10 text-amber-400 flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xs uppercase tracking-widest text-amber-400 font-bold mb-2">
                {lang === 'hi' ? 'दफ्तर का पता (Address)' : 'STUDIO ADRESS'}
              </h3>
              <p className="font-serif text-base text-gray-200">
                Bind Toli, Ara, Bihar
              </p>
              <span className="font-mono text-[9px] text-gray-500 uppercase mt-1">
                {lang === 'hi' ? 'नया बाईपास चौक के पास' : 'Near bypass road'}
              </span>
            </div>

            {/* Card 2: Phone */}
            <div className="bg-black/50 p-6 rounded-lg border border-white/5 text-center flex flex-col items-center hover:border-amber-400/30 transition-colors relative group">
              <div className="w-10 h-10 rounded-full bg-amber-400/10 text-amber-400 flex items-center justify-center mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xs uppercase tracking-widest text-[#F4C430] font-bold mb-2">
                {lang === 'hi' ? 'फ़ोन नंबर' : 'PHONE CONTACT'}
              </h3>
              <p className="font-mono text-base text-white tracking-widest font-black">
                {phoneNumber}
              </p>
              
              {/* Copy action */}
              <button
                onClick={handleCopyPhone}
                className="absolute top-3 right-3 text-gray-500 hover:text-amber-400 transition-colors"
                title="Copy phone / नंबर कॉपी करें"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
              {copied && (
                <span className="text-[10px] text-green-400 font-mono mt-0.5">{t.copiedText}</span>
              )}
            </div>

            {/* Card 3: Email */}
            <div className="bg-black/50 p-6 rounded-lg border border-white/5 text-center flex flex-col items-center hover:border-amber-400/30 transition-colors relative">
              <div className="w-10 h-10 rounded-full bg-amber-400/10 text-amber-400 flex items-center justify-center mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xs uppercase tracking-widest text-amber-400 font-bold mb-2">
                {lang === 'hi' ? 'ईमेल पता' : 'STUDIO EMAIL'}
              </h3>
              <p className="font-mono text-sm text-gray-200 line-clamp-1">
                {emailAddress}
              </p>

              {/* Copy action */}
              <button
                onClick={handleCopyEmail}
                className="absolute top-3 right-3 text-gray-500 hover:text-amber-400 transition-colors"
                title="Copy email / ईमेल कॉपी करें"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
              {copiedEmail && (
                <span className="text-[10px] text-green-400 font-mono mt-0.5">{lang === 'hi' ? 'ईमेल कॉपी हो गया!' : 'Email copied!'}</span>
              )}
            </div>

          </div>

          {/* Interactive Large attractive CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
            
            {/* CTA 1: Instant Dial / Reveal Block */}
            <a
              href={`tel:${phoneNumber}`}
              onClick={() => setShowNumber(true)}
              className="w-full py-4.5 px-8 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-500 text-black text-xs font-bold tracking-widest uppercase rounded-sm hover:shadow-xl hover:shadow-amber-400/25 transform active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 fill-current animate-pulse" />
              <span>{showNumber ? `${phoneNumber}` : t.callNow}</span>
            </a>

            {/* CTA 2: WhatsApp direct API */}
            <a
              href={`https://wa.me/91${phoneNumber}?text=नमस्ते%20राज%20वीडियो,%20मुझे%20अपनी%20शादी%20के%20लिए%20फोटोग्राफी%20और%20वीडियोग्राफी%20पैकेजों%20के%20बारे%20में%20पता%20करना%20है।`}
              target="_blank"
              rel="noreferrer"
              className="w-full py-4.5 px-8 bg-[#25D366] hover:bg-[#128C7E] text-white text-xs font-bold tracking-widest uppercase rounded-sm hover:shadow-xl hover:shadow-[#25D366]/20 transform active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              {/* Custom SVG WhatsApp Logo or Lucide symbol */}
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.022-.08-.1-1.11-.613-1.37a.138.138 0 0 0-.13 0c-.23.111-.7.625-.865.81l-.03.037a.12.12 0 0 1-.16.03c-.586-.296-1.12-.703-1.585-1.2a12.224 12.224 0 0 1-1.547-1.528.127.127 0 0 1 .035-.188l.067-.05c.14-.11.412-.34.503-.5.1-.17.15-.3.1-.42s-.36-1.01-.527-1.42a.11.11 0 0 0-.148-.067c-.244.094-.61.344-.69.585a12.89 12.89 0 0 0-1.4 3.024 12.008 12.008 0 0 0 2.21 4.7l.033.04a.12.12 0 0 0 .167.027 12.399 12.399 0 0 0 3.33-2.028c.553-.396.657-1.008.665-1.037z" />
                <path d="M12.004 2c-5.514 0-10 4.486-10 10 0 1.93.551 3.73 1.503 5.263L2.04 22l4.89-.982A9.957 9.957 0 0 0 12.004 22c5.514 0 10-4.486 10-10s-4.486-10-10-10zm.012 18.062a8.04 8.04 0 0 1-4.084-1.115l-.292-.172-3.04.61.62-2.964-.19-.31a8.033 8.033 0 0 1-1.134-4.103c0-4.444 3.614-8.058 8.054-8.058a8.048 8.048 0 0 1 8.056 8.058c-.001 4.445-3.616 8.059-8.056 8.064z" />
              </svg>
              <span>{t.whatsappNow}</span>
            </a>

          </div>

          {/* Authentic prompt showing how 100% families call Chinun Ji directly */}
          <div className="mt-8 font-serif text-sm italic text-gray-500">
            {lang === 'hi'
              ? "*शादी के शुभ अवसरों पर चुन्नू जी सीधे फोन पर परामर्श देते हैं। बुकिंग लॉक करने के लिए सीधे कॉल करें!"
              : "*Chunnu Ji directly leads all telephone inquiries to maintain extreme privacy and detail matching. Call directly to book!"}
          </div>

        </div>

      </div>
    </section>
  );
}
