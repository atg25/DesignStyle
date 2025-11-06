# MCM Design Hub 🎨

> Educational platform for Mid-Century Modern design principles, iconic pieces, and interactive tools.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm start
```

The site will be available at `http://localhost:8080`

## 📝 Available Scripts

- `npm start` - Start development server with live reload
- `npm run build` - Build for production
- `npm run serve` - Serve the built site locally
- `npm run clean` - Remove build directory

## 🌐 Deployment

### Automatic Deployment (GitHub Actions)

The site automatically deploys to GitHub Pages when you push to the `main` branch.

**Setup:**
1. Go to your repository Settings → Pages
2. Under "Build and deployment", select "GitHub Actions" as the source
3. Push to `main` branch - deployment happens automatically!

Your site will be live at: `https://[username].github.io/[repository]/`

### Manual Deployment

```bash
# Build and deploy manually
npm run build
npm run deploy
```

## 📂 Project Structure

```
DesignStyle/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── src/
│   ├── _data/
│   │   └── site.json          # Site configuration
│   ├── _includes/
│   │   └── components/        # Reusable components
│   │       ├── button.njk
│   │       ├── card.njk
│   │       └── icon.njk
│   ├── _layouts/
│   │   └── base.njk          # Base layout template
│   ├── assets/
│   │   ├── css/
│   │   │   ├── main.css      # Global styles
│   │   │   └── pages/
│   │   │       └── landing.css
│   │   ├── js/
│   │   │   ├── main.js       # Global scripts
│   │   │   └── pages/
│   │   │       └── landing.js
│   │   └── images/           # Images and assets
│   └── index.njk             # Landing page
├── .eleventy.js              # Eleventy configuration
├── package.json
└── README.md
```

## 🎨 Features

### Landing Page
- **Split Hero Layout** - Iconic MCM imagery with clear CTAs
- **Value Pillars** - Learn, Explore, Practice pathways
- **Interactive Color Generator** - 6 preset palettes, click-to-copy
- **Newsletter Signup** - Email capture with validation
- **Fully Responsive** - Mobile, tablet, desktop optimized
- **Accessibility** - WCAG 2.1 AA compliant

### Design System
- **162 Design Tokens** - Colors, typography, spacing
- **Reusable Components** - Buttons, cards, icons
- **Consistent Styling** - BEM naming, ITCSS architecture

## 🛠️ Technology Stack

- **[Eleventy](https://www.11ty.dev/)** - Static site generator
- **[Nunjucks](https://mozilla.github.io/nunjucks/)** - Templating engine
- **Vanilla CSS** - No frameworks, custom design system
- **Vanilla JavaScript** - Modern ES6+, no dependencies

## ♿ Accessibility

- Semantic HTML throughout
- ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly
- Color contrast meets WCAG 2.1 AA

## 🚀 Performance

- Lighthouse Score: 95+ (all categories)
- Optimized images with lazy loading
- Minimal JavaScript (3KB minified)
- CSS organized for performance
- Static site = lightning fast

## 📖 Documentation

See the `/docs` folder for detailed documentation:
- `landing-page.md` - Complete landing page implementation guide
- `landing-page-summary.md` - Quick reference

## 🤝 Contributing

This is an educational project. Feel free to fork and customize!

## 📄 License

MIT License - See LICENSE file for details

## 🎯 Roadmap

- [ ] Learn section (color theory, typography, principles)
- [ ] Explore gallery (furniture collection, designer profiles)
- [ ] Practice tools (full color generator, typography playground)
- [ ] Search functionality
- [ ] User authentication
- [ ] Content management

---

**Built with ❤️ for Mid-Century Modern design enthusiasts**
