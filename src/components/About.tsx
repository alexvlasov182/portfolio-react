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

export default function About() {
  const points = [
    'Python and backend development (FastAPI, testing)',
    'Linux, Docker and CI/CD',
    'Electronics and measurement fundamentals',
    'Mathematics',
    'German',
  ];

  return (
    <motion.section
      id="about"
      className="scroll-mt-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={slideInLeft}
    >
      <div className="flex items-center justify-between mb-6">
        <motion.h2 className="text-3xl font-bold" variants={slideInLeft}>
          About Me
        </motion.h2>
        <ThemeSwitcher />
      </div>

      <motion.div className="space-y-4">
        <p className="text-lg leading-relaxed">
          I&apos;m an{' '}
          <span className="font-semibold text-primary dark:text-primaryDark">
            Engineer
          </span>{' '}
          with a background in metrology and measurement technology
          (Bachelor's degree and a postgraduate specialist qualification).
        </p>

        <p className="leading-relaxed">
          I worked in
          web development and QA automation for about two years, and now I learn and
          build personal projects in my free time, mainly with Python, FastAPI, Docker,
          Linux and CI/CD.
        </p>

        <p className="leading-relaxed">
          I'm especially interested in the place where software meets the physical
          world: measurement, sensors, electronics and automation. This site is where I
          keep my projects, notes and what I'm learning.
        </p>



        <div className="pl-4 border-l-4 border-primary/30 dark:border-primaryDark/30">
          <p className="font-medium mb-2">Currently learning:</p>

          <ul className="space-y-2">
            {points.map((p, i) => (
              <motion.li
                key={i}
                className="flex items-start"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.15,
                  duration: 0.6,
                  ease: 'easeOut',
                }}
              >
                <span className="text-primary dark:text-primaryDark mr-2">→</span>
                {p}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
            Currently learning: Mathematics · Python · Backend · Linux · Automation · German
          </p>
        </div> */}
      </motion.div>
    </motion.section>
  );
}
