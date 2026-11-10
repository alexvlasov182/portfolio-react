'use client';

import { easeOut, motion } from 'framer-motion';
import ThemeSwitcher from './ThemeSwitcher';

export const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const highlights = [
  'Built and maintained 50+ automated E2E tests using TestCafe and TypeScript at QPLIX',
  'Software development experience with React Native and Next.js',
  'Open-source contributions to Fedora web infrastructure',
  'Personal API testing projects using Python, FastAPI and PostgreSQL',
];

export default function About() {
  return (
    <motion.section
      id="about"
      className="scroll-mt-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={slideInLeft}
    >
      <div className="flex items-center justify-between mb-6">
        <motion.h2 className="text-3xl font-bold" variants={slideInLeft}>
          About Me
        </motion.h2>
        <ThemeSwitcher />
      </div>

      <motion.div className="space-y-5">
        <p className="text-lg leading-relaxed">
          I&apos;m a{' '}
          <span className="font-semibold text-primary dark:text-primaryDark">
            QA Automation Engineer
          </span>{' '}
          with a background in software development and engineering. I hold a
          Bachelor&apos;s degree and a postgraduate specialist qualification in
          Metrology and Measurement Technology.
        </p>

        <p className="leading-relaxed">
          At QPLIX, I built and maintained more than 50 automated end-to-end
          tests using TestCafe and TypeScript for a wealth-management platform.
          I also have software development experience with React Native and
          Next.js, and have contributed to Fedora&apos;s open-source tooling.
        </p>

        <p className="leading-relaxed">
          Alongside my professional experience, I build projects involving API
          testing, Python, FastAPI, PostgreSQL, Docker and CI/CD. I&apos;m
          currently expanding my skills in Python test automation and modern
          testing practices.
        </p>

        <div className="pl-4 border-l-4 border-primary/30 dark:border-primaryDark/30">
          <p className="font-medium mb-3">Highlights</p>
          <ul className="space-y-3">
            {highlights.map((item, index) => (
              <motion.li
                key={item}
                className="flex items-start"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.5,
                  ease: 'easeOut',
                }}
              >
                <span className="text-primary dark:text-primaryDark mr-2">
                  →
                </span>
                {item}
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
            Open to QA Automation Engineer opportunities
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}