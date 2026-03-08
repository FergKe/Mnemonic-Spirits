'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AgeGate from '@/components/AgeGate';
import { ArrowRight, FlaskConical, Thermometer, Brain } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <div className="grain-overlay" />
      <AgeGate />
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Hero_Image.png"
            alt="Dreamy distillery background"
            fill
            className="object-cover opacity-40 scale-110"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-transparent to-primary" />
        </div>

        <div className="relative z-10 text-center max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-8xl font-serif mb-6 leading-tight">
              Taste the moments you <br />
              <span className="italic text-gold">thought were gone.</span>
            </h1>
            <p className="text-lg md:text-xl text-parchment/70 font-sans max-w-2xl mx-auto mb-10 leading-relaxed">
              Using ol'factory chemistry to bridge the gap between flavor and memory.
              Our spirits are more than drinks; they are archives of the soul.
            </p>
            <Link
              href="/cocktails"
              className="inline-flex items-center gap-3 px-10 py-4 bg-gold text-primary font-sans uppercase tracking-widest text-sm font-bold hover:bg-white hover:text-primary transition-all duration-500 group"
            >
              Explore the Library
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold/50">Scroll to Reveal</span>
          <div className="w-px h-12 bg-gradient-to-b from-gold/50 to-transparent" />
        </motion.div>
      </section>

      {/* How it Works */}
      <section className="py-32 bg-primary relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-xs uppercase tracking-[0.4em] text-gold mb-4">The Process</h2>
            <h3 className="text-4xl md:text-5xl font-serif">The Science of Nostalgia</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <FlaskConical className="w-8 h-8" />,
                title: "Molecular Extraction",
                desc: "Sourcing rare botanicals with specific scent profiles that mirror life's most poignant moments."
              },
              {
                icon: <Thermometer className="w-8 h-8" />,
                title: "The Catalyst",
                desc: "Distilling spirits at precise temperatures to preserve volatile aromatic compounds that trigger the brain."
              },
              {
                icon: <Brain className="w-8 h-8" />,
                title: "The Recall",
                desc: "One sip triggers a flood of sensory nostalgia, bypassing logic to hit the emotional center directly."
              }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-10 bg-slate/20 gold-border backdrop-blur-sm space-y-6 group hover:bg-slate/40 transition-colors"
              >
                <div className="text-gold group-hover:scale-110 transition-transform duration-500">{step.icon}</div>
                <h4 className="text-xl font-serif italic">{step.title}</h4>
                <p className="text-parchment/60 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Bottle */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <Image
            src="https://picsum.photos/seed/amber/1920/1080"
            alt="Amber glass texture"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0"
          >
            <div className="absolute inset-0 gold-border -m-4 z-0" />
            <Image
              src="https://picsum.photos/seed/bottle/800/1200"
              alt="Summer of '98 Bottle"
              fill
              className="object-cover relative z-10 grayscale hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-xs uppercase tracking-[0.4em] text-gold">Featured Release</h2>
              <h3 className="text-5xl md:text-6xl font-serif">Summer of &apos;98</h3>
              <p className="text-parchment/80 font-serif italic text-xl">&quot;A coastal afternoon trapped in amber.&quot;</p>
            </div>

            <div className="space-y-6 text-parchment/60 leading-relaxed">
              <p>
                The air was thick with wild honeysuckle and the salt spray of the Pacific.
                You were reading an old paperback, its pages yellowed and smelling of vanilla and dust.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                {["Sea Salt", "Old Paperbacks", "Wild Honeysuckle", "Sun-warmed Skin"].map((note) => (
                  <span key={note} className="px-3 py-1 border border-white/10 text-[10px] uppercase tracking-widest">
                    {note}
                  </span>
                ))}
              </div>
            </div>

            <Link
              href="/cocktails"
              className="inline-block border-b border-gold text-gold pb-1 text-sm uppercase tracking-widest hover:text-parchment hover:border-parchment transition-all"
            >
              View the Profile
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
