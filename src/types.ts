import pimpleAcneSoapImg from './assets/images/pimple_acne_soap_1779730183277.png';
import riceWaterSoapImg from './assets/images/rice_water_soap_1779730204651.png';
import kesarSoapImg from './assets/images/kesar_soap_1779730223077.png';
import strawberrySoapImg from './assets/images/strawberry_soap_1779730240536.png';
import kupameniSoapImg from './assets/images/kupameni_soap_1779730256311.png';
import potatoSoapImg from './assets/images/potato_soap_1779730283090.png';
import iceBlastSoapImg from './assets/images/ice_blast_soap_1779730300671.png';
import coconutOilSoapImg from './assets/images/coconut_oil_soap_1779730319059.png';
import camelMilkSoapImg from './assets/images/camel_milk_soap_1779730335776.png';
import herbalDeoSprayImg from './assets/images/herbal_deo_spray_1779732241059.png';

export interface SoapProduct {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  weight: string;
  price: string;
  category: 'milk' | 'herbal' | 'fruity' | 'specialty';
  bgImage: string;
  productImage: string;
  uses: string[];
  ingredients: string[];
  benefits: string[];
  isBestSeller?: boolean;
  colorTheme: {
    from: string;
    to: string;
    text: string;
    accent: string;
    glow: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  avatar: string;
  skinType: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const CATEGORIES = [
  { id: 'all', name: 'All Collection' },
  { id: 'milk', name: 'Elixir Milk' },
  { id: 'herbal', name: 'Botanical Herbal' },
  { id: 'fruity', name: 'Zesty & Cooling' },
  { id: 'specialty', name: 'Specialty Skin Care' },
];

export const SOAP_PRODUCTS: SoapProduct[] = [
  {
    id: 'acne',
    name: 'Pimple & Acne Soap',
    subtitle: 'Advanced Acne Control Botanical',
    description: 'A dedicated anti-acne compound formulation leveraging the synergy of Tea Tree, Salicylic bark extract, Green Tea infusion, and clarifying herbal oils to combat deep bacterial impurities.',
    weight: '125g',
    price: '₹125',
    category: 'herbal',
    bgImage: pimpleAcneSoapImg,
    productImage: pimpleAcneSoapImg,
    uses: ['Daily acne-prone face wash', 'Treating chest and shoulder bacne', 'Deep oil pore vacuum cleansing'],
    ingredients: ['Tea tree essential oil', 'Black Willow Bark extract (Salicylic source)', 'Powdered active charcoal particles', 'Green tea leaves water', 'Rosemary extract'],
    benefits: ['Penetrates deeply inside oily pores to clear accumulated crust', 'Prevents future whitehead and pimple outbreaks significantly', 'Soothes inflammation, speeding up natural healing of blemishes'],
    isBestSeller: true,
    colorTheme: {
      from: 'from-[#0f172a]',
      to: 'to-[#1e293b]',
      text: 'text-[#f8fafc]',
      accent: 'border-[#d4a437]',
      glow: 'shadow-[0_0_20px_rgba(30,41,59,0.6)]'
    }
  },
  {
    id: 'rice-water',
    name: 'Rice Water Soap',
    subtitle: 'Ancient Fermented Brightening bar',
    description: 'Inspired by centuries-old Asian court beauty traditions, this pristine bar utilizes fermented jasmine rice water extract to clarify the skin, decrease pore size, and refine overall tone.',
    weight: '125g',
    price: '₹125',
    category: 'specialty',
    bgImage: riceWaterSoapImg,
    productImage: riceWaterSoapImg,
    uses: ['Glass skin facial evening wash', 'Sunburn whitening and recovery', 'Smoothing uneven rough skin patches'],
    ingredients: ['Fermented Jasmine Rice water', 'Colloidal Rice flour', 'Grapeseed oil', 'Aloe Vera inner leaf gel', 'Geranium water'],
    benefits: ['Smooths skin surface texturing, giving a "glass skin" effect', 'Powerfully minimizes enlarged pores over time', 'Fades stubborn sun tan, dark pigment spots, and age blemishes'],
    isBestSeller: false,
    colorTheme: {
      from: 'from-[#fafaf6]',
      to: 'to-[#ebebe0]',
      text: 'text-[#3f3f22]',
      accent: 'border-[#d4a437]',
      glow: 'shadow-[0_0_20px_rgba(63,63,34,0.15)]'
    }
  },
  {
    id: 'kesar',
    name: 'Kesar Soap',
    subtitle: 'Royal Kashmiri Saffron Radiance',
    description: 'Sourced from the valleys of Kashmir, active stigmas of Saffron (Kesar) are blended with sandalwood powder to promote a highly pristine, gold-tinted fair luxury glow.',
    weight: '125g',
    price: '₹125',
    category: 'specialty',
    bgImage: kesarSoapImg,
    productImage: kesarSoapImg,
    uses: ['Brightening and evening skin tone', 'Complexion boost beauty bath', 'Aromatic luxurious royal bath experience'],
    ingredients: ['Kashmiri Saffron threads (Kesar)', 'Saffron essential oil', 'Red Sandalwood powder', 'Karanja seed oil', 'Almond meal'],
    benefits: ['Transforms Dull skin into a warm radiant luxury glow', 'Drastically balances pigmentation and uneven face patches', 'Rich natural woodsy scent calms the mind and centers senses'],
    isBestSeller: true,
    colorTheme: {
      from: 'from-[#fffbeb]',
      to: 'to-[#fef3c7]',
      text: 'text-[#b45309]',
      accent: 'border-[#d4a437]',
      glow: 'shadow-[0_0_20px_rgba(212,164,55,0.4)]'
    }
  },
  {
    id: 'strawberry',
    name: 'Strawberry Soap',
    subtitle: 'Vibrant Antioxidant Berry Buff',
    description: 'Bursting with active strawberry extracts and crushed strawberry seeds for a micro-buffing scrub. Packed with antioxidant Vitamin C, salicylic acid, and pure berry extracts.',
    weight: '125g',
    price: '₹125',
    category: 'fruity',
    bgImage: strawberrySoapImg,
    productImage: strawberrySoapImg,
    uses: ['Daily refreshing fruity bath', 'Exfoliating wash for keratosis pilaris', 'Energizing morning aromatherapy'],
    ingredients: ['Organic Strawberry pulp', 'Crushed strawberry seeds', 'Castor oil', 'Vegetable Glycerin', 'Pomegranate seed extract'],
    benefits: ['Gently scrubs away dry skin flakes and clarifies pores', 'Awakens dull tired skin with rich organic vitamin C booster', 'Imparts a stunning rosy pink, natural healthy flush'],
    isBestSeller: false,
    colorTheme: {
      from: 'from-[#fff1f2]',
      to: 'to-[#fecdd3]',
      text: 'text-[#be123c]',
      accent: 'border-[#be123c]',
      glow: 'shadow-[0_0_20px_rgba(244,63,94,0.2)]'
    }
  },
  {
    id: 'kupameni',
    name: 'Kupameni Soap',
    subtitle: 'Miracle Leaves for Skin Repair',
    description: 'Incorporating the therapeutic essence of Indian Kupameni wild herbs, heavily lauded in Tamil Siddha remedies to alleviate allergies, eczema, bumps, and deep blemishes.',
    weight: '125g',
    price: '₹125',
    category: 'herbal',
    bgImage: kupameniSoapImg,
    productImage: kupameniSoapImg,
    uses: ['Skin sensitivity calming wash', 'Clearing tiny forehead bumps', 'Healing minor contact dermatitis or itching'],
    ingredients: ['Fresh Kupameni leaf pulp', 'Organic Spearmint extract', 'Castor seed oil', 'Neem oil base', 'Pure Vetiver roots essence'],
    benefits: ['Soothes extreme body itches, heat rashes, and hives', 'Minimizes small stubborn skin bumps and back-acne', 'Fights fungal infections and promotes natural skin barrier recovery'],
    isBestSeller: false,
    colorTheme: {
      from: 'from-[#f4fbf7]',
      to: 'to-[#d5ecd9]',
      text: 'text-[#064e3b]',
      accent: 'border-[#064e3b]',
      glow: 'shadow-[0_0_20px_rgba(6,78,59,0.2)]'
    }
  },
  {
    id: 'potato',
    name: 'Potato Soap',
    subtitle: 'Under-eye Glow & Blemish Eraser',
    description: 'Fresh organic potato enzymes contain catecholase, a natural bleaching agent. Coupled with cold-milled extract to actively target pigmented patches, dark patches, and acne scars.',
    weight: '125g',
    price: '₹125',
    category: 'specialty',
    bgImage: potatoSoapImg,
    productImage: potatoSoapImg,
    uses: ['Blemish spots targeted correction facial wash', 'Reducing dark skin hyperpigmentation', 'Brightening sunburn/tanned limbs'],
    ingredients: ['Fresh Potato juice', 'Raw potato starch extract', 'Moringa seed oil', 'Turmeric root oil', 'Sweet Orange essential oil'],
    benefits: ['Suppresses melanin hyperproduction to reveal lighter tone', 'Heals sun damage and lightens tough acne markings', 'Refreshes and wakes up tired, puffy skin cells'],
    isBestSeller: false,
    colorTheme: {
      from: 'from-[#fdf6ec]',
      to: 'to-[#f3e3ce]',
      text: 'text-[#78350f]',
      accent: 'border-[#78350f]',
      glow: 'shadow-[0_0_20px_rgba(120,53,15,0.15)]'
    }
  },
  {
    id: 'ice-blast',
    name: 'Ice Blast Soap',
    subtitle: 'Cooling Mint & Eucalyptus Splash',
    description: 'Infused with double-distilled peppermint menthol crystals and refreshing eucalyptus extracts to deliver an instant cooling, energizing blast that neutralizes bad body odors.',
    weight: '125g',
    price: '₹125',
    category: 'fruity',
    bgImage: iceBlastSoapImg,
    productImage: iceBlastSoapImg,
    uses: ['Super refreshing post-workout shower', 'Beating intense summer heat', 'Awakening skin senses early mornings'],
    ingredients: ['Peppermint Menthol crystals', 'Eucalyptus leaf extract', 'Camphor essential oil', 'Pure Tea Tree distillates', 'Saponified Palm oil (Sustainably Sourced)'],
    benefits: ['Lowers apparent skin temperature for ultimate refreshing effect', 'Has strong antiseptic properties that neutralize bad sweat odors', 'Opens nasal airways and clears brain fatigue through crisp aroma'],
    isBestSeller: false,
    colorTheme: {
      from: 'from-[#ecfeff]',
      to: 'to-[#cffafe]',
      text: 'text-[#083344]',
      accent: 'border-[#0891b2]',
      glow: 'shadow-[0_0_20px_rgba(8,145,178,0.25)]'
    }
  },
  {
    id: 'coconut-oil',
    name: 'Coconut Oil Soap',
    subtitle: 'Tropical Deep Lather & Moisturization',
    description: 'An ultra-lathering traditional bar crafted using pure cold-milled kernel Coconut Oil from local organic groves in South India, delivering essential fatty acids for complete dermal comfort.',
    weight: '125g',
    price: '₹125',
    category: 'herbal',
    bgImage: coconutOilSoapImg,
    productImage: coconutOilSoapImg,
    uses: ['Foamy deep clean cleansing daily bath', 'Dry skin rich hydration rescue', 'Shaving foam replacement lather'],
    ingredients: ['Cold-pressed Virgin Coconut oil', 'Coconut milk extractions', 'Milled coconut shell micro-exfoliant', 'Lavender water'],
    benefits: ['Creates an incredibly rich, luxurious, foamy herbal bubble lather', 'Deeply moisturizes cracked elbows, heels, and knees', 'Instantly lifts dirt, pollution, and sweat micro-particles'],
    isBestSeller: false,
    colorTheme: {
      from: 'from-[#fcfbf9]',
      to: 'to-[#ebdcc0]',
      text: 'text-[#0b5d36]',
      accent: 'border-[#d4a437]',
      glow: 'shadow-[0_0_20px_rgba(11,93,54,0.15)]'
    }
  },
  {
    id: 'camel-milk',
    name: 'Camel Milk Soap',
    subtitle: 'Desert Gold Anti-Aging Secret',
    description: 'Camel milk possesses 3x more Vitamin C than cow’s milk and is rich in skin-plumping elastin, protective proteins, and super-fine moisturizing fatty acids for timeless, glowing skin.',
    weight: '125g',
    price: '₹125',
    category: 'milk',
    bgImage: camelMilkSoapImg,
    productImage: camelMilkSoapImg,
    uses: ['Daily skin rejuvenating bath', 'Fine-line and dry wrinkles therapy', 'Evening routine luxury face care'],
    ingredients: ['Fresh Camel milk', 'Argan kernel oil', 'Pure Jojoba extract', 'Sandalwood oil', 'Organic Cocoa butter'],
    benefits: ['Smooths out the appearance of fine lines and aging signs', 'Reduces dark hyperpigmentation and brightens skin tone', 'Protects dermal cells against modern environmental stressors'],
    isBestSeller: true,
    colorTheme: {
      from: 'from-[#fdf9f0]',
      to: 'to-[#eadebe]',
      text: 'text-[#8b6b23]',
      accent: 'border-[#d4a437]',
      glow: 'shadow-[0_0_20px_rgba(212,164,55,0.3)]'
    }
  },
  {
    id: 'herbal-deo',
    name: 'Bubble Bay Herbal Deo Spray',
    subtitle: 'Skin Friendly • Keeps Skin Fresh',
    description: 'A refreshing herbal deodorant spray made with skin-friendly ingredients to help keep your body fresh, clean, and confident throughout the day. Infused with Aloe Vera and Musk fragrance for a natural cooling feel.',
    weight: '100ml',
    price: '₹180',
    category: 'herbal',
    bgImage: herbalDeoSprayImg,
    productImage: herbalDeoSprayImg,
    uses: [
      'Shake well and hold 15 cm away',
      'Spray on clean, dry body skin',
      'Neutralizes sweat and body odor',
      'Perfect for daily gym, travel & summer wear'
    ],
    ingredients: ['Alcohol Purified', 'Aloe Vera extract', 'Musk fragrance', 'Skin-safe Food Colour'],
    benefits: [
      'Helps control body odor with 24h crisp freshness',
      'Extremely gentle on skin (formulated with pure Aloe Vera)',
      'Quick-drying formula with natural cooling and musk feel'
    ],
    isBestSeller: true,
    colorTheme: {
      from: 'from-[#fefcf8]',
      to: 'to-[#eef6ec]',
      text: 'text-[#1e3a1e]',
      accent: 'border-[#15803d]',
      glow: 'shadow-[0_0_20px_rgba(212,164,55,0.15)]'
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Aishwarya Krishnan',
    role: 'Wellness Blogger',
    rating: 5,
    comment: 'The High-Grade Rice Water soap restored my moisture barrier in under two weeks! My face has a beautiful glass finish now. Marudhar Organics is doing wonders in Chennai.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80',
    skinType: 'Eczema-Prone / Dry'
  },
  {
    id: '2',
    name: 'Devendra Rathore',
    role: 'Yoga Practitioner',
    rating: 5,
    comment: 'Camel Milk soap changed my evening skincare routing entirely. The scent of genuine sandalwood is incredibly soothing and the lather is ultra-hydrating. Simply royal.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    skinType: 'Mature / Aging Care'
  },
  {
    id: '3',
    name: 'Preethi Seshadri',
    role: 'Software Architect',
    rating: 5,
    comment: 'I use the Pimple & Acne Soap along with Kupameni. My tiny forehead bumps and back-acne have disappeared completely during this hot humid Chennai weather. It is pure botanical magic.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    skinType: 'Oily / Acne-Prone'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'Are all Marudhar Organics soaps really handcrafted from scratch?',
    answer: 'Absolutely! Every single bar of Bubble Bay cold-process soap is handcrafted by Marudhar Organics using traditional organic curing methods. They are hand-blended, hand-poured, cured for 4-6 weeks to build a long-lasting dense bar, and hand-wrapped with biodegradable papers.'
  },
  {
    question: 'How do Rice Water, Kesar, and Camel Milk differ in benefits?',
    answer: 'Rice Water is rich in ferulic acid and starches, making it ideal for glass skin, sunburns, and pore tightening. Kesar features genuine Kashmiri saffron and sandalwood to bring a luxurious glowing golden tone. Camel milk contains 3x more vitamin C booster than cow’s milk, working heavily on fine lines, elasticity, and intense nourishment.'
  },
  {
    question: 'What is special about the Kupameni Soap?',
    answer: 'Kupameni (Acalypha Indica) is a revered wild medical herb in legendary Tamil Siddha system. It features robust anti-fungal, anti-inflammatory, and anti-bacterial agents. It works as a literal miracle remedy for heat rashes, allergies, tiny forehead bumps, and fungal skincare anomalies.'
  },
  {
    question: 'Are there any chemical preservatives, parabens, or synthetic foam ingredients?',
    answer: 'None at all. We are entirely paraben-free, sulfate-free (SLS/SLES), phthalate-free, and mineral-oil free. The luxurious creamy foam is produced naturally through saponified organic virgin oils combined with raw mineral extracts.'
  },
  {
    question: 'How do I place an order via the WhatsApp Order button?',
    answer: 'When you click "Order on WhatsApp", an automated template message is generated with the soap’s name, weight (125g), and your inquiry. It opens WhatsApp immediately, allowing you to seamlessly chat directly with the founder to coordinate home delivery or specific customized orders!'
  }
];
