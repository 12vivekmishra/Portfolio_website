// client/components/ProjectsSection.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

/**
 * Simple helper to create a slug from the category name.
 */
const toSlug = (s: string) =>
  s.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");

export default function ProjectsSection() {
  const projects = [
    {
      category: "Web Development",
      title: "Project One",
      description: "A modern responsive website showcasing our expertise",
      image: "/project1.jpg",
    },
    {
      category: "Video Production",
      title: "Project Two",
      description: "Engaging video content that tells a compelling story",
      image: "/project2.jpg",
    },
    {
      category: "Creative Design",
      title: "Project Three",
      description: "Stunning visual design and branding solutions",
      image: "/project3.jpg",
    },
    {
      category: "UI/UX Development",
      title: "Project Four",
      description: "Full-stack development with optimal performance",
      image: "/project4.png",
    },
  ];

  // derive unique categories (thumbnail from first)
  const categories = Object.values(
    projects.reduce((acc: Record<string, any>, p) => {
      const key = p.category;
      if (!acc[key]) acc[key] = { category: key, thumbnail: p.image };
      return acc;
    }, {})
  );

  const navigate = useNavigate();

  return (
    <section id="projects" className="py-20 px-8 bg-yellow-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black mb-4">Our Work</h2>
          <p className="text-lg text-gray-700">
            Explore our latest projects and success stories
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {categories.map((cat: any, i: number) => (
            // Card wrapper: gives perspective for 3D illusion
            <div
              key={i}
              onClick={() => navigate(`/projects/${toSlug(cat.category)}`)}
              // use group so children can react to hover/focus
              className="cursor-pointer"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  navigate(`/projects/${toSlug(cat.category)}`);
                }
              }}
              style={{ perspective: 1000 }} // important for 3D feeling
            >
              <div
                // the card: we apply transform & shadow on hover/focus of wrapper
                className={
                  "rounded-lg overflow-hidden transform-gpu transition-transform duration-450 ease-[cubic-bezier(0.2,0.9,0.2,1)] " +
                  "bg-white border border-black shadow-md " +
                  // hover/focus effects
                  "hover:-translate-y-3 hover:scale-105 hover:shadow-2xl " +
                  "focus:outline-none focus:ring-4 focus:ring-black/10"
                }
                // small inline style to slightly tilt the card towards the user (subtle)
                // note: combine scale & translate Y with a slight rotateX to create depth
                // rotateX can't be done via Tailwind easily, so we set style on hover via CSS below
              >
                {/* Image layer with subtle parallax-like shift */}
                <div
                  className="aspect-video bg-cover bg-center relative"
                  style={{
                    backgroundImage: `url(${cat.thumbnail})`,
                    // place transform style to enable preserve-3d rendering on modern browsers
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                  }}
                >
                  {/* overlay */}
                  <div className="absolute inset-0 bg-black/35 flex items-center justify-center transition-all duration-300">
                    <div className="text-center px-4">
                      <div className="text-white font-semibold text-lg">
                        {cat.category}
                      </div>
                      <div className="text-sm text-white/90 mt-1 hidden md:block">
                        
                      </div>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">
                    {cat.category}
                  </h3>
                  <p className="text-gray-700">Preview the live build →</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom inline style block for a tiny rotateX on hover for added depth.
          We put this here so you don't need to edit global CSS. */}
      <style>{`
        /* Slight rotateX on hover for a subtle 3D tilt */
        .hover\\:-translate-y-3:hover {
          /* add a small rotateX to give more depth */
          transform: translateY(-0.75rem) scale(1.05) rotateX(3deg);
        }
        /* Also apply rotateX on keyboard focus for accessibility */
        .focus\\:outline-none:focus {
          transform: translateY(-0.75rem) scale(1.05) rotateX(3deg);
        }
      `}</style>
    </section>
  );
}
