# Project Name

Merkle Gaming - A web application to list games built using Nuxt 4

# Overview

This platform allows users to explore games using the provided REST API endpoints

# Features

- Games Listing Page
  - Search games by name
  - Filter games by genre
  - Display games by rating and date
  - Display 15 games in cards in grid layout
- Game Detail Page
  - Display game details by selected route
  - Display banner image from cover image
  - Display platforms and genres
  - Display game description
  - Display game ratings
  - Display reviews
  - Display back button to games listing page
- Dark and Light Mode
- Responsive Design (Mobile and Desktop only)
- SEO Optimized
- Lazy Loading
- Optimized Images

# Design patterns

We are using Atomic Design patterns in this project for component architecture.

- Atoms - Contains html tags such as Icon.
- Molecules - Contains group of html tags such as Loader, Star Rating.
- Organisms - It is a complex component which contains group of molecules such as Header, Footer, Action Section, Game Card, Game Listing, Hero Section.
- Templates - It is a template/layout of a page which contains group of organisms such as Game Listing Template, Game Detail Template.
- Pages - These are the exact pages/views which contains a template such as Games Listing Page, Game Detail Page.

# Tech Stack

- Vue 3
- Nuxt v4
- TypeScript
- Composition API
- SCSS
- Pinia
- Vitest

# Folder Structure

```bash
client/
├── app/
│   ├── assets/
│   │   ├── images/
│   │   └── styles/
│   ├── components/
│   │   ├── atoms/
│   │   ├── molecules/
│   │   ├── organisms/
│   │   └── templates/
│   ├── composables/
│   ├── layouts/
│   ├── pages/
│   ├── services/
│   ├── stores/
│   ├── types/
│   └── utils/
│   └── app.vue
├── tests/
├── .env
├── nuxt.config.ts
├── package.json
├── vitest.config.ts
└── README.md
```

# Installation

Clone repository:

```bash
git clone <https://github.com/trishantkumar/merkle-games-api.git>
```

## Install dependecies

Make sure to install dependencies:

```bash
# npm
npm install
```

## Environment Variables

Create `.env` file:

Copy data from `.env.example` file:

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build
```

Locally preview production build:

```bash
# npm
npm run preview
```

## Test cases

Run the test cases:

```bash
# npm
npm run test
```

## Performance Optimizations

- Lazy loading of components and routes.
- Code splitting for better bundle size.
- Image optimization using Nuxt Image module and using webp format for images.
- Preloading assets in nuxt config file such as fonts.
- Using semantic html tags such Header, Footer, Section, Article.
- For SEO using SSR mode.

## Accessibility

- Using semantic html tags such Header, Footer, Section, Article.
- Using proper ARIA labels for accessibility.
- Using proper contrast colors for better readability.

## Future Improvements

- Improve responsive design for tablets.
- Add more test cases.
- Add E2E testing using Playwright.
- Add loading skeleton for better user experience.
- Add robust error handling and error states.
- Add all tags in Atoms such as button and select.
- Add virtual scrolling for better performance.

## Author

Trishant Kumar
[trishantshishodia@gmail.com](trishantshishodia@gmail.com)
