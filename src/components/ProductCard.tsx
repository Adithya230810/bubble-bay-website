import React from 'react';
import { motion } from 'motion/react';
import { SoapProduct } from '../types';
import { Eye, ShoppingCart, Award, Leaf } from 'lucide-react';

interface ProductCardProps {
  product: SoapProduct;
  onSelect: () => void;
  isDarkMode: boolean;
  key?: string | number;
}

export default function ProductCard({ product, onSelect, isDarkMode }: ProductCardProps) {
  // WhatsApp Order Direct link
  const whatsappNumber = '919600000503';
  const itemType = product.id.includes('deo') ? 'herbal deo spray' : 'handcrafted soap';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Hello Marudhar Organics! I am interested in purchasing the premium ${itemType} "${product.name}" (${product.weight}). Is it available for delivery?`
  )}`;

  return (
    <motion.div
      layout
      id={`product-card-${product.id}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className={`relative group rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ${
        isDarkMode 
          ? 'bg-emerald-950/20 glassmorphism-dark text-[#f8f5ec]' 
          : 'bg-white/45 glassmorphism text-[#0b5d36]'
      } border ${
        isDarkMode ? 'border-white/10 hover:border-brand-gold/40' : 'border-[#0b5d36]/10 hover:border-[#0b5d36]/30'
      }`}
    >
      {/* Product Card Image Banner Container */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={product.bgImage}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        {/* Transparent Color Overlay based on light/dark modes */}
        <div className={`absolute inset-0 bg-gradient-to-t ${
          isDarkMode ? 'from-dark-bg/95 via-dark-bg/40 to-black/10' : 'from-[#f8f5ec]/95 via-transparent to-black/5'
        }`} />

        {/* Dynamic Badges atop the image */}
        <div className="absolute top-4 left-4 flex gap-2">
          {product.isBestSeller && (
            <span className="text-[10px] uppercase font-space font-semibold tracking-wider text-white bg-brand-gold px-2.5 py-1 rounded-full shadow-md">
              Best Seller
            </span>
          )}
          <span className={`text-[10px] uppercase font-space font-semibold tracking-wider text-white bg-emerald-700 px-2.5 py-1 rounded-full shadow-md flex items-center gap-1`}>
            <Leaf size={10} />
            Organic
          </span>
        </div>

        {/* Quick Weight Badge */}
        <div className="absolute top-4 right-4 text-[10px] uppercase font-mono bg-black/40 text-white backdrop-blur-md px-2.5 py-1 rounded-full">
          {product.weight}
        </div>

        {/* AI-Generated Image Notice */}
        <div className="absolute bottom-2 right-3 text-[9px] uppercase font-mono text-[#f8f5ec]/70 bg-black/40 backdrop-blur-[2px] px-2 py-0.5 rounded pointer-events-none tracking-wider scale-90 origin-bottom-right">
          Image is AI generated
        </div>
        
        {/* Luxury details overlay triggered on hover */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <button
            onClick={onSelect}
            className="p-3 bg-white text-[#0b5d36] rounded-full hover:scale-110 transition-transform shadow-md hover:bg-[#dff5e3]"
            title="Quick View Details"
          >
            <Eye size={20} />
          </button>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-brand-gold text-white rounded-full hover:scale-110 transition-transform shadow-md hover:bg-yellow-500"
            title="Order Via WhatsApp"
          >
            <ShoppingCart size={20} />
          </a>
        </div>
      </div>

      {/* Product details body */}
      <div className="p-6 flex flex-col justify-between h-64">
        <div>
          <div className="flex items-start justify-between">
            <h3 className="text-xl font-display font-medium tracking-tight group-hover:text-brand-gold transition-colors duration-200">
              {product.name}
            </h3>
            <span className="text-[#d4a437] font-space font-bold text-lg">
              {product.price}
            </span>
          </div>
          <p className={`text-xs italic mt-1 font-sans ${isDarkMode ? 'text-gray-300' : 'text-emerald-800/80'}`}>
            {product.subtitle}
          </p>

          <p className={`text-xs mt-3 leading-relaxed line-clamp-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {product.description}
          </p>

          {/* Core uses preview pills */}
          <div className="mt-4 flex flex-wrap gap-1">
            {product.ingredients.slice(0, 3).map((ing, idx) => (
              <span
                key={idx}
                className={`text-[9px] px-2 py-0.5 rounded-full font-mono font-medium ${
                  isDarkMode 
                    ? 'bg-emerald-950/50 text-emerald-300 border border-emerald-900/30' 
                    : 'bg-emerald-50 text-[#0b5d36] border border-emerald-100'
                }`}
              >
                {ing}
              </span>
            ))}
          </div>
        </div>

        {/* Modal activation + directly buy action button */}
        <div className="pt-4 border-t border-brand-dark/10 dark:border-white/10 flex items-center justify-between mt-auto">
          <button
            onClick={onSelect}
            className={`text-xs font-space font-medium hover:underline flex items-center gap-1 ${
              isDarkMode ? 'text-gray-300 hover:text-brand-gold' : 'text-[#0b5d36] hover:text-amber-600'
            }`}
          >
            Explore Ingredients & Benefits →
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-space font-semibold uppercase tracking-wider px-3 py-1.5 bg-brand-dark text-brand-light dark:bg-brand-cream dark:text-brand-dark rounded-md hover:scale-103 transition-transform"
          >
            WhatsApp Order
          </a>
        </div>
      </div>
    </motion.div>
  );
}
