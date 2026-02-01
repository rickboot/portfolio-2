# Images Directory

This directory contains static image assets for the portfolio.

## Usage in Next.js

Images in the `public` folder are served from the root URL. To reference these images in your components:

```tsx
// Using Next.js Image component (recommended)
import Image from 'next/image'

<Image 
  src="/images/rick.png" 
  alt="Description" 
  width={500} 
  height={300}
/>

// Or using regular img tag
<img src="/images/rick.png" alt="Description" />
```

## Available Images

- `ai-calc.png` - AI Resource Estimator project screenshot
- `rick.png` - Profile image
- `shadowforge.png` - ShadowForge project screenshot
