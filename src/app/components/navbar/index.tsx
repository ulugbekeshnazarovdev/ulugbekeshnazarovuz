'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'Blog', href: '#blog' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Skills', href: '#skills' },
  { name: 'About Me', href: '#about-me' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = (): void => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="w-full h-20 fixed top-0 z-50">
      <div className="container mx-auto px-5 py-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-zinc-900/40 backdrop-blur-lg border border-white/5 px-8 rounded-lg w-full h-20 flex items-center justify-between"
        >
          <Link href="/">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="font-mono font-bold uppercase text-3xl text-green-500"
            >
              ulugbek.uz
            </motion.span>
          </Link>

          {/* Desktop Menu */}
          <ul className="md:flex items-center justify-between gap-6 hidden">
            {navItems.map((item) => (
              <motion.li key={item.name} whileHover={{ scale: 1.1 }}>
                <Link
                  href={item.href}
                  className="text-xl hover:text-green-400 transition-colors"
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="block md:hidden"
          >
            <button
              onClick={handleToggle}
              className="flex items-center justify-center backdrop-blur-lg border border-gray-600 rounded-md p-2"
            >
              {isOpen ? (
                <X className="h-8 w-8" />
              ) : (
                <Menu className="h-8 w-8" />
              )}
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="container mx-auto px-5"
          >
            <div className="fixed inset-x-5 top-5 z-40 bg-zinc-900/80 backdrop-blur-lg border border-white/5 rounded-lg px-5 py-6">
              <ul className="flex flex-col items-start gap-4">
                {navItems.map((item) => (
                  <motion.li
                    key={item.name}
                    className="w-full"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={item.href}
                      onClick={handleToggle}
                      className="text-xl hover:bg-zinc-700 rounded-lg inline-block p-2 w-full transition-colors"
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
