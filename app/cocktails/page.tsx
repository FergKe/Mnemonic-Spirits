'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Wine, Sparkles, Snowflake, Sunrise } from 'lucide-react';

const cocktails = [
  {
    id: 1,
    name: "The Attic Trunk",
    base: "Aged Rye",
    profile: "Cedarwood, dust motes in sunlight, and dried orange peel.",
    icon: <Wine className="w-6 h-6" />,
    image: "https://picsum.photos/seed/trunk/800/1000"
  },
  {
    id: 2,
    name: "First Snowfall",
    base: "Botanical Gin",
    profile: "Crisp ozone, pine needles, and the silence of a winter morning.",
    icon: <Snowflake className="w-6 h-6" />,
    image: "https://picsum.photos/seed/snow/800/1000"
  },
  {
    id: 3,
    name: "Sunday Morning",
    base: "Sparkling Vodka",
    profile: "Freshly roasted coffee, rain on hot asphalt, and maple syrup.",
    icon: <Sunrise className="w-6 h-6" />,
    image: "https://picsum.photos/seed/sunday/800/1000"
  },
  {
    id: 4,
    name: "The Library",
    base: "Single Malt Scotch",
    profile: "Old leather, pipe tobacco, and the vanilla scent of aging paper.",
    icon: <Sparkles className="w-6 h-6" />,
    image: "https://picsum.photos/seed/library/800/1000"
  }
];

export default function Cocktails() {
  return (
    <main className="min-h-screen pt-20">
      <div className="grain-overlay" />
      <Header />

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-serif mb-6">The Menu of <span className="italic text-gold">Memories</span></h1>
          <p className="text-parchment/60 max-w-2xl mx-auto tracking-wide uppercase text-xs">
            Select a profile to begin your recall session.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {cocktails.map((cocktail, i) => (
            <motion.div
              key={cocktail.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative flex flex-col md:flex-row gap-8 p-8 gold-border bg-slate/10 hover:bg-slate/20 transition-all duration-500 overflow-hidden"
            >
              <div className="relative w-full md:w-48 h-64 flex-shrink-0 overflow-hidden">
                <Image
                  src={cocktail.image}
                  alt={cocktail.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/40 group-hover:bg-transparent transition-colors" />
              </div>

              <div className="flex flex-col justify-center space-y-4">
                <div className="flex items-center gap-3 text-gold">
                  {cocktail.icon}
                  <span className="text-[10px] uppercase tracking-[0.3em]">{cocktail.base}</span>
                </div>
                <h3 className="text-3xl font-serif">{cocktail.name}</h3>
                
                <div className="relative">
                  <p className="text-parchment/40 text-sm italic group-hover:opacity-0 transition-opacity duration-300">
                    Hover to reveal memory profile...
                  </p>
                  <p className="absolute top-0 left-0 text-parchment/80 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {cocktail.profile}
                  </p>
                </div>

                <button className="mt-4 text-[10px] uppercase tracking-widest text-gold border-b border-gold/30 w-fit pb-1 hover:border-gold transition-colors">
                  Request Recall
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-32 bg-slate/5 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-serif italic mb-8 text-gold">&quot;A cocktail is a moment, bottled.&quot;</h2>
          <p className="text-parchment/60 text-sm leading-relaxed">
            Our menu rotates with the seasons of life. Each release is limited, as the botanical compounds 
            required for specific memory profiles are rare and volatile.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
