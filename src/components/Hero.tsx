'use client';

import React from 'react';
import { Button } from './ui/button';
import { TypeAnimation } from 'react-type-animation';
import { Download } from 'lucide-react';

export const Hero = () => {
  return (
    <div
      className="hero min-h-[80vh] relative"
      style={{
        backgroundImage: "url('/assets/map-cap-2.PNG')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="hero-content text-center text-neutral-content relative z-10">
        <div className="max-w-2xl bg-black/70 p-8 rounded-xl border border-white/10 shadow-2xl backdrop-blur-sm">
          {/* <h1 className="mb-4 text-4xl md:text-5xl font-bold">
            Hello, I'm a
          </h1> */}
          
          <TypeAnimation
            sequence={[
              'Code.',
              1000,
              'Build.',
              1000,
              'Deploy.',
              1000,
            ]}
            wrapper="span"
            speed={50}
            className="text-4xl md:text-5xl font-extrabold text-primary-focus"
            style={{ display: 'inline-block' }}
            repeat={Infinity}
          />

          {/* <p className="py-6 text-lg">
            I build modern, efficient, and scalable applications with a passion for technology and creative problem-solving.
          </p> */}

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <Button size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/resume.pdf" download="Hari's_Resume.pdf">
                <Download className="mr-2 h-5 w-5" />
                My Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};