import { Star, Quote, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../types';

interface TestimonialsProps {
  isDarkMode: boolean;
}

export default function Testimonials({ isDarkMode }: TestimonialsProps) {
  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Decorative Blur Backdrops */}
      <div className="absolute right-[-10%] top-[20%] w-[300px] h-[300px] rounded-full bg-brand-light/20 blur-3xl pointer-events-none" />
      <div className="absolute left-[-10%] bottom-[10%] w-[300px] h-[300px] rounded-full bg-brand-gold/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-space uppercase tracking-[0.25em] text-brand-gold font-bold bg-amber-500/10 px-3 py-1.5 rounded-full dark:bg-amber-500/5">
            Customer Devotion
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium mt-4 tracking-tight">
            Loved By Skin Seekers
          </h2>
          <p className={`mt-3 text-sm font-sans ${isDarkMode ? 'text-gray-400' : 'text-emerald-800/70'}`}>
            Real testimonials from customers across India who traded commercial chemicals for Marudhar Organics’ fresh herbal elixirs.
          </p>
        </div>

        {/* Testimonial Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              id={`testimonial-card-${t.id}`}
              className={`relative rounded-3xl p-8 shadow-sm border transition-all duration-300 hover:scale-102 hover:shadow-xl ${
                isDarkMode 
                  ? 'bg-emerald-950/20 glassmorphism-dark border-white/10' 
                  : 'bg-white/45 glassmorphism border-[#0b5d36]/10'
              }`}
            >
              {/* Floating Quote Icon */}
              <div className="absolute right-6 top-6 opacity-15">
                <Quote size={40} className="text-brand-gold" />
              </div>

              {/* Star Rating Group */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={15} className="fill-brand-gold text-brand-gold" />
                ))}
              </div>

              {/* Verified Badge */}
              <div className="flex items-center gap-1.5 text-[10px] uppercase font-semibold text-emerald-500 tracking-wider mb-4">
                <Sparkles size={11} />
                <span>Verified Skin Transformation</span>
              </div>

              {/* Comment Block */}
              <p className={`text-sm italic leading-relaxed font-sans mb-6 ${
                isDarkMode ? 'text-gray-300' : 'text-emerald-950'
              }`}>
                “{t.comment}”
              </p>

              {/* Reviewer Details Frame */}
              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-brand-dark/10 dark:border-white/15">
                <img
                  src={t.avatar}
                  alt={t.name}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full object-cover border border-brand-gold/50 shadow-md"
                />
                <div>
                  <h4 className="text-sm font-space font-semibold text-brand-gold">
                    {t.name}
                  </h4>
                  <p className={`text-[11px] ${isDarkMode ? 'text-gray-400' : 'text-emerald-900/70'}`}>
                    {t.role}
                  </p>
                  
                  {/* Skin Profile Badge */}
                  <span className={`inline-block text-[9px] font-mono tracking-wide px-2 py-0.5 rounded-md mt-1.5 ${
                    isDarkMode ? 'bg-emerald-950 text-emerald-300' : 'bg-emerald-50 text-emerald-800'
                  }`}>
                    SKIN: {t.skinType}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Extra brand credentials footer beneath reviews */}
        <div className={`mt-16 text-center max-w-lg mx-auto p-4 rounded-xl border ${
          isDarkMode ? 'border-amber-500/20 bg-amber-500/5' : 'border-[#0b5d36]/10 bg-emerald-50/20'
        }`}>
          <p className="text-xs font-space font-medium tracking-wide">
            🌱 Guarantee: Marudhar Organics pledges zero animal fat, zero sulfate surfactants, and completely food-grade fresh ingredients.
          </p>
        </div>
      </div>
    </section>
  );
}
