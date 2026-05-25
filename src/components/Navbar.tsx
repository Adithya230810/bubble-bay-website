import { useState } from 'react';
import { Sun, Moon, Menu, X, Search, Leaf, PhoneCall } from 'lucide-react';
import { CATEGORIES } from '../types';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: string;
  setSelectedCategory: (catId: string) => void;
}

export default function Navbar({
  isDarkMode,
  toggleDarkMode,
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
}: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-sticky-navbar"
      className={`sticky top-0 z-40 w-full transition-all duration-300 backdrop-blur-md shadow-sm border-b ${
        isDarkMode 
          ? 'bg-[#0b1510]/85 border-white/5 text-[#f8f5ec]' 
          : 'bg-[#f8f5ec]/90 border-[#0b5d36]/10 text-[#0b5d36]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo Group */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center cursor-pointer group select-none"
            id="navbar-brand-logo"
          >
            <div className="flex items-center gap-1.5">
              <svg 
                viewBox="0 0 190 55" 
                className="h-14 sm:h-16 w-auto"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Emblem (Stylized 'B' with Tree and Hand) */}
                <g id="emblem" transform="translate(4, 2)">
                  {/* The 'B' Backbone in Dark Green */}
                  <path 
                    d="M 18,8 h 10 c 6,0 10,2.5 10,6.5 c 0,3 -2,5 -5.2,5.8 c 3.2,0.8 5.2,2.8 5.2,6.2 c 0,4.5 -4,7.5 -10,7.5 L 18,34 Z" 
                    fill={isDarkMode ? '#34d399' : '#0b5d36'} 
                    className="transition-colors duration-300"
                  />
                  {/* Counterspaces of B */}
                  <path 
                    d="M 22.5,11.5 h 3.5 c 2,0 3.5,0.8 3.5,2.2 c 0,1.5 -1.5,2.2 -3.5,2.2 h -3.5 Z" 
                    fill={isDarkMode ? '#0b1510' : '#f8f5ec'} 
                    className="transition-colors duration-300"
                  />
                  <path 
                    d="M 22.5,21.5 h 4.5 c 2,0 3.5,1 3.5,2.4 c 0,1.5 -1.5,2.4 -4.5,2.4 h -4.5 Z" 
                    fill={isDarkMode ? '#0b1510' : '#f8f5ec'} 
                    className="transition-colors duration-300"
                  />

                  {/* Supportive Hand at base of B (cradling the trunk) */}
                  <path 
                    d="M 17,34 c -7.5,0 -11,-3 -9,-6.5 c 0.8,-1.5 2.5,-1.5 3.5,0.2 c 1.2,2 4.2,2.5 6.5,1.8" 
                    stroke={isDarkMode ? '#34d399' : '#0b5d36'} 
                    strokeWidth="2.2" 
                    strokeLinecap="round" 
                    fill="none" 
                    className="transition-colors duration-300 group-hover:-translate-x-0.5 transition-transform duration-300"
                  />
                  <path 
                    d="M 17,34 c -2.5,-1.8 -5,-2.8 -5.8,-4" 
                    stroke={isDarkMode ? '#34d399' : '#0b5d36'} 
                    strokeWidth="1.8" 
                    strokeLinecap="round" 
                    fill="none" 
                    className="transition-colors duration-300"
                  />
                  <path 
                    d="M 17,34 c -1.5,-2.8 -3.2,-4 -4.2,-5.5" 
                    stroke={isDarkMode ? '#34d399' : '#0b5d36'} 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    fill="none" 
                    className="transition-colors duration-300"
                  />

                  {/* Elegant tree trunk branching out inside the 'B' frame */}
                  <path 
                    d="M 14.5,30.5 c -1.8,-5.5 -2.2,-10.5 -0.8,-15.5 T 18.5,6" 
                    stroke={isDarkMode ? '#34d399' : '#0b5d36'} 
                    strokeWidth="2.2" 
                    strokeLinecap="round" 
                    fill="none" 
                  />
                  <path 
                    d="M 13.5,20.5 Q 8.5,16 4.5,17.5" 
                    stroke={isDarkMode ? '#34d399' : '#0b5d36'} 
                    strokeWidth="1.6" 
                    strokeLinecap="round" 
                    fill="none" 
                  />
                  <path 
                    d="M 13.5,13.5 Q 15,8 9.5,5.5" 
                    stroke={isDarkMode ? '#34d399' : '#0b5d36'} 
                    strokeWidth="1.6" 
                    strokeLinecap="round" 
                    fill="none" 
                  />

                  {/* Lime/Vibrant Green delicate Leaf Clustered Circles */}
                  <circle cx="4.5" cy="17" r="2.2" fill="#4ade80" className="opacity-90" />
                  <circle cx="9.5" cy="12.5" r="1.8" fill={isDarkMode ? '#34d399' : '#0b5d36'} />
                  <circle cx="9.5" cy="5.5" r="2.2" fill="#4ade80" className="opacity-95" />
                  <circle cx="14" cy="3.5" r="2.6" fill="#22c55e" />
                  <circle cx="17.5" cy="2.5" r="1.6" fill={isDarkMode ? '#34d399' : '#0b5d36'} />
                  <circle cx="2" cy="22.5" r="1.8" fill="#4ade80" />
                  <circle cx="6.5" cy="23" r="2.2" fill="#4ade80" />
                  <circle cx="10.5" cy="18" r="2.2" fill="#22c55e" />
                  <circle cx="13" cy="9.5" r="2.8" fill="#4ade80" />
                  <circle cx="19" cy="6.5" r="2.2" fill="#4ade80" />
                </g>

                {/* Custom Brand Typography with Letter Spacing */}
                <g id="typography" transform="translate(43, 0)">
                  {/* LUBBLE next to the upper loop of B */}
                  <text 
                    x="0" 
                    y="18.5" 
                    fontFamily="Cinzel, Playfair Display, Didot, Georgia, serif" 
                    fontSize="16.5" 
                    fontWeight="bold" 
                    letterSpacing="1.2"
                    fill={isDarkMode ? '#f8f5ec' : '#0c5c36'}
                    className="transition-colors duration-300"
                  >
                    LUBBLE
                  </text>
                  
                  {/* BAY next to the lower loop of B */}
                  <text 
                    x="1" 
                    y="32.5" 
                    fontFamily="Cinzel, Playfair Display, Didot, Georgia, serif" 
                    fontSize="15.5" 
                    fontWeight="bold" 
                    letterSpacing="3.5"
                    fill={isDarkMode ? '#f8f5ec' : '#0c5c36'}
                    className="transition-colors duration-300"
                  >
                    BAY
                  </text>

                  {/* "by Marudhar Organics" Subheading with brand matching gold accent color */}
                  <text 
                    x="2.2" 
                    y="41" 
                    fontFamily="Inter, system-ui, sans-serif" 
                    fontSize="5" 
                    fontWeight="600" 
                    letterSpacing="1.5"
                    fill="#d4a437"
                  >
                    BY MARUDHAR ORGANICS
                  </text>
                </g>
              </svg>
            </div>
          </div>

          {/* Nav Links - Desktop */}
          <nav className="hidden lg:flex items-center gap-8 font-space text-sm font-medium">
            <button
              onClick={() => scrollToSection('hero')}
              className="hover:text-[#d4a437] transition-all duration-200"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('story')}
              className="hover:text-[#d4a437] transition-all duration-200"
            >
              Our Story
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="hover:text-[#d4a437] transition-all duration-200"
            >
              Soaps Collection
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="hover:text-[#d4a437] transition-all duration-200"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection('faqs')}
              className="hover:text-[#d4a437] transition-all duration-200"
            >
              FAQs
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-[#d4a437] transition-all duration-200"
            >
              Contact Us
            </button>
          </nav>

          {/* Action Tools - Search, Theme, Order Call */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            {/* Search toggler desktop/mobile */}
            <div className="relative flex items-center">
              {isSearchOpen && (
                <input
                  type="text"
                  placeholder="Search soaps..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`mr-2 py-1.5 px-3 rounded-lg text-xs font-sans focus:outline-hidden transition-all duration-300 w-36 sm:w-48 ${
                    isDarkMode 
                      ? 'bg-emerald-950/80 border border-white/10 text-white placeholder-gray-400' 
                      : 'bg-[#dff5e3]/50 border border-[#0b5d36]/20 text-[#0b5d36] placeholder-[#0b5d36]/50'
                  }`}
                  autoFocus
                />
              )}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={`p-2 rounded-xl transition-all duration-200 ${
                  isDarkMode ? 'hover:bg-emerald-950/80' : 'hover:bg-[#dff5e3]/60'
                }`}
                title="Search soap collection"
              >
                {isSearchOpen ? <X size={18} /> : <Search size={18} />}
              </button>
            </div>

            {/* Dark & Light Theme Switcher */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-xl transition-all duration-200 ${
                isDarkMode ? 'hover:bg-emerald-950/80 text-amber-400' : 'hover:bg-[#dff5e3]/60 text-emerald-800'
              }`}
              title={isDarkMode ? 'Activate Light Mode' : 'Activate Dark Mode'}
              id="theme-toggler-button"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Contact Call CTA Button */}
            <a
              href="tel:9600000503"
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-[#0b5d36] text-[#dff5e3] dark:bg-[#dff5e3] dark:text-[#0b5d36] rounded-xl text-xs font-space font-semibold hover:shadow-md transition-shadow"
            >
              <PhoneCall size={14} />
              <span>Call Founder</span>
            </a>

            {/* Hamburger Button - Mobile menu toggler */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-xl transition-all duration-200 ${
                isDarkMode ? 'hover:bg-emerald-950/80' : 'hover:bg-[#dff5e3]/60'
              }`}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className={`lg:hidden border-t px-4 pt-4 pb-6 space-y-3 shadow-md ${
          isDarkMode ? 'bg-[#0d1c15] border-white/5' : 'bg-[#fcfbf9] border-[#0b5d36]/5'
        }`}>
          {/* Quick Category Filter on Mobile nav */}
          <div>
            <p className="text-[10px] font-space uppercase tracking-widest text-brand-gold font-bold mb-2">
              Browse Categories
            </p>
            <div className="flex flex-wrap gap-1.5 pb-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    scrollToSection('products');
                  }}
                  className={`text-[10px] px-2.5 py-1 rounded-full font-space transition-colors duration-150 ${
                    selectedCategory === cat.id
                      ? 'bg-brand-gold text-white'
                      : isDarkMode
                      ? 'bg-emerald-950/50 text-gray-300'
                      : 'bg-emerald-50 text-[#0b5d36] border border-emerald-100'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          <hr className="border-brand-dark/15 dark:border-white/5" />

          {/* Navigation link group */}
          <div className="flex flex-col gap-2 font-space text-[15px] font-medium pt-1">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-left py-2 hover:text-[#d4a437] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('story')}
              className="text-left py-2 hover:text-[#d4a437] transition-colors"
            >
              Our Story
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="text-left py-2 hover:text-[#d4a437] transition-colors"
            >
              Soaps Collection
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-left py-2 hover:text-[#d4a437] transition-colors"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection('faqs')}
              className="text-left py-2 hover:text-[#d4a437] transition-colors"
            >
              FAQs
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left py-2 hover:text-[#d4a437] transition-colors"
            >
              Contact Us
            </button>
          </div>

          {/* Direct call action on trigger panel */}
          <div className="pt-2">
            <a
              href="tel:9600000503"
              className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#0b5d36] text-white dark:bg-brand-cream dark:text-brand-dark rounded-xl text-xs font-space font-semibold"
            >
              <PhoneCall size={14} />
              <span>Call Direct Order (+91 96000 00503)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
