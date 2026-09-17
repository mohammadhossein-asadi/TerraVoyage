<div align="center">

# TerraVoyage

### Interactive Travel & Geography Exploration Platform

A visually immersive travel platform built with Next.js 16, Leaflet maps, and Framer Motion — featuring interactive world maps, destination guides, trip planning tools, and cinematic location transitions.

[![Next.js 16](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript_5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Leaflet](https://img.shields.io/badge/Leaflet_1.9-199900?style=for-the-badge&logo=leaflet&logoColor=white)](https://leafletjs.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion_12-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Tailwind CSS 4](https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

</div>

---

## Overview

TerraVoyage is an interactive travel and geography exploration platform that combines beautiful map visualizations with rich destination content. Built with Leaflet for performant map rendering and Framer Motion for cinematic transitions, it offers an engaging way to discover destinations, plan trips, and explore the world.

---

## Features

| Feature | Description |
|:--------|:------------|
| **Interactive World Map** | Leaflet-powered map with custom tile layers, markers, and overlays |
| **Destination Guides** | Rich content pages for 200+ destinations with photos, tips, and highlights |
| **Trip Planner** | Drag-and-drop itinerary builder with day-by-day scheduling |
| **Cinematic Transitions** | Framer Motion page transitions and map fly-to animations |
| **Layer Toggles** | Toggle weather, terrain, borders, POIs, and custom overlays |
| **Search & Filter** | Fuzzy search with filters by region, climate, activity, budget |
| **Offline Maps** | Service worker caching for offline map tile access |
| **Dark/Light Theme** | Map style switching with theme synchronization |
| **Responsive Design** | Mobile-first with touch-optimized map controls |
| **Multi-Language** | i18n support for EN, FA, ES, FR, DE (extensible) |

---

## Tech Stack

| Layer | Technologies |
|:------|:-------------|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript 5 |
| **Maps** | Leaflet 1.9, React Leaflet 5 |
| **Animation** | Framer Motion 12 |
| **Styling** | Tailwind CSS 4 |
| **Theming** | next-themes 0.4 |
| **Icons** | Lucide React |
| **State** | Zustand 5 |
| **Type Checking** | TypeScript strict mode |

---

## Project Structure

```
terravoyage/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── destinations/       # Destination pages
│   │   ├── planner/            # Trip planner
│   │   ├── map/                # Map view
│   │   ├── api/                # API routes (geocoding, weather)
│   │   └── layout.tsx          # Root layout with providers
│   ├── components/
│   │   ├── map/                # Map, markers, layers, controls
│   │   ├── destination/        # Destination cards, galleries
│   │   ├── planner/            # Itinerary builder components
│   │   ├── ui/                 # shadcn/ui primitives
│   │   └── layout/             # Header, sidebar, footer
│   ├── data/                   # Destination data, GeoJSON
│   ├── lib/                    # Map utilities, geocoding, formatting
│   ├── hooks/                  # Custom hooks (useMap, useGeolocation)
│   ├── store/                  # Zustand stores (map, planner, filters)
│   ├── types/                  # TypeScript interfaces
│   └── styles/                 # Global styles, map styles
├── public/                     # Map tiles, images, fonts
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## Quick Start

### Prerequisites

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0

### Installation

```bash
git clone https://github.com/mohammadhossein-asadi/TerraVoyage.git
cd TerraVoyage
npm install
```

### Environment Configuration

Create a `.env.local` file:

```env
# Optional: Map tile provider API keys
MAPBOX_TOKEN="pk.xxx"
OPENWEATHER_API_KEY="xxx"
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:3000`.

### Production Build

```bash
npm run build
npm run start
```

### Type Checking

```bash
npm run type-check
```

---

## Key Architecture Decisions

### Leaflet for Performant Maps
Leaflet's lightweight core (42 KB) and Canvas/WebGL rendering options provide smooth 60fps map interactions even with thousands of markers. React Leaflet bridges Leaflet's imperative API with React's declarative model.

### Framer Motion for Cinematic Map Transitions
Page transitions and map camera flights use Framer Motion's `AnimatePresence` and layout animations for smooth, interruption-safe transitions between destinations.

### Data-Driven Destinations
Destination data lives in `src/data/` as typed TypeScript/JSON — coordinates, metadata, content blocks, and media references are version-controlled and easily extensible.

### Offline-First Map Tiles
Service worker caches map tiles and destination content for offline browsing. `Workbox` strategies handle tile expiration and background updates.

### Accessible Map Interactions
Keyboard navigation, screen reader announcements for map events, high-contrast map styles, and reduced motion support ensure inclusive access.

---

## Scripts

| Command | Description |
|:--------|:------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run start` | Run production server |
| `npm run lint` | ESLint |
| `npm run type-check` | TypeScript type checking |

---

## Roadmap

- [ ] 3D globe view (CesiumJS integration)
- [ ] AR-enhanced destination preview
- [ ] Collaborative trip planning (real-time)
- [ ] AI-powered itinerary generation
- [ ] Travel community features (reviews, photos)
- [ ] Mobile app (React Native + Expo)
- [ ] Integration with booking APIs (Skyscanner, Booking.com)

---

## License

This project is licensed under the [MIT License](LICENSE).

---

<div align="center">

**Mohammadhossein Asadi** — Frontend & Full-Stack Engineer

[![GitHub](https://img.shields.io/badge/GitHub-mohammadhossein--asadi-0a0a0a?style=flat-square&logo=github)](https://github.com/mohammadhossein-asadi)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-mohammadhossein--asadi-0a66c2?style=flat-square&logo=linkedin)](https://linkedin.com/in/mohammadhossein-asadi)

</div>