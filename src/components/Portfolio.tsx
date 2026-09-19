import React, { useState, useRef } from 'react';
import { Play, Film, UploadCloud, CheckCircle2, Video, X } from 'lucide-react';
import { Language, VideoItem } from '../types';
import { TRANSLATIONS, PORTFOLIO_VIDEOS } from '../data';

interface PortfolioProps {
  lang: Language;
}

export default function Portfolio({ lang }: PortfolioProps) {
  const t = TRANSLATIONS[lang];
  const [videosState, setVideosState] = useState<VideoItem[]>(PORTFOLIO_VIDEOS);
  
  // States for the lightboxes
  const [activeModalVideo, setActiveModalVideo] = useState<VideoItem | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'cinematic' | 'traditional'>('all');
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [uploadTargetId, setUploadTargetId] = useState<string | null>(null);

  // Trigger input click for specific video card
  const handleUploadClick = (videoId: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Avoid triggering video play clicks
    setUploadTargetId(videoId);
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Handle local video upload preview
  const handleVideoFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && uploadTargetId) {
      const videoSrcUrl = URL.createObjectURL(file);
      // Create a visual still or thumbnail (use a generic handsome overlay)
      const updated = videosState.map(vid => {
        if (vid.id === uploadTargetId) {
          return {
            ...vid,
            videoUrl: videoSrcUrl,
            // Prefix the titles to signify custom uploaded video
            titleHi: `✨ [अपलोड किया हुआ] ${vid.titleHi}`,
            titleEn: `✨ [Your Video] ${vid.titleEn}`,
          };
        }
        return vid;
      });
      setVideosState(updated);
      setUploadTargetId(null);
    }
  };

  const handleCardClick = (video: VideoItem) => {
    setActiveModalVideo(video);
  };

  const filteredVideos = videosState.filter(v => activeTab === 'all' || v.category === activeTab);
  const cinematicVideos = filteredVideos.filter(v => v.category === 'cinematic');
  const traditionalVideos = filteredVideos.filter(v => v.category === 'traditional');

  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-[#0E0E0E] text-white relative border-b border-white/5">
      
      {/* Hidden file input for custom simulated uploading */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleVideoFileChange}
        accept="video/*,image/*"
        className="hidden"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-400/10 border border-amber-400/20 text-amber-400 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            <Film className="w-3.5 h-3.5" />
            <span>{lang === 'hi' ? 'कलर्स और मोशन' : 'MOMENTS IN MOTION'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {t.ourWork}
          </h2>
          <div className="w-16 h-1.5 bg-amber-400 mx-auto rounded-full mb-4" />
          <p className="font-sans text-gray-400 text-base sm:text-lg">
            {t.everyFrameStory}
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex justify-center gap-3 mb-16">
          {(['all', 'cinematic', 'traditional'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 text-xs font-bold font-display tracking-widest uppercase rounded-full transition-all border ${
                activeTab === tab
                  ? 'bg-amber-400 text-black border-amber-400 font-black shadow-lg shadow-amber-400/25'
                  : 'bg-white/5 text-gray-400 border-white/5 hover:border-white/20'
              }`}
            >
              {tab === 'all' && (lang === 'hi' ? 'सभी वीडियोज़' : 'All Videos')}
              {tab === 'cinematic' && (lang === 'hi' ? 'सिनेमैटिक फ़िल्म्स (4)' : 'Cinematic Films (4)')}
              {tab === 'traditional' && (lang === 'hi' ? 'ट्रेडिशनल कवरेज (4)' : 'Traditional Videos (4)')}
            </button>
          ))}
        </div>

        {/* Category Header 1: CINEMATIC VIDEOS */}
        {(activeTab === 'all' || activeTab === 'cinematic') && (
          <div className="mb-20">
            <h3 className="font-serif text-2xl font-bold text-amber-400 tracking-wide border-l-4 border-amber-400 pl-4 mb-8 text-left">
              {t.cinematicFilms}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cinematicVideos.map((vid) => (
                <div
                  key={vid.id}
                  onClick={() => handleCardClick(vid)}
                  className="group relative bg-black rounded-lg overflow-hidden border border-white/5 aspect-video hover:border-amber-400/40 cursor-pointer shadow-xl transition-all duration-300"
                >
                  {/* Thumbnail Image */}
                  <img
                    src={vid.thumbnailUrl}
                    alt={lang === 'hi' ? vid.titleHi : vid.titleEn}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Overlay shadow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-85 group-hover:opacity-100 transition-opacity" />

                  {/* Play Icon Area */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 backdrop-blur-sm flex items-center justify-center group-hover:bg-amber-400 group-hover:text-black group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-amber-400/50 transition-all duration-300">
                      <Play className="w-7 h-7 fill-current ml-1" />
                    </div>
                  </div>

                  {/* Upload Trigger Area */}
                  <div className="absolute top-4 right-4 z-20">
                    <button
                      onClick={(e) => handleUploadClick(vid.id, e)}
                      className="px-3 py-1.5 rounded-sm bg-black/80 hover:bg-amber-400 hover:text-black border border-white/10 text-xs font-mono font-medium tracking-wider flex items-center gap-1.5 transition-all text-white"
                      title={t.uploadPrompt}
                    >
                      <UploadCloud className="w-3.5 h-3.5 animate-bounce" />
                      <span>{t.customUploadPlaceholder}</span>
                    </button>
                  </div>

                  {/* Video Labels */}
                  <div className="absolute bottom-0 left-0 w-full p-6 text-left">
                    <div className="font-mono text-[9px] uppercase tracking-widest text-amber-400 font-black mb-2 flex items-center gap-1.5">
                      <Video className="w-3 h-3" />
                      <span>{lang === 'hi' ? 'सिनेमैटिक शादी फ़िल्म' : 'CINEMATIC WEDDING FILM'}</span>
                      <span className="text-gray-500">•</span>
                      <span>{lang === 'hi' ? vid.durationHi : vid.durationEn}</span>
                    </div>
                    <h4 className="font-display text-lg sm:text-xl font-bold text-white mb-1.5">
                      {lang === 'hi' ? vid.titleHi : vid.titleEn}
                    </h4>
                    <p className="font-sans text-xs text-gray-400">
                      {lang === 'hi' 
                        ? 'शादी के इस खूबसूरत सिनेमाई टीज़र को देखने के लिए प्ले बटन दबाएं।' 
                        : 'Click to play this high-end romantic wedding sequence.'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Category Header 2: TRADITIONAL VIDEOS */}
        {(activeTab === 'all' || activeTab === 'traditional') && (
          <div>
            <h3 className="font-serif text-2xl font-bold text-amber-500 tracking-wide border-l-4 border-amber-500 pl-4 mb-8 text-left">
              {t.traditionalVideos}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {traditionalVideos.map((vid) => (
                <div
                  key={vid.id}
                  onClick={() => handleCardClick(vid)}
                  className="group relative bg-black rounded-lg overflow-hidden border border-white/5 aspect-video hover:border-amber-400/40 cursor-pointer shadow-xl transition-all duration-300"
                >
                  {/* Thumbnail Image */}
                  <img
                    src={vid.thumbnailUrl}
                    alt={lang === 'hi' ? vid.titleHi : vid.titleEn}
                    className="w-full h-full object-cover grayscale brightness-90 transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100"
                    referrerPolicy="no-referrer"
                  />
                  {/* Overlay shadow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-85 group-hover:opacity-100 transition-opacity" />

                  {/* Play Icon Area */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-500 backdrop-blur-sm flex items-center justify-center group-hover:bg-amber-400 group-hover:text-black group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-amber-400/50 transition-all duration-300">
                      <Play className="w-7 h-7 fill-current ml-1" />
                    </div>
                  </div>

                  {/* Upload Trigger Area */}
                  <div className="absolute top-4 right-4 z-20">
                    <button
                      onClick={(e) => handleUploadClick(vid.id, e)}
                      className="px-3 py-1.5 rounded-sm bg-black/80 hover:bg-amber-400 hover:text-black border border-white/10 text-xs font-mono font-medium tracking-wider flex items-center gap-1.5 transition-all text-white"
                      title={t.uploadPrompt}
                    >
                      <UploadCloud className="w-3.5 h-3.5 animate-bounce" />
                      <span>{t.customUploadPlaceholder}</span>
                    </button>
                  </div>

                  {/* Video Labels */}
                  <div className="absolute bottom-0 left-0 w-full p-6 text-left">
                    <div className="font-mono text-[9px] uppercase tracking-widest text-amber-500 font-black mb-2 flex items-center gap-1.5">
                      <Video className="w-3 h-3" />
                      <span>{lang === 'hi' ? 'पारंपरिक शादी रिकॉर्डिंग' : 'TRADITIONAL FULL RECORD'}</span>
                      <span className="text-gray-500">•</span>
                      <span>{lang === 'hi' ? vid.durationHi : vid.durationEn}</span>
                    </div>
                    <h4 className="font-display text-lg sm:text-xl font-bold text-white mb-1.5">
                      {lang === 'hi' ? vid.titleHi : vid.titleEn}
                    </h4>
                    <p className="font-sans text-xs text-gray-400">
                      {lang === 'hi' 
                        ? 'परंपराओं और रस्मों की पूर्ण विस्तृत रिकॉर्डिंग झलकी देखने के लिए प्ले करें।' 
                        : 'Click to play this high-fidelity traditional coverage log.'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Video Playback Modal Player */}
      {activeModalVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-8 animate-fade-in-up">
          <button
            onClick={() => setActiveModalVideo(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-amber-400 hover:text-black text-white hover:scale-110 transition-all z-50 cursor-pointer"
            title="Close video / बंद करें"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative w-full max-w-5xl bg-[#141414] rounded-lg overflow-hidden border border-white/10 shadow-2xl z-40">
            <div className="aspect-video w-full">
              {activeModalVideo.videoUrl ? (
                <video
                  src={activeModalVideo.videoUrl}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              ) : (
                /* Fallback atmosphere elegant wedding looping placeholder using public royalty-free web assets or a gorgeous overlay */
                <iframe
                  src="https://www.youtube.com/embed/2XunI8sS6X4?autoplay=1&mute=0&loop=1&playlist=2XunI8sS6X4"
                  title="Raj Video Wedding Cinema Showcase"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              )}
            </div>
            {/* Player metadata Footer */}
            <div className="p-6 bg-[#0E0E0E] border-t border-white/5 flex items-center justify-between">
              <div className="text-left">
                <span className="font-mono text-[10px] text-amber-400 font-bold uppercase tracking-widest block mb-1">
                  {lang === 'hi' ? 'राज वीडियो प्लेयर' : 'RAJ VIDEO AUDIO-VISUAL THEATRE'}
                </span>
                <h4 className="font-serif text-xl font-bold text-white">
                  {lang === 'hi' ? activeModalVideo.titleHi : activeModalVideo.titleEn}
                </h4>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 text-xs text-gray-500 font-mono uppercase bg-white/5 px-3 py-1.5 rounded-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                <span>25+ years of craft</span>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
