'use client';
import { motion, Variants } from 'framer-motion';

type Project = { title: string; description: string; image: string; link?: string };

const projects: Project[] = [
  {
    title: 'Robot Payment API',
    description:
      'Containerized payment API for robot terminals utilizing the Repository pattern and Dependency Injection. Isolated core business logic and enforced strict data validation boundaries. Stack: FastAPI, PostgreSQL, Docker, CI/CD, AWS, EC2',
    image: '/projects/robot-api.jpg',
    link: 'https://gitlab.com/alexvlasov182/robot-payment',
  },
  {
    title: 'Fedora i18n Tooling',
    description:
      'RTL validation scripts and translation coverage checks for Fedoras web infrastructure. Blocked under-translated locales from reaching production. Stack: Vue.js, Node.js',
    image: '/projects/fedora.png',
    link: 'https://www.fedoraproject.org/',
  },
  {
    title: 'FlowBoard',
    description:
      'Production-ready note-taking API. JWT auth, REST API with Swagger docs, Dockerized with Docker Compose, deployed on AWS EC2. Stack: Node.js, Express, PostgreSQL, Docker, AWS',
    image: '/projects/flowboard.jpg',
    link: 'https://flowboard-indol.vercel.app/',
  },
  {
    title: 'RoyalZSoftware',
    description:
      'Company site and MDX blog built with Next.js and TypeScript. Production deployment, responsive design. Stack: Next.js, TypeScript',
    image: '/projects/landing.png',
    link: 'https://royalzsoftware.de',
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
