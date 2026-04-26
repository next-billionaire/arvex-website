import { useState } from 'react';

export default function ResponsiveImage({
  src,
  alt,
  className = '',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  loading = 'lazy',
  width = null,
  height = null,
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  // Generate WebP and fallback JPG URLs from Unsplash
  const getWebpSrc = (baseSrc) => {
    if (baseSrc.includes('unsplash.com')) {
      return baseSrc + '&fm=webp';
    }
    if (baseSrc.startsWith('/')) {
      return baseSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    }
    return baseSrc;
  };

  const getSrcSet = (baseSrc, widths = [400, 800, 1200, 1600]) => {
    if (baseSrc.includes('unsplash.com')) {
      return widths.map(w => `${baseSrc}&w=${w}&fit=crop ${w}w`).join(', ');
    }
    // For local images, don't generate srcset (already optimized)
    return baseSrc;
  };

  // Calculate aspect ratio for placeholder
  const aspectRatioPadding = width && height ? (height / width) * 100 : null;

  return (
    <picture className={className}>
      <source
        srcSet={getSrcSet(getWebpSrc(src))}
        sizes={sizes}
        type="image/webp"
      />
      <img
        srcSet={getSrcSet(src)}
        sizes={sizes}
        src={src}
        alt={alt}
        loading={loading}
        width={width || undefined}
        height={height || undefined}
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        className={`${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 ${className}`}
        {...props}
      />
    </picture>
  );
}