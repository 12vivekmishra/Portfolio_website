// client/data/projectsData.ts
export interface Project {
  title: string;
  demoVideo?: string;
  website?: string;
  thumbnail?: string;
}

export interface Category {
  category: string;
  slug: string;
  description: string;
  projects: Project[];
}

/**
 * Edit this file to add / remove projects and change demo paths.
 * Demo/thumbnail paths are relative to public/ (e.g. /projects/web-development/demo.mp4)
 */
const projectsData: Category[] = [
  {
    category: "Web Development",
    slug: "web-development",
    description: "Responsive websites, e-commerce, and full-stack builds.",
    projects: [
      {
        title: "Ecom Store",
        demoVideo: "/projects/web-development/ecom-demo.mp4",
        website: "https://your-ecom-demo.com",
        thumbnail: "/projects/web-development/ecom.jpg",
      },
      {
        title: "Portfolio Site",
        demoVideo: "/projects/web-development/portfolio-demo.mp4",
        website: "https://your-portfolio-demo.com",
        thumbnail: "/projects/web-development/portfolio.jpg",
      },
    ],
  },
  {
    category: "Video Production",
    slug: "video-production",
    description: "Short films, promos, and social media reels.",
    projects: [
      {
        title: "Promo Reel",
        demoVideo: "/projects/video-production/promo-demo.mp4",
        website: "https://vimeo.com/yourpromo",
        thumbnail: "/projects/video-production/promo.jpg",
      },
    ],
  },
  {
    category: "Creative Design",
    slug: "creative-design",
    description: "Brand identity, graphics and visual storytelling.",
    projects: [
      {
        title: "Brand Kit",
        demoVideo: "/projects/creative-design/brand-demo.mp4",
        website: "https://yourbrand-demo.com",
        thumbnail: "/projects/creative-design/brand.jpg",
      },
    ],
  },
  {
    category: "UI/UX",
    slug: "ui-ux",
    description: "User flows, prototypes, and clean interfaces.",
    projects: [
      {
        title: "SaaS Dashboard",
        demoVideo: "/projects/ui-ux/dashboard-demo.mp4",
        website: "https://dashboard-demo.com",
        thumbnail: "/projects/ui-ux/dashboard.jpg",
      },
    ],
  },
];

export default projectsData;
