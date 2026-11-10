
'use client';

import { motion, Variants } from 'framer-motion';

type Project = {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  results: string[];
  image: string;
  link?: string;
  linkLabel?: string;
};

const projects: Project[] = [
  {
    title: 'Robot Payment API',
    category: 'Backend · API Testing',
    description:
      'REST API for a payment terminal, built with FastAPI and PostgreSQL. Includes authentication, data modeling and automated API tests.',
    technologies: [
      'Python',
      'FastAPI',
      'Pytest',
      'HTTPX',
      'PostgreSQL',
      'Docker',
      'GitLab CI',
      'Terraform',
    ],
    results: [
      '22/22 automated tests passing',
      'Approximately 87% test coverage',
      'Ruff clean and zero mypy errors',
    ],
    image: '/projects/robot-api.jpg',
    link: 'https://gitlab.com/alexvlasov182/robot-payment',
    linkLabel: 'View source code',
  },
  {
    title: 'FlowBoard',
    category: 'Full-Stack Development',
    description:
      'Full-stack note-taking application with authentication, a REST API and a responsive user interface.',
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'Express',
      'PostgreSQL',
      'JWT',
      'Docker Compose',
      'AWS EC2',
    ],
    results: [
      'Full CRUD functionality',
      'Secure password hashing and JWT authentication',
      'Swagger API documentation',
      'Deployed application',
    ],
    image: '/projects/flowboard.jpg',
    link: 'https://flowboard-indol.vercel.app/',
    linkLabel: 'View live application',
  },
  {
    title: 'Fedora i18n Tooling',
    category: 'Open Source · Quality Tooling',
    description:
      "Tools for RTL-language validation and translation-coverage checks in Fedora's web infrastructure.",
    technologies: [
      'Vue.js',
      'Node.js',
      'JavaScript',
      'Git',
      'Open Source',
    ],
    results: [
      'RTL formatting validation',
      'Translation coverage checks',
      'Multiple merged pull requests',
    ],
    image: '/projects/fedora.png',
    link: 'https://www.fedoraproject.org/',
    linkLabel: 'Fedora Project',
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="scroll-mt-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants}
    >
      <motion.h2
        className="text-3xl font-bold mb-3"
        variants={itemVariants}
      >
        Projects
      </motion.h2>

      <p className="text-sm text-mutedLight dark:text-mutedDark mb-8">
        Selected projects demonstrating API testing, backend development
        and open-source contributions.
      </p>

      <motion.ul
        className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch"
        variants={containerVariants}
      >
        {projects.map((project) => (
          <motion.li
            key={project.title}
            variants={itemVariants}
            className="card group overflow-hidden h-full flex flex-col hover:shadow-xl transition-shadow duration-300"
          >
            <div className="overflow-hidden rounded-xl">
              <motion.img
                src={project.image}
                alt={`${project.title} project preview`}
                className="w-full aspect-[16/9] object-cover"
                loading="lazy"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.4 }}
              />
            </div>

            <div className="pt-5 flex flex-col flex-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary dark:text-primaryDark mb-2">
                {project.category}
              </p>

              <h3 className="text-xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-sm leading-relaxed text-mutedLight dark:text-mutedDark mb-4">
                {project.description}
              </p>

              <div className="mb-4">
                <p className="text-sm font-semibold mb-2">Key results</p>
                <ul className="space-y-1 text-sm">
                  {project.results.map((result) => (
                    <li key={result} className="flex items-start gap-2">
                      <span className="text-primary dark:text-primaryDark">
                        ✓
                      </span>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto pt-3">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="text-xs px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-primary dark:text-primaryDark hover:underline"
                >
                  {project.linkLabel}
                  <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </motion.section>
  );
}
