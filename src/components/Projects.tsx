// components/Projects.tsx
'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Globe, ServerCog, BookCopy, ArrowRight } from 'lucide-react';

// New: ProjectCard component with spotlight effect
const ProjectCard = ({ title, description, icon, href, className }: any) => {
  const ref = useRef<any>(null);
  const [mousePosition, setMousePosition] = useState({ x: -200, y: -200 });

  const handleMouseMove = (e: any) => {
    const rect = ref.current?.getBoundingClientRect() || '';
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <Card
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePosition({ x: -200, y: -200 })}
      className={`relative flex flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl group ${className}`}
    >
      {/* Spotlight effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.1), transparent 80%)`,
        }}
      />
      
      <CardHeader>
        <div className="p-3 bg-secondary/80 rounded-md w-fit mb-2">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <div className="p-6 pt-0">
        <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-semibold text-sm group">
          Learn more
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </Card>
  );
};

// Updated project data for the new layout
const projectData = [
  {
    title: 'Build on Bhuvan: Geospatial Toolkit',
    description: "A platform and SDK for GIS application development using ISRO's Bhuvan Geoportal.",
    icon: <Globe className="h-8 w-8" />,
    href: 'https://github.com/atomiclifestyle/frontend-kit-bhuvan',
    className: '', // This project will span two columns on medium screens
  },
  {
    title: 'OPS360 - Operations Management',
    description: 'A comprehensive software solution to streamline and manage industrial operations.',
    icon: <ServerCog className="h-8 w-8" />,
    href: 'https://vops360.co.uk/',
    className: '',
  },
  {
    title: 'IIIT Notes - Note Sharing Platform',
    description: 'A collaborative note-sharing software for IIIT students to access academic resources.',
    icon: <BookCopy className="h-8 w-8" />,
    href: 'https://github.com/atomiclifestyle/iiit_notes',
    className: '', // This project will span all three columns
  },
];

// Main Projects component using Framer Motion
export const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger the animation of children
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="projects" className="container py-24">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid md:grid-cols-3 gap-8"
      >
        {projectData.map((project, index) => (
          <motion.div key={index} variants={itemVariants} className={project.className}>
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};