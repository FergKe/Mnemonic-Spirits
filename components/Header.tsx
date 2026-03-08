'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'motion/react';
import { FlaskConical } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Our Story', path: '/about' },
    { name: 'The Cocktails', path: '/cocktails' },
    { name: 'Book a Tasting', path: '/booking' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-primary/80 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <span className="text-3xl font-serif text-gold group-hover:scale-110 transition-transform inline-block">M</span>
            <FlaskConical className="absolute -top-1 -right-2 w-4 h-4 text-gold/50 group-hover:rotate-12 transition-transform" />
          </div>
          <span className="hidden sm:block font-serif text-lg tracking-widest text-parchment uppercase">Mnemonic Spirits</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`text-xs uppercase tracking-widest transition-colors hover:text-gold ${
                pathname === item.path ? 'text-gold' : 'text-parchment/70'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
