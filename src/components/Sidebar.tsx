'use client';
import { motion } from 'framer-motion';
import { lineGrow } from '../lib/microAnimations';
import { FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';
import ThemeSwitcher from './ThemeSwitcher';

export default function Sidebar() {
  const sections = ['about', 'experience', 'projects'];
  const socialLinks = [
    { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/oleksandr-vlasov-9969ab19b/' },
    { icon: <FaGithub />, link: 'https://github.com/alexvlasov182' },
  ];

  return (
    <motion.aside
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
      className="flex flex-col"
    >
      <h1 className="text-5xl font-bold leading-tight">Oleksandr Vlasov</h1>
      <h2 className="text-xl mt-3 opacity-80">Frontend Developer based in Munich</h2>

      <p className="mt-6 max-w-xs text-base opacity-80">
        I build production web apps with React and Next.js. Currently shipped: course marketplace
        (1000+ users), blog platform, mobile calendar app.
      </p>

      <p className="mt-6 max-w-xs text-base opacity-80">
        Exploring:{' '}
        <span className="font-semibold text-primary dark:text-primaryDark">
          AWS, Docker, Kubernetesfor
        </span>{' '}
        full-stack development.
      </p>

      <nav className="mt-14 flex flex-col gap-4">
        {sections.map((section) => (
          <motion.a
            key={section}
            href={`#${section}`}
            className="group flex items-center hover:text-accent transition-colors"
          >
            <motion.span
              className="w-8 h-px bg-gray-400 dark:bg-gray-600 origin-left"
              variants={lineGrow}
            ></motion.span>
            <span className="ml-4 text-xs font-bold uppercase tracking-widest opacity-70 group-hover:opacity-100">
              {section}
            </span>
          </motion.a>
        ))}
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
