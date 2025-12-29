# Professional Developer Portfolio

A modern, highly responsive, and strictly professional developer portfolio built with **React**, **Tailwind CSS**, and **Framer Motion**. Designed for performance, accessibility, and ease of customization.

[![Deploy to GitHub Pages](https://github.com/SamuelWakoli/samuelwakoli.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/SamuelWakoli/samuelwakoli.github.io/actions/workflows/deploy.yml)

## 🚀 Key Features

- **Modern "Floating Card" Design**: A cohesive glassmorphism aesthetic with elevated cards and detached sidebars.
- **Responsive Navigation**:
  - **Desktop**: Persistent, floating sidebar with scroll spy.
  - **Mobile**: Smooth slide-out drawer with gesture support.
- **JSON-Driven Content**: All personal data (profile, skills, experience) is managed via a single `src/config/profile.json` file.
- **High Performance**: Built on Vite for lightning-fast HMR and optimized production builds.
- **Automated Deployment**: Includes GitHub Actions workflow for auto-deploying to GitHub Pages.

## 🛠️ Technology Stack

- **Core**: React 18, Vite
- **Styling**: Tailwind CSS v4 (Vanilla)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter & Outfit (via Fontsource)

## 📂 Project Structure

```bash
src/
├── components/         # Reusable UI components
│   ├── bento/         # Grid items (SocialCard, SkillsGrid)
│   ├── Card.jsx       # Base "Floating Card" wrapper
│   └── Sidebar.jsx    # Navigation logic (Desktop & Mobile)
├── config/
│   └── profile.json   # SINGLE SOURCE OF TRUTH for content
├── assets/            # Static assets
└── App.jsx            # Main layout and composition
```

## ⚡ Quick Start

1. **Clone the repository**:

   ```bash
   git clone https://github.com/SamuelWakoli/samuelwakoli.github.io.git
   cd samuelwakoli.github.io
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start development server**:

   ```bash
   npm run dev
   ```

## 🎨 Customization

To personalize this portfolio, edit **one file**:

- **`src/config/profile.json`**

Modify this file to update:

- Name, Role, and Bio
- Contact Links & Social Profiles
- Technical Skills (grouped by category)
- Work Experience & Education
- Certifications & Awards

## 🚀 Deployment

This project is configured for **GitHub Pages**.

1. Push changes to `main`.
2. The GitHub Action (`.github/workflows/deploy.yml`) will automatically build and deploy the site.
3. The site will be live at `https://samuelwakoli.github.io`.

> **Note**: Ensure the repository is named `username.github.io` for root domain hosting.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
