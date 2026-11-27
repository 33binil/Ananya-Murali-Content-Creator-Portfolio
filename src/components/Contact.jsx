import { Linkedin, Mail, Phone } from 'lucide-react';
import { siteContent } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Contact() {
  const { ref, isVisible } = useScrollReveal();
  const {
    heading,
    email,
    phoneDisplay,
    phoneHref,
    linkedinLabel,
    linkedinHref,
  } = siteContent.contact;

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-16 w-full bg-[#ECDC9E] text-[#46578C]"
    >
      <div
        ref={ref}
        className={`reveal-section ${isVisible ? 'is-visible' : ''} mx-auto max-w-[1360px] px-4 sm:px-6 py-14 sm:py-18`}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h2
              id="contact-heading"
              className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold uppercase tracking-tight text-[#5A6EA8]"
            >
              {heading}
            </h2>

            <div className="mt-4 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-6 text-sm sm:text-base font-semibold text-[#46578C]">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-[#5A6EA8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#46578C]"
              >
                <Mail className="h-4 w-4 shrink-0 text-[#5A6EA8]" aria-hidden="true" />
                <span>{email}</span>
              </a>

              <span aria-hidden="true" className="hidden sm:inline text-[#46578C]/40">
                ·
              </span>

              <a
                href={phoneHref}
                className="inline-flex items-center gap-2 tabular-nums transition-colors hover:text-[#5A6EA8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#46578C]"
              >
                <Phone className="h-4 w-4 shrink-0 text-[#5A6EA8]" aria-hidden="true" />
                <span>{phoneDisplay}</span>
              </a>
            </div>
          </div>

          <div className="shrink-0">
            <a
              href={linkedinHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-[#5A6EA8] px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-[0.1em] text-[#ECDC9E] transition-colors duration-150 hover:bg-[#46578C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#46578C]"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
              <span>{linkedinLabel}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
