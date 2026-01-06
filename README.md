# Portfolio Website

A modern, clean portfolio website built with React, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Clean and modern UI design
- 🌙 Dark mode support
- 📱 Fully responsive
- ✨ Smooth animations with Framer Motion
- 🚀 Fast and optimized
- 🎯 Easy to customize

## Tech Stack

- **React** - UI library
- **React Router** - Routing
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **Vite** - Build tool

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Project Structure

```
src/
├── app/              # Main app files and routing
├── assets/           # Images, icons, and resume
├── components/       # Reusable components
├── data/             # Data files (projects, skills, etc.)
├── hooks/            # Custom React hooks
├── pages/            # Page components
├── styles/           # Animation styles
└── utils/            # Utility functions
```

## Customization

### Update Your Information

1. **Personal Info**: Edit `src/data/socials.js` and `src/utils/constants.js`
2. **Projects**: Update `src/data/projects.js` with your projects
3. **Skills**: Modify `src/data/skills.js` with your skills
4. **About Section**: Edit `src/pages/About/About.jsx` and `src/pages/About/Timeline.jsx`
5. **Hero Section**: Update `src/pages/Home/Hero.jsx` with your name and description

### Styling

- Colors can be customized in `tailwind.config.js`
- Global styles are in `src/index.css`
- Component styles use Tailwind utility classes

### Adding Images

Place your images in:
- `src/assets/images/` - Project images and photos
- `src/assets/icons/` - Custom icons
- `src/assets/resume/` - Resume PDF

## License

MIT

