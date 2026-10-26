/**
 * GMM GARMENTS LIMITED / জিএমএম গার্মেন্টস লিমিটেড
 * Core Application Logic: Tape Scroll Sync, i18n Bilingual Switch, RFQ Builder, Product Filter
 */

// Bilingual Translation Dictionary
const i18nData = {
  en: {
    // Nav
    brandName: "GMM Garments LTD.",
    brandSub: "INNOVATION & CRAFTSMANSHIP",
    navAbout: "About & Process",
    navProducts: "Products",
    navCertifications: "Certifications",
    navContact: "Contact & RFQ",
    btnQuote: "Request a Quote",
    
    // Hero
    heroSpec: "SPEC REF: BATCH 2026 // GMM GARMENTS LIMITED",
    heroTitle: "From Raw <span class=\"highlight-stitch\">Yarn</span> to Global Shipment",
    heroDesc: "A forward-thinking apparel manufacturing powerhouse. GMM Garments Limited crafts export-grade Knitwear, Woven shirts, and sustainable Denim tailored for leading corporate brands and modern retail fashion chains.",
    btnGetQuote: "Get a Custom Quote",
    btnProfile: "Download Company Profile",
    heroCap: "AQL 1.5 Certified",
    heroEthical: "100% Ethical Facility",
    heroFast: "Fast Turnaround Time",
    cardTopTag: "GMM PATTERN DRAFT // CUT NO. 01",
    craftStamp: "GMM QUALITY INSPECTED & CERTIFIED",

    // Metrics
    metricCapVal: "850K+",
    metricCapLabel: "Monthly Production",
    metricCapSub: "Export & Corporate grade garments",
    metricArtisansVal: "1,400+",
    metricArtisansLabel: "Master Craftsmen",
    metricArtisansSub: "Trained operators & pattern technicians",
    metricQualityVal: "99.4%",
    metricQualityLabel: "AQL 1.5 Pass Rate",
    metricQualitySub: "Zero-compromise stitch precision",
    metricTimeVal: "15-25",
    metricTimeLabel: "Days Turnaround",
    metricTimeSub: "Rapid prototyping & sample delivery",

    // Process
    processTag: "END-TO-END WORKFLOW",
    processTitle: "The \"Yarn to Shipment\" Journey",
    processDesc: "Every single stitch carries our dedication. From spinning raw cotton to final steam pressing and packaging, explore our transparent 6-stage manufacturing line.",
    
    step1Title: "1. Yarn Sourcing & Testing",
    step1Desc: "Procuring premium combed cotton, organic GOTS fiber, and stretch blends with verified tensile strength and colorfastness.",
    step1Feat1: "OEKO-TEX Class 1 yarn testing",
    step1Feat2: "Ring spun & combed options",

    step2Title: "2. Knitting & Eco-Dyeing",
    step2Desc: "State-of-the-art circular knitting machines for single jersey, pique, interlock and sustainable water-saving dyeing plants.",
    step2Feat1: "Zero discharge ETP water purification",
    step2Feat2: "Custom Pantone color matching",

    step3Title: "3. CAD Pattern & Cutting",
    step3Desc: "Computerized CAD grading and automatic blade cutting systems maximize fabric yield and guarantee millimeter-accurate seam notches.",
    step3Feat1: "Gerber / Lectra precision cutting",
    step3Feat2: "Grainline & shrinkage pre-shrunk",

    step4Title: "4. Precision Sewing & Lines",
    step4Desc: "Multi-line automated sewing units equipped with Juki & Brother machinery. Specialized stitching for lockstitch, overlock, and flatlock.",
    step4Feat1: "Inline quality checkpoints every 10 machines",
    step4Feat2: "Clean, reinforced seams and bartacks",

    step5Title: "5. Wash Lab & AQL Inspection",
    step5Desc: "Eco-friendly enzyme washing, ozone rinse, laser fading for denim, followed by stringent AQL 1.5/2.5 4-point visual inspection.",
    step5Feat1: "Metal detection & needle scan on 100% units",
    step5Feat2: "Industrial tunnel steam finishing",

    step6Title: "6. Custom Packing & Logistics",
    step6Desc: "Custom hang-tagging, barcode labels, individual polybags, and corrugated carton boxing ready for safe regional & doorstep delivery.",
    step6Feat1: "FSC certified packaging cartons",
    step6Feat2: "Doorstep container & bulk dispatch",

    // Products
    prodTag: "PRODUCTION CAPABILITIES",
    prodTitle: "Pattern-Cut Product Spectrum",
    prodDesc: "Explore our specialized garment categories engineered for corporate workwear, uniforms, retail fashion, and promotional merchandise.",
    tabAll: "All Categories",
    tabKnit: "Knitwear",
    tabWoven: "Woven & Shirts",
    tabDenim: "Denim & Workwear",
    btnAddToRfq: "Select for Quotation",

    // Certifications
    certTag: "STANDARDS & COMPLIANCE",
    certTitle: "Woven Care-Label Certifications",
    certDesc: "Just like the care label on your favorite garment, our certifications represent our strict commitment to environmental, ethical, and labor standards.",
    factoryShowTitle: "High-Tech Infrastructure & Clean Workplaces",
    factoryShowDesc: "Our factory complex integrates solar energy, advanced ventilation, ergonomic workstations, and round-the-clock safety audits to ensure premier craftsmanship in a dignified environment.",
    factoryPoint1: "Modern Juki & Brother automated sewing lines",
    factoryPoint2: "Fully operational biological ETP wastewater treatment",
    factoryPoint3: "In-house lab for shrinkage, color rub & tear testing",
    factoryPoint4: "Dedicated daycare, medical center & fair-wage guarantee",

    // Contact & RFQ
    contactTag: "GET IN TOUCH",
    contactTitle: "Hang-Tag Quotation & Direct Inquiry",
    contactDesc: "Ready to produce your next batch? Fill in your project specifications or message our merchandising team directly via WhatsApp for fast responses.",
    rfqTitle: "Request for Quotation (RFQ)",
    rfqSerial: "REF NO: GMM-RFQ-2026",
    labelProduct: "Product Category",
    labelQty: "Estimated Quantity (Pcs)",
    labelFabric: "Fabric Preference / GSM",
    labelName: "Your Full Name",
    labelCompany: "Company / Brand Name",
    labelPhone: "Phone or WhatsApp Number",
    labelEmail: "Email Address",
    labelNotes: "Project Notes / Specific Details",
    btnSubmitRfq: "Generate Instant WhatsApp Quote",
    privacyNote: "Fast response guaranteed within 4-6 business hours. Tech-pack support available."
  },
  bn: {
    // Nav
    brandName: "জিএমএম গার্মেন্টস লি.",
    brandSub: "নিপুণ কারুশিল্প ও আধুনিক মান",
    navAbout: "আমাদের পরিচয় ও প্রসেস",
    navProducts: "প্রোডাক্টসমূহ",
    navCertifications: "সার্টিফিকেশন",
    navContact: "যোগাযোগ ও কোটেশন",
    btnQuote: "কোটেশন নিন",
    
    // Hero
    heroSpec: "স্পেক রেফারেন্স: ২০২৬ // জিএমএম গার্মেন্টস লিমিটেড",
    heroTitle: "কাঁচা <span class=\"highlight-stitch\">সুতা</span> থেকে গ্লোবাল শিপমেন্ট",
    heroDesc: "আধুনিক ও নির্ভরযোগ্য অ্যাপারেল ম্যানুফ্যাকচারিং পার্টনার। জিএমএম গার্মেন্টস লিমিটেড শীর্ষস্থানীয় কর্পোরেট ব্র্যান্ড এবং রিটেল ফ্যাশনের জন্য তৈরি করে বিশ্বমানের নিটওয়্যার, ওভেন শার্ট এবং পরিবেশবান্ধব ডেনিম।",
    btnGetQuote: "কাস্টম কোটেশন নিন",
    btnProfile: "কোম্পানি প্রোফাইল ডাউনলোড",
    heroCap: "AQL 1.5 সার্টিফাইড",
    heroEthical: "১০০% এথিক্যাল ফ্যাক্টরি",
    heroFast: "দ্রুততম ডেলিভারি টাইম",
    cardTopTag: "জিএমএম প্যাটার্ন ড্রাফট // কাট নং ০১",
    craftStamp: "জিএমএম কোয়ালিটি সার্টিফাইড ও নিখুঁত সেলাই",

    // Metrics
    metricCapVal: "৮৫০K+",
    metricCapLabel: "মাসিক উৎপাদন সক্ষমতা",
    metricCapSub: "প্রিমিয়াম কর্পোরেট ও এক্সপোর্ট গ্রেড",
    metricArtisansVal: "১,৪০০+",
    metricArtisansLabel: "দক্ষ কারিগর ও কর্মী",
    metricArtisansSub: "প্রশিক্ষিত অপারেটর ও প্যাটার্ন মাস্টার",
    metricQualityVal: "৯৯.৪%",
    metricQualityLabel: "AQL 1.5 পাসের হার",
    metricQualitySub: "জিরো ডিফেক্ট সেলাই নিশ্চয়তা",
    metricTimeVal: "১৫-২৫",
    metricTimeLabel: "দিনের মধ্যে ডেলিভারি",
    metricTimeSub: "দ্রুত স্যাম্পলিং ও প্রোডাকশন",

    // Process
    processTag: "সম্পূর্ণ প্রোডাকশন ফ্লো",
    processTitle: "সুতা থেকে শিপমেন্টের সম্পূর্ণ পথচলা",
    processDesc: "প্রতিটি সেলাইয়ে আমাদের আন্তরিকতা ও নিখুঁত মান। কাঁচা সুতা স্পিনিং থেকে শুরু করে স্টিম ফিনিশিং ও ডোরস্টেপ শিপমেন্ট—আমাদের স্বচ্ছ ৬টি ধাপ দেখুন।",
    
    step1Title: "১. উন্নত সুতা ও ফাইবার সোর্সিং",
    step1Desc: "সেরা মানের কম্বড কটন, অর্গানিক GOTS ফাইবার এবং সঠিক টেনসাইল শক্তি ও টেকসই রঙের সুতা সংগ্রহ ও ল্যাব টেস্ট।",
    step1Feat1: "OEKO-TEX ক্লাস ১ সুতা টেস্টিং",
    step1Feat2: "রিং স্পান ও কম্বড কটন ভ্যারিয়েন্ট",

    step2Title: "২. নিটিং ও পরিবেশবান্ধব ডাইং",
    step2Desc: "আধুনিক সার্কুলার নিটিং মেশিনে সিঙ্গেল জার্সি, পিক ও ইন্টারলক ফেব্রিক তৈরি এবং পানি সাশ্রয়ী ইকো-ডাইং প্ল্যান্ট।",
    step2Feat1: "জিরো ডিসচার্জ ETP ওয়াটার পিউরিফিকেশন",
    step2Feat2: "শতভাগ প্যান্টন কালার ম্যাচিং",

    step3Title: "৩. সিএডি প্যাটার্ন ও স্বয়ংক্রিয় কাটিং",
    step3Desc: "কম্পিউটারাইজড CAD গ্রেডিং ও স্বয়ংক্রিয় ব্লেড কাটিং সিস্টেম—ফেব্রিকের সর্বোচ্চ ব্যবহার ও মিলিমিটার নিখুঁত নচ নিশ্চিত করে।",
    step3Feat1: "Gerber / Lectra স্বয়ংক্রিয় কাটিং",
    step3Feat2: "গ্রেইনলাইন ও প্রি-শ্রিঙ্ক ফেব্রিক কন্ট্রোল",

    step4Title: "৪. নিপুণ সেলাই ও সমাবেশ",
    step4Desc: "জাপানিজ Juki ও Brother মেশিনে সাজানো মাল্টি-লাইন সেলাই ফ্লোর। লকস্টিচ, ওভারলক এবং ফ্ল্যাটলক সেলাইয়ে নিখুঁত ফিনিশিং।",
    step4Feat1: "প্রতি ১০ মেশিনে ইন-লাইন কোয়ালিটি অডিট",
    step4Feat2: "মজবুত সিম ও বার্ট্যাক রিইনফোর্সমেন্ট",

    step5Title: "৫. ওয়াশ ল্যাব ও AQL কোয়ালিটি চেক",
    step5Desc: "ইকো-এনজাইম ওয়াশ, ওজোন রিঞ্জ এবং ডেনিম ফিনিশিংয়ের পর AQL 1.5/2.5 কঠোর ৪-পয়েন্ট ভিজ্যুয়াল কোয়ালিটি ইন্সপেকশন।",
    step5Feat1: "১০০% মেটাল ডিটেকশন ও নিডল স্ক্যানিং",
    step5Feat2: "ইন্ডাস্ট্রিয়াল টানেল স্টিম প্রেসিং",

    step6Title: "৬. কাস্টম প্যাকেজিং ও ডেলিভারি",
    step6Desc: "কাস্টম হ্যাং-ট্যাগিং, বারকোড স্টিকার, সেপারেট পলিব্যাগ এবং মজবুত মাস্টার কার্টনে প্যাক করে সারা দেশে সরাসরি ডেলিভারি।",
    step6Feat1: "FSC সার্টিফাইড প্যাকেজিং কার্টন",
    step6Feat2: "ডোরস্টেপ বাল্ক ডেলিভারি লজিস্টিকস",

    // Products
    prodTag: "প্রোডাক্ট সক্ষমতা",
    prodTitle: "প্যাটার্ন-কাট প্রোডাক্ট সম্ভার",
    prodDesc: "কর্পোরেট পোশাক, ইউনিফর্ম, রিটেল ফ্যাশন ও ইভেন্ট মার্চেন্ডাইজ তৈরির জন্য আমাদের প্রধান ক্যাটাগরিগুলো দেখুন।",
    tabAll: "সব প্রোডাক্ট",
    tabKnit: "নিটওয়্যার",
    tabWoven: "ওভেন ও শার্ট",
    tabDenim: "ডেনিম ও ওয়ার্কওয়্যার",
    btnAddToRfq: "কোটেশনে যোগ করুন",

    // Certifications
    certTag: "মান ও কমপ্লায়েন্স",
    certTitle: "কেয়ার-লেবেল সার্টিফিকেশন",
    certDesc: "পোশাকের কেয়ার লেবেলের মতোই আমাদের সার্টিফিকেশনগুলো প্রকাশ করে পরিবেশবান্ধবতা, নিরাপত্তা এবং নৈতিক কর্মপরিবেশের প্রতিশ্রুতি।",
    factoryShowTitle: "আধুনিক অবকাঠামো ও স্বাস্থ্যকর কর্মপরিবেশ",
    factoryShowDesc: "আমাদের ফ্যাক্টরি ক্যাম্পাসে রয়েছে সোলার পাওয়ার, উন্নত ভেন্টিলেশন, আরামদায়ক ওয়ার্কস্টেশন এবং সর্বক্ষণিক ফায়ার সেফটি মনিটরিং।",
    factoryPoint1: "আধুনিক Juki ও Brother অটোমেটিক সুইং লাইন",
    factoryPoint2: "সম্পূর্ণ বায়োলজিক্যাল ETP ওয়াটার ট্রিটমেন্ট প্ল্যান্ট",
    factoryPoint3: "ইন-হাউজ ফেব্রিক শ্রিঙ্কেজ ও কালার ল্যাব টেস্ট",
    factoryPoint4: "ডে-কেয়ার, মেডিকেল সেন্টার ও ন্যায্য মজুরি নিশ্চয়তা",

    // Contact & RFQ
    contactTag: "যোগাযোগ",
    contactTitle: "হ্যাং-ট্যাগ কোটেশন ও ইনকোয়ারি",
    contactDesc: "আপনার পরবর্তী অর্ডারের জন্য প্রস্তুত? আপনার স্পেসিফিকেশন দিয়ে কোটেশন রিকোয়েস্ট করুন অথবা সরাসরি হোয়াটসঅ্যাপে কথা বলুন।",
    rfqTitle: "কোটেশন রিকোয়েস্ট (RFQ)",
    rfqSerial: "রেফারেন্স: GMM-RFQ-2026",
    labelProduct: "প্রোডাক্টের ক্যাটাগরি",
    labelQty: "আনুমানিক পরিমাণ (পিস)",
    labelFabric: "ফেব্রিক স্পেক / জিএসএম (GSM)",
    labelName: "আপনার নাম",
    labelCompany: "কোম্পানি / ব্র্যান্ডের নাম",
    labelPhone: "ফোন বা হোয়াটসঅ্যাপ নম্বর",
    labelEmail: "ইমেইল এড্রেস",
    labelNotes: "প্রজেক্ট নোটস / বিশেষ তথ্য",
    btnSubmitRfq: "সরাসরি হোয়াটসঅ্যাপে কোটেশন পাঠান",
    privacyNote: "সর্বোচ্চ ৪-৬ কার্যঘণ্টার মধ্যে রেসপন্স করা হয়। টেক-প্যাক সুবিধা রয়েছে।"
  }
};

