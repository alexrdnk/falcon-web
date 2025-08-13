# Falcon Web - React Website

A modern React website built with Vite, featuring multiple pages including Home, Blog, Portfolio, Team, and Contact sections.

## 🚀 Features

- **Modern React 19** with latest features
- **Vite** for fast development and building
- **React Router** for client-side routing
- **Sass** for advanced styling
- **Responsive Design** for all devices
- **SVG Support** with vite-plugin-svgr

## 📁 Project Structure

```
src/
├── app/                 # Main app components
│   ├── pages/          # Page components
│   └── App.jsx         # Main app component
├── components/         # Reusable components
│   ├── HomePage/       # Home page components
│   ├── BlogPage/       # Blog page components
│   ├── PortfolioPage/  # Portfolio page components
│   ├── TeamPage/       # Team page components
│   ├── ContactPage/    # Contact page components
│   └── Layouts/        # Header and Footer
└── main.jsx           # App entry point
```

## 🛠️ Local Development

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🚀 Deployment

This project is configured for deployment on Railway.

### Railway Deployment

1. Connect your GitHub repository to Railway
2. Railway will automatically detect the build configuration
3. The app will be built and deployed automatically on each push

### Environment Variables

If you need to add environment variables for production, you can set them in your Railway dashboard.

## 📝 License

This project is private and proprietary.

## 🤝 Contributing

This is a private project. Please contact the project maintainers for contribution guidelines.
