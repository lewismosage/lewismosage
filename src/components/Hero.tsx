import { useEffect, useState } from 'react';
import { ArrowDown, Mail, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/BrandIcons';

const rotatingSkills = [
  'TypeScript',
  'Python',
  'Go',
  'React',
  'Node.js',
  'Docker',
  'Kubernetes',
  'AWS',
];

const skillGroups = [
  {
    label: 'Languages',
    items: 'C · Go · Java · Python · JavaScript / TypeScript · SQL',
  },
  {
    label: 'Frontend',
    items: 'HTML5 · CSS3 · Tailwind · React · React Native · Vue.js',
  },
  {
    label: 'Backend',
    items: 'Node.js · Express · Django · Flask · REST · WebSockets',
  },
  {
    label: 'DevOps',
    items: 'Git · GitHub · Docker · Kubernetes · GitHub Actions · AWS',
  },
  {
    label: 'Data & Auth',
    items: 'PostgreSQL · MySQL · SQLite · Supabase · OAuth · JWT',
  },
  {
    label: 'Practice',
    items: 'Agile / Scrum · CI/CD · TDD',
  },
];

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSkill, setCurrentSkill] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % rotatingSkills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20 pb-10"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 -z-10" />

      <div className="absolute top-20 right-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 py-10 md:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
          <div
            className={`w-full lg:w-[55%] transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="text-teal-600 dark:text-teal-400 font-medium mb-3 tracking-wide">
              Hello, my name is
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Lewis Mosage
            </h1>
            <div className="h-12 mb-6">
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium">
                I'm a{' '}
                <span className="text-teal-600 dark:text-teal-400 relative inline-block">
                  {rotatingSkills[currentSkill]}
                  <span className="absolute -right-2 top-0 h-full w-0.5 bg-teal-600 dark:bg-teal-400 animate-pulse" />
                </span>
              </p>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mb-8">
              I specialize in full-stack systems for{' '}
              <span className="text-teal-600 dark:text-teal-400 font-medium">finance</span> and{' '}
              <span className="text-teal-600 dark:text-teal-400 font-medium">healthcare</span> — and
              the platform work that powers them (Docker, Kubernetes, and Go). I build reliable APIs,
              clean UIs, and operational tooling that helps teams ship with confidence.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-6 py-3 bg-transparent border-2 border-teal-600 dark:border-teal-500 text-teal-600 dark:text-teal-400 hover:bg-teal-600/10 font-medium rounded-lg transition-all transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
              >
                View Projects
              </a>
            </div>

            <div className="flex items-center mt-10 space-x-5">
              <a
                href="https://github.com/lewismosage"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon size={24} />
              </a>
              <a
                href="https://linkedin.com/in/lewismosage"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={24} />
              </a>
              <a
                href="mailto:lewismosage@gmail.com"
                className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
              <a
                href="https://drive.google.com/file/d/1hKhAUkNnAuVsyAFODEuHEyy3XtuaKKuD/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                aria-label="Download CV"
              >
                <FileText size={24} />
              </a>
            </div>
          </div>

          <div
            className={`w-full lg:w-[45%] transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-br from-teal-600 to-blue-600 shadow-xl">
              <div className="absolute inset-0 bg-gray-900/55" />
              <div className="relative p-6 md:p-7">
                <h2 className="text-white text-xl md:text-2xl font-bold mb-1">
                  Full Stack Developer
                </h2>
                <p className="text-white/80 text-sm mb-6">
                  Stack I ship with across product, platform, and security work.
                </p>

                <div className="space-y-3.5">
                  {skillGroups.map((group) => (
                    <div key={group.label} className="border-t border-white/15 pt-3 first:border-t-0 first:pt-0">
                      <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-teal-200 mb-1">
                        {group.label}
                      </p>
                      <p className="text-sm text-white/90 leading-relaxed">{group.items}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a
            href="#about"
            className="text-gray-700 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            aria-label="Scroll to About section"
          >
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
