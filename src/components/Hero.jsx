import { Instagram, Linkedin, Mail } from 'lucide-react';
import { siteContent } from '../data/content';
import ImagePlaceholder from './ImagePlaceholder';

const socialIconMap = {
  instagram: Instagram,
  linkedin: Linkedin,
  email: Mail,
};

export default function Hero() {
  const { role, headline, tagline, cutoutPhoto, socials } = siteContent.hero;

  return (
    <section
      id="top"
      className="w-full bg-[#ECDC9E] text-[#46578C] overflow-hidden"
    >
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 pt-6 pb-10 sm:pt-10 sm:pb-14">
        {/* Top-left role kicker + giant PORTFOLIO + overlapping cutout portrait */}
        <div className="relative">
          {/* Role label top-left */}
          <p className="relative z-20 max-w-[60%] sm:max-w-none text-sm sm:text-xl md:text-2xl font-extrabold uppercase tracking-[0.06em] text-[#5A6EA8]">
            {role}
          </p>

          {/* Center composition: Giant full-width PORTFOLIO word + arch cutout overlapping in front */}
          <div className="relative mt-4 sm:mt-2 flex flex-col items-center justify-center min-h-[250px] sm:min-h-[340px] md:min-h-[430px]">
            {/* Giant PORTFOLIO typography spanning full container width */}
            <h1
              className="relative z-0 w-full text-center font-extrabold uppercase leading-none tracking-[-0.02em] text-[#5A6EA8] select-none"
              style={{ fontSize: 'clamp(3.3rem, 14.5vw, 11.5rem)' }}
            >
              {headline}
            </h1>

            {/* Overlapping cutout portrait slot positioned over the right-center letters like the reference */}
            <div className="pointer-events-none relative -mt-10 sm:mt-0 sm:absolute sm:top-0 sm:bottom-0 sm:right-[11%] md:right-[13%] z-10 flex items-center justify-center">
              <div className="w-[185px] h-[250px] sm:w-[230px] sm:h-[325px] md:w-[275px] md:h-[395px]">
                <ImagePlaceholder
                  src={cutoutPhoto.src}
                  alt={cutoutPhoto.alt}
                  label={cutoutPhoto.placeholderLabel}
                  shape="arch"
                  transparent
                  className={`h-full w-full ${
                    cutoutPhoto.src ? '' : 'opacity-[0.92]'
                  }`}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar: tagline left, outlined circular social icons right */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <p className="max-w-md text-sm sm:text-base font-semibold leading-relaxed text-[#46578C]">
            {tagline}
          </p>

          <div className="flex items-center gap-3 shrink-0">
            {socials.map((item) => {
              const Icon = socialIconMap[item.id] || Mail;
              const isExternal = item.href.startsWith('http');
              return (
                <a
                  key={item.id}
                  href={item.href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  aria-label={item.label}
                  title={item.label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] border-[#46578C] text-[#46578C] transition-colors duration-150 hover:bg-[#5A6EA8] hover:border-[#5A6EA8] hover:text-[#ECDC9E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#46578C]"
                >
                  <Icon className="h-4 w-4" strokeWidth={2} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
