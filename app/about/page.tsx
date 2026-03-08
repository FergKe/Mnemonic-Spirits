'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <main className="min-h-screen pt-20">
      <div className="grain-overlay" />
      <Header />

      {/* Hero */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-serif leading-tight">
              The Science of <br />
              <span className="italic text-gold">Nostalgia</span>
            </h1>
            <div className="space-y-6 text-parchment/70 leading-relaxed">
              <p className="text-xl font-serif italic">&quot;We don&apos;t just distill spirits; we document life.&quot;</p>
              <p>
                Founded by Dr. Aris Thorne, a neuroscientist who spent decades studying the link between the olfactory system and the hippocampus. 
                Thorne realized that while a photo captures a moment&apos;s light, it misses its soul—the scent of the rain, the musk of an old library, 
                the crisp ozone of a first snowfall.
              </p>
              <p>
                Mnemonic Spirits was born from a desire to create a liquid archive. Using advanced molecular extraction, we isolate the chemical 
                signatures of specific memories and infuse them into our base spirits, creating a bridge between the present and the past.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative aspect-square"
          >
            <div className="absolute inset-0 gold-border translate-x-4 translate-y-4" />
            <Image
              src="https://picsum.photos/seed/scientist/1000/1000"
              alt="Dr. Aris Thorne in the lab"
              fill
              className="object-cover grayscale"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-32 bg-slate/10">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <h2 className="text-3xl md:text-4xl font-serif italic">The Proustian Phenomenon</h2>
          <p className="text-lg text-parchment/60 leading-relaxed font-sans">
            Named after Marcel Proust, who famously described how a madeleine dipped in tea triggered a flood of childhood memories. 
            Scent and taste are the only senses that bypass the thalamus and go straight to the brain&apos;s emotional and memory centers. 
            At Mnemonic Spirits, we harness this biological shortcut to create an immersive sensory experience.
          </p>
          <div className="w-24 h-px bg-gold mx-auto" />
        </div>
      </section>

      {/* The Lab */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-xs uppercase tracking-[0.4em] text-gold mb-4">The Distillery</h2>
          <h3 className="text-4xl md:text-5xl font-serif">Where Memory Meets Matter</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative aspect-[4/5] overflow-hidden group"
            >
              <Image
                src={`https://picsum.photos/seed/lab-${i}/800/1000`}
                alt={`Distillery view ${i}`}
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors" />
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
