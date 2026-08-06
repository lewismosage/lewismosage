import { useEffect, useState } from "react";
import { ExternalLink, Code, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./icons/BrandIcons";
import { useInView } from "../hooks/useInView";
import AskDrAI from "../assets/askdrai.png";
import EACNA from "../assets/eacna.png";
import ACNA from "../assets/acna.png";
import AgriConnect from "../assets/agriconnect.png";
import OpenOps from "../assets/openops.png";
import Havoc from "../assets/havoc.png";
import AASP from "../assets/AASP.png";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  live?: string;
  repo: string;
};

const projects: Project[] = [
  {
    id: 9,
    title: "AASP – Autonomous Application Security Platform",
    description:
      "An AI-powered Application Security Operating System that helps organizations identify, prioritize, and remediate vulnerabilities across authorized systems. Combines SAST, DAST, dependency and secret scanning, container and infrastructure checks, AI-assisted analysis, and attack-path visualization into mission-based, multi-tenant workflows — with evidence-backed reporting and remediation guidance.",
    image: AASP,
    technologies: [
      "Python",
      "FastAPI",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Docker",
      "LangGraph",
    ],
    category: "fullstack",
    live: "https://appsec-platform-frontend.vercel.app",
    repo: "https://github.com/lewismosage/appsec-platform-frontend",
  },
  {
    id: 7,
    title: "OpenOps – Developer Operations Console",
    description:
      "A lightweight DevOps console to monitor multiple servers and get alerted when something goes wrong. Register hosts, run HTTP/TCP/ping health checks, deploy a small agent for CPU, RAM, disk, and log metrics, then triage incidents with email notifications when checks fail or hosts drift.",
    image: OpenOps,
    technologies: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "Python",
      "SQLite",
      "Docker",
    ],
    category: "fullstack",
    live: "https://openops-servers-monitor.vercel.app",
    repo: "https://github.com/lewismosage/openops",
  },
  {
    id: 8,
    title: "Havoc – Chaos Engineering Platform (Ongoing)",
    description:
      "Open-source chaos engineering platform for Kubernetes and microservices. Safely inject failures like pod kills and CPU stress, measure recovery, score resilience, and understand how distributed systems behave under stress — before production does. Plugin-based injectors, dry-run mode, and a React dashboard with live run events.",
    image: Havoc,
    technologies: [
      "Go",
      "React",
      "Kubernetes",
      "PostgreSQL",
      "Helm",
      "Docker",
    ],
    category: "fullstack",
    repo: "https://github.com/lewismosage/havoc",
  },
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
    live: "https://askdrai.vercel.app/",
    repo: "https://github.com/lewismosage/AskDr.AI",
  },
  {
    id: 3,
    title: "EACNA – East Africa Child Neurology Association",
    description:
      "A regional platform with over 5,000 users across East Africa, connecting child neurology professionals through education, collaboration, and patient support tools to improve neurological care in underserved communities.",
    image: EACNA,
    technologies: ["Vite", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Supabase"],
    category: "fullstack",
    live: "https://eacna.vercel.app/",
    repo: "https://github.com/lewismosage/eacna",
  },
  {
    id: 5,
    title: "ACNA Healthcare Platform",
    description:
      "A dynamic and scalable healthcare platform designed to serve over 50,000 users across the African continent, the ACNA (African Child Neurology Association) project is dedicated to improving the lives of children through accessible, collaborative, and innovative digital health solutions.",
    image: ACNA,
    technologies: [
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "REST API",
      "Vite",
    ],
    category: "fullstack",
    live: "https://acna-africa.vercel.app/",
    repo: "https://github.com/lewismosage/acna",
  },
];

const PAGE_SIZE = 3;

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const { ref, inView } = useInView({ threshold: 0.1 });

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [filter]);

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const remaining = filteredProjects.length - visibleCount;

  return (
    <section id="projects" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div
          className={`mb-12 md:mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-white">
                Featured Projects
              </h2>
              <div className="w-16 h-1 bg-teal-500 mb-4" />
              <p className="text-gray-700 dark:text-gray-300">
                Selected work across application security, platform engineering,
                healthcare, and product systems.
              </p>
            </div>

            <div className="inline-flex self-start p-1 bg-gray-200/80 dark:bg-gray-700/80 rounded-lg">
              {["all", "frontend", "backend", "fullstack"].map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setFilter(category)}
                  className={`px-3.5 py-2 text-sm font-medium rounded-md transition-all ${
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
        </div>

        <div className="space-y-12 md:space-y-16">
          {visibleProjects.map((project, index) => {
            const imageOnRight = index % 2 === 1;

            return (
              <article
                key={project.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center transition-all duration-700 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: inView ? `${index * 80}ms` : "0ms" }}
              >
                <div
                  className={`lg:col-span-7 ${
                    imageOnRight ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <a
                    href={project.live ?? project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block relative overflow-hidden rounded-2xl border border-gray-200/70 dark:border-gray-600/60 bg-gray-100 dark:bg-gray-900/40"
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-900/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </a>
                </div>

                <div
                  className={`lg:col-span-5 ${
                    imageOnRight ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <p className="text-xs font-semibold tracking-[0.18em] uppercase text-teal-600 dark:text-teal-400 mb-3">
                    {String(index + 1).padStart(2, "0")} /{" "}
                    {String(filteredProjects.length).padStart(2, "0")}
                  </p>

                  <h3 className="text-2xl md:text-[1.75rem] font-bold text-gray-900 dark:text-white leading-snug mb-4">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-7">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs text-gray-700 dark:text-gray-300 border border-gray-300/80 dark:border-gray-500/70 px-2.5 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-sm font-medium transition-colors"
                      >
                        Live demo
                        <ArrowUpRight size={16} />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-sm font-medium">
                        <ExternalLink size={16} />
                        Demo coming soon
                      </span>
                    )}

                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-500 text-gray-800 dark:text-gray-100 text-sm font-medium hover:border-teal-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                    >
                      <GithubIcon size={16} />
                      View code
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {remaining > 0 && (
          <div
            className={`mt-14 text-center transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <button
              type="button"
              onClick={() =>
                setVisibleCount((prev) =>
                  Math.min(prev + PAGE_SIZE, filteredProjects.length)
                )
              }
              className="inline-flex items-center px-6 py-3 border-2 border-teal-600 dark:border-teal-500 text-teal-600 dark:text-teal-400 font-medium rounded-lg hover:bg-teal-600/10 transition-all focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
            >
              View more
              <span className="ml-2 text-sm opacity-80">
                ({remaining} remaining)
              </span>
            </button>
          </div>
        )}

        <div
          className={`mt-12 text-center transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <a
            href="https://github.com/lewismosage"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
          >
            <Code size={16} className="mr-2" />
            See more on GitHub
            <ArrowUpRight size={14} className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
