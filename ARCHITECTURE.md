# Visit Mauritius Paradise - Next.js Architecture

## 🏗️ Project Structure

```
src/
├── app/
│   └── [locale]/
│       └── (marketing)/
│           ├── layout.tsx          # Marketing layout with Header/Footer
│           └── page.tsx            # Home page with sections
├── components/
│   ├── layout/
│   │   ├── Header.tsx              # Site header with logo
│   │   ├── Navigation.tsx          # Navigation menu (client component)
│   │   └── Footer.tsx              # Site footer
│   ├── sections/                   # Page sections (server components)
│   │   ├── HeroSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── GlobalFootprintSection.tsx
│   │   ├── DestinationsSection.tsx
│   │   ├── VehicleFleetSection.tsx
│   │   ├── TransportationServicesSection.tsx
│   │   ├── CTASection.tsx
│   │   ├── AppDownloadSection.tsx
│   │   └── TestimonialsSection.tsx
│   └── ui/                         # Reusable UI components
├── constants/
│   ├── navigation.ts               # Navigation items and CTA buttons
│   ├── services.ts                 # Services data
│   └── destinations.ts             # Destinations data
├── lib/                           # Utility functions
└── styles/
    └── global.css                 # Global styles with VMP theme
```

## 🎯 Key Improvements

### ✅ **Proper Next.js Patterns**
- Server components by default
- Client components only when needed (`'use client'`)
- Proper layout hierarchy
- Clean separation of concerns

### ✅ **Better Organization**
- **`/layout`** - Layout components (Header, Footer, Navigation)
- **`/sections`** - Page sections (Hero, Services, etc.)
- **`/ui`** - Reusable UI components
- **`/constants`** - Data constants
- **`/lib`** - Utility functions

### ✅ **Performance Optimized**
- Server-side rendering for content
- Client-side only for interactivity
- Proper hydration handling
- No unnecessary client components

### ✅ **Maintainable Code**
- Constants extracted to separate files
- Reusable component patterns
- Clean import structure
- TypeScript throughout

## 🚀 Benefits

1. **Better Performance** - Server components render faster
2. **SEO Optimized** - Content is server-rendered
3. **Maintainable** - Clear separation of concerns
4. **Scalable** - Easy to add new pages/sections
5. **Next.js Best Practices** - Follows official recommendations

## 🎨 Styling

- **Tailwind CSS** for utility-first styling
- **Custom CSS Variables** for VMP brand colors
- **Google Fonts** (Playfair Display, Raleway, Roboto)
- **Responsive Design** with mobile-first approach

## 📱 Features

- ✅ Responsive design
- ✅ Mobile navigation
- ✅ Luxury branding
- ✅ Image optimization
- ✅ Performance optimized
- ✅ SEO ready
- ✅ Accessibility features
