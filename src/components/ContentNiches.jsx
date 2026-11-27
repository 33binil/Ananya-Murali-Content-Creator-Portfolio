import {
  FileText,
  Mic,
  Newspaper,
  PenTool,
  PlaySquare,
} from 'lucide-react';
import { siteContent } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';
import ImagePlaceholder from './ImagePlaceholder';

const nicheIcons = {
  newspaper: Newspaper,
  fileText: FileText,
  penTool: PenTool,
  playSquare: PlaySquare,
  mic: Mic,
};

export default function ContentNiches() {
  const { ref, isVisible } = useScrollReveal();
  const { heading, items, fullLengthPhoto, editorialCopy, educationBar } =
    siteContent.niches;

  return (
    <section
      aria-labelledby="niches-heading"
      className="w-full bg-[#ECDC9E] text-[#46578C]"
    >
      <div
        ref={ref}
        className={`reveal-section ${isVisible ? 'is-visible' : ''} mx-auto max-w-[1360px] px-4 sm:px-6 py-14 sm:py-20`}
      >
        <h2
          id="niches-heading"
          className="text-3xl sm:text-5xl lg:text-[3.5rem] font-extrabold uppercase tracking-tight text-[#5A6EA8]"
        >
          {heading}
        </h2>

        {/* 3-part row: 5 blue niche rows left, overlapping arch full-length photo center, right-aligned copy */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0 items-center">
          {/* Left: 5 blue rounded rows */}
          <ul className="md:col-span-5 space-y-3 relative z-0 md:pr-4">
            {items.map((item) => {
              const Icon = nicheIcons[item.icon] || FileText;
              return (
                <li
                  key={item.id}
                  className="flex items-center gap-3.5 rounded-[6px] bg-[#5A6EA8] px-4 py-3.5 text-[#ECDC9E] transition-transform duration-150 hover:translate-x-1"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[4px] border border-[#ECDC9E]/80 text-[#ECDC9E]"
                  >
                    <Icon className="h-3.5 w-3.5" strokeWidth={2} />
                  </span>
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.06em] text-[#FCF5E3]">
                    {item.label}
                  </span>
                </li>
              );
            })}
          </ul>

          {/* Center: Full-length arch photo overlapping the right edge of the list on desktop */}
          <div className="md:col-span-3 flex justify-center md:-ml-7 relative z-10 md:self-end">
            <div className="w-[210px] h-[320px] sm:w-[230px] sm:h-[360px] md:w-full md:max-w-[235px] md:h-[385px]">
              <ImagePlaceholder
                src={fullLengthPhoto.src}
                alt={fullLengthPhoto.alt}
                label={fullLengthPhoto.placeholderLabel}
                shape="arch"
                transparent
                className="h-full w-full shadow-[0_6px_18px_rgba(70,87,140,0.12)]"
              />
            </div>
          </div>

          {/* Right: Editorial copy block */}
          <div className="md:col-span-4 md:pl-6 md:text-right space-y-3">
            <p className="text-lg sm:text-xl font-extrabold leading-snug text-[#46578C]">
              {editorialCopy.leadBold}
            </p>
            <p className="text-base sm:text-lg font-medium leading-snug text-[#5A6EA8]">
              {editorialCopy.highlight}
            </p>
            <p className="pt-1 text-sm leading-relaxed text-[#46578C]">
              {editorialCopy.body}
            </p>
          </div>
        </div>

        {/* Bottom blue credentials / education stats bar */}
        <div className="relative z-20 mt-8 md:mt-0 rounded-[6px] bg-[#5A6EA8] px-6 py-5 text-[#ECDC9E]">
          <dl className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {educationBar.map((edu) => (
              <div key={edu.title} className="flex flex-col items-center">
                <dt className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#ECDC9E]">
                  {edu.title}
                </dt>
                <dd className="mt-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.1em] text-[#FCF5E3]/90">
                  {edu.subtitle}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
