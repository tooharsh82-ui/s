import { TrustItem, ServicePackage, VideoItem, GalleryItem, ProcessStep, Testimonial } from './types';

export const TRANSLATIONS = {
  hi: {
    brandName: "राज वीडियो",
    brandSubtitle: "फोटोग्राफी और वीडियोग्राफी",
    twentyFiveYearsBadge: "25+ वर्षों का अटूट विश्वास",
    tagline: "25 वर्षों का भरोसा, यादों को बनाते हैं अमर",
    subTagline: "राज वीडियो पिछले 25 वर्षों से विवाह, तिलक, मेहंदी, हल्दी और विशेष अवसरों की फोटोग्राफी एवं वीडियोग्राफी सेवाएं प्रदान कर रहा है। हमारी टीम हर पल को भावनाओं के साथ संजोती है।",
    bookNow: "अभी बुक करें",
    viewWork: "हमारा काम देखें",
    viewFlyer: "मूल पैम्फलेट देखें",
    originalFlyerTitle: "राज वीडियो - मूल सर्विस पैम्फलेट",
    yearsExp: "वर्षों का अनुभव",
    eventsCovered: "भव्य आयोजन कवर्ड",
    clientSatisfaction: "संतुष्ट परिवार",
    whyTrustUs: "परिवार हम पर भरोसा क्यों करते हैं?",
    whyTrustUsSub: "25 वर्षों की उत्कृष्टता और अनमोल यादों का सफर",
    aboutOwnerTitle: "संस्थापक के बारे में",
    ownerLabel: "मालिक",
    founderTitle: "चुन्नू जी",
    founderDesignation: "संस्थापक एवं क्रिएटिव डायरेक्टर",
    ownerBio1: "राज वीडियो की शुरुआत एक छोटे से सपने से हुई थी। आज 25 वर्षों के शानदार अनुभव के साथ हम बिहार और उत्तर प्रदेश के हजारों परिवारों की खुशियों का अहम हिस्सा बन चुके हैं।",
    ownerBio2: "हमारा उद्देश्य केवल फोटो लेना नहीं है, बल्कि हर मुस्कान, हर आंसू, हर भावना और हर सुंदर याद को हमेशा-हमेशा के लिए सजीव बनाना है।",
    serviceLocationsLabel: "हमारी सेवाएँ मुख्य रूप से उपलब्ध हैं:",
    locationsList: "आरा • पटना • बिहार • उत्तर प्रदेश",
    teamExperienceText: "हमारी टीम में 5 से 8 वर्षों का पेशेवर अनुभव रखने वाले कुशल फोटोग्राफर्स, वीडियोग्राफर्स, ड्रोन ऑपरेटर्स और कुशल एडिटर्स शामिल हैं जो आपके विशेष दिन को फिल्मी रूप देते हैं।",
    ourServices: "हमारी विशिष्ट सेवाएं",
    ourServicesSub: "हवाई ड्रोन कवरेज, भव्य एलबम और बेहतरीन संपादन के साथ संपूर्ण विवाह पैकेज",
    popularBadge: "सबसे लोकप्रिय",
    startingFrom: "कीमत शुरू",
    includesAllTax: "सभी सेवाएं शामिल",
    ourWork: "हमारा काम",
    everyFrameStory: "हर फ्रेम एक अनकही कहानी कहता है",
    cinematicFilms: "सिनेमैटिक वेडिंग फिल्म्स (Cinematic)",
    traditionalVideos: "ट्रेडिशनल वेडिंग कवरेज (Traditional)",
    uploadVideo: "यहाँ वीडियो अपलोड करें",
    uploadPrompt: "सिनेमैटिक वेडिंग वीडियो या टीज़र अपलोड करने के लिए क्लिक करें",
    customUploadPlaceholder: "अपना वीडियो जोड़ें",
    playVideoDesc: "क्लाइंट का वीडियो / टीज़र प्ले करें",
    capturedMoments: "संजोए हुए पल",
    capturedMomentsSub: "फोटोग्राफी गैलरी — असली मुस्कानें, वास्तविक भावनाएं (आप अपनी तस्वीर अपलोड करके देख सकते हैं)",
    uploadPhoto: "यहाँ फोटो डालें",
    clickToUploadPhoto: "अपनी फोटो अपलोड करने और पूर्वावलोकन करने के लिए क्लिक करें",
    howWeWork: "हमारी कार्यप्रक्रिया",
    howWeWorkSub: "बुकिंग से लेकर आपके घर तक एलबम डिलीवरी का प्रीमियम सफर",
    whatFamiliesSay: "संतुष्ट परिवारों की जुबानी",
    whatFamiliesSaySub: "बिहार और यूपी के परिवारों से मिला ढेर सारा प्यार",
    captureDayHead: "आइए आपके विशेष दिन को अमर बनाएं",
    locationLabel: "स्थान",
    phoneLabel: "फ़ोन नंबर",
    emailLabel: "ईमेल पता",
    callNow: "फ़ोन पर संपर्क करें",
    whatsappNow: "व्हाट्सएप करें",
    clickToRevealPhone: "नंबर देखने के लिए क्लिक करें",
    quickLinks: "त्वरित लिंक्स",
    services: "सेवाएं",
    portfolio: "पोर्टफोलियो",
    contact: "संपर्क",
    copyright: "© 2026 राज वीडियो फोटोग्राफी & वीडियोग्राफी। सर्वाधिकार सुरक्षित।",
    allRightsReserved: "सभी अधिकार सुरक्षित। आरा, बिहार।",
    uploadComplete: "अपलोड सफल!",
    viewFlyerBtn: "रेट लिस्ट पैम्फलेट",
    closeBtn: "बंद करें",
    copiedText: "नंबर कॉपी हो गया!",
    interactiveModeOn: "इंटरैक्टिव मोड सक्रिय: तस्वीरों पर कस्टमाइज़ बटन से आप अपनी फोटो बदलकर देख सकते हैं!"
  },
  en: {
    brandName: "Raj Video",
    brandSubtitle: "Photography & Videography",
    twentyFiveYearsBadge: "25+ Years of Unmatched Trust",
    tagline: "25 Years Of Trust. We Don't Just Capture Photos, We Preserve Memories.",
    subTagline: "Raj Video has been capturing weddings and special occasions for over 25 years in Bihar and Uttar Pradesh. We create timeless memories through professional photography and cinematic videography.",
    bookNow: "Book Now",
    viewWork: "View Our Work",
    viewFlyer: "View Rate Chart",
    originalFlyerTitle: "Raj Video - Original Service Pamphlet",
    yearsExp: "Years of Trust",
    eventsCovered: "Events Covered",
    clientSatisfaction: "Happy Families",
    whyTrustUs: "Why Families Trust Raj Video",
    whyTrustUsSub: "A legacy of 25 years bringing emotions to life through visual excellence",
    aboutOwnerTitle: "Meet the Founder",
    ownerLabel: "OWNER",
    founderTitle: "Chunnu Ji",
    founderDesignation: "Founder & Creative Director",
    ownerBio1: "Raj Video started as a small dream to capture life’s pure joy. Today, with over 25 years of rich experience, we have had the honor of being part of the celebrations of thousands of families across Bihar and Uttar Pradesh.",
    ownerBio2: "Our core philosophy is that we don't just click pictures; we freeze time. Every smile, emotional teardrop, and fleeting festive gesture is saved forever.",
    serviceLocationsLabel: "Primarily Serving Across:",
    locationsList: "Ara • Patna • Bihar • Uttar Pradesh",
    teamExperienceText: "Our expert team comprises professional wedding photographers, cinematic videographers, drone specialist pilots, and creative editors boasting 5-8 years of high-end experience.",
    ourServices: "Our Signature Packages",
    ourServicesSub: "Fully managed customized wedding packages including high-tech drone coverage, designer albums, and cinematic films",
    popularBadge: "MOST POPULAR",
    startingFrom: "Starting At",
    includesAllTax: "All Inclusions Configured",
    ourWork: "Our Work",
    everyFrameStory: "Every Frame Tells A Story",
    cinematicFilms: "Cinematic Wedding Films",
    traditionalVideos: "Traditional Wedding Coverage",
    uploadVideo: "Upload Video",
    uploadPrompt: "Click to upload your custom cinematic wedding video clip or teaser",
    customUploadPlaceholder: "Add Your Video",
    playVideoDesc: "Play cinematic wedding teaser clip",
    capturedMoments: "Captured Moments",
    capturedMomentsSub: "Our Photography Grid — Raw emotions, bright setups (Click to upload & test your own photo)",
    uploadPhoto: "Upload Photo Here",
    clickToUploadPhoto: "Click here to upload your own photo in this slot for preview",
    howWeWork: "Our Luxury Process",
    howWeWorkSub: "How we guide your cinematic memory-creation from query to final premium delivery",
    whatFamiliesSay: "What Our Families Say",
    whatFamiliesSaySub: "Heartwarming words of appreciation from brides, grooms & parents across Bihar & UP",
    captureDayHead: "Let's Capture Your Special Day",
    locationLabel: "Location",
    phoneLabel: "Phone Number",
    emailLabel: "Email Address",
    callNow: "Call Now",
    whatsappNow: "WhatsApp Us",
    clickToRevealPhone: "Click to reveal phone number",
    quickLinks: "Quick Links",
    services: "Services",
    portfolio: "Portfolio",
    contact: "Contact",
    copyright: "© 2026 Raj Video Photography & Videography. All Rights Reserved.",
    allRightsReserved: "All Rights Reserved. Ara, Bihar.",
    uploadComplete: "Upload successful!",
    viewFlyerBtn: "View Original Flyer",
    closeBtn: "Close",
    copiedText: "Phone number copied!",
    interactiveModeOn: "Interactive mode active: You can upload your own photos in the empty card slots to see them live!"
  }
};

