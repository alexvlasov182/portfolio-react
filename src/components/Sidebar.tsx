'use client';

import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { IoDocumentText } from 'react-icons/io5';
import { useMemo } from 'react';
import useActiveSection from '../hooks/useActiveSection';

const sections = ['about', 'tech-stack', 'experience', 'projects'] as const;
type Section = (typeof sections)[number];

export default function Sidebar() {
  // Convert readonly tuple to mutable string[] for the hook
  const active = useActiveSection([...sections] as string[]);

  const socialLinks = useMemo(
    () => [
      {
        icon: <FaGithub />,
        link: 'https://github.com/alexvlasov182',
        label: 'GitHub profile',
      },
      {
        icon: <FaLinkedin />,
        link: 'https://www.linkedin.com/in/oleksandr-vlasov-9969ab19b/',
        label: 'LinkedIn profile',
      },
      {
        icon: <IoDocumentText />,
        link: 'https://drive.google.com/file/d/17uh7c9sqms-uZhRG0e1T5mTV4t452mlb/view?usp=sharing',
        label: 'Resume',
      },
    ],
    [],
  );

  return (
    <motion.aside
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col"
    >
      <h1 className="text-5xl font-bold leading-tight">Oleksandr Vlasov</h1>

      <h2 className="text-xl mt-3 opacity-80">
        Aerospace Engineering MSc · QA & Test Automation · Production-Ready Systems
      </h2>

      <p className="mt-6 max-w-xs text-base opacity-80">
        Exploring:{' '}
        <span className="font-semibold text-primary dark:text-primaryDark">
          Backend · Cloud · Infrastructure
        </span>
      </p>

      <nav className="mt-14 flex flex-col gap-4" aria-label="Section navigation">
        {sections.map((section) => {
          const isActive = active === section;

          return (
            <motion.a
              key={section}
              href={`#${section}`}
              className={`group flex items-center transition-colors ${
                isActive ? 'text-accent' : 'hover:text-accent'
              }`}
            >
              <motion.span
                animate={{ width: isActive ? 60 : 20 }}
                transition={{ duration: 0.3 }}
                className="h-px bg-gray-400 dark:bg-gray-600 origin-left"
              />

              <span
                className={`ml-4 text-xs font-bold uppercase tracking-widest ${
                  isActive ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'
                }`}
              >
                {section}
              </span>
            </motion.a>
          );
        })}
      </nav>

      <div className="mt-10 flex gap-4">
        {socialLinks.map(({ icon, link, label }) => (
          <a
            key={label}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-2xl hover:text-accent transition-colors"
          >
            {icon}
          </a>
        ))}
      </div>
    </motion.aside>
  );
}
