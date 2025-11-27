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
          I&apos;m a frontend developer focused on shipping real,{' '}
          <span className="font-semibold text-primary dark:text-primaryDark">
            production-ready products
          </span>
          .
        </p>

        <p className="leading-relaxed">
          I started coding in 2020, moved from Ukraine to Munich in 2022, and spent the last two
          years building and scaling apps at <span className="font-medium">RoyalZSoftware</span> and{' '}
          <span className="font-medium">QPLIX</span>.
        </p>

        <div className="pl-4 border-l-4 border-primary/30 dark:border-primaryDark/30">
          <p className="font-medium mb-2">What I do best:</p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-primary dark:text-primaryDark mr-2">→</span>
              <span>
                Taking features from design to deployment{' '}
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  (Next.js, React, TypeScript)
                </span>
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary dark:text-primaryDark mr-2">→</span>
              <span>
                Building mobile apps that don&apos;t crash{' '}
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  (React Native, 85% crash reduction)
                </span>
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary dark:text-primaryDark mr-2">→</span>
              <span>
                Setting up scalable infrastructure{' '}
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  (Docker, AWS, CI/CD, Golang)
                </span>
              </span>
            </li>
          </ul>
        </div>

        <p className="leading-relaxed">
          Currently expanding into{' '}
          <span className="font-semibold text-primary dark:text-primaryDark">
            full-stack & cloud development
          </span>{' '}
          - because I enjoy delivering not only UI, but also the systems behind it.
        </p>

        <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
            Open to: Frontend · Full-Stack · DevOps roles - Munich or Hybrid
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}
