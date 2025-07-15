# My Portfolio 🖊️

A modern, responsive portfolio website built with Next.js 15, featuring an animated aurora background and elegant design.

## 🚀 Live Demo

[View Live Portfolio](https://gimhanisamanalee.netlify.app/)

## ✨ Features

- **Aurora Background Animation** - Beautiful animated gradient background using custom CSS
- **Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **Typewriter Effect** - Dynamic text animation on the homepage with customizable speed and loop options
- **Glowing Image Border** - Animated profile picture with glow effects and hover interactions
- **Modern UI Components** - Built with shadcn/ui and Radix UI
- **Fast Performance** - Powered by Next.js 15 with Turbopack
- **Accessible** - WCAG compliant navigation and components
- **Contact Form Integration** - EmailJS integration for seamless contact form submissions
- **Mobile-First Navigation** - Responsive navigation with mobile sheet component
- **Project Showcase** - Dedicated projects page with detailed project descriptions and GitHub links
- **Professional Portfolio Layout** - Clean, modern design perfect for showcasing development work

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) with App Router
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** Custom CSS animations + tw-animate-css
- **Build Tool:** [Turbopack](https://turbo.build/pack)
- **Email Service:** [EmailJS](https://www.emailjs.com/) for contact form functionality
- **Form Handling:** React refs and EmailJS integration for seamless form submissions

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
│   │   ├── contact/            # Contact page with EmailJS integration
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
│   │       ├── sheet.tsx
│   │       ├── accordion.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
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
  --blue-500: #6b7280;    
  --indigo-300: #9ca3af;  
  --blue-300: #d1d5db;    
  
}
```

### Profile Image

Replace `public/Images/myphoto.jpg` with your own profile picture.

### Content

Update the content in `src/components/homepage.tsx`:

```tsx

<Typewriter text={["Hello! I'm Your Name"]} />
<p>Your bio and description...</p>
```

### Contact Form Configuration

To set up the contact form with EmailJS:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Update the service configuration in `src/app/contact/page.tsx`:

```tsx
emailjs.sendForm(
  "your_service_id",     
  "your_template_id",    
  form.current!,
  "your_public_key"      
)
```

### Navigation

Modify navigation links in `src/components/navbar-5.tsx`.

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px  
- **Desktop:** > 1024px

## 🎯 Pages

- **Homepage (/)** - Main landing page with intro and call-to-action buttons
- **Projects (/projects)** - Showcase of development projects including:
  - Jewelify Web Application (PHP/HTML/CSS/JavaScript)
  - Food Inspector Web Application (C#/Windows Forms/SQL Server)  
  - Medicine Delivery Mobile App (Flutter/Dart/Firebase)
  - Movie Discovery Mobile App (React Native/TypeScript/TMDB API)
- **Contact (/contact)** - Contact form with EmailJS integration for direct messaging
- **Home (/home)** - Alternative home route with same homepage content

## 📧 Contact Form Features

The portfolio includes a fully functional contact form with the following features:

- **EmailJS Integration** - Direct email sending without backend server
- **Form Validation** - Required field validation for name, email, and message
- **Responsive Design** - Mobile-friendly form layout
- **Success/Error Handling** - User feedback on form submission
- **Professional Styling** - Clean, modern form design with hover effects

### Setting up EmailJS

1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template
4. Replace the configuration in `src/app/contact/page.tsx`:

```javascript
emailjs.sendForm(
  "your_service_id",     // Your EmailJS service ID
  "your_template_id",    // Your EmailJS template ID  
  form.current!,
  "your_public_key"      // Your EmailJS public key
)
```

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

All UI components follow the shadcn/ui design system for consistency:

- **Button** - Multiple variants (default, outline, ghost, etc.)
- **Navigation Menu** - Responsive navigation with dropdown support  
- **Sheet** - Mobile-friendly sidebar/overlay component
- **Accordion** - Collapsible content sections
- **Input/Label** - Form input components
- **Typewriter** - Custom animated text component
- **Aurora Background** - Custom gradient animation component

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

*Note: The portfolio includes a built-in contact form powered by EmailJS for direct messaging.*

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Next.js](https://nextjs.org/) for the amazing React framework
- [Vercel](https://vercel.com/) for hosting and deployment
- [EmailJS](https://www.emailjs.com/) for seamless contact form integration
- [Radix UI](https://www.radix-ui.com/) for accessible headless UI components
- [Lucide React](https://lucide.dev/) for the beautiful icon library

---

⭐ Star this repository if you found it helpful!
