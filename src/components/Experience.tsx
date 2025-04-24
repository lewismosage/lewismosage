import React from 'react';
import { useInView } from '../hooks/useInView';
import { BookOpen, Award, Briefcase } from 'lucide-react';

const experiences = [
  {
    id: 1,
    position: 'Full Stack Developer',
    company: 'Savannatek Ltd',
    period: 'Jan 2025 - Present',
    description: [
      'Developed and maintained multiple web applications using React.js, Node.js, and Express.js',
      'Implemented responsive designs and ensured cross-browser compatibility',
      'Collaborated with UX/UI designers to implement pixel-perfect interfaces',
      'Optimized application performance and addressed security vulnerabilities'
    ],
    type: 'work'
  },
  {
    id: 3,
    position: 'Web Development Intern',
    company: 'CreativeTech Studios',
    period: 'Jun 2024 - Dec 2024',
    description: [
      'Assisted in developing responsive websites using HTML, CSS, and JavaScript',
      'Learned and implemented modern frontend frameworks like React.js',
      'Participated in team meetings and contributed to project planning',
      'Created documentation for codebase and user guides'
    ],
    type: 'work'
  }, 
  {
    id: 4,
    position: 'Full Stack Web Development',
    company: 'IBM',
    period: 'Jan 2022 - Jan 2023',
    description: [
      'Completed an intensive 12-month program focusing on modern web development tools and practices.',
      'Built multiple projects using the MERN stack',
      'Collaborated with peers on team projects',
      'Received certification for course completion'
    ],
    type: 'education'
  }
];

const certifications = [
  {
    id: 1,
    title: 'IBM Software Developer Professional Certificate',
    issuer: 'IBM',
    date: 'May 2024'
  },
  
  {
    id: 2,
    title: 'Python Programming Professional',
    issuer: 'University of Michigan',
    date: 'Jul 2024'
  },
  {
    id: 3,
    title: 'Python, Java, and php Programming',
    issuer: 'Udemy coding bootcamp',
    date: 'Nov 2024'
  }, 
  {
    id: 4,
    title: 'Data Analytics Professional Certificate',
    issuer: 'Goggle',
    date: 'Mar 2022'
  }
];

const Experience = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  
  // Filter experiences by type
  const workExperiences = experiences.filter(exp => exp.type === 'work');
  const educationExperiences = experiences.filter(exp => exp.type === 'education');
  
  return (
    <section 
      id="experience" 
      ref={ref}
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-6">
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey and educational background
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Work Experience */}
          <div 
            className={`transition-all duration-700 delay-150 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex items-center mb-8">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full mr-4">
                <Briefcase size={24} className="text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                Work Experience
              </h3>
            </div>
            
            <div className="relative border-l-2 border-blue-200 dark:border-blue-900 pl-8 pb-6">
              {workExperiences.map((experience, index) => (
                <div 
                  key={experience.id}
                  className={`mb-10 relative transition-all duration-700 delay-${index * 150} ${
                    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  <div className="absolute -left-10 mt-1.5 w-5 h-5 rounded-full border-4 border-blue-200 dark:border-blue-900 bg-blue-600 dark:bg-blue-500"></div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                        {experience.position}
                      </h4>
                      <span className="text-sm px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full">
                        {experience.period}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {experience.company}
                    </p>
                    <ul className="space-y-2">
                      {experience.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2"></span>
                          <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Education */}
          <div 
            className={`transition-all duration-700 delay-300 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex items-center mb-8">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full mr-4">
                <BookOpen size={24} className="text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                Education
              </h3>
            </div>
            
            <div className="relative border-l-2 border-purple-200 dark:border-purple-900 pl-8 mb-16">
              {educationExperiences.map((education, index) => (
                <div 
                  key={education.id}
                  className={`mb-10 relative transition-all duration-700 delay-${index * 150} ${
                    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  <div className="absolute -left-10 mt-1.5 w-5 h-5 rounded-full border-4 border-purple-200 dark:border-purple-900 bg-purple-600 dark:bg-purple-500"></div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                        {education.position}
                      </h4>
                      <span className="text-sm px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full">
                        {education.period}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {education.company}
                    </p>
                    <ul className="space-y-2">
                      {education.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 mr-2"></span>
                          <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Certifications */}
            <div className="flex items-center mb-8">
              <div className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-full mr-4">
                <Award size={24} className="text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                Certifications
              </h3>
            </div>
            
            <div 
              className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-all duration-700 delay-500 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <ul className="space-y-4">
                {certifications.map(cert => (
                  <li key={cert.id} className="flex items-start">
                    <span className="p-2 bg-teal-100 dark:bg-teal-900/30 rounded-full mr-3">
                      <Award size={16} className="text-teal-600 dark:text-teal-400" />
                    </span>
                    <div>
                      <h4 className="font-bold text-gray-800 dark:text-gray-100">
                        {cert.title}
                      </h4>
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <span>{cert.issuer}</span>
                        <span className="mx-2">•</span>
                        <span>{cert.date}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;