let currentLang = 'en';

// Initialize Everything on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  initMeasuringTape();
  initTapeScrollSync();
  initLanguageSwitcher();
  initProductFilter();
  initRfqCalculator();
  initMobileMenu();
});

/* ===================================================================
   1. TAILOR'S MEASURING TAPE (ইঞ্চি ফিতা) GENERATION & SCROLL SYNC
   =================================================================== */
function initMeasuringTape() {
  const markingsContainer = document.querySelector('.tape-markings');
  if (!markingsContainer) return;

  const totalInches = 30; // 30 inches spaced gracefully
  markingsContainer.innerHTML = '';

  for (let inch = 0; inch <= totalInches; inch++) {
    const inchPercent = (inch / totalInches) * 100;

    // Major tick on the right edge
    const majorTick = document.createElement('div');
    majorTick.className = 'tape-tick major';
    majorTick.style.top = `${inchPercent}%`;
    markingsContainer.appendChild(majorTick);

    // Number strictly on the left side with a dedicated clear badge
    if (inch > 0 && inch < totalInches && inch % 3 === 0) {
      const numberEl = document.createElement('div');
      numberEl.className = 'tape-number';
      numberEl.textContent = `${inch}"`;
      numberEl.style.top = `${inchPercent}%`;
      markingsContainer.appendChild(numberEl);
    }

    // Medium tick (half inch)
    if (inch < totalInches) {
      const halfTick = document.createElement('div');
      halfTick.className = 'tape-tick medium';
      halfTick.style.top = `${inchPercent + (100 / totalInches) * 0.5}%`;
      markingsContainer.appendChild(halfTick);

      // Quarter ticks
      const quarter1 = document.createElement('div');
      quarter1.className = 'tape-tick minor';
      quarter1.style.top = `${inchPercent + (100 / totalInches) * 0.25}%`;
      markingsContainer.appendChild(quarter1);

      const quarter3 = document.createElement('div');
      quarter3.className = 'tape-tick minor';
      quarter3.style.top = `${inchPercent + (100 / totalInches) * 0.75}%`;
      markingsContainer.appendChild(quarter3);
    }
  }
}

