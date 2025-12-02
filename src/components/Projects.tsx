'use client';
import { motion, Variants } from 'framer-motion';

type Project = { title: string; description: string; image: string; link?: string };

const projects: Project[] = [
  {
    title: 'FlowBoard',
    description: 'Notion-style collaboration tool with React, Node.js, Docker, Kubernetes.',
    image: '/projects/flowboard.jpg',
    link: 'https://flowboard-indol.vercel.app/',
  },
  {
    title: 'Newsletter Platform',
    description:
      'Full-stack newsletter service with subscriber management and analytics dashboard.',
    image: '/projects/newsletter.png',
    link: 'https://royalzsoftware.de/newsletter',
  },
  {
    title: 'Course Marketplace',
    description: 'Udemy-like platform with Stripe, Mux, PostgreSQL, Docker.',
    image: '/projects/courses-page.png',
    link: 'https://royalzsoftware.de/courses',
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="scroll-mt-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.h2
        className="text-3xl font-bold mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        Projects
      </motion.h2>

      <motion.ul className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={containerVariants}>
        {projects.map((p, i) => (
          <motion.li
            key={p.title}
            className="card overflow-hidden cursor-pointer group rounded-xl shadow-sm hover:shadow-2xl transition-shadow duration-500"
            variants={itemVariants}
          >
            <a href={p.link} target="_blank" rel="noopener noreferrer">
              <div className="overflow-hidden rounded-xl">
                <motion.img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="mt-4 p-2">
                <motion.h3
                  className="font-semibold text-xl mb-2"
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                >
                  {p.title}
                </motion.h3>
                <motion.p
                  className="text-sm text-mutedLight dark:text-mutedDark"
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 0.15 * i }}
                >
                  {p.description}
                </motion.p>
              </div>
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </motion.section>
  );
}
