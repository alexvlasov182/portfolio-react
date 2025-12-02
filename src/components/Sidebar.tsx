'use client';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { IoDocumentText } from 'react-icons/io5';
import useActiveSection from '../hooks/useActiveSection';

export default function Sidebar() {
  const sections = ['about', 'tech-stack', 'experience', 'projects'];
  const active = useActiveSection(sections);

  const socialLinks = [
    { icon: <FaGithub />, link: 'https://github.com/alexvlasov182' },
    { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/oleksandr-vlasov-9969ab19b/' },
    {
      icon: <IoDocumentText />,
      link: 'https://drive.google.com/file/d/1Ku-wEbmqIELXs5KOpKAppoOkL2aWdt5b/view?usp=sharing',
    },
  ];

  return (
    <motion.aside
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
      className="flex flex-col"
    >
      <h1 className="text-5xl font-bold leading-tight">Oleksandr Vlasov</h1>
      <h2 className="text-xl mt-3 opacity-80">
        Frontend React/Next.js Developer - building production apps with measurable results.
      </h2>

      <p className="mt-6 max-w-xs text-base opacity-80">
        Exploring:{' '}
        <span className="font-semibold text-primary dark:text-primaryDark">
          Backend · Cloud · Infrastructure
        </span>
      </p>

      <nav className="mt-14 flex flex-col gap-4">
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
                className="h-px bg-gray-400 dark:bg-gray-600 origin-left"
                transition={{ duration: 0.3 }}
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
        {socialLinks.map((s, i) => (
          <a
            key={i}
            href={s.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-accent transition-colors"
          >
            {s.icon}
          </a>
        ))}
      </div>
    </motion.aside>
  );
}
