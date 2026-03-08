import Link from 'next/link';
import { Instagram, Music2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <h3 className="font-serif text-2xl text-gold">Mnemonic Spirits</h3>
            <p className="text-parchment/60 text-sm leading-relaxed">
              Distilling the moments you thought were gone. A bridge between flavor and memory.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-parchment/40 hover:text-gold transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-parchment/40 hover:text-gold transition-colors">
                <Music2 size={20} />
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-widest text-gold">The Archive</h4>
            <ul className="space-y-3 text-sm text-parchment/60">
              <li><Link href="/" className="hover:text-parchment transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-parchment transition-colors">Our Story</Link></li>
              <li><Link href="/cocktails" className="hover:text-parchment transition-colors">The Cocktails</Link></li>
              <li><Link href="/booking" className="hover:text-parchment transition-colors">Book a Tasting</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-widest text-gold">Contact</h4>
            <div className="space-y-3 text-sm text-parchment/60">
              <p>1422 Ether Lane<br />The Distiller’s District<br />San Francisco, CA 94107</p>
              <p>+1 (555) 012-MEMORY</p>
              <p>remember@mnemonicspirits.com</p>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-widest text-gold">Newsletter</h4>
            <p className="text-sm text-parchment/60 italic">&quot;Bottle your moments.&quot;</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-slate/30 border border-white/10 px-4 py-2 text-sm w-full focus:outline-none focus:border-gold/50 transition-colors"
              />
              <button className="px-4 py-2 bg-gold text-primary text-xs uppercase tracking-widest font-bold hover:bg-gold/80 transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-white/5">
          <p className="text-[10px] uppercase tracking-widest text-parchment/30">
            © 2026 Mnemonic Spirits. All Rights Reserved.
          </p>
          <p className="text-[10px] uppercase tracking-widest text-parchment/30">
            Enjoy Responsibly. 21+ Verification Required.
          </p>
        </div>
      </div>
    </footer>
  );
}