function initTapeScrollSync() {
  const needle = document.getElementById('tape-needle');
  if (!needle) return;

  const updateNeedle = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    
    if (docHeight <= 0) return;
    
    const scrollFraction = Math.min(Math.max(scrollTop / docHeight, 0), 1);
    const viewportHeight = window.innerHeight;
    
    // Needle moves from 10px down to viewportHeight - 20px
    const needleTop = 10 + scrollFraction * (viewportHeight - 30);
    needle.style.top = `${needleTop}px`;
  };

  window.addEventListener('scroll', updateNeedle, { passive: true });
  updateNeedle();
}

/* ===================================================================
   2. BILINGUAL LANGUAGE SWITCHER (EN ⇄ বাংলা)
   =================================================================== */
function initLanguageSwitcher() {
  const toggleBtn = document.getElementById('lang-toggle-btn');
  if (!toggleBtn) return;

  // Check saved language
  const savedLang = localStorage.getItem('gmm_lang') || 'en';
  setLanguage(savedLang);

  toggleBtn.addEventListener('click', () => {
    const newLang = currentLang === 'en' ? 'bn' : 'en';
    setLanguage(newLang);
  });
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('gmm_lang', lang);

  document.body.classList.toggle('lang-bn', lang === 'bn');

  // Update active indicator on toggle button
  const enSpan = document.getElementById('lang-en-label');
  const bnSpan = document.getElementById('lang-bn-label');
  if (enSpan && bnSpan) {
    enSpan.classList.toggle('active', lang === 'en');
    bnSpan.classList.toggle('active', lang === 'bn');
  }

  // Update active indicator on mobile drawer language pills
  const drawerEn = document.getElementById('drawer-lang-en');
  const drawerBn = document.getElementById('drawer-lang-bn');
  if (drawerEn && drawerBn) {
    drawerEn.classList.toggle('active', lang === 'en');
    drawerBn.classList.toggle('active', lang === 'bn');
  }

  // Update all translatable elements
  const data = i18nData[lang];
  if (!data) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (data[key]) {
      el.innerHTML = data[key];
    }
  });
}

