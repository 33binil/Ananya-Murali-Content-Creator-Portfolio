import { siteContent } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';
import ImagePlaceholder from './ImagePlaceholder';

export default function About() {
  const { ref, isVisible } = useScrollReveal();
  const {
    headingLine1,
    headingLine2,
    paragraphs,
    stats,
    workedWithLabel,
    organisations,
    portraitPhoto,
    handwrittenTag,
  } = siteContent.about;

  return (
    <section
      aria-labelledby="about-heading"
      className="w-full bg-[#5A6EA8] text-[#ECDC9E]"
    >
      <div
        ref={ref}
        className={`reveal-section ${isVisible ? 'is-visible' : ''} mx-auto max-w-[1360px] px-4 sm:px-6 py-14 sm:py-20`}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 lg:gap-12 items-center">
          {/* Left column: bio, stats, worked with strip */}
          <div className="md:col-span-7 flex flex-col justify-between">
            <div>
              <h2
                id="about-heading"
                className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.05] tracking-tight text-[#ECDC9E]"
              >
                <span className="block">{headingLine1}</span>
                <span className="block">{headingLine2}</span>
              </h2>

              <div className="mt-6 space-y-4 max-w-lg text-sm sm:text-[15px] leading-relaxed text-[#FCF5E3]/95">
                {paragraphs.map((text, idx) => (
                  <p key={idx}>{text}</p>
                ))}
              </div>

              {/* Three key stats */}
              <dl className="mt-8 grid grid-cols-3 gap-4 sm:gap-6 max-w-md">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="sr-only">{stat.label}</dt>
                    <dd className="text-2xl sm:text-3xl font-extrabold tabular-nums text-[#ECDC9E]">
                      {stat.value}
                    </dd>
                    <p className="mt-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.08em] leading-snug text-[#ECDC9E]/90">
                      {stat.label}
                      {stat.sublabel && (
                        <span className="block font-semibold text-[#FCF5E3]/80">
                          {stat.sublabel}
                        </span>
                      )}
                    </p>
                  </div>
                ))}
              </dl>
            </div>

            {/* Cream rounded "WORKED WITH" strip */}
            <div className="mt-8 rounded-[6px] bg-[#ECDC9E] px-5 py-4 text-[#46578C]">
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#46578C]/80">
                {workedWithLabel}
              </p>
              <ul className="mt-2 flex flex-wrap items-center justify-between gap-x-5 gap-y-2">
                {organisations.map((org) => (
                  <li
                    key={org}
                    className="text-sm sm:text-base font-extrabold tracking-tight text-[#46578C]"
                  >
                    {org}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right column: framed portrait + handwritten tag */}
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div className="relative w-full max-w-[360px]">
              <div className="rounded-[4px] border-[6px] border-[#ECDC9E] bg-[#46578C] overflow-hidden aspect-[4/5]">
                <ImagePlaceholder
                  src={portraitPhoto.src}
                  alt={portraitPhoto.alt}
                  label={portraitPhoto.placeholderLabel}
                  className="h-full w-full rounded-none"
                />
              </div>

              {/* Handwritten Caveat tag overlapping the bottom-right corner */}
              <span
                aria-hidden="true"
                className="font-handwriting pointer-events-none absolute bottom-3 right-4 sm:bottom-4 sm:right-5 -rotate-3 select-none text-3xl sm:text-[2.15rem] font-bold leading-none text-[#ECDC9E] drop-shadow-[0_2px_4px_rgba(32,42,74,0.65)]"
              >
                {handwrittenTag}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
