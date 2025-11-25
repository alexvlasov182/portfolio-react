'use client';
import { motion } from 'framer-motion';
import { fadeInUp } from '../lib/microAnimations';

type Project = { title: string; description: string; image: string; link?: string };

const projects: Project[] = [
  {
    title: 'FlowBoard',
    description: 'Notion-style collaboration tool with React, Node.js, Docker, Kubernetes.',
    image: '/projects/flowboard.jpg',
    link: 'https://github.com/alexvlasov182/flowboard',
  },
  {
    title: 'Newsletter',
    description: 'Interactive analytics dashboard with charts and tables.',
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

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-16">
      <motion.h2
        className="text-3xl font-bold mb-8"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
      >
        Projects
      </motion.h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((p) => (
          <motion.li
            key={p.title}
            className="card overflow-hidden cursor-pointer group hover:shadow-xl transition-shadow duration-300"
          >
            <a href={p.link} target="_blank" rel="noopener noreferrer">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-xl mb-2">{p.title}</h3>
                <p className="text-sm text-mutedLight dark:text-mutedDark">{p.description}</p>
              </div>
            </a>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
