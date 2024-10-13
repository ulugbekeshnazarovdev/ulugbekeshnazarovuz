'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, ExternalLink, Github } from 'lucide-react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  type: 'Frontend' | 'Backend' | 'Full Stack';
  projectType: 'Landing Page' | 'Multi-page' | 'SPA' | 'Next.js';
  liveUrl: string;
  githubUrl: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description:
      'A full-stack e-commerce solution with user authentication, product management, and payment integration.',
    image: '/placeholder.svg?height=200&width=300',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    type: 'Full Stack',
    projectType: 'Next.js',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/project',
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description:
      'A responsive portfolio website showcasing my projects and skills.',
    image: '/placeholder.svg?height=200&width=300',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    type: 'Frontend',
    projectType: 'Multi-page',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/project',
  },
  {
    id: 3,
    title: 'Task Management API',
    description:
      'A RESTful API for task management with user authentication and task CRUD operations.',
    image: '/placeholder.svg?height=200&width=300',
    technologies: ['Node.js', 'Express', 'MongoDB'],
    type: 'Backend',
    projectType: 'SPA',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/project',
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description:
      'A single-page application that displays weather information for multiple cities.',
    image: '/placeholder.svg?height=200&width=300',
    technologies: ['React', 'TypeScript', 'CSS'],
    type: 'Frontend',
    projectType: 'SPA',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/project',
  },
  {
    id: 5,
    title: 'Blog Platform',
    description:
      'A full-stack blog platform with user authentication, post creation, and commenting system.',
    image: '/placeholder.svg?height=200&width=300',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma'],
    type: 'Full Stack',
    projectType: 'Next.js',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/project',
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <motion.div
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
    className="group"
  >
    <Card className="overflow-hidden bg-zinc-900/40 backdrop-brightness-100 backdrop-blur-lg cursor-pointer h-[480px] border-transparent transition-all duration-300 group-hover:bg-white/20">
      <CardHeader className="p-0">
        <Image
          src={project.image}
          alt={project.title}
          width={100}
          height={192}
          className="w-full h-48 object-cover"
        />
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="text-xl font-semibold mb-2 text-white">
          {project.title}
        </CardTitle>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-700 text-gray-200 rounded-full text-sm"
            >
              {tech.slice(0, 15)}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-blue-400">
            {project.type}
          </span>
          <span className="text-sm font-medium text-green-400">
            {project.projectType}
          </span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end space-x-2 p-4">
        <Button variant="ghost" size="icon" asChild>
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink size={20} />
          </a>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Github size={20} />
          </a>
        </Button>
      </CardFooter>
    </Card>
  </motion.div>
);

export const Portfolio: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedProjectType, setSelectedProjectType] = useState<string>('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    const filtered = projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(searchTerm.toLowerCase())
        );
      const matchesType =
        selectedType === 'All' || project.type === selectedType;
      const matchesProjectType =
        selectedProjectType === 'All' ||
        project.projectType === selectedProjectType;
      return matchesSearch && matchesType && matchesProjectType;
    });
    setFilteredProjects(filtered);
  }, [searchTerm, selectedType, selectedProjectType]);

  return (
    <section className="py-32" id="portfolio">
      <div className="container mx-auto px-5">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          My Projects
        </h2>
        <div className="mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-2 text-white" size={20} />
            <Input
              type="text"
              placeholder="Search projects..."
              className="pl-10 bg-zinc-900/40 border-gray-700  text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-4 w-full md:w-auto">
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="w-full md:w-[180px] bg-zinc-900/40 backdrop-brightness-100 backdrop-blur-lg border-gray-700 text-white">
                <SelectValue placeholder="Select Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Types</SelectItem>
                <SelectItem value="Frontend">Frontend</SelectItem>
                <SelectItem value="Backend">Backend</SelectItem>
                <SelectItem value="Full Stack">Full Stack</SelectItem>
              </SelectContent>
            </Select>
            <Select
              value={selectedProjectType}
              onValueChange={setSelectedProjectType}
            >
              <SelectTrigger className="w-full md:w-[180px] bg-zinc-900/40 backdrop-brightness-100 backdrop-blur-lg border-gray-700 text-white">
                <SelectValue placeholder="Select Project Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Project Types</SelectItem>
                <SelectItem value="Landing Page">Landing Page</SelectItem>
                <SelectItem value="Multi-page">Multi-page</SelectItem>
                <SelectItem value="SPA">SPA</SelectItem>
                <SelectItem value="Next.js">Next.js</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        {filteredProjects.length === 0 && (
          <p className="text-center text-gray-400 mt-8">
            No projects found matching your criteria.
          </p>
        )}
      </div>
    </section>
  );
};
