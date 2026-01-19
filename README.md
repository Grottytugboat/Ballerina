# Ballerina Website

High-end wedding and event planning website for Ballerina. Built with Next.js 14, Tailwind CSS, and Framer Motion.

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Placeholder Content

The following content needs to be replaced before going live:

### Images

- **Hero Image** (`app/page.tsx`): Replace the placeholder hero image
- **Portfolio Images** (`app/work/page.tsx`): All 6 project images are placeholders
  - Private Property Wedding (Macedon Ranges)
  - Warehouse Wedding (Melbourne)
  - Corporate Launch (South Wharf)
  - Intimate Winery Celebration (Kyneton)
  - Milestone Dinner (Albert Park)
  - Backyard Wedding (Woodend)

All placeholder images are marked with `[PLACEHOLDER IMAGE]` in alt text.

### Contact Information

- **Phone Number**: Replace `[PHONE NUMBER]` in:
  - `components/Footer.tsx`
  - `app/contact/page.tsx`
  - `components/SchemaMarkup.tsx`

- **Email**: Currently set to `nicole@ballerina.com.au` - verify this is correct

### Formspree Integration

1. Create a Formspree account at [formspree.io](https://formspree.io)
2. Create a new form
3. Replace `YOUR_FORM_ID` in `components/ContactForm.tsx` (line 20) with your actual Formspree form ID
4. The form endpoint should be: `https://formspree.io/f/YOUR_FORM_ID`

### Domain & SEO

- Update `baseUrl` in `app/sitemap.ts` from `https://ballerina.com.au` to your actual domain
- Update `sitemap` URL in `app/robots.ts` if domain differs
- Verify all metadata in `lib/metadata.ts` and page-specific metadata

## Deployment to Vercel

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build
4. Add environment variables if needed (currently none required)
5. Deploy

The site is optimized for Vercel deployment with:
- Next.js Image Optimization
- Automatic static optimization
- Edge-ready configuration

## Project Structure

```
/app
  /page.tsx          # Home page
  /about/page.tsx    # About Nicole
  /services/page.tsx # Services
  /work/page.tsx     # Portfolio
  /contact/page.tsx  # Contact
  /layout.tsx        # Root layout
  /globals.css       # Global styles
  /sitemap.ts        # SEO sitemap
  /robots.ts         # SEO robots.txt

/components
  /Header.tsx        # Navigation header
  /Footer.tsx        # Footer
  /Hero.tsx          # Hero component
  /ServiceCard.tsx   # Service display card
  /ProjectCard.tsx   # Portfolio project card
  /ContactForm.tsx   # Contact form (Formspree)
  /SocialProof.tsx   # Client logos/testimonials
  /ScrollReveal.tsx  # Scroll animations
  /SchemaMarkup.tsx  # SEO schema markup

/lib
  /metadata.ts       # SEO metadata helper
```

## Design System

### Colors
- Primary: `#0a0a0a` (black)
- Background: `#fafaf9` (off-white)
- Accent: `#a8a29e` (warm stone)

### Typography
- Font: Inter (via Google Fonts)
- Headlines: Uppercase or lowercase (never title case)
- Generous letter-spacing on headings

### Breakpoints
- Mobile: Default (< 768px)
- Tablet: `md:` (≥ 768px)
- Desktop: `lg:` (≥ 1024px)

## SEO

The site includes:
- Semantic HTML structure
- Unique meta titles and descriptions per page
- Open Graph tags for social sharing
- Schema.org markup (LocalBusiness + EventPlanner)
- Sitemap.xml
- Robots.txt
- Internal linking strategy

Primary keywords integrated throughout:
- Wedding planner Kyneton
- Wedding planner Macedon Ranges
- Luxury wedding planner Melbourne
- High end event coordinator Victoria
- And more (see `lib/metadata.ts`)

## Notes

- All animations use Framer Motion (subtle, no playful effects)
- Mobile-responsive design throughout
- Images use Next.js Image component for optimization
- Form validation included in ContactForm
- Placeholder content clearly marked for easy replacement
