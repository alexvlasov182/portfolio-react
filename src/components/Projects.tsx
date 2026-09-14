'use client';
import { motion, Variants } from 'framer-motion';

type Project = { title: string; description: string; image: string; link?: string };

const projects: Project[] = [
  {
    title: 'QA Automation - QPLIX Wealth Management Platform',
    description:
      "Tested and stabilized QPLIX's wealth-management reporting platform: multi-currency, multi-language client reports across 350+ performance and risk metrics. Built 50+ automated E2E tests (TestCafe/TS), defect analysis, and release sign-offs in FinTech.",
    image: '/projects/qplix.png',
    link: 'https://www.qplix.com/product/features/reporting-analytics',
  },
  {
    title: 'FlowBoard',
    description:
      'Production-ready note-taking app with JWT auth and secure password hashing, full CRUD via a RESTful API, and auto-generated Swagger docs. Built with React, TypeScript, Node.js/Express and PostgreSQL, with a responsive Tailwind UI, fully containerized with Docker Compose, and deployed on AWS EC2 with production configuration.',
    image: '/projects/flowboard.jpg',
    link: 'https://flowboard-indol.vercel.app/',
  },
  {
    title: 'Robot Payment API',
    description:
      'FastAPI/PostgreSQL (SQLAlchemy 2.0) backend for a payment terminal, with authentication and data modeling. Containerized with Docker, infrastructure as code via Terraform on AWS, CI/CD via GitLab CI (22/22 tests passing, ~87% coverage, ruff clean, 0 mypy errors).',
    image: '/projects/robot-api.jpg',
    link: 'https://gitlab.com/alexvlasov182/robot-payment',
  },
  {
    title: 'Fedora i18n Tooling',
    description:
      "RTL-language validation and translation-coverage checks for Fedora's web infrastructure, built with Vue.js and Node.js. Caught under-translated and RTL-formatting issues before they reached production, and contributed several merged pull requests as part of an international, distributed open-source team.",
    image: '/projects/fedora.png',
    link: 'https://www.fedoraproject.org/',
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

      <motion.ul
        className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch"
        variants={containerVariants}
      >
        {projects.map((p, i) => (
          <motion.li
            key={p.title}
            className="card overflow-hidden cursor-pointer group rounded-xl shadow-sm hover:shadow-2xl transition-shadow duration-500 h-full"
            variants={itemVariants}
          >
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col h-full"
            >
              <div className="overflow-hidden rounded-xl shrink-0">
                <motion.img
                  src={p.image}
                  alt={p.title}
                  className="w-full aspect-[16/9] object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="mt-4 p-2 flex flex-col flex-1">
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