/* ===================================================================
   3. PRODUCT CATEGORY FILTER TABS
   =================================================================== */
function initProductFilter() {
  const tabs = document.querySelectorAll('.filter-tab');
  const cards = document.querySelectorAll('.pattern-card');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filterCategory = tab.getAttribute('data-category');

      cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterCategory === 'all' || cardCategory === filterCategory) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

/* ===================================================================
   4. INTERACTIVE RFQ BUILDER & WHATSAPP GENERATOR
   =================================================================== */
function initRfqCalculator() {
  const qtySlider = document.getElementById('rfq-qty-slider');
  const qtyDisplay = document.getElementById('rfq-qty-val');
  const productSelect = document.getElementById('rfq-product');
  const fabricInput = document.getElementById('rfq-fabric');
  const form = document.getElementById('rfq-form');

  // Sync Quantity Slider
  if (qtySlider && qtyDisplay) {
    const updateQty = () => {
      const val = parseInt(qtySlider.value, 10);
      qtyDisplay.textContent = `${val.toLocaleString()} Pcs`;

      // Update preset pills active state
      document.querySelectorAll('.preset-pill').forEach(pill => {
        if (parseInt(pill.dataset.qty, 10) === val) {
          pill.classList.add('active');
        } else {
          pill.classList.remove('active');
        }
      });
    };
    qtySlider.addEventListener('input', updateQty);
    updateQty();

    // Volume Preset Pills handler
    document.querySelectorAll('.preset-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        const targetVal = pill.dataset.qty;
        qtySlider.value = targetVal;
        updateQty();
      });
    });
  }

  // --- CUSTOM SELECT DROPDOWN & CATEGORY PILLS SYNC ---
  const customSelectBox = document.getElementById('rfq-custom-select');
  const triggerBtn = customSelectBox ? customSelectBox.querySelector('.select-trigger') : null;
  const triggerIcon = document.getElementById('trigger-icon');
  const triggerTitle = document.getElementById('trigger-title');
  const triggerDesc = document.getElementById('trigger-desc');
  const optionsList = customSelectBox ? customSelectBox.querySelector('.select-options-list') : null;
  const optionItems = customSelectBox ? customSelectBox.querySelectorAll('.select-option-item') : [];
  const categoryPills = document.querySelectorAll('.cat-pill');

  function setCategory(catValue) {
    // 1. Update native hidden select
    if (productSelect) {
      productSelect.value = catValue;
    }

    // 2. Update custom select items
    optionItems.forEach(item => {
      const isMatch = item.dataset.value === catValue;
      item.classList.toggle('active', isMatch);
      item.setAttribute('aria-selected', isMatch ? 'true' : 'false');

      if (isMatch) {
        const itemIconSvg = item.querySelector('.option-icon')?.innerHTML;
        const itemTitleText = item.querySelector('.option-title')?.textContent;
        const itemSubText = item.querySelector('.option-sub')?.textContent;

        if (triggerIcon && itemIconSvg) triggerIcon.innerHTML = itemIconSvg;
        if (triggerTitle && itemTitleText) triggerTitle.textContent = itemTitleText;
        if (triggerDesc && itemSubText) triggerDesc.textContent = itemSubText;
      }
    });

    // 3. Update category quick pills
    categoryPills.forEach(pill => {
      pill.classList.toggle('active', pill.dataset.category === catValue);
    });

    // 4. Close custom dropdown if open
    if (customSelectBox) {
      customSelectBox.classList.remove('open');
      if (triggerBtn) triggerBtn.setAttribute('aria-expanded', 'false');
    }
  }

  // Toggle custom dropdown on trigger click
  if (triggerBtn && customSelectBox) {
    triggerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = customSelectBox.classList.toggle('open');
      triggerBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!customSelectBox.contains(e.target)) {
        customSelectBox.classList.remove('open');
        triggerBtn.setAttribute('aria-expanded', 'false');
      }
    });

    // Keyboard support: Escape closes menu
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && customSelectBox.classList.contains('open')) {
        customSelectBox.classList.remove('open');
        triggerBtn.setAttribute('aria-expanded', 'false');
        triggerBtn.focus();
      }
    });
  }

  // Select an option from custom list
  optionItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      const val = item.dataset.value;
      if (val) setCategory(val);
    });
  });

  // Select via Category Quick-Pills
  categoryPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const cat = pill.dataset.category;
      if (cat) setCategory(cat);
    });
  });

  // Handle "Select for Quotation" buttons on Product Cards
  document.querySelectorAll('.btn-add-rfq').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const card = e.target.closest('.pattern-card');
      if (!card) return;

      const productTitle = card.querySelector('.product-title')?.textContent.trim();
      const productCat = card.getAttribute('data-category');
      const fabricSpec = card.querySelector('.spec-row:nth-child(2) .spec-val')?.textContent.trim();

      // Sync category in custom select & pills
      if (productCat) {
        setCategory(productCat);
      }

      // Pre-fill fabric
      if (fabricInput && fabricSpec) {
        fabricInput.value = `${productTitle} (${fabricSpec})`;
      }

      // Smooth scroll down to RFQ section
      const rfqSection = document.getElementById('contact-rfq');
      if (rfqSection) {
        rfqSection.scrollIntoView({ behavior: 'smooth' });
      }

      showToast(`Selected "${productTitle}" for quotation!`);
    });
  });

  // Handle Form Submission -> WhatsApp Link Generator
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const product = productSelect ? productSelect.options[productSelect.selectedIndex].text : 'Garments';
      const qty = qtySlider ? qtySlider.value : '1000';
      const fabric = document.getElementById('rfq-fabric')?.value || 'Standard Quality Fabric';
      const name = document.getElementById('rfq-name')?.value || 'Valued Buyer';
      const company = document.getElementById('rfq-company')?.value || 'Direct Inquiry';
      const phone = document.getElementById('rfq-phone')?.value || '';
      const email = document.getElementById('rfq-email')?.value || 'N/A';
      const notes = document.getElementById('rfq-notes')?.value || 'Standard export packaging and delivery';

      // Format WhatsApp message (Clean professional text, no emojis)
      const textMessage = 
        `*OFFICIAL INQUIRY - GMM GARMENTS LIMITED*\n\n` +
        `• Category: ${product}\n` +
        `• Estimated Quantity: ${parseInt(qty).toLocaleString()} Pcs\n` +
        `• Fabric Specification: ${fabric}\n` +
        `• Buyer Name: ${name}\n` +
        `• Company / Brand: ${company}\n` +
        `• Phone / WhatsApp: ${phone}\n` +
        `• Email: ${email}\n` +
        `• Specific Notes: ${notes}\n\n` +
        `_Generated via GMM Garments Official Web Portal_`;

      const encodedMessage = encodeURIComponent(textMessage);
      const whatsappNumber = "8801719086628"; // GMM Garments official WhatsApp
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

      showToast(currentLang === 'bn' ? "হোয়াটসঅ্যাপে কোটেশন পাঠানো হচ্ছে..." : "Opening WhatsApp Quotation...");
      
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
      }, 500);
    });
  }
}

