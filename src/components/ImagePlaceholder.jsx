import { useState } from 'react';

/**
 * Reusable image slot component.
 * Renders a real <img> when `src` is provided in src/data/content.js,
 * and falls back gracefully to the signature blue-striped placeholder
 * matching the reference layout until photos are supplied.
 */
export default function ImagePlaceholder({
  src = null,
  alt = '',
  label = 'Image placeholder',
  shape = 'rect',
  compact = false,
  transparent = false,
  className = '',
  imgClassName = '',
}) {
  const [hasError, setHasError] = useState(false);
  const showImage = Boolean(src) && !hasError;

  const shapeClasses =
    shape === 'arch' ? 'rounded-t-full rounded-b-[4px]' : 'rounded-[4px]';

  if (showImage) {
    return (
      <div className={`relative overflow-hidden ${shapeClasses} ${className}`}>
        <img
          src={src}
          alt={alt || label}
          referrerPolicy="no-referrer"
          onError={() => setHasError(true)}
          className={`h-full w-full ${
            transparent ? 'object-contain object-bottom' : 'object-cover'
          } ${imgClassName}`}
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={alt || label}
      className={`striped-placeholder relative flex items-center justify-center overflow-hidden select-none ${shapeClasses} ${className}`}
    >
      {!compact && label && (
        <span className="px-3 py-1 text-center text-xs sm:text-sm font-semibold tracking-wide text-[#FCF5E3] drop-shadow-[0_1px_2px_rgba(32,42,74,0.6)]">
          {label}
        </span>
      )}
    </div>
  );
}
