/**
 * Image mapping configuration
 * Maps external Unsplash URLs to local .webp image paths
 * 
 * To use local images:
 * 1. Download each Unsplash image
 * 2. Convert to .webp format using ImageMagick or online tools:
 *    cwebp -q 80 image.jpg -o public/images/image-name.webp
 * 3. Update localPath values below once images are in public/images/
 */

export const imageMap = {
  // Hero section
  'photo-1556761175-4b46a572b786': {
    alt: 'Business consultation and growth strategy',
    localPath: '/images/hero-business.webp',
    unsplashUrl: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&auto=format&fit=crop',
    dimensions: { width: 1200, height: 600 },
    category: 'hero'
  },
  
  // Portfolio images
  'photo-1501339847302-ac426a4a7cbb': {
    alt: 'Modern cafe website showcase',
    localPath: '/images/portfolio-cafe.webp',
    unsplashUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb',
    dimensions: { width: 600, height: 400 },
    category: 'portfolio'
  },
  'photo-1560518883-ce09059eeffa': {
    alt: 'Real estate property listing showcase',
    localPath: '/images/portfolio-realestate.webp',
    unsplashUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa',
    dimensions: { width: 600, height: 400 },
    category: 'portfolio'
  },
  'photo-1556742031-c6961e8560b0': {
    alt: 'Fashion e-commerce store showcase',
    localPath: '/images/portfolio-ecommerce.webp',
    unsplashUrl: 'https://images.unsplash.com/photo-1556742031-c6961e8560b0',
    dimensions: { width: 600, height: 400 },
    category: 'portfolio'
  },
  'photo-1629909613654-28e377c37b09': {
    alt: 'Dental clinic website showcase',
    localPath: '/images/portfolio-dental.webp',
    unsplashUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09',
    dimensions: { width: 600, height: 400 },
    category: 'portfolio'
  },
  'photo-1534438327276-14e5300c3a48': {
    alt: 'Fitness studio landing page showcase',
    localPath: '/images/portfolio-fitness.webp',
    unsplashUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48',
    dimensions: { width: 600, height: 400 },
    category: 'portfolio'
  },
  'photo-1589829545856-d10d557cf95f': {
    alt: 'Law firm professional website showcase',
    localPath: '/images/portfolio-law.webp',
    unsplashUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f',
    dimensions: { width: 600, height: 400 },
    category: 'portfolio'
  }
};

/**
 * Get image configuration by Unsplash photo ID
 */
export const getImageConfig = (photoId) => {
  return imageMap[photoId] || null;
};

/**
 * Get the best image source (local if available, fallback to Unsplash)
 */
export const getOptimizedImageSrc = (photoId, useLocal = true) => {
  const config = getImageConfig(photoId);
  if (!config) return null;
  
  // For production, set useLocal=true once you've migrated to local images
  return useLocal ? config.localPath : config.unsplashUrl;
};

/**
 * Helper to extract photo ID from Unsplash URL
 */
export const extractPhotoId = (unsplashUrl) => {
  const match = unsplashUrl.match(/photo-[a-zA-Z0-9-]+/);
  return match ? match[0] : null;
};