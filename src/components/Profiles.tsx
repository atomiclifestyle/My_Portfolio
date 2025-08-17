'use client';

// components/Profiles.tsx
import React, { useState, useRef, useLayoutEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, Code } from 'lucide-react';

const profilesData = [
  {
    title: 'GitHub',
    username: 'atomiclifestyle',
    href: 'https://github.com/atomiclifestyle',
    icon: <Github className="h-8 w-8" />,
    graphScreenshotUrl: '/assets/github-graph.PNG',
    fullScreenshotUrl: '/assets/github-full.PNG',
  },
  {
    title: 'LeetCode',
    username: 'harihk24',
    href: 'https://codolio.com/profile/harihk24',
    icon: <Code className="h-8 w-8" />,
    graphScreenshotUrl: '/assets/leetcode-graph2.PNG',
    fullScreenshotUrl: '/assets/leetcode-full.PNG',
  },
];

const ProfileCard = ({ profile }: { profile: typeof profilesData[0] }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [cardHeight, setCardHeight] = useState<number | 'auto'>('auto');
  const graphRef = useRef<HTMLImageElement>(null);
  const fullRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const setInitialHeight = () => {
      if (graphRef.current) {
        setCardHeight(graphRef.current.offsetHeight);
      }
    };
    
    if (graphRef.current?.complete) {
        setInitialHeight();
    } else if (graphRef.current) {
        graphRef.current.onload = setInitialHeight;
    }
  }, []);

  const handleMouseEnter = () => {
    if (fullRef.current) {
      setCardHeight(fullRef.current.offsetHeight);
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (graphRef.current) {
      setCardHeight(graphRef.current.offsetHeight);
    }
    setIsHovered(false);
  };

  return (
    <a
      href={profile.href}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Card className="overflow-hidden h-full transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2">
        <CardHeader className="flex flex-row items-center gap-4 p-4">
          <div className="p-2 bg-secondary/80 rounded-md">{profile.icon}</div>
          <div>
            <CardTitle>{profile.title}</CardTitle>
            <p className="text-sm text-muted-foreground">{profile.username}</p>
          </div>
        </CardHeader>
        <div
          style={{ height: cardHeight }}
          className="relative transition-[height] duration-300 ease-in-out"
        >
          <img
            ref={graphRef}
            src={profile.graphScreenshotUrl}
            alt={`${profile.title} contribution graph`}
            className={`w-full h-auto object-cover border-t absolute top-0 left-0 transition-opacity duration-300 ease-in-out ${
              isHovered ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <img
            ref={fullRef}
            src={profile.fullScreenshotUrl}
            alt={`${profile.title} full profile screenshot`}
            className={`w-full h-auto object-cover border-t absolute top-0 left-0 transition-opacity duration-300 ease-in-out ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>
      </Card>
    </a>
  );
};

export const Profiles = () => {
  return (
    <section id="profiles" className="container py-24 bg-base-200 rounded-box">
      <h2 className="text-3xl font-bold text-center mb-12">Coding Profiles</h2>
      {/* Key Change is here: added 'items-start' */}
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {profilesData.map((profile, index) => (
          <ProfileCard key={index} profile={profile} />
        ))}
      </div>
    </section>
  );
};