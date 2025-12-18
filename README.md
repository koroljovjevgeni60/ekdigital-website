# EK Digital Website

A modern, bilingual (Spanish/English) website for EK DIGITAL, SOCIEDAD LIMITADA - a software development company based in Barcelona, Spain.

## Features

- 🌐 **Bilingual Support**: Full Spanish and English language support using next-intl
- 🎨 **Modern Design**: Dark theme with accent colors and smooth animations
- 📱 **Responsive**: Fully responsive design for all devices
- ⚡ **Fast**: Built with Next.js 14 App Router for optimal performance
- 🔍 **SEO Optimized**: Proper meta tags and semantic HTML

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules
- **i18n**: next-intl
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx    # Main layout with header/footer
│   │   └── page.tsx      # Home page
│   └── globals.css       # Global styles
├── components/
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Site footer
│   ├── Hero.tsx          # Hero section
│   ├── Services.tsx      # Services grid
│   ├── About.tsx         # About section
│   ├── Contact.tsx       # Contact form
│   └── CTA.tsx           # Call to action
├── i18n/
│   ├── request.ts        # i18n configuration
│   └── routing.ts        # Locale routing
└── middleware.ts         # i18n middleware
messages/
├── es.json               # Spanish translations
└── en.json               # English translations
```

## Company Information

- **Company**: EK DIGITAL, SOCIEDAD LIMITADA
- **Website**: ekdigital.eu
- **Address**: 191 Calle Clot, Barcelona, 08027
- **Country**: Spain

## License

Private - All rights reserved © EK DIGITAL


