'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogSections = [
    {
      title: 'Getting Started with React',
      content:
        'React is a popular JavaScript library for building user interfaces. It allows developers to create reusable UI components that can be composed to build complex applications.',
      image: '/placeholder.svg?height=200&width=300',
      category: 'react',
      link: '/blog/react-getting-started',
    },
    {
      title: 'The Power of Next.js',
      content:
        "Next.js is a React framework that enables functionality such as server-side rendering and generating static websites. It's a powerful tool for creating fast, SEO-friendly web applications.",
      image: '/placeholder.svg?height=200&width=300',
      category: 'nextjs',
      link: '/blog/nextjs-power',
    },
    {
      title: 'Styling with Tailwind CSS',
      content:
        'Tailwind CSS is a utility-first CSS framework that allows you to rapidly build custom user interfaces. It provides low-level utility classes that let you build completely custom designs.',
      image: '/placeholder.svg?height=200&width=300',
      category: 'css',
      link: '/blog/tailwind-css-styling',
    },
    {
      title: 'State Management with Redux',
      content:
        'Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments, and are easy to test.',
      image: '/placeholder.svg?height=200&width=300',
      category: 'react',
      link: '/blog/redux-state-management',
    },
    {
      title: 'GraphQL vs REST',
      content:
        'GraphQL is a query language for APIs and a runtime for executing those queries with your existing data. REST is an architectural style for distributed hypermedia systems.',
      image: '/placeholder.svg?height=200&width=300',
      category: 'api',
      link: '/blog/graphql-vs-rest',
    },
    {
      title: 'Responsive Design Principles',
      content:
        'Responsive design is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes.',
      image: '/placeholder.svg?height=200&width=300',
      category: 'css',
      link: '/blog/responsive-design-principles',
    },
    {
      title: 'JavaScript ES6+ Features',
      content:
        'ES6+ brought many new features to JavaScript, including arrow functions, destructuring, spread operator, and more. These features make code more readable and concise.',
      image: '/placeholder.svg?height=200&width=300',
      category: 'javascript',
      link: '/blog/javascript-es6-features',
    },
    {
      title: 'TypeScript Basics',
      content:
        'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It adds optional types, classes, and modules to JavaScript, making it easier to develop large-scale applications.',
      image: '/placeholder.svg?height=200&width=300',
      category: 'typescript',
      link: '/blog/typescript-basics',
    },
    {
      title: 'Web Accessibility (A11y)',
      content:
        "Web accessibility means that websites, tools, and technologies are designed and developed so that people with disabilities can use them. It's crucial for an inclusive web experience.",
      image: '/placeholder.svg?height=200&width=300',
      category: 'accessibility',
      link: '/blog/web-accessibility',
    },
  ];

  const filteredSections =
    selectedCategory === 'all'
      ? blogSections
      : blogSections.filter((section) => section.category === selectedCategory);

  return (
    <div className="min-h-screen bg-transparent text-white py-32" id="blog">
      <div className="container mx-auto px-5">
        <motion.h1
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Latest Blog Posts
        </motion.h1>

        <div className="mb-8 flex justify-center">
          <Select onValueChange={setSelectedCategory} defaultValue="all">
            <SelectTrigger className="w-full bg-zinc-900/40 backdrop-brightness-100 backdrop-blur-lg border-white/5 text-white">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent className="bg-zinc-900/40 text-white">
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="react">React</SelectItem>
              <SelectItem value="nextjs">Next.js</SelectItem>
              <SelectItem value="css">CSS</SelectItem>
              <SelectItem value="api">API</SelectItem>
              <SelectItem value="javascript">JavaScript</SelectItem>
              <SelectItem value="typescript">TypeScript</SelectItem>
              <SelectItem value="accessibility">Accessibility</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="bg-zinc-900/40 backdrop-brightness-100 backdrop-blur-lg border-white/5 border-none hover:bg-opacity-70 transition-all duration-300">
                <CardContent className="p-0">
                  <Image
                    src={section.image}
                    alt={section.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <h2 className="text-xl font-semibold mb-2">
                      {section.title}
                    </h2>
                    <p className="text-gray-300 mb-4">{section.content}</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href={section.link} passHref>
                    <Button variant="outline" className="w-full">
                      Read More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
