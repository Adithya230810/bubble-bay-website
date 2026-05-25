import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

interface ContactFormProps {
  isDarkMode: boolean;
}

export default function ContactForm({ isDarkMode }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    soapChoice: 'Neem Soap',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Soap options for selections
  const soapOptions = [
    'Neem Soap',
    'Goat Milk Soap',
    'Camel Milk Soap',
    'Donkey Milk Soap',
    'Strawberry Soap',
    'Rice Water Soap',
    'Potato Soap',
    'Coconut Oil Soap',
    'Kesar Soap',
    'Kupameni Soap',
    'Ice Blast Soap',
    'Pimple & Acne Soap'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please fill in your Name and Phone number so we can reach you.');
      return;
    }
    
    // Create WhatsApp direct redirect for white glove inquiry
    const whatsappNum = '919600000503';
    const textStr = `Hello Marudhar Organics! *Web Inquiry From: ${formData.name}*\n- Email: ${formData.email || 'N/A'}\n- Phone: ${formData.phone}\n- Soap of Interest: *${formData.soapChoice}*\n- Message: ${formData.message || 'I would like to order this soap.'}`;
    const redirectUrl = `https://wa.me/${whatsappNum}?text=${encodeURIComponent(textStr)}`;
    
    setIsSubmitted(true);
    setTimeout(() => {
      window.open(redirectUrl, '_blank');
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        soapChoice: 'Neem Soap',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white/40 dark:bg-[#122119]/50 backdrop-blur-xl rounded-3xl overflow-hidden border border-brand-dark/15 dark:border-white/10 shadow-lg">
          
          {/* Brand/Office Info (Adyar, Chennai) */}
          <div className="lg:col-span-5 bg-[#0b5d36] text-[#f8f5ec] p-8 sm:p-12 flex flex-col justify-between relative">
            
            {/* Background design elements */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#dff5e3_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
            
            <div>
              <span className="text-xs uppercase font-space font-semibold tracking-widest text-brand-gold">
                Premium Herbal soap Handcrafters
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-medium mt-3 text-white">
                Get In Touch
              </h2>
              <p className="mt-4 text-xs sm:text-sm text-brand-light/90 leading-relaxed font-sans font-light">
                Marudhar Organics was founded with a pristine pledge to craft raw skin-healing organic formulations. Direct pickup and home deliveries throughout Chennai and across India can be established through the tools below.
              </p>

              <div className="mt-8 space-y-6">
                
                {/* Office Location */}
                <div className="flex gap-4 items-start">
                  <div className="p-2.5 rounded-xl bg-white/10 text-brand-gold">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-space uppercase tracking-wider text-[#d4a437] font-semibold">
                      Registered Workshop
                    </h4>
                    <p className="text-sm font-sans mt-1 leading-snug">
                      Marudhar Organics<br />
                      28/21 Shastri Nagar, 2nd Lane,<br />
                      Adyar, Chennai – 600020
                    </p>
                  </div>
                </div>

                {/* Real Clickable Telephony */}
                <div className="flex gap-4 items-start">
                  <div className="p-2.5 rounded-xl bg-white/10 text-brand-gold">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-space uppercase tracking-wider text-[#d4a437] font-semibold">
                      Phone / Order Line
                    </h4>
                    <a 
                      href="tel:9600000503" 
                      className="text-sm font-sans mt-0.5 hover:underline transition-all hover:text-[#d4a437] block font-medium"
                    >
                      +91 96000 00503
                    </a>
                  </div>
                </div>

                {/* Email address Link */}
                <div className="flex gap-4 items-start">
                  <div className="p-2.5 rounded-xl bg-white/10 text-brand-gold">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-space uppercase tracking-wider text-[#d4a437] font-semibold">
                      Email address
                    </h4>
                    <a 
                      href="mailto:amit960000503@gmail.com" 
                      className="text-sm font-sans mt-0.5 hover:underline transition-all hover:text-[#d4a437] block break-all font-medium"
                    >
                      amit960000503@gmail.com
                    </a>
                    <span className="text-[11px] sm:text-xs uppercase font-space tracking-wider text-[#d4a437] font-bold animate-premium-blink py-1 px-2.5 rounded-lg border border-[#d4a437]/25 bg-[#d4a437]/5 mt-2 block w-fit">
                      ⚡ Out of City Delivery Coming Soon!
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Social credentials */}
            <div className="mt-12 pt-6 border-t border-white/10 flex items-center justify-end">
              <div className="text-[10px] font-mono text-white/50 text-right">
                Locally Handcrafted<br />
                in Chennai, IN
              </div>
            </div>

          </div>

          {/* Interactive Form panel */}
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-center border-2 border-[#d4a437]/40 rounded-3xl bg-[#dff5e3]/10 dark:bg-emerald-950/20 shadow-[0_0_30px_rgba(212,164,55,0.15)] relative">
            <div className="absolute top-4 right-4 flex items-center gap-1 bg-brand-gold text-white text-[9px] uppercase tracking-wider font-space font-bold px-2.5 py-1 rounded-full shadow-md animate-pulse">
              <span className="w-1.5 h-1.5 bg-white rounded-full" />
              Direct Channel Priority
            </div>
            
            {isSubmitted ? (
              <div className="text-center py-12 flex flex-col items-center justify-center">
                <div className="p-4 rounded-full bg-emerald-500/10 text-emerald-500 mb-4 animate-bounce">
                  <CheckCircle size={52} />
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-medium text-brand-gold">
                  Generating Your Order Link!
                </h3>
                <p className="text-xs sm:text-sm mt-2 text-gray-500 dark:text-gray-300 max-w-sm">
                  We are preparing a direct chat prompt and routing you to the founder’s WhatsApp instantly. Please complete checkout on the WhatsApp browser tab!
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5" id="direct-order-skincare-form">
                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-semibold mb-1 text-emerald-900 dark:text-brand-light">
                    Direct Order & Purchase Portal
                  </h3>
                  <p className="text-xs text-[#d4a437] font-semibold mb-6">
                    Order directly with the founder for swift courier delivery across Chennai and India.
                  </p>
                </div>

                {/* Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-space uppercase tracking-wider text-brand-gold mb-1.5 font-semibold">
                      Your Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      placeholder="e.g. Adithya Radhakrishnan"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full text-xs sm:text-sm p-3.5 rounded-xl border focus:outline-hidden focus:ring-1 focus:ring-[#d4a437] ${
                        isDarkMode
                          ? 'bg-[#122119]/80 border-white/10 text-white placeholder-gray-550'
                          : 'bg-emerald-50/20 border-brand-dark/10 text-brand-dark placeholder-emerald-900/40'
                      }`}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-[10px] font-space uppercase tracking-wider text-brand-gold mb-1.5 font-semibold">
                      Mobile Number / WhatsApp *
                    </label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      placeholder="e.g. +91 00000 00000"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full text-xs sm:text-sm p-3.5 rounded-xl border focus:outline-hidden focus:ring-1 focus:ring-[#d4a437] ${
                        isDarkMode
                          ? 'bg-[#122119]/80 border-white/10 text-white placeholder-gray-550'
                          : 'bg-emerald-50/20 border-brand-dark/10 text-brand-dark placeholder-emerald-900/40'
                      }`}
                    />
                  </div>
                </div>

                {/* Email address */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-space uppercase tracking-wider text-brand-gold mb-1.5 font-semibold">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="e.g. customer@gmail.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full text-xs sm:text-sm p-3.5 rounded-xl border focus:outline-hidden focus:ring-1 focus:ring-[#d4a437] ${
                        isDarkMode
                          ? 'bg-[#122119]/80 border-white/10 text-white placeholder-gray-550'
                          : 'bg-emerald-50/20 border-brand-dark/10 text-brand-dark placeholder-emerald-900/40'
                      }`}
                    />
                  </div>

                  {/* Soap selection drop */}
                  <div>
                    <label className="block text-[10px] font-space uppercase tracking-wider text-brand-gold mb-1.5 font-semibold">
                      Choose Your Signature Soap
                    </label>
                    <select
                      name="soapChoice"
                      value={formData.soapChoice}
                      onChange={handleInputChange}
                      className={`w-full text-xs sm:text-sm p-3.5 rounded-xl border focus:outline-hidden focus:ring-1 focus:ring-[#d4a437] ${
                        isDarkMode
                          ? 'bg-[#122119] border-white/10 text-white'
                          : 'bg-white border-brand-dark/10 text-brand-dark'
                      }`}
                    >
                      {soapOptions.map((opt, idx) => (
                        <option key={idx} value={opt} className={isDarkMode ? 'bg-[#122119] text-white' : 'bg-white text-brand-dark'}>
                          {opt} (125g)
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[10px] font-space uppercase tracking-wider text-brand-gold mb-1.5 font-semibold">
                    Inquiry Details / Specific Delivery Instructions
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    placeholder="Describe custom quantity requirements, skin allergies consultation requests or shipping locations..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full text-xs sm:text-sm p-3.5 rounded-xl border focus:outline-hidden focus:ring-1 focus:ring-[#d4a437] ${
                      isDarkMode
                        ? 'bg-[#122119]/80 border-white/10 text-white placeholder-gray-550'
                        : 'bg-emerald-50/20 border-brand-dark/10 text-brand-dark placeholder-emerald-900/40'
                    }`}
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-gradient-to-r from-[#0b5d36] via-[#15803d] to-[#d4a437] hover:from-[#d4a437] hover:to-[#0b5d36] text-white shadow-[0_4px_20px_rgba(212,164,55,0.3)] hover:shadow-[0_4px_25px_rgba(212,164,55,0.5)] font-space font-bold text-sm tracking-wider uppercase rounded-xl transition-all duration-300 hover:scale-[1.01] active:scale-95"
                    id="submit-contact-form-button"
                  >
                    <Send size={16} className="animate-pulse" />
                    <span>Confirm & Direct Order on WhatsApp</span>
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
