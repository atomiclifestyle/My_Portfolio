// components/Profiles.tsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, Code } from 'lucide-react'; // Icons for the profiles

const profilesData = [
  {
    title: 'GitHub',
    username: 'atomiclifestyle', // <-- IMPORTANT: Replace with your username
    href: 'https://github.com/atomiclifestyle', // <-- IMPORTANT: Replace
    icon: <Github className="h-8 w-8" />,
    screenshotUrl: '/assets/github.PNG',
    description: 'View my projects, contributions, and code.',
  },
  {
    title: 'LeetCode',
    username: 'harihk24', // <-- IMPORTANT: Replace with your username
    href: 'https://leetcode.com/u/harihk24', // <-- IMPORTANT: Replace
    icon: <Code className="h-8 w-8" />,
    screenshotUrl: '/assets/leetcode.PNG',
    description: 'Check out my problem-solving skills and contest ratings.',
  },
];

export const Profiles = () => {
  return (
    <section id="profiles" className="container py-24 bg-base-200 rounded-box">
      <h2 className="text-3xl font-bold text-center mb-12">Coding Profiles</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {profilesData.map((profile, index) => (
          <a
            key={index}
            href={profile.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <Card className="overflow-hidden h-full transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2">
              <CardHeader className="flex flex-row items-center gap-4 p-4">
                <div className="p-2 bg-secondary/80 rounded-md">{profile.icon}</div>
                <div>
                  <CardTitle>{profile.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{profile.username}</p>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <img
                  src={profile.screenshotUrl}
                  alt={`${profile.title} profile screenshot`}
                  className="w-full h-auto object-cover border-t"
                />
                {/* <div className="p-4">
                  <p className="text-muted-foreground">{profile.description}</p>
                </div> */}
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
      {/* <p className="text-center text-sm text-muted-foreground mt-8">
        <strong>Note:</strong> Replace the placeholder images with your actual profile screenshots for a personalized touch.
      </p> */}
    </section>
  );
};