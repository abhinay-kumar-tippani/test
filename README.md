# Dental Doctor Portfolio Website

A professional portfolio website for dental doctors, built with Next.js 14, Tailwind CSS, and Framer Motion.

Built for resale — all doctor-specific content lives in a single config file.

## How to Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## How to Change Doctor Content

Edit **`config/doctor.ts`** — it contains all doctor-specific content:

- Name, credentials, registration number
- Bio, tagline
- Experience stats
- Languages spoken
- Services offered
- Education timeline
- Professional memberships
- Clinic details (name, address, phone, email, hours)
- Social media links
- SEO metadata

No other file needs to be edited.

## How to Swap Photos

Replace the files in these directories:

| Directory | Files |
|-----------|-------|
| `public/doctor/` | `hero.jpg`, `about.jpg`, `profile.jpg` |
| `public/clinic/` | `reception.jpg`, `treatment-room.jpg`, `equipment.jpg`, `exterior.jpg` |

Keep the same filenames. Photos should be high-resolution JPEG/WebP.

### Image Specifications

| File | Recommended Size | Aspect Ratio |
|------|-----------------|--------------|
| `doctor/hero.jpg` | 1920×1080px | 16:9 |
| `doctor/about.jpg` | 800×1000px | 4:5 |
| `doctor/profile.jpg` | 800×1000px | 4:5 |
| `clinic/*.jpg` | 1200×900px | 4:3 |

## How to Deploy on Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com) and import the GitHub repository.
3. Vercel auto-detects Next.js — no configuration needed.
4. Deploy. The site auto-deploys on every push to the main branch.

The project uses `output: 'export'` for static export, compatible with Vercel's zero-config deployment.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Cormorant Garamond (headings) + DM Sans (body)
- **Deployment**: Vercel