export const TRUST_ITEMS: TrustItem[] = [
  {
    id: "t1",
    iconName: "Award",
    titleHi: "25+ वर्षों का अनुभव",
    titleEn: "25 Years Experience",
    descHi: "Since 1999, capturing smiles. We understand the rich traditional rituals of Bihar & UP weddings flawlessly.",
    descEn: "Since 1999, capturing smiles. We understand the rich traditional rituals of Bihar & UP weddings flawlessly."
  },
  {
    id: "t2",
    iconName: "Users",
    titleHi: "प्रोफेशनल टीम",
    titleEn: "Professional Team",
    descHi: "5-8 वर्षों के अनुभवी मुख्य कैमरामैन और विशेषज्ञ सिनेमैटोग्राफर्स का समूह जो बारीक पलों को कैद करते हैं।",
    descEn: "Team of primary cameramen and expert cinematographers with 5-8 years of experience in luxury weddings."
  },
  {
    id: "t3",
    iconName: "Sparkles",
    titleHi: "हवाई ड्रोन कवरेज",
    titleEn: "Professional Drone Coverage",
    descHi: "आधुनिक 4K ड्रोन्स के साथ बारात, द्वारपूजा और जयमाला के पलों का शानदार विहंगम दृश्य हवाई दृश्यों में दर्ज।",
    descEn: "Breathtaking 4K aerial shots of Barat, Dwar Puja, and Jaimala using state-of-the-art drones."
  },
  {
    id: "t4",
    iconName: "Film",
    titleHi: "सिनेमैटिक एडिटिंग",
    titleEn: "Cinematic Editing",
    descHi: "फिल्मी गानों के साथ कलर-ग्रेडिंग और बेहतरीन बैकग्राउंड मूसिक के साथ शादी का दिल छू लेने वाला टीज़र व फिल्म।",
    descEn: "Professional color-graded teaser highlights and emotional family wedding movies with tailored local soundtracks."
  },
  {
    id: "t5",
    iconName: "BookOpen",
    titleHi: "प्रीमियम करिश्मा एलबम",
    titleEn: "High-Quality Albums",
    descHi: "मैट, ग्लॉसी और कस्टमाइज़्ड शाही डिब्बों के साथ 12x36 इंच का वाटरप्रूफ करिश्मा डिजाइनर फोटो एलबम।",
    descEn: "Ultra-premium water-resistant 12x36 inch Karizma custom designing albums with luxury carrying cases."
  },
  {
    id: "t6",
    iconName: "Clock",
    titleHi: "समय पर डिलीवरी",
    titleEn: "On-Time Delivery",
    descHi: "शादी के तुरंत बाद 10 दिनों में टीज़र और 30 दिनों के भीतर फाइनल एडिटेड वीडियो और शाही एलबम आपके घर पर।",
    descEn: "Teaser within 10 days of the wedding, and final edited films and albums within 30 days, guaranteed."
  }
];

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: "pkg_traditional",
    nameHi: "ट्रेडिशनल वेडिंग पैकेज",
    nameEn: "Traditional Wedding Package",
    price: "₹40,000",
    isPopular: false,
    descriptionHi: "यह पैकेज विवाह के पारंपरिक महत्व और पूरे परिवार के कवरेज़ के लिए बिल्कुल परफेक्ट है। इसमें तिलक, मेहंदी, हल्दी और बारात का खूबसूरत रिकॉर्ड तैयार किया जाता है।",
    descriptionEn: "Perfect package honoring traditional rituals and complete family coverage across all multiple days of celebrations.",
    featuresHi: [
      "तिलक कवरेज (Full Coverage)",
      "हल्दी उत्सव कवरेज (Haldi coverage)",
      "मेहंदी रस्म कवरेज (Mehendi coverage)",
      "बारात एवं जयमाला कवरेज (Barat & Jaimala coverage)",
      "पारंपरिक फोटोग्राफी (Traditional High-Quality Photography)",
      "पूर्ण एचडी वीडियो रिकॉर्डिंग (Full HD 1080p Video)",
      "शानदार ड्रोन कैमरा हवाई शॉट्स (Drone Aerial Coverage)",
      "40 पेज का डिजाइनर करिश्मा एलबम (40 Page Premium Karizma Album)"
    ],
    featuresEn: [
      "Tilak Coverage",
      "Haldi Coverage",
      "Mehendi Coverage",
      "Barat & Jaimala Coverage",
      "Traditional HD Photography",
      "Full HD Video Recording",
      "Drone Aerial Coverage",
      "40-Page Karizma Designer Album"
    ]
  },
  {
    id: "pkg_cinematic",
    nameHi: "सिनेमैटिक वेडिंग पैकेज",
    nameEn: "Cinematic Wedding Package",
    price: "₹85,000",
    isPopular: true,
    descriptionHi: "हमारा सबसे लोकप्रिय ड्रीम पैकेज जो आपकी शादी को एक सुंदर बॉलीवुड फिल्म में तब्दील कर देता है। इसमें कैंडिड फोटोग्राफी, फिल्मी टीज़र और आकर्षक ड्रोन फुटेज की जादुई जुगलबंदी शामिल है।",
    descriptionEn: "Our flagship dream package turning your wedding day into a stunning Bollywood-standard romance film. Includes emotional candid captures, gorgeous teasers, and majestic drone aesthetics.",
    featuresHi: [
      "खूबसूरत कैंडिड फोटोग्राफी (Natural Candid Photography to capture raw emotions)",
      "सिनेमैटिक वीडियोग्राफी (Cinematic Wedding Films & Cinematic Videography)",
      "अत्याधुनिक ड्रोन कैमरा कवरेज (High-tech Drone Coverage for aerial grandeur)",
      "शादी का खास 1-2 मिनट का टीज़र वीडियो (Cinematic Wedding Teaser)",
      "विस्तृत 12 मिनट की शादी की फिल्म (Complete Cinematic Wedding Film)",
      "25 पन्नों की खूबसूरत आलीशान कैंडिड फोटो बुक (Extra luxury 25-page Candid Photo Book)",
      "प्रीमियम भव्य करिश्मा डिजाइनर एलबम (Ultra Deluxe Designer Karizma Album)",
      "पूर्ण व्यावसायिक संपादन एवं कलर ग्रेडिंग (Professional Editing & Premium Color Grading)",
      "संपूर्ण 4 दिवसीय उत्सवों का वीआईपी कवरेज (Complete VIP Grand Event Coverage)"
    ],
    featuresEn: [
      "Natural Candid Photography (Premium)",
      "Cinematic Videography & Movie Production",
      "High-Tech Drone Camera Coverage",
      "Cinematic Wedding Teaser (1-2 Min)",
      "Emotional Wedding Film (approx 12-15 Mins)",
      "25-Page Special Candid Photo Book (Value Added)",
      "Premium Karizma Designer Album (12x36)",
      "Full Professional Editing & Color Grading",
      "Complete 4-Day Celebration Coverage"
    ]
  }
];

