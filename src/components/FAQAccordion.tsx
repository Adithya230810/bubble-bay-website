import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { FAQS } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface FAQAccordionProps {
  isDarkMode: boolean;
}

export default function FAQAccordion({ isDarkMode }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <span className="text-[11px] font-space uppercase tracking-[0.25em] text-brand-gold font-bold bg-amber-500/10 px-3 py-1.5 rounded-full dark:bg-amber-500/5">
            Knowledge Base
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-medium mt-4 tracking-tight">
            Curated Skin Questions
          </h2>
          <p className={`mt-2 text-sm font-sans ${isDarkMode ? 'text-gray-400' : 'text-emerald-800/70'}`}>
            Everything you need to know about switching from synthetic bath items to raw handcrafted organic bars.
          </p>
        </div>

        {/* Accorion Grid */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                id={`faq-item-${idx}`}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen 
                    ? isDarkMode 
                      ? 'bg-emerald-950/40 border-brand-gold/40' 
                      : 'bg-emerald-50/50 border-brand-dark/20'
                    : isDarkMode
                      ? 'bg-emerald-950/10 border-white/5 hover:border-white/10'
                      : 'bg-white/45 border-brand-dark/5 hover:border-brand-dark/15'
                }`}
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-hidden group"
                  id={`faq-trigger-${idx}`}
                >
                  <div className="flex gap-3 items-center">
                    <HelpCircle className={`shrink-0 ${isOpen ? 'text-brand-gold' : 'text-emerald-600'}`} size={18} />
                    <span className={`font-space font-medium text-sm sm:text-base ${
                      isOpen ? 'text-[#d4a437]' : isDarkMode ? 'text-[#f8f5ec]' : 'text-brand-dark'
                    }`}>
                      {faq.question}
                    </span>
                  </div>
                  <div className="shrink-0 p-1 rounded-full bg-brand-dark/5 dark:bg-white/5 group-hover:bg-brand-gold/10 transition-colors">
                    {isOpen ? (
                      <ChevronUp size={16} className="text-brand-gold" />
                    ) : (
                      <ChevronDown size={16} className={isDarkMode ? 'text-gray-400' : 'text-emerald-800'} />
                    )}
                  </div>
                </button>

                {/* Sliding collapsible panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className={`px-6 pb-6 pt-1 text-xs sm:text-sm leading-relaxed font-sans border-t ${
                        isDarkMode ? 'border-white/5 text-gray-300' : 'border-brand-dark/5 text-gray-650'
                      }`}>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