/* ===================================================================
   5. MOBILE NAVIGATION MENU & FULLSCREEN DRAWER
   =================================================================== */
function initMobileMenu() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const drawerOverlay = document.getElementById('mobile-drawer-overlay');
  const closeBtn = document.getElementById('mobile-drawer-close-btn');
  const drawerPanel = document.getElementById('mobile-drawer-panel');

  if (!toggleBtn || !drawerOverlay) return;

  const openDrawer = () => {
    drawerOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    toggleBtn.classList.add('is-active');
  };

  const closeDrawer = () => {
    drawerOverlay.classList.remove('active');
    document.body.style.overflow = '';
    toggleBtn.classList.remove('is-active');
  };

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (drawerOverlay.classList.contains('active')) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeDrawer);
  }

  // Close when clicking outside panel on backdrop
  drawerOverlay.addEventListener('click', (e) => {
    if (drawerPanel && !drawerPanel.contains(e.target)) {
      closeDrawer();
    }
  });

  // Close when tapping any link inside drawer
  drawerOverlay.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  // Drawer language pills
  const drawerEn = document.getElementById('drawer-lang-en');
  const drawerBn = document.getElementById('drawer-lang-bn');
  if (drawerEn) {
    drawerEn.addEventListener('click', () => {
      setLanguage('en');
    });
  }
  if (drawerBn) {
    drawerBn.addEventListener('click', () => {
      setLanguage('bn');
    });
  }
}

/* ===================================================================
   6. TOAST NOTIFICATION
   =================================================================== */
function showToast(message) {
  let toast = document.querySelector('.toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-notification';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}
