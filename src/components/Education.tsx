// components/Education.tsx
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { School } from 'lucide-react'; // Using a generic school icon

const educationData = [
  {
    institution: 'International Institute of Information Technology (IIIT), Bhubaneswar',
    degree: 'Bachelor of Technology - B.Tech',
    duration: '2023 - 2027',
    logo: <School className="h-12 w-12" />,
  },
  // You can add more educational background here
];

export const Education = () => {
  return (
    <section id="education" className="container py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
      <div className="max-w-2xl mx-auto">
        {educationData.map((edu, index) => (
          <Card
            key={index}
            className="transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
          >
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-1 rounded-md bg-secondary">{edu.logo}</div>
              <div className="flex flex-col">
                <CardTitle>{edu.institution}</CardTitle>
                <CardDescription className="font-semibold">{edu.degree}</CardDescription>
                <p className="text-sm text-muted-foreground">{edu.duration}</p>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};