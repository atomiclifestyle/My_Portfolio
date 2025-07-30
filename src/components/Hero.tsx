// components/Hero.tsx
import React from 'react';
import { Button } from './ui/button';

export const Hero = () => {
  return (
    <div className="hero min-h-[60vh] bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there! I'm a Developer.</h1>
          <p className="py-6">
            I build modern, efficient, and scalable web applications. Passionate about technology and problem-solving.
          </p>
          <Button asChild>
            <a href="#projects">View My Work</a>
          </Button>
        </div>
      </div>
    </div>
  );
};