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
    'Building React and React Native interfaces with clean component structure',
    'Building backend APIs with Python and FastAPI',
    'Working with PostgreSQL, Docker and Linux',
    'Developing automated testing and CI/CD workflows',
    'Deploying and maintaining full-stack, practical software projects',
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
          I&apos;m a{' '}
          <span className="font-semibold text-primary dark:text-primaryDark">
            Software Developer
          </span>{' '}
          working across backend and frontend - Python/FastAPI on the server side,
          React and React Native on the client side.
        </p>

        <p className="leading-relaxed">
          Engineering degree in Metrology and Measurement Technology, plus a
          postgraduate specialist qualification (thesis in automated
          parametric-control systems) - alongside three years of professional
          experience in software development and QA automation. I like building
          things end-to-end: API design, data modeling, and the UI that sits on
          top of it - with solid testing and CI/CD around all of it.
        </p>

        <div className="pl-4 border-l-4 border-primary/30 dark:border-primaryDark/30">
          <p className="font-medium mb-2">IT experience:</p>

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

        <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
            Currently learning: Python · Backend · Linux · Automation
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}
