import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Award, ShieldAlert, Sparkles, ShoppingBag, Leaf, HelpCircle } from 'lucide-react';
import { SoapProduct } from '../types';

interface ProductDetailModalProps {
  product: SoapProduct | null;
  onClose: () => void;
  isDarkMode: boolean;
}

export default function ProductDetailModal({ product, onClose, isDarkMode }: ProductDetailModalProps) {
  if (!product) return null;

  // Handler to close on wrapper click
  const handleWrapperClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).id === 'modal-backdrop') {
      onClose();
    }
  };

  // Generate WhatsApp dynamic message
  const whatsappNumber = '919600000503'; // Country code 91 + 9600000503
  const productType = product.id.includes('deo') ? 'herbal deo spray' : 'handcrafted soap';
  const messageText = `Hello Marudhar Organics! I'd love to order the premium Bubble Bay "${product.name}" (${product.weight}) ${productType}. Please share delivery details and availability. Thank you!`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageText)}`;

  return (
    <AnimatePresence>
      <div
        id="modal-backdrop"
        onClick={handleWrapperClick}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md overflow-y-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className={`relative w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl ${
            isDarkMode 
              ? 'bg-[#122119] text-[#f8f5ec] border border-white/10' 
              : 'bg-[#fcfbf9] text-[#0b5d36] border border-[#0b5d36]/10'
          }`}
          id={`product-modal-${product.id}`}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            id="close-modal-button"
            className={`absolute top-4 right-4 z-10 p-2 rounded-full transition-all duration-200 ${
              isDarkMode 
                ? 'bg-black/40 hover:bg-black/60 text-white/80 hover:text-white' 
                : 'bg-white/60 hover:bg-white/80 text-[#0b5d36] hover:text-[#0b5d36]/70'
            }`}
            aria-label="Close details"
          >
            <X size={20} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12">
            {/* Visual Header / Background Panel */}
            <div className="md:col-span-5 relative h-64 md:h-full min-h-[300px] overflow-hidden flex flex-col justify-end p-6">
              {/* background image representation */}
              <div className="absolute inset-0">
                <img
                  src={product.bgImage}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${
                  isDarkMode 
                    ? 'from-[#122119] via-[#122119]/70 to-black/20' 
                    : 'from-[#fcfbf9] via-[#fcfbf9]/60 to-black/10'
                }`} />
              </div>

              {/* Badges placed at top left of image */}
              <div className="absolute top-4 left-4 flex flex-col gap-2 z-[2]">
                <div className="flex items-center gap-1 bg-amber-500/90 text-white text-[10px] tracking-wider font-space font-semibold uppercase px-3 py-1 rounded-full shadow-md">
                  <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
                  Premium
                </div>
                {product.isBestSeller && (
                  <div className="bg-brand-gold text-white text-[10px] tracking-wider font-space font-semibold uppercase px-3 py-1 rounded-full shadow-md">
                    Best Seller
                  </div>
                )}
              </div>

              {/* Product Info inside bottom image */}
              <div className="relative z-10">
                <span className="text-[11px] font-space uppercase tracking-widest text-[#d4a437] font-semibold">
                  Marudhar Organics Original
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-medium leading-none text-white drop-shadow-md">
                  {product.name}
                </h2>
                <p className="text-white/80 text-sm italic font-sans mt-2 drop-shadow-sm">
                  {product.subtitle}
                </p>
                <div className="mt-4 flex items-center justify-between bg-black/30 backdrop-blur-md rounded-xl p-3 border border-white/10">
                  <span className="text-white/90 text-xs font-mono">WEIGHT: {product.weight}</span>
                  <span className="text-[#d4a437] text-lg font-space font-bold">{product.price}</span>
                </div>
                <p className="mt-2 text-[10px] text-right text-white/50 font-mono tracking-wider">
                  ⚠️ The image shown is AI generated
                </p>
              </div>
            </div>

            {/* Soap Specs and Details Panel */}
            <div className="md:col-span-7 p-6 md:p-8 flex flex-col justify-between overflow-y-auto max-h-[80vh] md:max-h-[600px]">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-emerald-500 uppercase font-bold">
                  Description
                </span>
                <p className={`mt-1 text-sm leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {product.description}
                </p>

                {/* Badges Segment */}
                <div className="flex flex-wrap gap-2 mt-4 py-3 border-y border-brand-dark/10 dark:border-white/10">
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-space bg-amber-500/10 text-amber-500 border border-amber-500/20">
                    <Award size={13} />
                    Handmade
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-space bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                    <Leaf size={13} />
                    100% Organic
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-space bg-cyan-500/10 text-cyan-500 border border-cyan-500/20">
                    <Check size={13} />
                    Skin Friendly
                  </span>
                </div>

                {/* Grid of properties (Uses, Ingredients, Benefits) */}
                <div className="grid grid-cols-1 gap-5 mt-6">
                  {/* Uses */}
                  <div>
                    <h4 className="text-xs font-space font-semibold uppercase tracking-widest text-[#d4a437] flex items-center gap-2">
                      <HelpCircle size={14} /> Recommended Uses
                    </h4>
                    <ul className="mt-2 text-xs space-y-1.5">
                      {product.uses.map((use, idx) => (
                        <li key={idx} className="flex gap-2 items-start text-left">
                          <span className="text-amber-500 mt-0.5">•</span>
                          <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>{use}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ingredients */}
                  <div>
                    <h4 className="text-xs font-space font-semibold uppercase tracking-widest text-[#d4a437] flex items-center gap-2">
                      <Leaf size={14} /> Active Herbal Ingredients
                    </h4>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {product.ingredients.map((ing, idx) => (
                        <span
                          key={idx}
                          className={`text-[11px] px-2.5 py-1 rounded-md font-sans border ${
                            isDarkMode 
                              ? 'bg-emerald-950/40 text-emerald-300 border-emerald-800/20' 
                              : 'bg-emerald-50 text-[#0b5d36] border-emerald-100'
                          }`}
                        >
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="text-xs font-space font-semibold uppercase tracking-widest text-[#d4a437] flex items-center gap-2">
                      <Sparkles size={14} /> Clinical & Skin Benefits
                    </h4>
                    <ul className="mt-2 text-xs space-y-1.5">
                      {product.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex gap-2 items-start text-left">
                          <Check size={13} className="text-emerald-500 mt-0.5" />
                          <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Modal footer order action button */}
              <div className="mt-8 pt-4 border-t border-brand-dark/10 dark:border-white/10 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
                <div>
                  <span className={`text-[10px] uppercase font-mono tracking-wider ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Order Direct Call:
                  </span>
                  <p className="text-sm font-space font-semibold text-brand-gold">
                    +91 96000 00503
                  </p>
                </div>
                
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-[#122119] text-[#f8f5ec] dark:bg-[#f8f5ec] dark:text-[#122119] rounded-xl font-space font-semibold text-sm hover:scale-103 active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg hover:brightness-110"
                  id={`order-button-modal-${product.id}`}
                >
                  <ShoppingBag size={16} />
                  <span>Order on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
