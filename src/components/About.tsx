import { useInView } from '../hooks/useInView';
import { Code, Globe, Server, Database } from 'lucide-react';

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  
  return (
    <section 
      id="about" 
      ref={ref}
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-6">
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Get to know me better and discover the passion that drives my work
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-start">
          <div 
            className={`w-full md:w-1/2 md:pr-10 mb-10 md:mb-0 transition-all duration-700 delay-150 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
              My Journey
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Hi, I'm Lewis Mosage. I build full-stack systems for <span className="text-teal-600 dark:text-teal-400 font-medium">finance and insurance</span> and <span className="text-teal-600 dark:text-teal-400 font-medium">healthcare</span> — from domain logic and APIs to the interfaces people use every day.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Lately, my focus has expanded into <span className="text-teal-600 dark:text-teal-400 font-medium">platform engineering and resilience</span>: Docker and Kubernetes-based deployments, Go services, and operational tooling that keeps systems stable under real load.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I’m also drawn to application security and developer tooling — anything that improves reliability, makes teams faster, and helps products scale safely.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                Finance & Healthcare
              </span>
              <span className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200 rounded-full text-sm">
                Platform Engineering
              </span>
              <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                Resilience & DevOps
              </span>
              <span className="px-4 py-2 bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-200 rounded-full text-sm">
                AppSec-minded Builds
              </span>
            </div>
          </div>
          
          <div 
            className={`w-full md:w-1/2 transition-all duration-700 delay-300 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">
                <div className="text-teal-600 dark:text-teal-400 mb-4">
                  <Code size={32} />
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-100">
                  Frontend Development
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Building modern, accessible interfaces with React and TypeScript (often with Next.js and Tailwind CSS).
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">
                <div className="text-blue-600 dark:text-blue-400 mb-4">
                  <Server size={32} />
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-100">
                  Backend Development
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Creating reliable APIs and services with Python and JavaScript, plus Go for performance-critical platform components.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">
                <div className="text-indigo-600 dark:text-indigo-400 mb-4">
                  <Database size={32} />
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-100">
                  Database Management
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Designing and optimizing databases with PostgreSQL (and SQLite for local/test workflows).
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">
                <div className="text-purple-600 dark:text-purple-400 mb-4">
                  <Globe size={32} />
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-100">
                  DevOps
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Building resilient deployments with Docker, Kubernetes, Helm, and observability-minded workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;