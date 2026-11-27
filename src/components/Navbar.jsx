import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { siteContent } from '../data/content';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-[#ECDC9E] transition-shadow duration-200 ${
        scrolled
          ? 'border-b border-[#46578C]/20 shadow-[0_2px_10px_rgba(70,87,140,0.08)]'
          : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6">
        <div className="flex h-14 sm:h-16 items-center justify-between">
          {/* Desktop evenly spaced bold small-caps navigation matching reference */}
          <nav
            aria-label="Primary navigation"
            className="hidden md:flex w-full items-center justify-between gap-8"
          >
            {siteContent.navigation.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap shrink-0 text-xs lg:text-[13px] font-bold uppercase tracking-[0.12em] text-[#46578C] transition-colors duration-150 hover:text-[#5A6EA8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#46578C]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile compact bar */}
          <div className="flex md:hidden w-full items-center justify-between">
            <a
              href="#top"
              className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#46578C] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#46578C]"
            >
              ANANYA MURALI
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="inline-flex h-11 w-11 items-center justify-center rounded-[4px] text-[#46578C] transition-colors hover:bg-[#46578C]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#46578C]"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile collapsible menu */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          className="md:hidden border-t border-[#46578C]/15 bg-[#ECDC9E] px-5 pb-4 pt-2"
        >
          <ul className="flex flex-col space-y-1">
            {siteContent.navigation.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block rounded-[4px] px-3 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[#46578C] transition-colors hover:bg-[#5A6EA8] hover:text-[#ECDC9E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#46578C]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
