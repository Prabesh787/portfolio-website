# Quick Setup Guide

## First Time Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   - The app will be available at `http://localhost:5173`

## Customization Checklist

Before deploying, make sure to update:

### 1. Personal Information
- [ ] `src/pages/Home/Hero.jsx` - Update name and description
- [ ] `src/data/socials.js` - Add your social media links
- [ ] `src/utils/constants.js` - Update site name and description

### 2. Projects
- [ ] `src/data/projects.js` - Replace with your actual projects
- [ ] Add project images to `src/assets/images/`

### 3. Skills
- [ ] `src/data/skills.js` - Update with your skills and proficiency levels

### 4. About Section
- [ ] `src/pages/About/About.jsx` - Update personal description
- [ ] `src/pages/About/Timeline.jsx` - Add your work/education timeline

### 5. Contact
- [ ] `src/pages/Contact/ContactForm.jsx` - Update contact information
- [ ] Set up form submission (currently just shows alert)

### 6. Resume
- [ ] Add your resume PDF to `src/assets/resume/`
- [ ] Update resume link in `src/pages/Home/Hero.jsx`

### 7. Meta Information
- [ ] `index.html` - Update page title
- [ ] Add favicon if desired

## Features Included

✅ Responsive navigation with active route highlighting  
✅ Dark mode toggle (persists in localStorage)  
✅ Smooth scroll animations  
✅ Project filtering by category  
✅ Contact form (ready for backend integration)  
✅ Skills showcase with progress bars  
✅ Timeline component for work/education history  
✅ Modern gradient backgrounds and animations  
✅ Fully responsive design  

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## Notes

- All placeholder content is clearly marked and easy to find
- The design uses a clean, modern aesthetic with primary color scheme
- Animations are subtle and enhance UX without being distracting
- All components are reusable and well-structured
- The codebase follows React best practices

