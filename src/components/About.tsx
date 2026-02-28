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
    'Designing and implementing automated QA workflows',
    'Reducing manual testing through CI/CD integration',
    'Ensuring system reliability in Dockerized environments',
    'Collaborating with developers and DevOps teams to maintain production-ready software',
    'Full-stack project deployment from design to production-ready systems (React, Node.js, PostgreSQL, Docker, AWS EC2)',
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
            Software Test Engineer
          </span>{' '}
          with hands-on experience in QA Automation and production-ready systems.
        </p>

        <p className="leading-relaxed">
          Master’s graduate in Aerospace Engineering with practical experience in software quality,
          test automation, and building production-ready systems. Skilled in Linux, Docker, and
          CI/CD pipelines, I combine engineering discipline with hands-on QA and development
          experience.
        </p>

        <div className="pl-4 border-l-4 border-primary/30 dark:border-primaryDark/30">
          <p className="font-medium mb-2">Proven experience in:</p>
          <ul className="space-y-2">
            {points.map((p, i) => (
              <motion.li
                key={i}
                className="flex items-start"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: 'easeOut' }}
              >
                <span className="text-primary dark:text-primaryDark mr-2">→</span>
                {p}
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
            Open to: Aerospace production · Systems validation · QA automation - Munich or Hybrid
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}
