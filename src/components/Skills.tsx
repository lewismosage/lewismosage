import React, { useEffect } from 'react';
import { useInView } from '../hooks/useInView';

const skills = [
  {
    category: 'Programming Languages',
    items: [
      { name: 'JavaScript', level: 90 },
      { name: 'Python', level: 80 },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 85 }
    ]
  },
  {
    category: 'Frontend Frameworks',
    items: [
      { name: 'React.js', level: 85 },
      { name: 'Vue.js', level: 75 },
      { name: 'Tailwind CSS', level: 90 }
    ]
  },
  {
    category: 'Backend Technologies',
    items: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 80 },
      { name: 'Django', level: 70 },
      { name: 'Flask', level: 65 }
    ]
  },
  {
    category: 'Databases',
    items: [
      { name: 'MySQL', level: 80 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'SQLite', level: 85 }
    ]
  },
  {
    category: 'DevOps & Tools',
    items: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'Docker', level: 70 },
      { name: 'Kubernetes', level: 60 }
    ]
  }
];

const Skills = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  
  return (
    <section 
      id="skills" 
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
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skills.map((skillGroup, groupIndex) => (
            <div 
              key={groupIndex}
              className={`transition-all duration-700 delay-${Math.min(groupIndex * 150, 500)} ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-gray-100 border-l-4 border-teal-500 pl-4">
                {skillGroup.category}
              </h3>
              <div className="space-y-6">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"
                        style={{ 
                          width: inView ? `${skill.level}%` : '0%',
                          transition: `width 1s ease-in-out ${skillIndex * 0.2}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div 
          className={`mt-16 p-8 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md transition-all duration-700 delay-500 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">
            My Development Approach
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow">
              <h4 className="font-bold text-lg mb-2 text-gray-800 dark:text-gray-100">
                User-Centered Design
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                I prioritize user experience in every project, creating intuitive interfaces that delight users.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow">
              <h4 className="font-bold text-lg mb-2 text-gray-800 dark:text-gray-100">
                Clean Code Practices
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                I write maintainable, well-structured code following industry best practices and patterns.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow">
              <h4 className="font-bold text-lg mb-2 text-gray-800 dark:text-gray-100">
                Continuous Learning
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                I constantly expand my knowledge and stay updated with the latest technologies and frameworks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;