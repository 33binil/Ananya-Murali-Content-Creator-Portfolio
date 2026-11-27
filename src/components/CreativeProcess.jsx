import { useState } from 'react';
import { siteContent } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';

/**
 * Computes an SVG annular sector (donut wedge) path between two angles (in degrees).
 * 0 deg points right (3 o'clock), -90 deg points up (12 o'clock), +90 deg points down (6 o'clock).
 */
function describeDonutSegment(cx, cy, innerR, outerR, startDeg, endDeg) {
  const toRad = (deg) => (deg * Math.PI) / 180;
  const x1 = cx + outerR * Math.cos(toRad(startDeg));
  const y1 = cy + outerR * Math.sin(toRad(startDeg));
  const x2 = cx + outerR * Math.cos(toRad(endDeg));
  const y2 = cy + outerR * Math.sin(toRad(endDeg));
  const x3 = cx + innerR * Math.cos(toRad(endDeg));
  const y3 = cy + innerR * Math.sin(toRad(endDeg));
  const x4 = cx + innerR * Math.cos(toRad(startDeg));
  const y4 = cy + innerR * Math.sin(toRad(startDeg));

  const largeArc = endDeg - startDeg > 180 ? 1 : 0;

  return [
    `M ${x1.toFixed(2)} ${y1.toFixed(2)}`,
    `A ${outerR} ${outerR} 0 ${largeArc} 1 ${x2.toFixed(2)} ${y2.toFixed(2)}`,
    `L ${x3.toFixed(2)} ${y3.toFixed(2)}`,
    `A ${innerR} ${innerR} 0 ${largeArc} 0 ${x4.toFixed(2)} ${y4.toFixed(2)}`,
    'Z',
  ].join(' ');
}

const SEGMENTS = [
  { start: -90, end: -45, connectorY: 54, connectorXStart: 138 },
  { start: -45, end: 0, connectorY: 126, connectorXStart: 196 },
  { start: 0, end: 45, connectorY: 198, connectorXStart: 196 },
  { start: 45, end: 90, connectorY: 270, connectorXStart: 138 },
];

export default function CreativeProcess() {
  const { ref, isVisible } = useScrollReveal();
  const { heading, steps } = siteContent.process;
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section
      aria-labelledby="process-heading"
      className="w-full bg-[#ECDC9E] text-[#46578C]"
    >
      <div
        ref={ref}
        className={`reveal-section ${isVisible ? 'is-visible' : ''} mx-auto max-w-[1360px] px-4 sm:px-6 py-14 sm:py-20`}
      >
        <h2
          id="process-heading"
          className="text-center text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-[#5A6EA8]"
        >
          {heading}
        </h2>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center">
          {/* Left: Semi-circular 4-segment SVG diagram + dashed connector lines */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <svg
              viewBox="0 0 320 324"
              role="img"
              aria-label="Four-step creative process diagram: Research, Writing, Editing, Publishing"
              className="w-full max-w-[290px] sm:max-w-[320px] h-auto overflow-visible"
            >
              {/* 4 semi-circular blue segments with cream dividers */}
              {SEGMENTS.map((seg, idx) => {
                const isHighlighted = activeIndex === idx;
                return (
                  <path
                    key={idx}
                    d={describeDonutSegment(74, 162, 56, 134, seg.start, seg.end)}
                    fill={isHighlighted ? '#46578C' : '#5A6EA8'}
                    stroke="#ECDC9E"
                    strokeWidth="5"
                    strokeLinejoin="round"
                    className="cursor-pointer transition-colors duration-150"
                    onMouseEnter={() => setActiveIndex(idx)}
                    onMouseLeave={() => setActiveIndex(null)}
                  />
                );
              })}

              {/* Center circular ring on left axis */}
              <circle
                cx="74"
                cy="162"
                r="44"
                fill="#5A6EA8"
                stroke="#ECDC9E"
                strokeWidth="6"
              />
              <circle cx="74" cy="162" r="22" fill="#ECDC9E" />

              {/* Dashed horizontal connector lines to the 4 pills (visible on lg+) */}
              {SEGMENTS.map((seg, idx) => (
                <line
                  key={`line-${idx}`}
                  x1={seg.connectorXStart}
                  y1={seg.connectorY}
                  x2="316"
                  y2={seg.connectorY}
                  stroke="#46578C"
                  strokeWidth="1.75"
                  strokeDasharray="5 5"
                  strokeOpacity={activeIndex === idx ? '1' : '0.65'}
                  className="hidden lg:block transition-opacity duration-150"
                />
              ))}
            </svg>
          </div>

          {/* Right: 4 staggered blue pill cards */}
          <ol className="lg:col-span-7 space-y-4">
            {steps.map((step, idx) => {
              const isHighlighted = activeIndex === idx;
              // Stagger middle steps subtly outward to echo the semi-circle arc like the reference
              const staggerClass =
                idx === 1 || idx === 2 ? 'lg:ml-6' : 'lg:mr-6';
              return (
                <li
                  key={step.number}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onMouseLeave={() => setActiveIndex(null)}
                  className={`flex items-center gap-4 rounded-full px-5 py-4 transition-all duration-150 ${staggerClass} ${
                    isHighlighted
                      ? 'bg-[#46578C] translate-x-1'
                      : 'bg-[#5A6EA8] hover:bg-[#46578C]'
                  }`}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ECDC9E] text-sm font-extrabold tabular-nums text-[#46578C]">
                    {step.number}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-sm sm:text-base font-extrabold text-[#ECDC9E]">
                      {step.title}
                    </h3>
                    <p className="mt-0.5 text-xs sm:text-sm leading-snug text-[#FCF5E3]/95">
                      {step.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
