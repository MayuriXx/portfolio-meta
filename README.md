# Portfolio Meta - Same CV, Four Technologies

A portfolio project showcasing the same CV implemented across four different frameworks:

- **Flutter Web** - Native canvas rendering with Riverpod
- **Vue.js** - Lightweight, modern frontend with Composition API
- **React** - Industry-standard JavaScript framework
- **Angular** - Enterprise-grade TypeScript framework

## Project Structure

This repository contains the **Vue.js implementation** of the portfolio.

```
src/
├── components/        # Reusable Vue components
│   ├── AppHeader.vue     # Fixed navigation header
│   ├── HeroSection.vue    # Hero banner with intro
│   ├── ConceptBand.vue    # Key metrics section
│   ├── VersionsGrid.vue   # Grid of all implementations
│   ├── VersionCard.vue    # Individual tech card
│   ├── PhilosophySection.vue  # Project principles
│   ├── ContactStrip.vue   # CTA section
│   └── AppFooter.vue      # Footer with links
├── assets/
│   └── styles/
│       └── tokens.css     # Design tokens (shared across all versions)
├── data/
│   └── versions.js        # Portfolio version configurations
├── main.js                # Vue app entry point
├── App.vue                # Root component
└── style.css              # Global styles
```

## Key Principles

### 1. Single Source of Truth

All four implementations read from the same `cv.json` file. One update synchronizes across all platforms.

### 2. Shared Design Tokens

Colors, typography, and spacing are defined once in `tokens.css` and translated into each framework's approach.

### 3. Independent Deployment

Each version runs on its own subdomain with zero coupling between implementations.

### 4. Open Source

All code is documented and available on GitHub. The code speaks as much as the CV.

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Technology Stack

- **Vue 3** - Reactive component framework
- **Vite** - Lightning-fast build tool
- **Composition API** - Modern Vue development pattern
- **CSS** - Custom properties and semantic naming

## Design System

The project uses a comprehensive design token system:

- **Colors** - Green/natural palette (`c1`-`c5`)
- **Typography** - Display (Syne) and body (Instrument Sans)
- **Spacing** - Consistent scale (xs, sm, md, lg, xl, 2xl)
- **Radius** - Rounded corner scale (sm, md, lg, full)

## Component Philosophy

Each component follows these principles:

- **Single Responsibility** - One clear purpose
- **Reusability** - Composable and portable
- **Styling** - Scoped CSS for isolation
- **Statelessness** - Most components are stateless/dumb

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES2020+ JavaScript support required

## License

This portfolio is open source. All implementations are available on GitHub.

## Author

Evan Martho - Full Stack Mobile Developer

- Email: <martho.evan@gmail.com>
- LinkedIn: [Evan Martho](https://www.linkedin.com/in/evan-martho/)
- GitHub: [@MayuriXx](https://github.com/MayuriXx)
