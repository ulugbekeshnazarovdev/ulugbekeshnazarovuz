'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import MyImages from '../../assets/images.jpg';
import Image from 'next/image';
const socialLinks = [
  {
    icon: <Github className="h-5 w-5" />,
    href: 'https://github.com/yourusername',
  },
  {
    icon: <Linkedin className="h-5 w-5" />,
    href: 'https://linkedin.com/in/yourusername',
  },
  {
    icon: <Twitter className="h-5 w-5" />,
    href: 'https://twitter.com/yourusername',
  },
  { icon: <Mail className="h-5 w-5" />, href: 'mailto:your.email@example.com' },
];

const skills = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'GraphQL',
  'Tailwind CSS',
  'MongoDB',
  'PostgreSQL',
  'Docker',
  'AWS',
  'Git',
  'CI/CD',
];

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Innovators Inc.',
    period: '2021 - Present',
    description: 'Leading full-stack development for enterprise applications.',
  },
  {
    title: 'Frontend Developer',
    company: 'Web Solutions Ltd.',
    period: '2018 - 2021',
    description: 'Developed responsive and accessible web applications.',
  },
  {
    title: 'Junior Developer',
    company: 'StartUp Ventures',
    period: '2016 - 2018',
    description: 'Assisted in building and maintaining web applications.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export function AboutMe() {
  return (
    <section className="py-32 min-h-screen" id="about-me">
      <div className="container mx-auto px-5">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <Card className="bg-zinc-900/20 brightness-100 backdrop-blur-lg border-zinc-600 text-white overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl">Ulugbek Eshnazarov</CardTitle>
                <p className="text-zinc-400">Frontend Developer</p>
              </CardHeader>
              <CardContent>
                <Image
                  src={MyImages}
                  alt="John Doe"
                  className="w-full h-auto rounded-lg mb-4 hover:scale-110 duration-500 transition-all cursor-pointer "
                />
                <div className="flex justify-center space-x-4 mb-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-white transition-colors"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-2">
            <Card className="bg-zinc-900/20 brightness-100 backdrop-blur-lg hover:scale-110 duration-500 transition-all border-zinc-600 text-white h-full">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">About Me</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-300 mb-6">
                  I'm a passionate Frontend Developer with over 2 years of
                  experience in building robust and scalable web applications.
                  My expertise spans both frontend and backend technologies,
                  with a strong focus on creating efficient and user-friendly
                  solutions.
                </p>
                <h3 className="text-xl font-semibold mb-3">Skills</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Badge
                        variant="secondary"
                        className="bg-zinc-700 text-zinc-200"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-3">Experience</h3>
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <h4 className="text-lg font-semibold">{exp.title}</h4>
                    <p className="text-zinc-400">
                      {exp.company} | {exp.period}
                    </p>
                    <p className="text-zinc-300 mt-1">{exp.description}</p>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
