import React, { useState, useEffect, useMemo } from 'react';
import { 
  Leaf, 
  Sparkles, 
  Award, 
  ArrowRight, 
  Smile, 
  Heart, 
  Compass, 
  CheckCircle, 
  MessageCircle,
  Clock,
  ExternalLink,
  ShieldCheck,
  Zap
} from 'lucide-react';

// Custom imports
import { SOAP_PRODUCTS, CATEGORIES, SoapProduct } from './types';
import Navbar from './components/Navbar';
import FloatingBubbles from './components/FloatingBubbles';
import ProductCard from './components/ProductCard';
import ProductDetailModal from './components/ProductDetailModal';
import Testimonials from './components/Testimonials';
import FAQAccordion from './components/FAQAccordion';
import ContactForm from './components/ContactForm';

// Hero background image generated statically
import heroBanner from './assets/images/hero_soap_banner_1779725270478.png';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<SoapProduct | null>(null);

  // Quick skincare advisory states
  const [quizSkinType, setQuizSkinType] = useState<string>('');
  const [quizGoal, setQuizGoal] = useState<string>('');
  const [quizRecommendation, setQuizRecommendation] = useState<SoapProduct | null>(null);

  // Counter numbers (initially static with dynamic visual tick representation)
  const [whatsappClicks, setWhatsappClicks] = useState<number>(() => {
    const stored = localStorage.getItem('whatsapp_clicks_count_fresh');
    if (!stored) {
      localStorage.setItem('whatsapp_clicks_count_fresh', '0');
      return 0;
    }
    return parseInt(stored, 10);
  });
  const [countFormulas, setCountFormulas] = useState(12);

  // Dark Mode effects and state syncing
  useEffect(() => {
    const savedTheme = localStorage.getItem('bubble-bay-theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.body.classList.add('dark', 'dark-mode-scroll');
    } else {
      setIsDarkMode(false);
      document.body.classList.remove('dark', 'dark-mode-scroll');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const next = !prev;
      if (next) {
        localStorage.setItem('bubble-bay-theme', 'dark');
        document.body.classList.add('dark', 'dark-mode-scroll');
      } else {
        localStorage.setItem('bubble-bay-theme', 'light');
        document.body.classList.remove('dark', 'dark-mode-scroll');
      }
      return next;
    });
  };

  // Synchronized state for WhatsApp clicks and global handler
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      let target = e.target as HTMLElement | null;
      while (target && target.tagName !== 'A') {
        target = target.parentElement;
      }
      if (target && target.tagName === 'A') {
        const href = target.getAttribute('href');
        if (href && (href.includes('wa.me') || href.includes('whatsapp.com'))) {
          setWhatsappClicks(prev => {
            const next = prev + 1;
            localStorage.setItem('whatsapp_clicks_count_fresh', String(next));
            return next;
          });
        }
      }
    };
    window.addEventListener('click', handleGlobalClick);
    return () => window.removeEventListener('click', handleGlobalClick);
  }, []);

  // Staggered counters increase logic for realism
  useEffect(() => {
    const interval = setInterval(() => {
      setWhatsappClicks(prev => {
        const next = prev + (Math.random() > 0.6 ? 1 : 0);
        localStorage.setItem('whatsapp_clicks_count_fresh', String(next));
        return next;
      });
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  // Filtered Products Core Logic
  const filteredProducts = useMemo(() => {
    return SOAP_PRODUCTS.filter((product) => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.ingredients.some(ing => ing.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  // Handle Skin advisor recommendations matching user types
  const handleAdvisorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quizSkinType || !quizGoal) return;

    let match: SoapProduct | undefined;
    
    // Check goals first for highly personalized requests
    if (quizGoal === 'acne') {
      match = SOAP_PRODUCTS.find(p => p.id === 'acne');
    } else if (quizGoal === 'spots') {
      match = SOAP_PRODUCTS.find(p => p.id === 'potato');
    } else if (quizGoal === 'cooling') {
      match = SOAP_PRODUCTS.find(p => p.id === 'ice-blast');
    } else if (quizGoal === 'exfoliate') {
      match = SOAP_PRODUCTS.find(p => p.id === 'strawberry');
    } else if (quizGoal === 'repair') {
      match = SOAP_PRODUCTS.find(p => p.id === 'kupameni');
    } else if (quizGoal === 'glow') {
      match = SOAP_PRODUCTS.find(p => p.id === 'kesar');
    } else if (quizGoal === 'nourish') {
      match = SOAP_PRODUCTS.find(p => p.id === 'camel-milk');
    } else if (quizGoal === 'glass') {
      match = SOAP_PRODUCTS.find(p => p.id === 'rice-water');
    } else {
      // Check skin types
      if (quizSkinType === 'oily') {
        match = SOAP_PRODUCTS.find(p => p.id === 'acne');
      } else if (quizSkinType === 'dry') {
        match = SOAP_PRODUCTS.find(p => p.id === 'camel-milk') || SOAP_PRODUCTS.find(p => p.id === 'coconut-oil');
      } else if (quizSkinType === 'sensitive') {
        match = SOAP_PRODUCTS.find(p => p.id === 'kupameni');
      } else if (quizSkinType === 'dull') {
        match = SOAP_PRODUCTS.find(p => p.id === 'potato') || SOAP_PRODUCTS.find(p => p.id === 'kesar');
      } else if (quizSkinType === 'active') {
        match = SOAP_PRODUCTS.find(p => p.id === 'ice-blast');
      } else if (quizSkinType === 'combination') {
        match = SOAP_PRODUCTS.find(p => p.id === 'coconut-oil') || SOAP_PRODUCTS.find(p => p.id === 'rice-water');
      } else {
        match = SOAP_PRODUCTS.find(p => p.id === 'coconut-oil');
      }
    }

    setQuizRecommendation(match || SOAP_PRODUCTS[0]);
  };

  const clearQuiz = () => {
    setQuizSkinType('');
    setQuizGoal('');
    setQuizRecommendation(null);
  };

  // Scroll utilities
  const scrollSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className={`min-h-screen text-sans-serif transition-colors duration-300 ${
      isDarkMode ? 'bg-[#0b1510] text-[#f8f5ec]' : 'bg-[#f8f5ec] text-[#0b5d36]'
    }`}>
      {/* Floating Sparkly Bubbles Background */}
      <FloatingBubbles />

      {/* Persistent Floating WhatsApp Helper */}
      <div className="fixed bottom-6 right-6 z-40 group flex flex-col items-end">
        <span className="mb-2 bg-[#0b5d36] text-white text-[11px] font-space font-medium tracking-wide py-1 px-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Click to Live Chat
        </span>
        <a
          href="https://wa.me/919600000503?text=Hello%20Bubble%20Bay!%20I%20visited%20your%20skincare%20store%20and%20would%20love%20to%20consult%252."
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-[#25d366] text-white rounded-full shadow-xl hover:scale-110 active:scale-95 transition-transform animate-pulse cursor-pointer border-2 border-white/20"
          id="floating-whatsapp-trigger"
          title="Instant WhatsApp Support"
        >
          <MessageCircle size={28} />
        </a>
      </div>

      {/* Styled Sticky Navbar Header */}
      <Navbar
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* --- HERO SECTION --- */}
      <section id="hero" className="relative min-h-[90vh] flex items-center justify-center py-20 overflow-hidden">
        {/* Absolute Background Panel Image & Dark Gradient */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBanner}
            alt="Bubble Bay Luxury Background"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover select-none object-center opacity-70"
          />
          {/* Layer of backdrop blur and solid darkening/lightening tint to elevate centered text contrast */}
          <div className={`absolute inset-0 backdrop-blur-[4px] ${
            isDarkMode 
              ? 'bg-[#0b1510]/85' 
              : 'bg-[#f8f5ec]/88'
          }`} />
          <div className={`absolute inset-0 bg-gradient-to-t ${
            isDarkMode ? 'from-[#0b1510] via-transparent to-black/30' : 'from-[#f8f5ec] via-transparent to-[#0b5d36]/15'
          }`} />
        </div>

        {/* Hero Interactive Main Card Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col items-center justify-center text-center py-8">
          
          <div className="flex flex-col justify-center items-center text-center max-w-2xl">
            {/* Upper Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-gold/15 border border-brand-gold/30 rounded-full w-fit mb-5 animate-fade-in shadow-xs">
              <Sparkles className="text-brand-gold" size={12} />
              <span className="text-[10px] sm:text-xs font-space font-semibold tracking-[0.2em] uppercase text-brand-gold">
                100% Organically Handcrafted, Chennai
              </span>
            </div>

            {/* Heading Display */}
            <span className="text-[12px] font-space tracking-[0.3em] font-medium uppercase text-emerald-600 dark:text-[#dff5e3]">
              Marudhar Organics Presents
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-semibold tracking-tight leading-tight mt-1 text-black dark:text-white">
              Bubble Bay
            </h1>
            <h2 className="text-xl sm:text-2xl font-display text-brand-gold font-medium mt-1 tracking-wider italic">
              “Nature to You”
            </h2>

            {/* Description Copy */}
            <p className={`mt-5 text-sm sm:text-base max-w-xl leading-relaxed font-sans ${
              isDarkMode ? 'text-gray-300' : 'text-emerald-950 font-normal'
            }`}>
              Indulge in handcrafted, skin-friendly luxury soaps formulated with raw farm-fresh milk, organic extracts and Ayurvedic medical herbs. Re-engineered to respect the sensitive skin structure with completely natural saponification.
            </p>

            {/* Action CTA Action Group */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 items-center">
              <button
                onClick={() => scrollSection('products')}
                className="px-6 py-3.5 bg-[#0b5d36] text-[#f8f5ec] dark:bg-[#fffbeb] dark:text-[#0b5d36] hover:scale-103 font-space font-semibold text-xs sm:text-sm rounded-xl hover:shadow-lg transition-all flex items-center gap-2 group cursor-pointer"
                id="hero-primary-cta"
              >
                <span>Explore Products</span>
                <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
              </button>
              
              <button
                onClick={() => scrollSection('contact')}
                className={`px-6 py-3.5 border font-space font-semibold text-xs sm:text-sm rounded-xl transition-all hover:scale-103 cursor-pointer ${
                  isDarkMode 
                    ? 'border-white/20 text-white bg-white/5 hover:bg-white/10' 
                    : 'border-[#0b5d36]/30 text-[#0b5d36] bg-[#0b5d36]/5 hover:bg-[#0b5d36]/10'
                }`}
                id="hero-secondary-cta"
              >
                Contact Organics
              </button>
            </div>

            {/* Organic/Premium badges icons */}
            <div className="mt-12 flex flex-wrap justify-center gap-6 text-xs font-space">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500">
                  <Award size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-[#0a522f] dark:text-emerald-300">Artisanal Curing</h4>
                  <p className="text-[10px] text-gray-500 dark:text-gray-350">4-6 Weeks Aged</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500">
                  <Leaf size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-[#0a522f] dark:text-emerald-300">100% Plant Power</h4>
                  <p className="text-[10px] text-gray-500 dark:text-gray-350">Zero Synthetic Sulfate</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500">
                  <ShieldCheck size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-[#0a522f] dark:text-emerald-300">Chennai Certified</h4>
                  <p className="text-[10px] text-gray-500 dark:text-gray-350">Cruelty-Free Safe</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- STATISTICS MILESTONES BANNER --- */}
      <section className={`py-12 border-y ${
        isDarkMode ? 'bg-[#122119]/30 border-white/5' : 'bg-[#dff5e3]/30 border-[#0b5d36]/5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl sm:text-4xl font-display font-bold text-brand-gold">
                {whatsappClicks}
              </p>
              <p className="text-[11px] sm:text-xs font-space uppercase tracking-wider text-gray-400 mt-1">
                WhatsApp Order Clicks
              </p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-display font-bold text-brand-gold">
                {countFormulas}
              </p>
              <p className="text-[11px] sm:text-xs font-space uppercase tracking-wider text-gray-400 mt-1">
                Signature Custom Formulas
              </p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-display font-extrabold text-[#0a522f] dark:text-emerald-300">
                100%
              </p>
              <p className="text-[11px] sm:text-xs font-space uppercase tracking-wider text-gray-500 dark:text-gray-450 mt-1">
                Organic & Food-Grade
              </p>
            </div>
            <div>
              <p className="text-base sm:text-lg font-display font-bold text-[#0a522f] dark:text-emerald-300 leading-tight min-h-[40px] flex items-center justify-center">
                May take time to reply
              </p>
              <p className="text-[11px] sm:text-xs font-space uppercase tracking-wider text-gray-500 dark:text-gray-450 mt-1">
                Direct WhatsApp Support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SKIN CARE ADVISORY INTERACTIVE QUIZ --- */}
      <section className="py-20 bg-brand-cream/40 dark:bg-black/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className={`p-8 sm:p-12 rounded-3xl border ${
            isDarkMode 
              ? 'bg-[#122119]/80 border-white/10 shadow-2xl' 
              : 'bg-white/80 border-[#0b5d36]/10 shadow-xl'
          }`} id="skin-skincare-advisor-quiz">
            <div className="text-center mb-8">
              <span className="text-[10px] font-space uppercase tracking-widest text-brand-gold font-bold">
                Organic Wellness Tool
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-medium mt-1">
                Herbal Skin Advisor Quiz
              </h3>
              <p className="text-xs text-gray-450 max-w-md mx-auto mt-2">
                Don’t know which raw ingredients match your precise skin pH balance? Let our herbal system calculate your custom formula match!
              </p>
            </div>

            {!quizRecommendation ? (
              <form onSubmit={handleAdvisorSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Skin Type selector */}
                  <div>
                    <label className="block text-xs font-space uppercase tracking-wider text-[#d4a437] font-semibold mb-2">
                      1. Your Current Skin Profile?
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { id: 'oily', label: 'Oil-Prone / Acneic' },
                        { id: 'dry', label: 'Flaky / Dry Dermis' },
                        { id: 'sensitive', label: 'Sensitive / Redness' },
                        { id: 'combination', label: 'Normal / Combo' },
                        { id: 'dull', label: 'Dull / Uneven Dermis' },
                        { id: 'active', label: 'Sweaty / Active Athlete' },
                      ].map((type) => (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => setQuizSkinType(type.id)}
                          className={`p-3 text-xs font-space rounded-xl border text-center transition-all ${
                            quizSkinType === type.id
                              ? 'bg-[#0b5d36] text-white border-transparent'
                              : isDarkMode
                              ? 'bg-transparent border-white/10 hover:border-brand-gold'
                              : 'bg-emerald-50/20 border-brand-dark/10 hover:border-brand-dark/30'
                          }`}
                        >
                          {type.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Primary Skin Goal */}
                  <div>
                    <label className="block text-xs font-space uppercase tracking-wider text-[#d4a437] font-semibold mb-2">
                      2. What Is Your Skin Goal?
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { id: 'acne', label: 'Clear Breakouts' },
                        { id: 'nourish', label: 'Deep Nourishment' },
                        { id: 'glow', label: 'Royal Gold Glow' },
                        { id: 'spots', label: 'Blemish & Tan Eraser' },
                        { id: 'cooling', label: 'Cooling & Odor Blast' },
                        { id: 'exfoliate', label: 'Berry Exfoliator' },
                        { id: 'glass', label: 'Glass Skin Bloom' },
                        { id: 'general', label: 'Balanced Daily Wash' },
                      ].map((goal) => (
                        <button
                          key={goal.id}
                          type="button"
                          onClick={() => setQuizGoal(goal.id)}
                          className={`p-3 text-xs font-space rounded-xl border text-center transition-all ${
                            quizGoal === goal.id
                              ? 'bg-[#0b5d36] text-white border-transparent'
                              : isDarkMode
                              ? 'bg-transparent border-white/10 hover:border-brand-gold'
                              : 'bg-emerald-50/20 border-brand-dark/10 hover:border-brand-dark/30'
                          }`}
                        >
                          {goal.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="text-center pt-4">
                  <button
                    type="submit"
                    disabled={!quizSkinType || !quizGoal}
                    className="px-8 py-3 bg-[#0b5d36] hover:bg-emerald-800 disabled:bg-gray-400 disabled:opacity-45 text-[#f8f5ec] dark:bg-brand-cream dark:text-brand-dark dark:hover:bg-[#efe9d3] rounded-xl font-space font-semibold text-xs uppercase tracking-wider transition duration-200"
                    id="trigger-advisor-query"
                  >
                    Generate Skincare Blueprint
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-6 flex flex-col items-center">
                <span className="text-xs uppercase tracking-widest text-emerald-500 font-bold mb-2">
                  Match Generated successfully
                </span>
                <p className="text-sm text-gray-400">Your tailored herbal formula is:</p>
                <h4 className="text-2xl sm:text-3xl font-display font-medium text-brand-gold mt-1">
                  {quizRecommendation.name}
                </h4>
                <p className="text-xs italic text-emerald-700 dark:text-emerald-300 mt-1 max-w-md">
                  “{quizRecommendation.subtitle}”
                </p>

                {/* Micro product preview in quiz */}
                <div className="mt-6 p-4 rounded-xl border border-brand-dark/10 dark:border-white/10 flex items-center gap-4 max-w-sm text-left">
                  <img
                    src={quizRecommendation.bgImage}
                    alt={quizRecommendation.name}
                    referrerPolicy="no-referrer"
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-300 line-clamp-2">
                      {quizRecommendation.description}
                    </p>
                    <button
                      onClick={() => setSelectedProduct(quizRecommendation)}
                      className="mt-2 text-[10px] font-space text-[#d4a437] font-semibold uppercase tracking-wider hover:underline"
                    >
                      Investigate Ingredients & Benefits →
                    </button>
                  </div>
                </div>

                <div className="mt-8 flex gap-3">
                  <button
                    onClick={clearQuiz}
                    className="text-xs font-space border border-brand-dark/20 dark:border-white/25 px-4 py-2 rounded-lg text-gray-500 hover:text-brand-gold"
                  >
                    Retake Quiz
                  </button>

                  <a
                    href={`https://wa.me/919600000503?text=Hello%20Marudhar%20Organics!%20Your%20web%20Skin%20Advisor%20recommended%20the%20"${quizRecommendation.name}"%20${quizRecommendation.id.includes('deo') ? 'herbal%20deo%20spray' : 'soap'}%20for%20my%20skincare%20goal.%20I%20would%20like%20to%20order.`}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-xs font-space bg-[#0b5d36] text-white px-4 py-2 rounded-lg"
                  >
                    {quizRecommendation.id.includes('deo') ? 'Order Recommended Spray' : 'Order Recommended Soap'}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* --- SOAPS PRODUCTS SECTION --- */}
      <section id="products" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-[11px] font-space uppercase tracking-[0.25em] text-brand-gold font-bold bg-[#0b5d36]/10 px-3 py-1.5 rounded-full dark:bg-emerald-900/40">
                Apothecary Collection
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium mt-4 tracking-tight">
                Our Signature Soap Bar Cures
              </h2>
              <p className={`mt-2 text-sm max-w-xl font-sans ${isDarkMode ? 'text-gray-400' : 'text-emerald-850'}`}>
                Handcrafted from plant extracts, mineral-rich clays, and exotic milk compounds. Filter by your targeted beauty class.
              </p>
            </div>

            {/* Category Filter Pills (Desktop & Large screens) */}
            <div className="hidden lg:flex flex-wrap gap-2 mt-6 md:mt-0 font-space text-xs">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2.5 rounded-full font-semibold transition-all duration-200 cursor-pointer ${
                    selectedCategory === cat.id
                      ? isDarkMode 
                        ? 'bg-[#dff5e3] text-[#0b5d36]' 
                        : 'bg-[#0b5d36] text-[#f8f5ec] shadow-lg shadow-emerald-950/20'
                      : isDarkMode
                        ? 'bg-emerald-950/40 border border-white/5 text-gray-300 hover:border-white/10'
                        : 'bg-emerald-50 text-[#0b5d36] border border-emerald-100 hover:bg-emerald-100/50'
                  }`}
                  id={`cat-filter-button-${cat.id}`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Informative Filter Bar Info (if search term is entered) */}
          {(searchTerm || selectedCategory !== 'all') && (
            <div className="mb-6 flex items-center justify-between text-xs font-sans text-gray-400">
              <p>
                Showing <span className="font-bold text-brand-gold">{filteredProducts.length}</span> products matching 
                {selectedCategory !== 'all' && ` "${CATEGORIES.find(c => c.id === selectedCategory)?.name}"`}
                {searchTerm && ` for search keywords: "${searchTerm}"`}
              </p>

              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchTerm('');
                }}
                className="text-brand-gold hover:underline font-semibold"
              >
                Clear Filters
              </button>
            </div>
          )}

          {/* Core Soaps Showcase Grid */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <Compass size={40} className="mx-auto text-gray-400 animate-spin" />
              <h4 className="text-lg font-space font-medium mt-4">No therapeutic products found</h4>
              <p className="text-xs text-gray-500 mt-1 max-w-sm mx-auto">
                No matching product formulas are currently listed in this category with those keywords. Click clear to see the full list of {SOAP_PRODUCTS.length} wellness formulations.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchTerm('');
                }}
                className="mt-4 px-4 py-2 bg-[#0b5d36] text-white rounded-lg text-xs font-semibold"
              >
                Check Entire Apothecary
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="core-soaps-bento-grid">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onSelect={() => setSelectedProduct(product)}
                  isDarkMode={isDarkMode}
                />
              ))}
            </div>
          )}

        </div>
      </section>

      {/* --- ABOUT SECTION : OUR STORIES --- */}
      <section id="story" className="py-24 relative bg-brand-cream/35 dark:bg-black/15 overflow-hidden">
        {/* Decorative element background */}
        <div className="absolute right-[-10%] bottom-[-10%] w-[400px] h-[400px] rounded-full bg-emerald-800/5 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative Text Col */}
            <div className="lg:col-span-6 text-left">
              <span className="text-[11px] font-space uppercase tracking-[0.25em] text-brand-gold font-bold bg-[#0b5d36]/10 px-3 py-1.5 rounded-full dark:bg-emerald-900/40">
                Handcrafters Pledge
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium mt-4 tracking-tight">
                About Marudhar Organics
              </h2>
              <p className={`mt-6 text-sm leading-relaxed font-sans ${isDarkMode ? 'text-gray-300' : 'text-emerald-950 font-normal'}`}>
                Marudhar Organics creates handcrafted herbal skincare products using natural-inspired ingredients for healthy glowing skin. Founded in the historic city of Chennai, we are committed to reviving royal therapeutic bathing rituals through purely chemical-free, nutrient-dense soap formulation.
              </p>

              <blockquote className={`border-l-2 border-brand-gold pl-4 italic text-xs sm:text-sm mt-6 ${isDarkMode ? 'text-zinc-450' : 'text-emerald-850'}`}>
                "Our mission is simple: to keep the ancient heritage of botanical curing intact. We measure our premium success by the glow on your skin, never the speed of the machinery."
                <div className="text-[11px] font-space not-italic font-bold tracking-widest text-[#d4a437] uppercase mt-2">
                  — The Marudhar Organics Crew
                </div>
              </blockquote>

              <div className="mt-8 space-y-4">
                <div className="flex gap-3">
                  <div className="p-1.5 bg-[#0b5d36]/10 rounded-full text-[#d4a437]">
                    <CheckCircle size={15} />
                  </div>
                  <p className="text-xs sm:text-sm">
                    <strong>Direct Sourcing:</strong> Pasture milks and dry saffron threads harvested directory from organic cooperatives in North & South India.
                  </p>
                </div>
                
                <div className="flex gap-3">
                  <div className="p-1.5 bg-[#0b5d36]/10 rounded-full text-[#d4a437]">
                    <CheckCircle size={15} />
                  </div>
                  <p className="text-xs sm:text-sm">
                    <strong>Zero Heat Preservation:</strong> Our traditional cold-process soapmaking preserves precious vitamins, enzymes and skin plumping proteins, offering a natural retinol action.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Graphics Bento Timeline Col */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className={`p-6 rounded-2xl border ${
                isDarkMode ? 'bg-[#122119] border-white/5' : 'bg-[#fcfbf9] border-[#0b5d36]/15'
              }`}>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#d4a437] to-[#b48824] text-white flex items-center justify-center mb-4 shadow-[0_2px_10px_rgba(212,164,55,0.3)]">
                  <Leaf size={18} />
                </div>
                <h4 className="font-space font-bold text-sm sm:text-base text-[#0b5d36] dark:text-[#dff5e3]">100% Biodegradable</h4>
                <p className={`text-xs mt-2 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700 font-medium'}`}>
                  Every soap bar wraps directly in craft organic paper, creating a zero-plastic luxury packaging pipeline.
                </p>
              </div>

              <div className={`p-6 rounded-2xl border ${
                isDarkMode ? 'bg-[#122119] border-white/5' : 'bg-[#fcfbf9] border-[#0b5d36]/15'
              }`}>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0b5d36] to-[#116e3f] text-white flex items-center justify-center mb-4 shadow-[0_2px_10px_rgba(11,93,54,0.3)]">
                  <Award size={18} />
                </div>
                <h4 className="font-space font-bold text-sm sm:text-base text-[#0b5d36] dark:text-[#dff5e3]">Artisan Cured</h4>
                <p className={`text-xs mt-2 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700 font-medium'}`}>
                  Naturally matured on wooden racks for 4 to 6 weeks to let excess moisture drain safely for maximum density.
                </p>
              </div>

              <div className={`p-6 rounded-2xl border ${
                isDarkMode ? 'bg-[#122119] border-white/5' : 'bg-[#fcfbf9] border-[#0b5d36]/15'
              }`}>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0b5d36] to-[#116e3f] text-white flex items-center justify-center mb-4 shadow-[0_2px_10px_rgba(11,93,54,0.3)]">
                  <Clock size={18} />
                </div>
                <h4 className="font-space font-bold text-sm sm:text-base text-[#0b5d36] dark:text-[#dff5e3]">Slow Hydration</h4>
                <p className={`text-xs mt-2 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700 font-medium'}`}>
                  We formulate with food-grade Vegetable Glycerin that seals environmental humidity inside skin tissues recursively.
                </p>
              </div>

              <div className={`p-6 rounded-2xl border ${
                isDarkMode ? 'bg-[#122119] border-white/5' : 'bg-[#fcfbf9] border-[#0b5d36]/15'
              }`}>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#d4a437] to-[#b48824] text-white flex items-center justify-center mb-4 shadow-[0_2px_10px_rgba(212,164,55,0.3)]">
                  <Sparkles size={18} />
                </div>
                <h4 className="font-space font-bold text-sm sm:text-base text-[#0b5d36] dark:text-[#dff5e3]">Sensitive Guard</h4>
                <p className={`text-xs mt-2 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700 font-medium'}`}>
                  Formulated completely without synthetic SLS surface-cleansers or irritating industrial dyes. Safe even for baby skin.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS SLIDER SECTION --- */}
      <Testimonials isDarkMode={isDarkMode} />

      {/* --- INTERACTIVE FAQ DATABASE --- */}
      <FAQAccordion isDarkMode={isDarkMode} />

      {/* --- CONTACT OFFICE & ORDER FORM --- */}
      <ContactForm isDarkMode={isDarkMode} />

      {/* --- LUXURIOUS BRAND ACCREDITATIONS & FOOTER --- */}
      <footer className={`border-t py-12 ${
        isDarkMode ? 'bg-[#060c09] border-white/5' : 'bg-[#122119] text-[#f8f5ec] border-[#0b5d36]/10'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
            
            {/* Branding Column */}
            <div className="md:col-span-5 text-left">
              <div className="flex items-center gap-2 group cursor-pointer">
                <Leaf className="text-brand-gold" size={24} />
                <span className="text-2xl font-display font-semibold tracking-tight uppercase text-white">
                  Bubble Bay
                </span>
              </div>
              <p className="text-[10px] uppercase font-space tracking-widest text-[#d4a437] font-medium mt-1">
                by Marudhar Organics
              </p>
              <p className="text-xs text-gray-300 mt-4 max-w-sm leading-relaxed">
                Handcrafted herbal skincare products, combining legacy South Indian Siddha botany with modern dermatological standards. Our elixirs are brewed locally in Adyar, Chennai.
              </p>
            </div>

            {/* Quick Links Column */}
            <div className="md:col-span-3 text-left">
              <h4 className="text-xs uppercase font-space tracking-widest text-brand-gold font-bold mb-4">
                Apothecary Collections
              </h4>
              <ul className="text-xs space-y-2.5 text-gray-300 font-sans">
                <li>
                  <button onClick={() => { setSelectedCategory('milk'); scrollSection('products'); }} className="hover:text-white transition">
                    Elixir Milk Soaps (Goat, Camel, Donkey)
                  </button>
                </li>
                <li>
                  <button onClick={() => { setSelectedCategory('herbal'); scrollSection('products'); }} className="hover:text-white transition">
                    Botanical Leaf Formulas (Neem, Kupameni)
                  </button>
                </li>
                <li>
                  <button onClick={() => { setSelectedCategory('fruity'); scrollSection('products'); }} className="hover:text-white transition">
                    Cooling & Menthol Blasts (Ice Blast, Strawberry)
                  </button>
                </li>
                <li>
                  <button onClick={() => { setSelectedCategory('specialty'); scrollSection('products'); }} className="hover:text-white transition">
                    Advanced Corrective Skin Cures (Potato, Acne)
                  </button>
                </li>
              </ul>
            </div>

            {/* Support / Contact info Column */}
            <div className="md:col-span-4 text-left">
              <h4 className="text-xs uppercase font-space tracking-widest text-brand-gold font-bold mb-4">
                White Glove Customer Services
              </h4>
              <p className="text-xs text-gray-300 leading-relaxed mb-4">
                For urgent Chennai hand-deliveries, specific skin-profile consultations, or customized wedding/corporate gifting hampers:
              </p>
              
              <div className="space-y-1.5 text-xs">
                <p className="text-white">
                  <strong>Directline:</strong> +91 96000 00503
                </p>
                <p className="text-white">
                  <strong>Founder Email:</strong> amit960000503@gmail.com
                </p>
                <p className="text-[#d4a437] text-xs sm:text-sm uppercase font-space tracking-wider font-bold animate-premium-blink py-1.5 px-3 rounded-lg border border-[#d4a437]/25 bg-[#d4a437]/5 mt-2 mb-1">
                  ⚡ Out of City Delivery Coming Soon!
                </p>
                <p className="text-gray-450 text-[10px] italic">
                  Available for support: Mon - Sat (9:00 AM - 7:00 PM IST)
                </p>
              </div>
            </div>

          </div>

          <hr className="border-white/10 my-8" />

          {/* Slogan and Copyright row */}
          <div className="flex flex-col sm:flex-row justify-between items-center text-[11px] text-gray-400 font-mono">
            <p>
              © {new Date().getFullYear()} Bubble Bay by Marudhar Organics. All Rights Reserved.
            </p>
            <div className="flex gap-4 items-center mt-4 sm:mt-0">
              <span className="hover:text-white cursor-pointer" onClick={() => scrollSection('story')}>Our Pledge</span>
              <span className="text-gray-650">•</span>
              <span className="hover:text-white cursor-pointer" onClick={() => scrollSection('faqs')}>Safety Guarantee</span>
              <span className="text-gray-650">•</span>
              <span className="hover:text-white cursor-pointer" onClick={() => scrollSection('contact')}>Adyar, Chennai Hub</span>
            </div>
          </div>

        </div>
      </footer>

      {/* --- DYNAMIC PRODUCT MODAL VIEWER --- */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        isDarkMode={isDarkMode}
      />
    </div>
  );
}
