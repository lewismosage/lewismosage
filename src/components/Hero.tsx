import React, { useEffect, useState } from 'react';
import { ArrowDown, Github as GitHub, Linkedin, Mail, FileText } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = ['React', 'Node.js', 'Express', 'JavaScript', 'Python', 'Full Stack Developer'];
  const [currentSkill, setCurrentSkill] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [skills.length]);

  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20 pb-10"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-6 py-10 md:py-20">
        <div className="flex flex-col md:flex-row items-center">
          <div 
            className={`w-full md:w-3/5 mb-10 md:mb-0 md:pr-10 transition-all duration-1000 ${
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
                I'm a <span className="text-teal-600 dark:text-teal-400 relative inline-block">
                  {skills[currentSkill]}
                  <span className="absolute -right-2 top-0 h-full w-0.5 bg-teal-600 dark:bg-teal-400 animate-pulse"></span>
                </span>
              </p>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mb-8">
              Specializing in creating dynamic software solutions using modern technologies.
              I focus on developing functional, user-friendly systems that offer seamless and 
              engaging experiences.
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
                <GitHub size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/lewismosage" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:lewismosage@gmail.com" 
                className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
              <a 
                href="https://drive.google.com/file/d/1RPAfMRjCwAyfW1ETPjz-dbnRnl7Uv_wM/view?usp=drive_link" 
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
            className={`w-full md:w-2/5 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative w-full h-80 md:h-96 bg-gradient-to-br from-teal-600 to-blue-600 rounded-xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-6">
                  <h2 className="text-white text-2xl font-bold mb-4">Full Stack Developer</h2>
                  <p className="text-gray-100 mb-6">Transforming ideas into exceptional digital experiences</p>
                  <div className="flex flex-wrap justify-center gap-3">
                    {['React', 'Node.js', 'Express', 'JavaScript', 'Python'].map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-white/10 text-white text-sm rounded-full backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
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
