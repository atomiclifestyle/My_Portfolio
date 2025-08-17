// components/Navbar.tsx
import React from 'react';
import { Button } from './ui/button';

export const Navbar = () => {
  return (
    <div className="navbar bg-base-100/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl font-bold">Hari Kishore</a>
      </div>
      <div className="navbar-end">
        <div className="hidden md:flex gap-2">
          <Button variant="ghost" asChild>
            <a href="#experience">Experience</a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="#projects">Projects</a>
          </Button>
          <Button asChild>
            <a 
            href="https://www.linkedin.com/in/hari-kishoare-s"
            target="_blank"
            rel="noopener noreferrer"
            >Contact Me</a>
          </Button>
        </div>
      </div>
    </div>
  );
};