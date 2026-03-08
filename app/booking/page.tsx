'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, Users, Clock, MapPin, Sparkles } from 'lucide-react';

export default function Booking() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    size: '2',
    memory: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Your request has been sent to the Archive. We will contact you shortly.');
  };

  return (
    <main className="min-h-screen pt-20">
      <div className="grain-overlay" />
      <Header />

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-serif">The Sensory <span className="italic text-gold">Session</span></h1>
              <p className="text-parchment/70 leading-relaxed max-w-md">
                Enter the Distiller’s District for a guided journey through your own history. 
                Sessions are intimate and limited to ensure full sensory immersion.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6 p-6 bg-slate/20 gold-border">
                <Sparkles className="text-gold w-6 h-6 flex-shrink-0" />
                <div className="space-y-2">
                  <h4 className="font-serif text-xl">The Discovery Flight</h4>
                  <p className="text-sm text-parchment/60">A guided tour of our five core memory-spirits. 60 minutes.</p>
                </div>
              </div>

              <div className="flex gap-6 p-6 bg-slate/20 gold-border">
                <MapPin className="text-gold w-6 h-6 flex-shrink-0" />
                <div className="space-y-2">
                  <h4 className="font-serif text-xl">The Custom Recall</h4>
                  <p className="text-sm text-parchment/60">A 1-on-1 session where our distillers attempt to recreate a specific memory of yours into a bespoke cocktail. 90 minutes.</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <h4 className="text-xs uppercase tracking-widest text-gold">Location</h4>
              <div className="relative h-64 w-full bg-slate/30 gold-border overflow-hidden group">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-2 z-10">
                    <p className="text-parchment font-serif italic">1422 Ether Lane</p>
                    <p className="text-[10px] uppercase tracking-widest text-gold">San Francisco, CA</p>
                  </div>
                </div>
                {/* Stylized Map Background */}
                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                  <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-gold)_0%,_transparent_1px)] bg-[length:24px_24px]" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-slate/10 p-10 gold-border backdrop-blur-md"
          >
            <h3 className="text-2xl font-serif mb-8 italic">Request a Session</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-parchment/50">Full Name</label>
                  <input
                    required
                    type="text"
                    className="w-full bg-transparent border-b border-white/10 py-2 text-parchment focus:outline-none focus:border-gold transition-colors"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-parchment/50">Email Address</label>
                  <input
                    required
                    type="email"
                    className="w-full bg-transparent border-b border-white/10 py-2 text-parchment focus:outline-none focus:border-gold transition-colors"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-parchment/50 flex items-center gap-2">
                    <Calendar size={12} /> Date
                  </label>
                  <input
                    required
                    type="date"
                    className="w-full bg-transparent border-b border-white/10 py-2 text-parchment focus:outline-none focus:border-gold transition-colors [color-scheme:dark]"
                    value={formState.date}
                    onChange={(e) => setFormState({ ...formState, date: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-parchment/50 flex items-center gap-2">
                    <Clock size={12} /> Time
                  </label>
                  <input
                    required
                    type="time"
                    className="w-full bg-transparent border-b border-white/10 py-2 text-parchment focus:outline-none focus:border-gold transition-colors [color-scheme:dark]"
                    value={formState.time}
                    onChange={(e) => setFormState({ ...formState, time: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-parchment/50 flex items-center gap-2">
                    <Users size={12} /> Party
                  </label>
                  <select
                    className="w-full bg-transparent border-b border-white/10 py-2 text-parchment focus:outline-none focus:border-gold transition-colors appearance-none"
                    value={formState.size}
                    onChange={(e) => setFormState({ ...formState, size: e.target.value })}
                  >
                    {[1, 2, 3, 4, 5, 6].map(n => <option key={n} value={n} className="bg-primary">{n} Guests</option>)}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-parchment/50">
                  What is a memory you wish you could taste?
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border border-white/10 p-4 text-parchment focus:outline-none focus:border-gold transition-colors resize-none text-sm italic"
                  placeholder="e.g., A rainy afternoon in a Paris bookstore..."
                  value={formState.memory}
                  onChange={(e) => setFormState({ ...formState, memory: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gold text-primary font-sans font-bold uppercase tracking-[0.3em] text-xs hover:bg-white transition-all duration-500"
              >
                Request Access
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
