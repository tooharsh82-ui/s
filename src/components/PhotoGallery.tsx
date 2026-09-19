import React, { useState, useRef } from 'react';
import { Camera, Image, UploadCloud, ZoomIn, Eye, X } from 'lucide-react';
import { Language, GalleryItem } from '../types';
import { TRANSLATIONS, GALLERY_PHOTOS } from '../data';

interface PhotoGalleryProps {
  lang: Language;
}

export default function PhotoGallery({ lang }: PhotoGalleryProps) {
  const t = TRANSLATIONS[lang];
  const [photosState, setPhotosState] = useState<GalleryItem[]>(GALLERY_PHOTOS);
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);
  
  // Custom uploading configurations
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [uploadIndex, setUploadIndex] = useState<number | null>(null);

  const handleCellUploadClick = (idx: number, e: React.MouseEvent) => {
    e.stopPropagation(); // Avoid opening lightbox on upload click
    setUploadIndex(idx);
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && uploadIndex !== null) {
      const inlineUrl = URL.createObjectURL(file);
      const updated = [...photosState];
      updated[uploadIndex] = {
        ...updated[uploadIndex],
        thumbnailUrl: inlineUrl,
        titleHi: "✨ [सफलतापूर्वक अपलोड किया गया पल]",
        titleEn: "✨ [Your Uploaded Beautiful Moment]",
        locationHi: "बिंद टोली, आरा",
        locationEn: "Bind Toli, Ara",
      };
      setPhotosState(updated);
      setUploadIndex(null);
    }
  };

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#0B0B0B] text-white relative">
      {/* Hidden file input for inline replacement */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-400/10 border border-amber-400/20 text-amber-400 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            <Camera className="w-3.5 h-3.5" />
            <span>{lang === 'hi' ? 'सजीव यादें' : 'REGAL FRAMES'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {t.capturedMoments}
          </h2>
          <div className="w-16 h-1.5 bg-amber-400 mx-auto rounded-full mb-4" />
          <p className="font-sans text-gray-400 text-sm sm:text-base leading-relaxed">
            {t.capturedMomentsSub}
          </p>
        </div>

        {/* 20 Empty/Interactive Gallery Slots Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {photosState.map((photo, index) => {
            const labelTitle = lang === 'hi' ? photo.titleHi : photo.titleEn;
            const location = lang === 'hi' ? photo.locationHi : photo.locationEn;

            return (
              <div
                key={photo.id}
                onClick={() => setActivePhoto(photo)}
                className="group relative bg-[#121212] rounded-md overflow-hidden aspect-[16/9] border border-white/5 cursor-pointer shadow-lg hover:border-amber-400/40 transition-all duration-300"
              >
                {/* Photo file representation */}
                <img
                  src={photo.thumbnailUrl}
                  alt={labelTitle}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />

                {/* Dark shade layout overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/30 opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Index marker */}
                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm border border-white/10 px-2 py-0.5 rounded-sm font-mono text-[9px] text-gray-400 tracking-wide">
                  SLOT {(index + 1).toString().padStart(2, '0')}
                </div>

                {/* Interactive upload indicator badge */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20">
                  <button
                    onClick={(e) => handleCellUploadClick(index, e)}
                    className="p-1.5 bg-amber-400 text-black hover:bg-amber-300 transition-colors rounded-full"
                    title={t.clickToUploadPhoto}
                  >
                    <UploadCloud className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Mid-screen zoom feedback on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="p-3 bg-black/60 rounded-full border border-white/20 text-white backdrop-blur-sm transform scale-90 group-hover:scale-100 transition-all duration-300">
                    <ZoomIn className="w-5 h-5 text-amber-400" />
                  </div>
                </div>

                {/* Floating labels at bottom */}
                <div className="absolute bottom-0 left-0 w-full p-4 text-left z-10 transition-transform duration-300">
                  <span className="font-mono text-[8px] uppercase tracking-widest text-amber-400 block mb-0.5">
                    {location || (lang === 'hi' ? 'राज वीडियो आरा' : 'RAJ VIDEO ARA')}
                  </span>
                  <span className="font-sans text-xs font-semibold text-gray-200 line-clamp-1 block mb-1">
                    {labelTitle}
                  </span>
                  <span className="font-mono text-[9px] text-gray-500 uppercase flex items-center gap-1 group-hover:text-amber-400 transition-colors">
                    <Eye className="w-3 h-3" />
                    <span>{t.uploadPhoto}</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-8 animate-fade-in-up">
          <button
            onClick={() => setActivePhoto(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-amber-400 hover:text-black text-white hover:scale-110 transition-all z-50 cursor-pointer"
            title={t.closeBtn}
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative w-full max-w-4xl bg-[#141414] rounded-lg overflow-hidden border border-white/10 shadow-2xl z-40 max-h-[85vh] flex flex-col justify-between">
            <div className="relative flex-1 p-2 flex items-center justify-center overflow-hidden min-h-[300px]">
              <img
                src={activePhoto.thumbnailUrl}
                alt={lang === 'hi' ? activePhoto.titleHi : activePhoto.titleEn}
                className="max-w-full max-h-[70vh] object-contain rounded"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Metadata footer */}
            <div className="p-5 bg-[#0E0E0E] border-t border-white/5 text-left flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <span className="font-mono text-[9px] text-amber-400 font-bold uppercase tracking-widest block mb-0.5">
                  {lang === 'hi' ? activePhoto.locationHi || 'राज वीडियो गैलरी' : activePhoto.locationEn || 'Raj Video Master Grid'}
                </span>
                <h4 className="font-serif text-lg font-bold text-white">
                  {lang === 'hi' ? activePhoto.titleHi : activePhoto.titleEn}
                </h4>
              </div>
              <div className="font-mono text-[10px] text-gray-500 italic">
                {lang === 'hi' ? '20 पोजीशंस कस्टमाइज़ गैलरी' : '20 Interactive Positions'}
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
