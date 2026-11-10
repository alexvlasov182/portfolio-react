'use client';

import { motion } from 'framer-motion';

const categories = [
  {
    title: 'QA & Test Automation',
    technologies: [
      'TestCafe',
      'TypeScript',
      'E2E Testing',
      'API Testing',
    ],
  },
  {
    title: 'Programming & Web',
    technologies: [
      'JavaScript',
      'React',
      'Python',
      'Go',
    ],
  },
  {
    title: 'Backend & Databases',
    technologies: [
      'FastAPI',
      'PostgreSQL',
    ],
  },
  {
    title: 'Tools & Infrastructure',
    technologies: [
      'Docker',
      'Git',
      'CI/CD',
      'Linux',
    ],
  },
];

export default function TechStack() {
  return (
    <motion.section
      id="tech-stack"
      className="scroll-mt-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.12 },
        },
      }}
    >
      <motion.h2
        className="text-3xl font-bold mb-8"
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        Tech Stack
      </motion.h2>

      <div className="space-y-6">
        {categories.map((category) => (
          <motion.div
            key={category.title}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {category.technologies.map((technology) => (
                <span
                  key={technology}
                  className="px-3 py-1.5 rounded-full text-sm font-medium bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-primary hover:text-white dark:hover:bg-primaryDark transition-colors cursor-default"
                >
                  {technology}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}