'use client';
import { ArrowRight } from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Devs from '../../assets/devs.jpg';

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden" id="hero">
      {/* Background Image */}
      <Image
        src={Devs}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className="absolute inset-0 z-0"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-purple-900/60 via-purple-700/40 to-transparent"></div>

      <section className="relative z-20 container mx-auto px-5 py-20 text-center flex items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full max-w-4xl"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-zinc-900/40 w-full backdrop-blur-sm border border-white/10 py-16 rounded-xl px-6 md:px-10 shadow-2xl"
          >
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
            >
              Crafting Digital Experiences
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto"
            >
              I'm a passionate developer creating intuitive and powerful web
              applications that make a difference.
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <button className="text-lg px-6 py-3 bg-purple-600 hover:bg-purple-700 transition-colors duration-300">
                View My Work <ArrowRight className="ml-2" />
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Hero;
