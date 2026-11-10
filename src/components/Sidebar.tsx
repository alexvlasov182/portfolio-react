'use client';

import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaGitlab } from 'react-icons/fa';
import { IoDocumentText } from 'react-icons/io5';
import useActiveSection from '../hooks/useActiveSection';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'tech-stack', label: 'Tech Stack' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
];

const sectionIds = sections.map((section) => section.id);

const socialLinks = [
  {
    icon: <FaGitlab />,
    href: 'https://gitlab.com/alexvlasov182',
    label: 'GitLab profile',
  },
  {
    icon: <FaGithub />,
    href: 'https://github.com/alexvlasov182',
    label: 'GitHub profile',
  },
  {
    icon: <FaLinkedin />,
    href: 'https://www.linkedin.com/in/oleksandr-vlasov-9969ab19b/',
    label: 'LinkedIn profile',
  },
  {
    icon: <IoDocumentText />,
    href: 'https://drive.google.com/file/d/1Xy57P4AAOq6p9wT9kf6sWvK2HEsOz8mm/view?usp=sharing',
    label: 'Resume',
  },
];

export default function Sidebar() {
  const active = useActiveSection([...sectionIds]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col"
    >
      <h1 className="text-5xl font-bold leading-tight">
        Oleksandr Vlasov
      </h1>

      <h2 className="text-xl mt-3 opacity-80">
        QA Automation Engineer
      </h2>

      <p className="mt-6 max-w-xs text-base opacity-80">
        Test Automation · TypeScript · Python · Linux · Docker
      </p>

      <nav
        className="mt-14 flex flex-col gap-4"
        aria-label="Section navigation"
      >
        {sections.map((section) => {
          const isActive = active === section.id;

          return (
            <motion.a
              key={section.id}
              href={`#${section.id}`}
              aria-current={isActive ? 'location' : undefined}
              className={`group flex items-center transition-colors ${isActive ? 'text-accent' : 'hover:text-accent'
                }`}
            >
              <motion.span
                animate={{ width: isActive ? 60 : 20 }}
                transition={{ duration: 0.3 }}
                className="h-px bg-gray-400 dark:bg-gray-600 origin-left"
              />

              <span
                className={`ml-4 text-xs font-bold uppercase tracking-widest ${isActive
                    ? 'opacity-100'
                    : 'opacity-70 group-hover:opacity-100'
                  }`}
              >
                {section.label}
              </span>
            </motion.a>
          );
        })}
      </nav>

      <div className="mt-10 flex gap-4">
        {socialLinks.map(({ icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            className="text-2xl hover:text-accent transition-colors"
          >
            {icon}
          </a>
        ))}
      </div>
    </motion.div>
  );
}