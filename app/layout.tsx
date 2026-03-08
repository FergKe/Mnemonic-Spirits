import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Mnemonic Spirits | Distilled Memories',
  description: 'A luxury memory-infused distillery using olfactory chemistry to bridge the gap between flavor and nostalgia.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body suppressHydrationWarning className="bg-[#0A0A0B] text-[#E5E1DA] antialiased">
        {children}
      </body>
    </html>
  );
}
