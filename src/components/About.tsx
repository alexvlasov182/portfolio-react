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
      <div className="flex items-center justify-between mb-6">
        <motion.h2 className="text-3xl font-bold" variants={slideInLeft}>
          About Me
        </motion.h2>
        <ThemeSwitcher />
      </div>

      <motion.div className="space-y-4" variants={slideInLeft}>
        <p className="text-lg leading-relaxed">
          I'm a frontend developer who loves building things that{' '}
          <span className="font-semibold text-primary dark:text-primaryDark">actually work</span>.
        </p>

        <p className="leading-relaxed">
          Started coding in 2020, moved from Ukraine to Munich in 2022. Spent the last 2 years
          shipping production apps at <span className="font-medium">RoyalZSoftware</span> and{' '}
          <span className="font-medium">QPLIX</span>.
        </p>

        <div className="pl-4 border-l-4 border-primary/30 dark:border-primaryDark/30">
          <p className="font-medium mb-2">What I do best:</p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-primary dark:text-primaryDark mr-2">→</span>
              <span>
                Taking ideas from design to deployment{' '}
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  (Next.js, React, TypeScript)
                </span>
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary dark:text-primaryDark mr-2">→</span>
              <span>
                Building mobile apps that don't crash{' '}
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  (React Native, 85% crash reduction)
                </span>
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary dark:text-primaryDark mr-2">→</span>
              <span>
                Setting up infrastructure that scales{' '}
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  (Docker, AWS, CI/CD)
                </span>
              </span>
            </li>
          </ul>
        </div>

        <p className="leading-relaxed">
          Right now I'm diving deeper into{' '}
          <span className="font-semibold text-primary dark:text-primaryDark">
            cloud technologies
          </span>{' '}
          because I realized I enjoy the deployment and infrastructure side as much as writing React
          components.
        </p>

        <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
            Open to: Frontend, Full-Stack, and DevOps roles in Munich
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}