export const PORTFOLIO_VIDEOS: VideoItem[] = [
  {
    id: "vid_c1",
    titleHi: "रोहित और नैना - सिनेमैटिक शादी (पटना)",
    titleEn: "Rohit & Naina - Cinematic Teaser (Patna)",
    category: "cinematic",
    durationHi: "2 मिनट टीज़र",
    durationEn: "2 Min Teaser",
    thumbnailUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1080"
  },
  {
    id: "vid_c2",
    titleHi: "अभिषेक और श्वेता - भव्य विदाई संगीत (आरा)",
    titleEn: "Abhishek & Shweta - Vidai & Sangeet (Ara)",
    category: "cinematic",
    durationHi: "3 मिनट संगीत",
    durationEn: "3 Min Sangeet Highlight",
    thumbnailUrl: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1080"
  },
  {
    id: "vid_c3",
    titleHi: "विशाल और अंजली - पवित्र गठजोड़ (उत्तर प्रदेश)",
    titleEn: "Vishal & Anjali - Sacred Bonds (Varanasi, UP)",
    category: "cinematic",
    durationHi: "4 मिनट टीज़र",
    durationEn: "4 Min Sacred Teaser",
    thumbnailUrl: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1080"
  },
  {
    id: "vid_c4",
    titleHi: "राहुल और प्रीति - गंगा घाट प्री-वेडिंग शूट",
    titleEn: "Rahul & Priti - Ganga Ghat Pre-Wedding Film",
    category: "cinematic",
    durationHi: "1.5 मिनट रील",
    durationEn: "1.5 Min Reel Film",
    thumbnailUrl: "https://images.unsplash.com/photo-1520854221256-17451cc35953?q=80&w=1080"
  },
  {
    id: "vid_t1",
    titleHi: "मनोज और संगीता - तिलक एवं बारात (आरा)",
    titleEn: "Manoj & Sangeeta - Tilak & Barat (Ara)",
    category: "traditional",
    durationHi: "15 मिनट मुख्य झलकी",
    durationEn: "15 Min Main Event Highlights",
    thumbnailUrl: "https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?q=80&w=1080"
  },
  {
    id: "vid_t2",
    titleHi: "अमित और कल्पना - द्वारपूजा एवं जयमाला",
    titleEn: "Amit & Kalpana - Dwar Puja & Jaimala",
    category: "traditional",
    durationHi: "20 मिनट रिकॉर्डिंग",
    durationEn: "20 Min Traditional Film",
    thumbnailUrl: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1080"
  },
  {
    id: "vid_t3",
    titleHi: "धीरज और प्रियंका - हल्दी और मटकोड़ उत्सव",
    titleEn: "Dheeraj & Priyanka - Haldi & Matkod Magic",
    category: "traditional",
    durationHi: "12 मिनट उत्सव",
    durationEn: "12 Min Traditions",
    thumbnailUrl: "https://images.unsplash.com/photo-1610030469668-93535c17b6b3?q=80&w=1080"
  },
  {
    id: "vid_t4",
    titleHi: "सौरभ और जूही - विदागी गीत एवं सिंदूरदान रस्म",
    titleEn: "Saurabh & Juhi - Sindoor Daan & Vidaai Rituals",
    category: "traditional",
    durationHi: "18 मिनट विस्तृत फिल्म",
    durationEn: "18 Min Traditional Sequence",
    thumbnailUrl: "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?q=80&w=1080"
  }
];

