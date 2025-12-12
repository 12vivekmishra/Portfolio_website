// client/components/CategoryPage.tsx
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import projectsData from "../data/projectData";

export default function CategoryPage() {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const navigate = useNavigate();

  const category = projectsData.find((c) => c.slug === categorySlug);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Category not found</h2>
          <p className="mt-2 text-gray-600">
            Go back to{" "}
            <button onClick={() => navigate("/")} className="text-blue-600 underline">
              projects list
            </button>
            .
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 px-6 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold">{category.category}</h1>
            <p className="text-gray-600 mt-2">{category.description}</p>
          </div>
          <div>
            <Link to="/" className="text-sm px-4 py-2 border rounded">
              ← Back
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {category.projects.map((p, i) => (
            <div key={i} className="border rounded-lg overflow-hidden">
              <div className="p-4">
                <h3 className="text-xl font-bold mb-3">{p.title}</h3>

                {p.demoVideo ? (
                  <video controls className="w-full rounded mb-3 max-h-[360px]">
                    <source src={p.demoVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img src={p.thumbnail || "/projects/default.jpg"} alt={p.title} className="w-full rounded mb-3" />
                )}

                {p.website && (
                  <a href={p.website} target="_blank" rel="noreferrer" className="inline-block px-4 py-2 bg-black text-white rounded">
                    Open Website
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
