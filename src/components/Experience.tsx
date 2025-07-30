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
    title: 'Full-stack Engineer Intern',
    company: 'Delisys Technologies',
    duration: 'January 2025 - Present',
    description: '',
    detailedDescription:
      'Contributed to the development of OPS360 web application and marketing website using modern full-stack technologies. Gained hands-on experience in both front-end and back-end development cycles.',
    logo: (
      <Image
        src="/assets/delisys_logo.png"
        alt="Logo"
        width={48}
        height={48}
        className="h-20 w-20"
      />
    ),
  },
  {
    title: 'Project Student',
    company: 'National Remote Sensing Center (NRSC), ISRO',
    duration: 'June 2025 - July 2025',
    description: '',
    detailedDescription:
      "Worked on Build on Bhuvan - A developer-centric platform and SDK for GIS application development using ISRO's Bhuvan Geoportal.",
    logo: (
      <Image
        src="/assets/isro2.jpg"
        alt="Logo"
        width={48}
        height={48}
        className="h-20 w-20"
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
            className="relative transition-all duration-300 ease-in-out hover:scale-[1.08] hover:shadow-xl cursor-pointer group"
          >
            <CardHeader className="relative flex flex-row items-start gap-4">
              <div className="p-1 border border-border">
                {exp.logo}
              </div>

              <div className="flex flex-col transition-all duration-500 ease-in-out gap-1">
                <CardTitle className='mb-2'>{exp.title}</CardTitle>
                <p>{exp.company}</p>
                <CardDescription className="font-semibold">{exp.duration}</CardDescription>
              </div>
            </CardHeader>

            <CardContent>
              {/* <p className="transition-all duration-300 ease-in-out">{exp.description}</p> */}
              <p
                className="mt-4 text-sm text-muted-foreground max-h-0 overflow-hidden opacity-0 transition-all duration-500 ease-in-out group-hover:max-h-96 group-hover:opacity-100"
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