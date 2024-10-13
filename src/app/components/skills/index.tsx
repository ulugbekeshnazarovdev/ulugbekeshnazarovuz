'use client';

import React from 'react';
import { motion } from 'framer-motion';

type Skill = {
  name: string;
  icon: string;
  level: number;
};

const skills: Skill[] = [
  { name: 'React', icon: '⚛️', level: 90 },
  { name: 'TypeScript', icon: '🔷', level: 85 },
  { name: 'Next.js', icon: '▲', level: 80 },
  { name: 'Tailwind CSS', icon: '🎨', level: 95 },
  { name: 'JavaScript', icon: '🟨', level: 90 },
  { name: 'HTML/CSS', icon: '🌐', level: 95 },
  { name: 'GraphQL', icon: '🔺', level: 75 },
  { name: 'Redux', icon: '🔄', level: 80 },
  { name: 'Vue.js', icon: '🔮', level: 70 },
  { name: 'Sass/SCSS', icon: '🌸', level: 80 },
  { name: 'Bootstrap', icon: '🧰', level: 75 },
  { name: 'jQuery', icon: '📦', level: 70 },
  { name: 'REST APIs', icon: '🔗', level: 85 },
  { name: 'Git/GitHub', icon: '🐙', level: 90 },
  { name: 'Responsive Design', icon: '📱', level: 90 },
  { name: 'Webpack', icon: '⚙️', level: 75 },
  { name: 'Jest', icon: '🧪', level: 70 },
  { name: 'Cypress', icon: '🔍', level: 65 },
  { name: 'Figma', icon: '🎨', level: 80 },
  { name: 'Adobe XD', icon: '🖌️', level: 70 },
  { name: 'Microservices', icon: '⚡', level: 65 },
  { name: 'Progressive Web Apps', icon: '🌍', level: 70 },
  { name: 'SEO', icon: '🔍', level: 65 },
  { name: 'Accessibility (a11y)', icon: '♿', level: 70 },
];

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => (
  <motion.div
    className="bg-zinc-900/40 backdrop-brightness-100 backdrop-blur-lg hover:scale-105 transition-all duration-500 cursor-pointer rounded-lg p-6 shadow-lg hover:shadow-xl "
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="flex items-center mb-4">
      <span className="text-4xl mr-4" role="img" aria-label={skill.name}>
        {skill.icon}
      </span>
      <h3 className="text-xl font-bold text-white">{skill.name}</h3>
    </div>
    <div className="relative pt-1">
      <div className="flex mb-2 items-center justify-between">
        <div>
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-zinc-900">
            Proficiency
          </span>
        </div>
        <div className="text-right">
          <span className="text-xs font-semibold inline-block text-white">
            {skill.level}%
          </span>
        </div>
      </div>
      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-white/50">
        <motion.div
          style={{ width: `${skill.level}%` }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-zinc-900/30"
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
    </div>
  </motion.div>
);

export const Skills: React.FC = () => {
  return (
    <section className="py-32" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          My Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-lg text-gray-300 mb-8">
            Always learning and expanding my skillset to stay up-to-date with
            the latest frontend technologies.
          </p>
          <motion.a
            href="#projects"
            className="inline-block bg-zinc-900/50 hover:bg-zinc-900/20 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
