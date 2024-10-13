import { Button } from '@/components/ui/button';
import { Github, Linkedin, Twitter } from 'lucide-react';
import React from 'react';

const Footer = () => {
  const date = new Date();
  return (
    <footer className=" border-white/10 border-t ">
      <div className="container mx-auto px-5 py-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-gray-400 mb-4 md:mb-0">
          © {date.getFullYear()} ulugbekeshnazarov.uz . All rights reserved.
        </div>
        <div className="flex space-x-4">
          <Button variant="ghost" size="icon">
            <Github className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Twitter className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