export const GALLERY_PHOTOS: GalleryItem[] = [
  {
    id: "gal_1",
    titleHi: "रॉयल ब्राइडल पोर्ट्रेट - आरा",
    titleEn: "Royal Bridal Portrait - Ara",
    locationHi: "आरा पैलेस",
    locationEn: "Ara Palace",
    thumbnailUrl: "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?q=80&w=800"
  },
  {
    id: "gal_2",
    titleHi: "जयमाला का दिव्य क्षण - पटना",
    titleEn: "The Divine Jaimala Moment - Patna",
    locationHi: "होटल मौर्या, पटना",
    locationEn: "Hotel Maurya, Patna",
    thumbnailUrl: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800"
  },
  {
    id: "gal_3",
    titleHi: "मेहंदी रचती लाल हथेलियां",
    titleEn: "Crimson Mehendi Detailing",
    locationHi: "विवाह गृह, पटना",
    locationEn: "Wedding Hall, Patna",
    thumbnailUrl: "https://images.unsplash.com/photo-1610030469668-93535c17b6b3?q=80&w=800"
  },
  {
    id: "gal_4",
    titleHi: "सिंदूरदान रस्म की भावुकता",
    titleEn: "Sacred Sindoor Ceremony",
    locationHi: "सबाउर, आरा",
    locationEn: "Sabaur, Ara",
    thumbnailUrl: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800"
  },
  {
    id: "gal_5",
    titleHi: "शाही दूल्हा बारात प्रस्थान",
    titleEn: "The Royal Groom's Ascent",
    locationHi: "बक्सर रोड",
    locationEn: "Buxar Road",
    thumbnailUrl: "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?q=80&w=800"
  },
  {
    id: "gal_6",
    titleHi: "हल्दी उत्सव की चंचलता",
    titleEn: "Playful Haldi Splashes",
    locationHi: "घर आंगन, बक्सर",
    locationEn: "Courtyard, Buxar",
    thumbnailUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800"
  },
  {
    id: "gal_7",
    titleHi: "सिनेमैटिक कपल वॉक - बनारस",
    titleEn: "Cinematic Couple Walk - Varanasi",
    locationHi: "गंगा घाट, वाराणसी",
    locationEn: "Ganga Ghat, Varanasi",
    thumbnailUrl: "https://images.unsplash.com/photo-1520854221256-17451cc35953?q=80&w=800"
  },
  {
    id: "gal_8",
    titleHi: "पारंपरिक गहने एवं श्रृंगार",
    titleEn: "Ornate Regal Jewelry Detailing",
    locationHi: "चित्रा टोला, आरा",
    locationEn: "Chitra Tola, Ara",
    thumbnailUrl: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=800"
  },
  {
    id: "gal_9",
    titleHi: "पवित्र सात फेरे - वैदिक लग्न",
    titleEn: "Seven Sacred Vows of Fire",
    locationHi: "वाराणसी गेस्ट हाउस",
    locationEn: "Varanasi Guest House",
    thumbnailUrl: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800"
  },
  {
    id: "gal_10",
    titleHi: "वरमाला की फूलों की बौछार",
    titleEn: "Rose Petals Shower on Couple",
    locationHi: "पाटलिपुत्र लॉन, पटना",
    locationEn: "Pataliputra Lawn, Patna",
    thumbnailUrl: "https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?q=80&w=800"
  },
  {
    id: "gal_11",
    titleHi: "पारंपरिक तिलक उत्सव की बहार",
    titleEn: "Joyous Tilak Celebrations",
    locationHi: "शाहपुर, आरा",
    locationEn: "Shahpur, Ara",
    thumbnailUrl: "https://images.unsplash.com/photo-1605001011156-cbf0b0f67a51?q=80&w=800"
  },
  {
    id: "gal_12",
    titleHi: "विदाई का भावुक पल",
    titleEn: "The Tears of Vidaai",
    locationHi: "बिहिया, आरा",
    locationEn: "Bihiya, Ara",
    thumbnailUrl: "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?q=80&w=800"
  },
  {
    id: "gal_13",
    titleHi: "मुस्कुराती हुई दुल्हन की सहेलियां",
    titleEn: "The Bride's Smiling Bridesmaids",
    locationHi: "आरके लॉन, आरा",
    locationEn: "RK Lawn, Ara",
    thumbnailUrl: "https://images.unsplash.com/photo-1520854221256-17451cc35953?q=80&w=800"
  },
  {
    id: "gal_14",
    titleHi: "गुलदस्ता और रिंग क्लोजअप",
    titleEn: "Luxury Bouquet & Ring Detailing",
    locationHi: "बोरिंग रोड, पटना",
    locationEn: "Boring Road, Patna",
    thumbnailUrl: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=800"
  },
  {
    id: "gal_15",
    titleHi: "शानदार आतिशबाजी बारात में",
    titleEn: "Grand Firework Spectacular",
    locationHi: "आरा टाउन क्लब",
    locationEn: "Ara Town Club",
    thumbnailUrl: "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?q=80&w=800"
  },
  {
    id: "gal_16",
    titleHi: "वर-वधू गृह प्रवेश पूजा",
    titleEn: "Sacred Griha Pravesh Puja",
    locationHi: "धरहरा, आरा",
    locationEn: "Dharahara, Ara",
    thumbnailUrl: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800"
  },
  {
    id: "gal_17",
    titleHi: "मंडप सजने की भव्य तैयारी",
    titleEn: "The Art of Mandap Decoration",
    locationHi: "दानापुर, पटना",
    locationEn: "Danapur, Patna",
    thumbnailUrl: "https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?q=80&w=800"
  },
  {
    id: "gal_18",
    titleHi: "खुशहाल परिवार - सामूहिक चित्र",
    titleEn: "Happy Family United Portrait",
    locationHi: "सगुना मोड़, पटना",
    locationEn: "Saguna More, Patna",
    thumbnailUrl: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800"
  },
  {
    id: "gal_19",
    titleHi: "शादी की रस्मों का घूंघट शॉट",
    titleEn: "Classic Bridal Veil Shot",
    locationHi: "पकड़ी, आरा",
    locationEn: "Pakri, Ara",
    thumbnailUrl: "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?q=80&w=800"
  },
  {
    id: "gal_20",
    titleHi: "गठबंधन - जीवनभर का साथ",
    titleEn: "The Sacred Knot of Togetherness",
    locationHi: "बिंद टोली, आरा",
    locationEn: "Bind Toli, Ara",
    thumbnailUrl: "https://images.unsplash.com/photo-1605001011156-cbf0b0f67a51?q=80&w=800"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: 1,
    titleHi: "बुकिंग और विज़न चर्चा",
    titleEn: "Booking & Vision Consultation",
    descHi: "हमारे दफ्तर (बिंद टोली, आरा) आएं या फोन पर संपर्क करें। हम आपकी तारीखों, रस्मों और पसंदीदा बजट पर चर्चा करके पैकेज फाइनल करते हैं।",
    descEn: "Visit our office at Bind Toli, Ara, or contact us via call/WhatsApp. We lock your dates and run through your cultural schedule and aesthetic goals."
  },
  {
    stepNumber: 2,
    titleHi: "रूटीन प्लानिंग",
    titleEn: "Day-by-Day Event Planning",
    descHi: "तिलक, हल्दी, मेहंदी और जयमाला की विस्तृत टाइमिंग शीट तैयार की जाती है ताकि एक भी सुंदर पल कैद होने से न छूटे।",
    descEn: "We outline an execution timeline coordinating drone pilots, outdoor lighting gear, and backup systems for zero-gaps event coverage."
  },
  {
    stepNumber: 3,
    titleHi: "आधुनिक उपकरणों से कवरेज",
    titleEn: "Elite Coverage & Execution",
    descHi: "उत्कृष्ट कैमरों, अल्ट्रा-ब्राइट रिग्स और शानदार ड्रोन संचालन के साथ हमारी 5+ सदस्यों की टीम पूरे जोश और कलात्मकता के साथ रिकॉर्डिंग करती है।",
    descEn: "Our team deploys carrying high-end camera rigs, professional portable lighting setups, and drones, directed with extreme precision and decorum."
  },
  {
    stepNumber: 4,
    titleHi: "सिनेमैटिक संपादन एवं ग्रेडिंग",
    titleEn: "Cinematic Editing & Master Studio",
    descHi: "हमारे इन-हाउस स्टूडियो एडिटर्स बेहतरीन गानों, खूबसूरत कलर टोन और संजीदा विज़ुअल्स के साथ शादी का दिल छू लेने वाला टीज़र और फिल्म तराशते हैं।",
    descEn: "Our production desk runs comprehensive sorting, sound syncing, premium cinematic color-grading, making sure each emotional highlight flows perfectly."
  },
  {
    stepNumber: 5,
    titleHi: "प्रीमियम एलबम एवं डिलीवरी",
    titleEn: "Premium Album & Movie Handover",
    descHi: "40 पेज का वाटरप्रूफ एलिगेंट करिश्मा डिजाइनर एलबम, फुल एचडी शादी की वीडियो पेनड्राइव और डिजिटल लिंक्स आपके घर मुस्कुराते हुए डिलीवर किये जाते हैं।",
    descEn: "Your deluxe water-resistant designer Karizma Album, gold-accented video flashdrive with crisp Full HD cinema files delivered right to your home."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "rev_1",
    nameHi: "आलोक सिन्हा",
    nameEn: "Alok Sinha",
    locationHi: "पटना, बिहार (तारीख: फ़रवरी 2026)",
    locationEn: "Patna, Bihar (Event: Feb 2026)",
    reviewHi: "राज वीडियो ने मेरी बहन की शादी की फोटोग्राफी की थी। सच कहूं तो जब हमने सिनेमैटिक टीज़र और करिश्मा एलबम देखा तो पूरा परिवार भावुक हो गया। 25 साल का अनुभव उनकी टीम के काम के अनुशासन में साफ दिखता है।",
    reviewEn: "Raj Video covered my sister's wedding recently. Honestly, when we saw the cinematic teaser and the Karizma album, the entire family was in tears. Their 25 years of experience really shines through their professionalism during chaotic wedding rituals.",
    rating: 5,
    date: "2026-02-14",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150"
  },
  {
    id: "rev_2",
    nameHi: "श्रीमती रागिनी देवी",
    nameEn: "Mrs. Ragini Devi",
    locationHi: "बिंद टोली, आरा (तारीख: दिसंबर 2025)",
    locationEn: "Bind Toli, Ara (Event: Dec 2025)",
    reviewHi: "चुन्नू जी हमारे परिवार के बहुत पुराने विश्वसनीय फोटोग्राफर हैं। इन्होंने अपनी पुरानी शैली और आधुनिक कैमरे व ड्रोन रिनोवेशन का बहुत शानदार तालमेल रखा है। बारात और जयमाला की ड्रोन कवरेज कमाल की थी!",
    reviewEn: "Chunnu Ji has been our trusted family compiler since 15 years back. They have perfectly matched their deep cultural legacy with modern high-end tech. The drone coverage of the Jaimala and Barat was absolutely majestic!",
    rating: 5,
    date: "2025-12-28",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150"
  },
  {
    id: "rev_3",
    nameHi: "रणवीर सिंह यादव",
    nameEn: "Ranveer Singh Yadav",
    locationHi: "वाराणसी, उत्तर प्रदेश (तारीख: अप्रैल 2026)",
    locationEn: "Varanasi, Uttar Pradesh (Event: Apr 2026)",
    reviewHi: "सिनेमैटिक पैकेज (85,000) सचमुच हर पैसे वसूल है। 4 दिन के सभी उत्सवों का इतनी बारीकी से कवरेज और सुंदर संपादन मैंने पहले कभी स्थानीय स्तर पर नहीं देखा था। चुन्नू जी और उनकी टीम को बहुत-बहुत धन्यवाद!",
    reviewEn: "The Cinematic Package (85,000) is worth every single rupee. They covered four days of grand functions without a single delay. The quality of cinematic color grading outperforms high-end national agencies. Infinite thanks to Chunnu Ji!",
    rating: 5,
    date: "2026-04-10",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150"
  }
];
