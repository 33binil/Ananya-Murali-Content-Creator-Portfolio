import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { siteContent } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';
import ImagePlaceholder from './ImagePlaceholder';

export default function Gallery() {
  const { ref, isVisible } = useScrollReveal();
  const { heading, subtitle, categories, items } = siteContent.gallery;
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems =
    activeCategory === 'All'
      ? items
      : items.filter((item) => item.category === activeCategory);

  useEffect(() => {
    if (!selectedItem) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedItem(null);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedItem]);

  return (
    <section
      id="my-work"
      aria-labelledby="gallery-heading"
      className="scroll-mt-16 w-full bg-[#5A6EA8] text-[#ECDC9E]"
    >
      <div
        ref={ref}
        className={`reveal-section ${isVisible ? 'is-visible' : ''} mx-auto max-w-[1360px] px-4 sm:px-6 py-14 sm:py-20`}
      >
        <div className="text-center">
          <h2
            id="gallery-heading"
            className="text-3xl sm:text-5xl lg:text-[3.5rem] font-extrabold uppercase tracking-tight text-[#ECDC9E]"
          >
            {heading}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base leading-relaxed text-[#FCF5E3]/90">
            {subtitle}
          </p>

          {/* Cream pill container with working category filter tabs */}
          <div
            role="tablist"
            aria-label="Filter portfolio work by category"
            className="mt-7 inline-flex max-w-full flex-wrap items-center justify-center gap-1 rounded-full bg-[#ECDC9E] p-1.5"
          >
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={`whitespace-nowrap shrink-0 rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#46578C] ${
                    isActive
                      ? 'bg-[#5A6EA8] text-[#ECDC9E]'
                      : 'text-[#46578C] hover:bg-[#46578C]/10'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* 4-column desktop / 2-column mobile grid of work tiles */}
        <div className="mt-9 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {filteredItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedItem(item)}
              aria-label={`Preview ${item.title} (${item.category})`}
              className="group relative aspect-[3/4] w-full overflow-hidden rounded-[4px] border border-[#ECDC9E]/20 bg-[#46578C] text-left transition-transform duration-200 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ECDC9E]"
            >
              <ImagePlaceholder
                src={item.src}
                alt={item.alt}
                label={item.title}
                className="h-full w-full rounded-none"
              />

              {/* Subtle bottom metadata overlay */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-[#2F3D69]/90 via-[#2F3D69]/45 to-transparent px-3 pb-2.5 pt-8">
                <span className="text-xs font-bold text-[#FCF5E3]">
                  {item.title}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#ECDC9E]">
                  {item.category}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightweight accessible preview lightbox */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
          onClick={() => setSelectedItem(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#2A365E]/85 p-4 backdrop-blur-xs"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg rounded-[6px] bg-[#ECDC9E] p-5 text-[#46578C] shadow-2xl"
          >
            <div className="flex items-center justify-between gap-4 pb-3 border-b border-[#46578C]/20">
              <div>
                <h3
                  id="lightbox-title"
                  className="text-base font-extrabold text-[#46578C]"
                >
                  {selectedItem.title}
                </h3>
                <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#5A6EA8]">
                  {selectedItem.category}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                aria-label="Close preview"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#46578C]/40 text-[#46578C] transition-colors hover:bg-[#5A6EA8] hover:border-[#5A6EA8] hover:text-[#ECDC9E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#46578C]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-4 aspect-[4/3] w-full overflow-hidden rounded-[4px]">
              <ImagePlaceholder
                src={selectedItem.src}
                alt={selectedItem.alt}
                label={selectedItem.title}
                className="h-full w-full"
              />
            </div>

            {!selectedItem.src && (
              <p className="mt-3 text-xs text-[#46578C]/85">
                Replace this placeholder by adding an image in{' '}
                <code className="font-semibold">src/assets/</code> and updating{' '}
                <code className="font-semibold">src/data/content.js</code>.
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
