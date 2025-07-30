// components/Projects.tsx
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const projectData = [
  {
    title: 'Build on Bhuvan: Geospatial Toolkit',
    description:
      "A developer-centric platform and SDK for GIS application development using ISRO's Bhuvan Geoportal. It abstracts complexities into a simple, powerful, and collaborative environment.",
  },
  {
    title: 'OPS360 - Operations Management Software',
    description:
      'A comprehensive software solution designed to streamline and manage operations for various industries, enhancing efficiency and productivity.',
  },
  {
    title: 'IIIT Notes - Note Sharing Platform',
    description:
      'A collaborative note-sharing software built specifically for IIIT students, facilitating easy access to academic resources and study materials.',
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="container py-16 bg-base-200 rounded-box">
      <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p>{project.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};