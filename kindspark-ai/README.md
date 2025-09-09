# Kindspark AI Marketing Site

A modern, fast marketing site for Kindspark AI built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🚀 **Next.js 14** with App Router and TypeScript
- 🎨 **Tailwind CSS** with custom brand colors and typography
- 🎭 **Framer Motion** for smooth animations
- 🧩 **shadcn/ui** components for consistent UI
- 📱 **Fully Responsive** design
- 🔍 **SEO Optimized** with sitemap and robots.txt
- 📝 **Netlify Forms** integration
- 🧮 **Interactive TCO Calculator**
- 📊 **Case Studies** with real data
- 🎯 **Assessment Form** with validation

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── how-it-works/      # How It Works page
│   ├── case-studies/      # Case Studies page
│   ├── assessment/        # Assessment form page
│   ├── contact/           # Contact page
│   ├── calculator/        # TCO Calculator page
│   ├── beyond-ai/         # Beyond AI services page
│   ├── privacy/           # Privacy Policy page
│   ├── layout.tsx         # Root layout
│   ├── sitemap.ts         # Sitemap generation
│   └── robots.ts          # Robots.txt generation
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── sections/         # Homepage sections
│   ├── pages/            # Page-specific components
│   ├── header.tsx        # Site header
│   └── footer.tsx        # Site footer
├── lib/                  # Utilities and configuration
│   ├── site-config.ts    # Site configuration
│   └── utils.ts          # Utility functions
└── data/                 # Static data
    └── case-studies.json # Case studies data
```

## Configuration

### Site Configuration

Edit `src/lib/site-config.ts` to customize:
- Site name, tagline, and contact information
- Social media links
- CTA button labels and links
- Proof statistics
- Feature descriptions
- FAQ content

### Brand Colors

Colors are defined in `src/app/globals.css`:
- Primary: `#0EA5E9` (Sky blue)
- Brand Contrast: `#0B1220` (Rich navy)
- Typography: Inter (body), Sora (display)

### Forms

Forms are configured for Netlify Forms:
- Assessment form: `/assessment`
- Contact form: `/contact`

Both forms include:
- Client-side validation with Zod
- Honeypot spam protection
- Success/error states
- Netlify Forms integration

## Deployment

### Netlify (Recommended)

1. **Connect your repository** to Netlify
2. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `out`
   - Node version: 18

3. **Deploy** - Netlify will automatically build and deploy

### Manual Build

```bash
npm run build
```

The static files will be generated in the `out` directory.

## Customization

### Adding New Pages

1. Create a new directory in `src/app/`
2. Add a `page.tsx` file with metadata
3. Create components in `src/components/pages/[page-name]/`
4. Update navigation in `src/components/header.tsx`

### Modifying Content

- **Homepage sections:** Edit files in `src/components/sections/`
- **Page content:** Edit files in `src/components/pages/`
- **Site-wide settings:** Edit `src/lib/site-config.ts`
- **Case studies:** Edit `src/data/case-studies.json`

### Styling

- **Global styles:** Edit `src/app/globals.css`
- **Component styles:** Use Tailwind classes
- **Custom components:** Create in `src/components/ui/`

## Performance

- ⚡ **Static Generation** for optimal performance
- 🖼️ **Optimized Images** with Next.js Image component
- 📦 **Code Splitting** for faster loading
- 🎯 **Core Web Vitals** optimized

## SEO Features

- 📄 **Meta Tags** for all pages
- 🗺️ **Sitemap** generation
- 🤖 **Robots.txt** configuration
- 🔗 **OpenGraph** and Twitter Cards
- 📱 **Mobile-first** responsive design

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is proprietary to Kindspark AI.

## Support

For questions or support, contact us at [hello@kindsparkai.com](mailto:hello@kindsparkai.com).