# Image Optimization & Migration Guide

This guide explains how to replace external Unsplash images with local WebP images to improve your site's performance.

## 📊 Performance Impact

**Current State (External Unsplash):**
- Images fetched from external CDN on every page load
- Large file sizes (JPG format)
- Network latency from Unsplash servers
- Lighthouse "Avoid enormous network payloads" warnings

**After Migration (Local WebP):**
- Images served from your own server (faster)
- WebP format reduces file size by 25-35% vs JPG
- Proper `width` and `height` attributes prevent layout shift (CLS)
- `loading="lazy"` prevents off-screen images from loading
- Estimated improvement: 15-25% reduction in LCP, 30-40% improvement in FID

## 🚀 Quick Start

### Step 1: Install Dependencies

```bash
npm install --save-dev node-fetch sharp
```

- `node-fetch`: Download the images programmatically
- `sharp`: Convert images to WebP format (high performance)

### Step 2: Run Migration Script

```bash
node scripts/migrate-images.mjs
```

This script will:
- Create `public/images/` directory
- Download all Unsplash images
- Convert each to WebP format (quality: 80)
- Output file sizes and status

### Step 3: Update Image Sources

Once the script completes, update your components to use local images:

#### Option A: Automatic (Recommended)
Update `Hero.jsx` and `Portfolio.jsx` to import `imageMap` from `src/data/imageMap.js`:

```javascript
import { imageMap, extractPhotoId } from "../data/imageMap";

// In components, get local path:
const photoId = extractPhotoId(unsplashUrl);
const localPath = imageMap[photoId].localPath;

// Use localPath instead of unsplashUrl
```

#### Option B: Manual
Replace Unsplash URLs directly with local paths. Example:

**Before:**
```jsx
<ResponsiveImage
  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&auto=format&fit=crop"
  alt="Business consultation"
  loading="lazy"
/>
```

**After:**
```jsx
<ResponsiveImage
  src="/images/hero-business.webp"
  alt="Business consultation and growth strategy"
  loading="lazy"
  width={1200}
  height={600}
/>
```

### Step 4: Build & Test

```bash
npm run build
```

Then test locally and check Lighthouse:
```bash
npm run preview
```

Visit `http://localhost:4173` and run Lighthouse (DevTools → Lighthouse tab)

## 📝 Image Mapping Reference

| Component | Description | Local Path | Dimensions |
|-----------|-------------|------------|------------|
| Hero | Business consultation banner | `/images/hero-business.webp` | 1200×600 |
| Portfolio - Cafe | Restaurant website | `/images/portfolio-cafe.webp` | 600×400 |
| Portfolio - Real Estate | Property listings | `/images/portfolio-realestate.webp` | 600×400 |
| Portfolio - E-commerce | Fashion store | `/images/portfolio-ecommerce.webp` | 600×400 |
| Portfolio - Dental | Clinic website | `/images/portfolio-dental.webp` | 600×400 |
| Portfolio - Fitness | Studio landing | `/images/portfolio-fitness.webp` | 600×400 |
| Portfolio - Law | Law firm site | `/images/portfolio-law.webp` | 600×400 |

## 🔧 Manual Migration (If Script Fails)

### Option 1: Online Conversion
1. Visit each Unsplash URL in your browser
2. Right-click → Save Image
3. Use [CloudConvert](https://cloudconvert.com) or [Online Convert](https://convert.online) to convert JPG → WebP
4. Save to `public/images/` with the names from the mapping table

### Option 2: Using ImageMagick (CLI)
```bash
# Install ImageMagick
# macOS: brew install imagemagick
# Ubuntu: sudo apt-get install imagemagick
# Windows: Download from https://imagemagick.org

# Convert single image
convert input.jpg -quality 80 output.webp

# Batch convert all JPG files
for file in *.jpg; do
  convert "$file" -quality 80 "${file%.jpg}.webp"
done
```

### Option 3: Using ffmpeg
```bash
ffmpeg -i input.jpg -q:v 5 output.webp
```

## ✅ Verification Checklist

- [ ] Run `npm run build` successfully
- [ ] `public/images/` directory contains all 7 `.webp` files
- [ ] Each file is under 150 KB
- [ ] Components use `width` and `height` attributes
- [ ] All images have `loading="lazy"` (except hero with `loading="eager"`)
- [ ] Run Lighthouse and verify improvements
- [ ] Test on mobile and desktop
- [ ] Check that images display correctly in all browsers

## 🐛 Troubleshooting

### Script fails with "command not found: node-fetch"
```bash
npm install --save-dev node-fetch sharp
npm run migrate-images
```

### WebP images not displaying in IE11
IE11 doesn't support WebP. The `<picture>` element in `ResponsiveImage.jsx` automatically falls back to the original format.

### Images look blurry or low quality
Increase the quality parameter in the conversion:
- In `migrate-images.mjs`, change `quality = 80` to `quality = 85` or `quality = 90`
- Higher quality = larger file size, so 80-85 is recommended

### Build fails after migration
Ensure:
1. All image files are in `public/images/`
2. File names match exactly (case-sensitive on Linux/macOS)
3. No spaces in filenames

## 📈 Expected Performance Improvements

From typical optimizations with local WebP + lazy loading:

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| LCP (Largest Contentful Paint) | 2.5s | 2.0s | 20% faster |
| CLS (Cumulative Layout Shift) | 0.15 | 0.05 | 67% better |
| TBT (Total Blocking Time) | 150ms | 120ms | 20% faster |
| Overall Lighthouse Score | 72 | 85-90 | +15-20 pts |

## 🔗 Resources

- [WebP Support](https://caniuse.com/webp)
- [Sharp Documentation](https://sharp.pixelplumbing.com/)
- [Image Optimization Best Practices](https://web.dev/image-optimization/)
- [Lazy Loading Images](https://web.dev/lazy-loading-images/)

## ❓ Need Help?

If migration fails or images don't display:
1. Check browser console for 404 errors
2. Verify file paths match exactly
3. Clear browser cache and rebuild
4. Check Lighthouse audit for specific issues