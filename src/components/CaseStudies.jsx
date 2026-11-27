import {
  ExternalLink,
  Film,
  Languages,
  LayoutGrid,
  Lightbulb,
  Megaphone,
  Newspaper,
  PenTool,
  Play,
} from 'lucide-react';
import { siteContent } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';
import ImagePlaceholder from './ImagePlaceholder';

const deliverableIcons = {
  newspaper: Newspaper,
  lightbulb: Lightbulb,
  play: Play,
  layoutGrid: LayoutGrid,
  penTool: PenTool,
  film: Film,
  megaphone: Megaphone,
  languages: Languages,
};

export default function CaseStudies() {
  const { ref, isVisible } = useScrollReveal();
  const { kicker, headingLine1, headingLine2, subtitle, cards, edbeBanner } =
    siteContent.caseStudies;

  return (
    <section
      id="testimonials"
      aria-labelledby="case-studies-heading"
      className="scroll-mt-16 w-full bg-[#5A6EA8] text-[#ECDC9E]"
    >
      <div
        ref={ref}
        className={`reveal-section ${isVisible ? 'is-visible' : ''} mx-auto max-w-[1360px] px-4 sm:px-6 pt-14 sm:pt-20 pb-10 sm:pb-14`}
      >
        {/* Header block with #case-study anchor */}
        <div id="case-study" className="scroll-mt-20 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ECDC9E]/90">
            {kicker}
          </p>
          <h2
            id="case-studies-heading"
            className="font-condensed mt-2 text-4xl sm:text-5xl md:text-6xl uppercase tracking-[0.02em] leading-[1.04] text-[#ECDC9E]"
          >
            <span className="block">{headingLine1}</span>
            <span className="block">{headingLine2}</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base leading-relaxed text-[#FCF5E3]/90">
            {subtitle}
          </p>
        </div>

        {/* Two side-by-side cream case study cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card) => (
            <article
              key={card.id}
              className="flex flex-col rounded-[6px] bg-[#ECDC9E] p-5 sm:p-6 text-[#46578C]"
            >
              {/* Top work sample image */}
              <div className="aspect-[16/11] w-full overflow-hidden rounded-[4px]">
                <ImagePlaceholder
                  src={card.heroImage.src}
                  alt={card.heroImage.alt}
                  label={card.heroImage.placeholderLabel}
                  className="h-full w-full"
                />
              </div>

              {/* Organisation name */}
              <div className="mt-5">
                <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-[#5A6EA8]">
                  {card.org}
                </h3>
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#46578C]/85">
                  {card.subOrg}
                </p>
              </div>

              {/* Project description */}
              <div className="mt-4">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#46578C]">
                  {card.projectLabel}
                </p>
                <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-[#46578C]">
                  {card.projectDescription}
                </p>
              </div>

              {/* Bordered inner box: Role in Numbers + Content Snapshot + Deliverables */}
              <div className="mt-5 flex-1 rounded-[6px] border border-[#46578C]/65 p-4 space-y-5">
                {/* Role in numbers */}
                <div>
                  <h4 className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#46578C]">
                    {card.numbersHeading}
                  </h4>
                  <dl className="mt-2.5 grid grid-cols-4 gap-2 text-center">
                    {card.metrics.map((metric) => (
                      <div key={metric.label} className="min-w-0">
                        <dd className="text-xl sm:text-2xl font-extrabold tabular-nums text-[#5A6EA8]">
                          {metric.value}
                        </dd>
                        <dt className="mt-0.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.06em] leading-tight text-[#46578C]">
                          {metric.label}
                        </dt>
                      </div>
                    ))}
                  </dl>
                </div>

                {/* Content snapshot: 4 small squares */}
                <div>
                  <h4 className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#46578C]">
                    {card.snapshotHeading}
                  </h4>
                  <div className="mt-2.5 grid grid-cols-4 gap-2">
                    {card.snapshots.map((snap) => (
                      <div
                        key={snap.id}
                        className="aspect-square w-full overflow-hidden rounded-[4px]"
                      >
                        <ImagePlaceholder
                          src={snap.src}
                          alt={snap.alt}
                          compact
                          className="h-full w-full"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverables: 4 icons with labels */}
                <div>
                  <h4 className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#46578C]">
                    {card.deliverablesHeading}
                  </h4>
                  <ul className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                    {card.deliverables.map((deliv) => {
                      const Icon = deliverableIcons[deliv.icon] || LayoutGrid;
                      return (
                        <li
                          key={deliv.label}
                          className="flex flex-col items-center gap-1.5"
                        >
                          <span
                            aria-hidden="true"
                            className="flex h-7 w-7 items-center justify-center rounded-full bg-[#5A6EA8]/15 text-[#5A6EA8]"
                          >
                            <Icon className="h-3.5 w-3.5" strokeWidth={2.2} />
                          </span>
                          <span className="text-[9px] font-bold uppercase tracking-[0.06em] leading-tight text-[#46578C]">
                            {deliv.label}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              {/* Bordered testimonial quote box */}
              <blockquote className="mt-4 rounded-[6px] border border-[#46578C]/65 px-4 py-3.5">
                <p className="text-xs sm:text-[13px] italic leading-relaxed text-[#46578C]">
                  “{card.testimonial.quote}”
                </p>
                <footer className="mt-1.5 text-[11px] font-bold text-[#46578C]">
                  — {card.testimonial.author}
                </footer>
              </blockquote>
            </article>
          ))}
        </div>

        {/* Cream bordered EDBE CTA banner */}
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-[6px] border border-[#46578C]/30 bg-[#ECDC9E] px-5 sm:px-7 py-5 text-[#46578C]">
          <div>
            <h3 className="text-sm sm:text-base font-extrabold uppercase tracking-[0.08em] text-[#46578C]">
              {edbeBanner.title}
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-[#46578C]/90">
              {edbeBanner.description}
            </p>
          </div>
          <a
            href={edbeBanner.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap shrink-0 rounded-full bg-[#5A6EA8] px-6 py-3 text-xs font-bold uppercase tracking-[0.1em] text-[#ECDC9E] transition-colors duration-150 hover:bg-[#46578C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#46578C]"
          >
            <span>{edbeBanner.ctaLabel}</span>
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
