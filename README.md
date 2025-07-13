# Dhanunjaya Andavarapu Portfolio Website

A modern, animated, and responsive portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Modern Design**: Clean, professional design with a "Bolt" theme reflecting speed and innovation
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Responsive Layout**: Optimized for all devices from mobile to desktop
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Performance Optimized**: Fast loading times and smooth scrolling
- **Accessible**: Built with accessibility best practices

## Sections

- **Hero**: Animated introduction with profile image and call-to-action buttons
- **About**: Personal bio with achievements and key stats
- **Skills**: Categorized technical skills with animated progress bars
- **Projects**: Featured projects with hover effects and tech stack display
- **Experience**: Professional timeline with achievements
- **Testimonials**: Client and colleague feedback
- **Blog**: Latest articles and insights (optional)
- **Contact**: Contact form with validation and social links
- **Footer**: Additional links and scroll-to-top functionality

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth transitions
- **Build Tool**: Vite for fast development and building
- **Icons**: Lucide React for consistent iconography

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

## Env file
1. Use below Command to Create A '.env' file
   ```bash
   copy .env.example .env
   ```
2. Update `.env` with the actual values:
   PORTFOLIO_EMAILJS_SERVICE_ID=service_id
   PORTFOLIO_EMAILJS_TEMPLATE_ID=template_id
   PORTFOLIO_EMAILJS_PUBLIC_KEY=public_key


### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Customization

### Personal Information

Update the data in `src/data/portfolio.ts` with your own:
- Skills and proficiency levels
- Project details and images
- Work experience and achievements
- Testimonials
- Blog posts
- Contact information

### Styling

The design system is configured in `tailwind.config.js`:
- Color palette with primary, secondary, and accent colors
- Typography and spacing system
- Custom animations and transitions

### Images

- Replace profile images and project screenshots
- All placeholder images use Pexels URLs
- Update the favicon and any branding elements

## Deployment

This project can be deployed to any static hosting service:

- **Netlify**: Connect your GitHub repository for automatic deployments
- **Vercel**: Deploy with zero configuration
- **GitHub Pages**: Use GitHub Actions for deployment
- **AWS S3**: Configure as a static website

## Performance Features

- **Image Optimization**: Properly sized and compressed images
- **Code Splitting**: Automatic splitting for optimal loading
- **Prefetching**: Critical resources are preloaded
- **Smooth Scrolling**: Optimized scroll behavior and animations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ⚡ by the Bolt team