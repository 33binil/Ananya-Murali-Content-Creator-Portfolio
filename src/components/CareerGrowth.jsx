import { useState } from 'react';
import { siteContent } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';

const CHART_WIDTH = 540;
const CHART_HEIGHT = 270;
const PAD = { top: 28, right: 32, bottom: 44, left: 42 };
const Y_TICKS = [1, 2, 3, 4];

export default function CareerGrowth() {
  const { ref, isVisible } = useScrollReveal();
  const { heading, chartPoints, stats } = siteContent.careerGrowth;
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const innerW = CHART_WIDTH - PAD.left - PAD.right;
  const innerH = CHART_HEIGHT - PAD.top - PAD.bottom;

  const getX = (index) =>
    PAD.left + (index / Math.max(chartPoints.length - 1, 1)) * innerW;

  const getY = (value) => {
    const minVal = 1;
    const maxVal = 4;
    const ratio = (value - minVal) / (maxVal - minVal);
    return PAD.top + innerH - ratio * innerH;
  };

  const coordinates = chartPoints.map((pt, idx) => ({
    ...pt,
    x: getX(idx),
    y: getY(pt.roles),
  }));

  const polylinePoints = coordinates
    .map((pt) => `${pt.x.toFixed(1)},${pt.y.toFixed(1)}`)
    .join(' ');

  return (
    <section
      aria-labelledby="career-growth-heading"
      className="w-full bg-[#5A6EA8] text-[#ECDC9E]"
    >
      <div
        ref={ref}
        className={`reveal-section ${isVisible ? 'is-visible' : ''} mx-auto max-w-[1360px] px-4 sm:px-6 pt-6 pb-16 sm:pb-20`}
      >
        <h2
          id="career-growth-heading"
          className="text-2xl sm:text-4xl font-extrabold uppercase tracking-[0.04em] text-[#ECDC9E]"
        >
          {heading}
        </h2>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left: Plain SVG cream line chart */}
          <div className="lg:col-span-7">
            <svg
              viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`}
              role="img"
              aria-label="Career growth line chart: 1 role in 08/25, 2 roles in 02/26, 3 roles in 09/26, 4 roles in 10/26"
              className="w-full h-auto overflow-visible"
            >
              {/* Horizontal grid lines & Y-axis labels */}
              {Y_TICKS.map((tick) => {
                const y = getY(tick);
                return (
                  <g key={tick}>
                    <line
                      x1={PAD.left}
                      y1={y}
                      x2={CHART_WIDTH - PAD.right}
                      y2={y}
                      stroke="#ECDC9E"
                      strokeOpacity="0.25"
                      strokeWidth="1.25"
                    />
                    <text
                      x={PAD.left - 18}
                      y={y + 4}
                      textAnchor="end"
                      fill="#ECDC9E"
                      fillOpacity="0.85"
                      fontSize="13"
                      fontWeight="600"
                      className="tabular-nums"
                    >
                      {tick}
                    </text>
                  </g>
                );
              })}

              {/* Line connecting career milestones */}
              <polyline
                fill="none"
                stroke="#ECDC9E"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                points={polylinePoints}
              />

              {/* Interactive round markers + X-axis date labels */}
              {coordinates.map((pt, idx) => {
                const isHovered = hoveredIdx === idx;
                return (
                  <g
                    key={pt.date}
                    tabIndex={0}
                    role="group"
                    aria-label={`${pt.date}: ${pt.label}`}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    onFocus={() => setHoveredIdx(idx)}
                    onBlur={() => setHoveredIdx(null)}
                    className="cursor-pointer outline-none"
                  >
                    {/* Subtle hover halo */}
                    {isHovered && (
                      <circle
                        cx={pt.x}
                        cy={pt.y}
                        r="13"
                        fill="#ECDC9E"
                        fillOpacity="0.22"
                      />
                    )}
                    <circle
                      cx={pt.x}
                      cy={pt.y}
                      r={isHovered ? '8' : '6.5'}
                      fill="#ECDC9E"
                      stroke="#5A6EA8"
                      strokeWidth="2"
                    />

                    {/* Tooltip label on hover/focus */}
                    {isHovered && (
                      <g>
                        <rect
                          x={pt.x - 42}
                          y={pt.y - 36}
                          width="84"
                          height="24"
                          rx="4"
                          fill="#ECDC9E"
                        />
                        <text
                          x={pt.x}
                          y={pt.y - 20}
                          textAnchor="middle"
                          fill="#46578C"
                          fontSize="11"
                          fontWeight="700"
                        >
                          {pt.label}
                        </text>
                      </g>
                    )}

                    {/* X-axis date label */}
                    <text
                      x={pt.x}
                      y={CHART_HEIGHT - 12}
                      textAnchor="middle"
                      fill="#ECDC9E"
                      fillOpacity={isHovered ? '1' : '0.88'}
                      fontSize="13"
                      fontWeight={isHovered ? '700' : '600'}
                      className="tabular-nums"
                    >
                      {pt.date}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Right: 4 outlined stat boxes */}
          <dl className="lg:col-span-5 space-y-3.5">
            {stats.map((item) => (
              <div
                key={item.title}
                className="rounded-[6px] border border-[#ECDC9E]/80 px-5 py-3.5 transition-colors duration-150 hover:bg-[#ECDC9E]/10"
              >
                <dt className="text-xl sm:text-2xl font-extrabold leading-tight text-[#ECDC9E] tabular-nums">
                  {item.title}
                </dt>
                <dd className="mt-0.5 text-xs sm:text-sm font-medium text-[#FCF5E3]/90">
                  {item.subtitle}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
