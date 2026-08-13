# Churchmind - Static Portfolio Website

A professional, responsive personal portfolio website built with pure HTML, CSS, and JavaScript. No build process needed - just open and use!

## Features

✨ **Fully Responsive Design** - Works perfectly on all devices (desktop, tablet, mobile)
🎨 **Modern UI** - Professional navy and gold color scheme with smooth animations
📱 **Mobile Optimized** - Hamburger menu and touch-friendly navigation
🌙 **Dark Mode Support** - Automatic dark mode detection and support
⚡ **No Dependencies** - Pure HTML, CSS, and JavaScript - no frameworks needed
🚀 **Fast Loading** - Lightweight and optimized for performance

## Sections Included

- **Hero** - Eye-catching introduction with CTA buttons
- **About** - Personal background and summary
- **Skills** - Technical, creative, and professional skills with progress bars
- **Experience** - Professional timeline
- **Projects** - Featured portfolio projects
- **Services** - Services offered
- **Certifications** - Training and certifications
- **Contact** - Contact form and information

## How to Use

### Local Development

1. Extract the files to your desired location
2. Open `index.html` in your web browser
3. That's it! The website is ready to use

### To Edit Content

Edit the `index.html` file to customize:
- Profile information (name, role, email, phone)
- About section text
- Skills and proficiency levels
- Experience entries
- Projects and project descriptions
- Services offered
- Certifications
- Contact information

### To Customize Styling

Edit `styles.css` to modify:
- Colors (change the CSS variables at the top)
- Fonts and typography
- Layout and spacing
- Animations and effects
- Responsive breakpoints

### To Add Interactivity

Edit `script.js` to:
- Modify form handling
- Add custom animations
- Enhance interactions
- Connect to backend services

## Project Structure

```
static-portfolio/
├── index.html       # Main HTML file with all content
├── styles.css       # Styling and responsive design
├── script.js        # JavaScript for interactivity
└── README.md        # This file
```

## Customization Guide

### Changing Colors

Open `styles.css` and modify the CSS variables at the top:

```css
:root {
    --primary: #1e40af;           /* Main blue color */
    --primary-light: #3b82f6;     /* Light blue */
    --secondary: #fbbf24;         /* Gold/yellow color */
    --secondary-light: #fcd34d;   /* Light gold */
    --dark: #0f172a;              /* Dark background */
    /* ... more colors */
}
```

### Adding New Projects

In `index.html`, find the Projects section and add a new project card:

```html
<div class="project-card">
    <img src="project-image-url" alt="Project Name">
    <div class="project-info">
        <h3>Project Name</h3>
        <p>Project description...</p>
        <div class="project-tags">
            <span class="tag">Tag1</span>
            <span class="tag">Tag2</span>
        </div>
    </div>
</div>
```

### Updating Skills

Find the Skills section and modify the skill entries:

```html
<div class="skill">
    <div class="skill-header">
        <span>Skill Name</span>
        <span class="level">85%</span>
    </div>
    <div class="progress-bar">
        <div class="progress" style="width: 85%"></div>
    </div>
</div>
```

### Enabling Contact Form

To enable the contact form to actually send emails, you have a few options:

1. **Using Formspree** (Recommended):
   - Go to https://formspree.io
   - Create a new form and get your form URL
   - Replace `https://formspree.io/f/xyzabc` in `script.js` with your form URL

2. **Using Netlify Forms**:
   - Deploy to Netlify and enable forms
   - Add `netlify` attribute to the form

3. **Backend Email Service**:
   - Connect to your own backend API that sends emails

## Browser Support

- Chrome/Edge: Latest
- Firefox: Latest
- Safari: Latest
- Mobile browsers: Latest versions

## Performance

- Optimized for Core Web Vitals
- Lightweight CSS and JavaScript
- Fast image loading
- Smooth animations and transitions

## Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Color contrast compliance
- Keyboard navigation support
- Mobile-friendly

## Tips for Best Results

1. **Images**: Keep profile images around 400x400px and project images around 600x400px
2. **Text**: Keep descriptions concise and impactful
3. **Links**: Update all social media and external links
4. **SEO**: Update the title and meta description for search engines
5. **Domain**: Deploy to a custom domain for professionalism

## Deployment Options

### Option 1: GitHub Pages (Free)
1. Push files to a GitHub repository
2. Enable GitHub Pages in repository settings
3. Your site will be live at `yourusername.github.io/repo-name`

### Option 2: Netlify (Free)
1. Drag and drop your folder to https://netlify.com
2. Get a live URL instantly
3. Optional: Connect your own domain

### Option 3: Vercel (Free)
1. Import your project from GitHub
2. Deploy with one click
3. Automatic HTTPS and CDN

### Option 4: Your Own Hosting
1. Upload files via FTP to your hosting provider
2. Point your domain to your hosting
3. Your site is live!

## Support

For questions or issues with the code, refer to the comments in each file:
- `index.html` - HTML structure and content
- `styles.css` - CSS styling and layout
- `script.js` - JavaScript functionality

## License

This portfolio template is free to use and modify for your personal use.

---

**Last Updated**: 2026-08-12
**Created by**: AI Assistant
