'use client';
import { motion } from 'framer-motion';
import { fadeInUp } from '../lib/microAnimations';

const techs = [
  'JavaScript',
  'TypeScript',
  'React',
  'React Native',
  'Next.js',
  'Stripe',
  'Mux',
  'Node.js',
  'PostgreSQL',
  'AWS',
  'Docker',
  'CI/CD',
];

export default function TechStack() {
  return (
    <motion.section
      id="tech-stack"
      className="scroll-mt-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <div className="mt-0">
        <motion.h2 className="text-3xl font-bold mb-8">Tech Stack</motion.h2>

        <motion.div
          className="flex flex-wrap gap-2"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {techs.map((tech) => (
            <motion.span
              key={tech}
              className="px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-accent transition-colors hover:text-white dark:hover:bg-accent  cursor-default"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
