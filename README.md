# My Portfolio

A modern, responsive portfolio website built with Next.js 15, featuring an animated aurora background and elegant design.

## 🚀 Live Demo

[View Live Portfolio](http://localhost:3001) <!-- Replace with your deployed URL -->

## ✨ Features

- **Aurora Background Animation** - Beautiful animated gradient background using custom CSS
- **Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **Typewriter Effect** - Dynamic text animation on the homepage
- **Glowing Image Border** - Animated profile picture with glow effects
- **Modern UI Components** - Built with shadcn/ui and Radix UI
- **Fast Performance** - Powered by Next.js 15 with Turbopack
- **Accessible** - WCAG compliant navigation and components

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) with App Router
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** Custom CSS animations + tw-animate-css
- **Build Tool:** [Turbopack](https://turbo.build/pack)

## 📁 Project Structure

```
my-portfolio/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css         # Global styles & animations
│   │   ├── layout.tsx          # Root layout with aurora background
│   │   ├── page.tsx            # Homepage
│   │   ├── projects/           # Projects page
│   │   │   └── page.tsx
│   │   └── home/               # Alternative home route
│   │       └── page.tsx
│   ├── components/             # React components
│   │   ├── homepage.tsx        # Main homepage component
│   │   ├── navbar-5.tsx        # Navigation component
│   │   └── ui/                 # shadcn/ui components
│   │       ├── aurora-background.tsx
│   │       ├── typewriter-text.tsx
│   │       ├── button.tsx
│   │       ├── navigation-menu.tsx
│   │       └── ...
│   └── lib/
│       └── utils.ts            # Utility functions
├── public/
│   └── Images/
│       └── myphoto.jpg         # Profile picture
├── components.json             # shadcn/ui configuration
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Aurora Background Colors

Edit the CSS variables in `src/app/globals.css`:

```css
:root {
  --blue-500: #6b7280;    /* Primary aurora color */
  --indigo-300: #9ca3af;  /* Secondary aurora color */
  --blue-300: #d1d5db;    /* Tertiary aurora color */
  /* ... */
}
```

### Profile Image

Replace `public/Images/myphoto.jpg` with your own profile picture.

### Content

Update the content in `src/components/homepage.tsx`:

```tsx
// Update your name, bio, and links
<Typewriter text={["Hello! I'm Your Name"]} />
<p>Your bio and description...</p>
```

### Navigation

Modify navigation links in `src/components/navbar-5.tsx`.

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px  
- **Desktop:** > 1024px

## 🎯 Pages

- **Homepage (/)** - Main landing page with intro and call-to-action
- **Projects (/projects)** - Showcase of your work and projects
- **Home (/home)** - Alternative home route

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically

### Netlify

1. Build the project: `npm run build`
2. Deploy the `out` folder to [Netlify](https://netlify.com)

### Traditional Hosting

1. Build the project: `npm run build`
2. Upload the generated files to your hosting provider

## 🎨 Design System

### Colors

- **Primary:** Gray scale for sophisticated look
- **Aurora:** Custom gradient animations
- **Text:** Gray-900 for headings, Gray-600 for body

### Typography

- **Headings:** Geist Sans font family
- **Body:** System font stack with fallbacks
- **Sizes:** Responsive typography using Tailwind CSS

### Components

All UI components follow the shadcn/ui design system for consistency.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 About

**Gimhani Samanalee**
- Final-year Software Engineering student at NSBM Green University
- Passionate about web development and mobile app development
- Seeking internship opportunities in software development

## 📞 Contact

- **Portfolio:** [Your Website](https://your-website.com)
- **Email:** your.email@example.com
- **LinkedIn:** [Your LinkedIn](https://linkedin.com/in/yourprofile)
- **GitHub:** [Your GitHub](https://github.com/yourusername)

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Next.js](https://nextjs.org/) for the amazing React framework
- [Vercel](https://vercel.com/) for hosting and deployment

---

⭐ Star this repository if you found it helpful!
