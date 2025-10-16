# Protonix It - Digital Agency Website

A modern, professional website for Protonix It, a digital services agency based in Sylhet, Bangladesh. The website showcases the company's services, portfolio, and expertise in web development, app development, digital marketing, and UI/UX design.

## 🎨 Design

### Color Scheme
- **Primary**: Electric Blue (#0066FF) - Represents trust, innovation, and professionalism
- **Secondary**: Vibrant Orange (#FF6B35) - Used for CTAs, buttons, and accents
- **Background**: White (#FFFFFF) - Clean, modern, and professional

### Design Philosophy
- Modern and minimal aesthetic
- Responsive and mobile-first design
- User-friendly navigation
- Professional yet approachable tone
- Clean typography with Inter font family

## ✨ Features

- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Multi-page Structure**: Home, About, Services, and Contact pages
- **Service Showcase**: Detailed presentation of all services offered
- **Testimonials Section**: Client feedback and reviews
- **Newsletter Subscription**: Email collection for marketing
- **Contact Form**: Easy way for clients to reach out
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Dark Mode Support**: Automatic theme switching based on user preference

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## 📁 Project Structure

````
protonixit-website/
├── app/
│   ├── about/
│   │   └── page.tsx          # About Us page
│   ├── services/
│   │   └── page.tsx          # Services page
│   ├── contact/
│   │   └── page.tsx          # Contact page
│   ├── layout.tsx            # Root layout with navigation
│   ├── page.tsx              # Home page
│   └── globals.css           # Global styles and theme tokens
├── components/
│   ├── ui/                   # shadcn/ui components
│   ├── navigation.tsx        # Header navigation
│   └── footer.tsx            # Footer component
├── public/
│   └── images/               # Static images
└── README.md
````

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd techbangla-website
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## 📄 Pages Overview

### Home Page (`/`)
- Hero section with CTA
- Services highlights (4 main services)
- Testimonials carousel
- Newsletter subscription
- Statistics showcase

### About Page (`/about`)
- Company mission and vision
- Team introduction
- Core values
- Company story

### Services Page (`/services`)
- Detailed service descriptions
- Web Development
- App Development
- Digital Marketing
- UI/UX Design

### Contact Page (`/contact`)
- Contact form
- Company address: Nobopuspo 124, Jotorpur, Sylhet
- Email and phone information
- Social media links

## 🎯 Target Audience

- Startups looking for digital presence
- Small and Medium Businesses (SMBs)
- Organizations in Bangladesh
- Companies seeking modern digital solutions

## 📧 Contact Information

**TechBangla**
- **Address**: Nobopuspo 124, Jotorpur, Sylhet, Bangladesh
- **Email**: info@protonixit.com
- **Phone**: +880 1XXX-XXXXXX

## 🤝 Contributing

This is a proprietary project for TechBangla. For any suggestions or issues, please contact the development team.

## 📝 License

© 2025 Protonix It All rights reserved.

## 🔧 Customization

### Updating Colors
Edit the design tokens in `app/globals.css`:
\`\`\`css
--primary: 221 100% 50%;        /* Electric Blue */
--secondary: 18 100% 60%;       /* Vibrant Orange */
\`\`\`

### Adding New Pages
Create a new folder in the `app/` directory with a `page.tsx` file.

### Modifying Services
Update the services array in `app/services/page.tsx`.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Deployment

This project is optimized for deployment on [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy with one click

---

Built with ❤️ by Protonix It Team