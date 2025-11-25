'use client';
import { motion } from 'framer-motion';
import { slideInLeft } from '../lib/microAnimations';
import ThemeSwitcher from './ThemeSwitcher';

export default function About() {
  return (
    <motion.section
      id="about"
      className="scroll-mt-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-between mb-4">
        <motion.h2 className="text-3xl font-bold" variants={slideInLeft}>
          About Me
        </motion.h2>
        <ThemeSwitcher />
      </div>

      <motion.p className="leading-relaxed" variants={slideInLeft}>
        Frontend Developer with hands-on experience in React, Next.js, React Native, expanding into
        Cloud & DevOps.
      </motion.p>
    </motion.section>
  );
}
