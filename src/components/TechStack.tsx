'use client';
import { motion } from 'framer-motion';

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
      viewport={{ once: false, amount: 0.3 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } },
      }}
    >
      <div className="mt-0">
        <motion.h2
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          Tech Stack
        </motion.h2>

        <motion.div className="flex flex-wrap gap-2">
          {techs.map((tech, i) => (
            <motion.span
              key={tech}
              className="px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-accent transition-colors hover:text-white dark:hover:bg-accent cursor-default"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
