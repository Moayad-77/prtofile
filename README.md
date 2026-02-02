# 💼 Personal Portfolio Website

> Modern, responsive portfolio website for Moayad Hussam Alshawesh - Full-Stack Developer & AI Integration Specialist

[![Live Demo](https://img.shields.io/badge/demo-online-brightgreen)](https://YOUR_USERNAME.github.io)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

---

## 🌟 Overview

A clean, professional portfolio website showcasing my projects, skills, and experience as a Computer Science graduate specializing in AI integration and full-stack development.

**Built with:** Pure HTML, CSS, and JavaScript (No frameworks!)

---

## ✨ Features

- 🎨 **Modern Design**: Clean, professional UI with smooth animations
- 🌓 **Dark Mode**: Toggle between light and dark themes
- 📱 **Fully Responsive**: Works seamlessly on all devices
- ⚡ **Performance**: Fast loading with optimized assets
- ♿ **Accessible**: ARIA labels and semantic HTML
- 🎯 **SEO Optimized**: Meta tags and structured content

---

## 📂 Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # JavaScript functionality
├── moayad.jpg          # Profile picture
└── README.md           # This file
```

---

## 🚀 Quick Start

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git
   cd YOUR_USERNAME.github.io
   ```

2. **Open in browser:**
   ```bash
   # Windows
   start index.html
   
   # macOS
   open index.html
   
   # Linux
   xdg-open index.html
   ```

3. **Or use a local server:**
   ```bash
   # Python
   python -m http.server 8000
   
   # Node.js
   npx http-server
   ```

### GitHub Pages Deployment

1. **Create repository:**
   - Name it: `YOUR_USERNAME.github.io`
   - Make it public

2. **Push your code:**
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

3. **Enable GitHub Pages:**
   - Go to Settings → Pages
   - Source: Deploy from `main` branch
   - Wait 2-3 minutes

4. **Visit your site:**
   - https://YOUR_USERNAME.github.io

---

## 🎨 Customization

### Change Colors

Edit `styles.css` - Look for CSS variables:

```css
:root {
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --text-primary: #1a202c;
  --bg-primary: #ffffff;
  /* ... more variables */
}
```

###Add/Remove Sections

Sections are in `index.html`:
- `#hero` - Hero section
- `#about` - About me
- `#skills` - Skills grid
- `#projects` - Featured projects
- `#contact` - Contact form

### Update Content

1. **Personal Info:** Lines 50-57 in `index.html`
2. **About Text:** Lines 85-92
3. **Skills:** Lines 111-144
4. **Projects:** Lines 151-193

---

## 📊 Technologies Used

| Category | Tools |
|----------|-------|
| **Frontend** | HTML5, CSS3, JavaScript (ES6+) |
| **Fonts** | Google Fonts (Inter) |
| **Icons** | Unicode Emojis + Custom SVGs |
| **Hosting** | GitHub Pages (Free) |
| **Version Control** | Git & GitHub |

---

## 📸 Screenshots

### Light Mode
![Portfolio Light Mode](screenshots/light-mode.png)

### Dark Mode
![Portfolio Dark Mode](screenshots/dark-mode.png)

### Mobile View
![Mobile Responsive](screenshots/mobile.png)

---

## 🔧 Features in Detail

### Dark Mode Toggle
- LocalStorage persistence
- Smooth theme transitions
- System preference detection

### Responsive Navigation
- Mobile hamburger menu
- Smooth scroll to sections
- Active link highlighting

### Contact Form
- Client-side validation
- Clean error messages
- (Connect to Formspree for backend)

### Animations
- Scroll reveal effects
- Hover interactions
- Smooth transitions

---

## 📝 To-Do

- [ ] Add project screenshots
- [ ] Record demo video
- [ ] Connect contact form to Formspree
- [ ] Add blog section
- [ ] Implement project filtering
- [ ] Add analytics (Google Analytics)

---

## 📧 Contact

**Moayad Hussam Alshawesh**
- 📧 Email: moyadalshawesh@gmail.com
- 💼 LinkedIn: [linkedin.com/in/YOUR_PROFILE](https://linkedin.com/in/YOUR_PROFILE)
- 🐙 GitHub: [github.com/YOUR_USERNAME](https://github.com/YOUR_USERNAME)
- 📱 Phone: +962 78 779 133
- 📍 Location: Amman, Jordan

---

## 📄 License

MIT License - See [LICENSE](LICENSE) for details.

---

## 🙏 Credits

- **Design Inspiration**: Modern UI/UX principles
- **Fonts**: [Google Fonts - Inter](https://fonts.google.com/specimen/Inter)
- **Icons**: Custom SVG + Unicode Emojis

---

## ⭐ Star This Repo!

If you found this helpful or want to support my work, please give it a star! ⭐

---

*Built with ❤️ by Moayad Hussam Alshawesh | © 2026*
