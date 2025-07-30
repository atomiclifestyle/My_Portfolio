import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';

const experienceData = [
  {
    title: 'Fullstack Intern',
    company: 'Delisys',
    description:
      'Contributed to the development of web applications using modern full-stack technologies. Gained hands-on experience in both front-end and back-end development cycles.',
    detailedDescription:
      'Developed and maintained web applications using React, Node.js, and PostgreSQL. Collaborated with a team of developers to implement responsive UI designs and optimized APIs, reducing load times by 20%. Participated in code reviews and agile sprints.',
    logo: (
      <Image
        src="/assets/delisys_logo.png"
        alt="Logo"
        width={48}
        height={48}
        className="h-12 w-12"
      />
    ),
  },
  {
    title: 'Project Student',
    company: 'NRSC, ISRO',
    description:
      'Worked on geospatial data processing and analysis. Contributed to a project focused on leveraging satellite imagery and GIS tools for environmental monitoring.',
    detailedDescription:
      'Processed satellite imagery using Python and ArcGIS to support environmental monitoring initiatives. Developed scripts to automate data preprocessing, improving efficiency by 15%. Presented findings to a team of scientists and contributed to a published report.',
    logo: (
      <Image
        src="/assets/nrsc_logo.png"
        alt="Logo"
        width={48}
        height={48}
        className="h-12 w-12"
      />
    ),
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="container py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Work Experience</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {experienceData.map((exp, index) => (
          <Card
            key={index}
            className="relative transition-all duration-300 hover:scale-[1.10] hover:shadow-xl cursor-pointer group"
          >
            {/* CardHeader with logo positioned relatively, transitioning to top center on hover */}
            <CardHeader className="relative flex flex-col items-start gap-4">
              <div className="p-1 rounded-md bg-secondary transition-all duration-300 group-hover:absolute group-hover:top-4 group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:scale-500 group-hover:bg-black">
                {exp.logo}
              </div>
              <div className="flex flex-col mt-14 group-hover:mt-20">
                <CardTitle>{exp.title}</CardTitle>
                <CardDescription className="font-semibold">{exp.company}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              {/* Short description always visible */}
              <p className="transition-all duration-300">{exp.description}</p>
              {/* Detailed description hidden by default, revealed on hover */}
              <p
                className="mt-4 text-sm text-muted-foreground max-h-0 overflow-hidden transition-all duration-300 group-hover:max-h-96 group-hover:opacity-100 opacity-0"
              >
                {exp.detailedDescription}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};