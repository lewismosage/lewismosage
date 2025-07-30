import React, { useState } from "react";
import { ExternalLink, Github as GitHub, Code, ChevronDown, ChevronUp } from "lucide-react";
import { useInView } from "../hooks/useInView";
import AskDrAI from "../assets/askdrai.png";
import EACNA from "../assets/eacna.png";
import ACNA from "../assets/acna.png";
import AgriConnect from "../assets/agriconnect.png";

const projects = [
  {
    id: 1,
    title: "AgriConnect – Smart Agricultural Marketplace",
    description:
      "A digital marketplace that empowers small-scale farmers by giving them direct access to buyers, fair pricing, and tools to manage sales, boosting income and reducing dependence on middlemen.",
    image: AgriConnect,
    technologies: [
      "React",
      "TypeScript",
      "Django (REST API)",
      "Tailwind CSS",
      "PostgreSQL",
    ],
    category: "fullstack",
    live: "https://agriconnect-app.vercel.app/",
    repo: "https://github.com/lewismosage/AgriConnect",
  },
  {
    id: 2,
    title: "AskDr.AI",
    description:
      "An AI-powered virtual health assistant that provides instant symptom analysis, medication guidance, and health insights, helping users make informed decisions and access support without costly or delayed doctor visits.",
    image: AskDrAI,
    technologies: [
      "TypeScript",
      "Tailwind CSS",
      "Python",
      "Django",
      "REST API",
      "Vite",
    ],
    category: "fullstack",
    live: "",
    repo: "https://github.com/lewismosage/AskDr.AI",
  },
  {
    id: 3,
    title: "EACNA – East Africa Child Neurology Association",
    description:
      "A regional platform with over 5,000 users across East Africa, connecting child neurology professionals through education, collaboration, and patient support tools to improve neurological care in underserved communities.",
    image: EACNA,
    technologies: ["Vite", "TypeScript", "Tailwind CSS", "Supabase"],
    category: "fullstack",
    live: "https://eacna.vercel.app/",
    repo: "https://github.com/lewismosage/eacna",
  },
  {
    id: 5,
    title: "ACNA Healthcare Platform(Ongoing)",
    description:
      "A dynamic and scalable healthcare platform designed to serve over 50,000 users across the African continent, the ACNA (African Child Neurology Association) project is dedicated to improving the lives of children through accessible, collaborative, and innovative digital health solutions.",
    image: ACNA,
    technologies: [
      "TypeScript",
      "Tailwind CSS",
      "Python",
      "Django",
      "REST API",
      "Vite",
    ],
    category: "fullstack",
    live: "https://acna-africa.vercel.app/",
    repo: "https://github.com/lewismosage/acna",
  },
  {
    id: 6,
    title: "Savannatek Software Company",
    description:
      "Built Savannatek, a modern software company website that showcases digital solutions, client services, and company values with a clean design.",
    image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
    category: "fullstack",
    live: "https://savannatek.vercel.app/",
    repo: "https://github.com/lewismosage/savannatek",
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [expandedDescriptions, setExpandedDescriptions] = useState<Record<number, boolean>>({});
  const { ref, inView } = useInView({ threshold: 0.1 });

  const toggleDescription = (id: number) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work and the technologies I've been working with
          </p>
        </div>

        <div
          className={`flex justify-center mb-12 transition-all duration-700 delay-100 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex p-1 bg-gray-200 dark:bg-gray-700 rounded-lg">
            {["all", "frontend", "backend", "fullstack"].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                  filter === category
                    ? "bg-white dark:bg-gray-600 text-teal-600 dark:text-teal-400 shadow-sm"
                    : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <div className="relative">
                  <p 
                    className={`text-gray-600 dark:text-gray-300 mb-4 ${
                      expandedDescriptions[project.id] ? '' : 'line-clamp-3'
                    }`}
                  >
                    {project.description}
                  </p>
                  <button 
                    onClick={() => toggleDescription(project.id)}
                    className="text-teal-600 dark:text-teal-400 text-sm font-medium flex items-center hover:underline"
                  >
                    {expandedDescriptions[project.id] ? (
                      <>
                        <ChevronUp size={16} className="mr-1" /> Read less
                      </>
                    ) : (
                      <>
                        <ChevronDown size={16} className="mr-1" /> Read more
                      </>
                    )}
                  </button>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between pt-4 border-t border-gray-200 dark:border-gray-600">
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm font-medium text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
                    >
                      <ExternalLink size={16} className="mr-1" /> Live Demo
                    </a>
                  ) : (
                    <span className="flex items-center text-sm font-medium text-gray-400 dark:text-gray-500">
                      <ExternalLink size={16} className="mr-1" /> Demo Coming Soon
                    </span>
                  )}
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <GitHub size={16} className="mr-1" /> View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-16 text-center transition-all duration-700 delay-500 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <a
            href="https://github.com/lewismosage"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white font-medium rounded-lg shadow-md hover:bg-gray-700 dark:hover:bg-gray-600 transition-all transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
          >
            <Code size={20} className="mr-2" /> View More Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;