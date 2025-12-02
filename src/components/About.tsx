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
    'Taking features from design to deployment (Next.js, React, TypeScript)',
    'Building mobile apps that don’t crash (React Native, 85% crash reduction)',
    'Setting up scalable infrastructure (Docker, AWS, CI/CD, Golang)',
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
          I&apos;m a frontend developer focused on shipping real,{' '}
          <span className="font-semibold text-primary dark:text-primaryDark">
            production-ready products
          </span>
          .
        </p>

        <p className="leading-relaxed">
          Based in Munich with 2+ years of experience delivering and scaling web and mobile
          applications at <span className="font-medium">RoyalZSoftware</span> and{' '}
          <span className="font-medium">QPLIX</span>.
        </p>

        <div className="pl-4 border-l-4 border-primary/30 dark:border-primaryDark/30">
          <p className="font-medium mb-2">What I do best:</p>
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

        <p className="leading-relaxed mt-4">
          Currently expanding into{' '}
          <span className="font-semibold text-primary dark:text-primaryDark">
            full-stack & cloud development
          </span>{' '}
          — with Node.js, Golang, AWS, and Docker.
        </p>

        <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
            Open to: Frontend · Full-Stack · DevOps roles — Munich or Hybrid
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}
