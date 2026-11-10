
'use client';

import { motion } from 'framer-motion';
import {
  FaMapMarkerAlt,
  FaBuilding,
  FaCalendar,
} from 'react-icons/fa';
import { fadeInUp } from '../lib/microAnimations';

type ExperienceItem = {
  title: string;
  company: string;
  city: string;
  date: string;
  category: 'Professional Experience' | 'Open Source';
  description: string[];
  featured?: boolean;
};

const experience: ExperienceItem[] = [
  {
    title: 'Open Source Contributor',
    company: 'Fedora Project',
    city: 'Remote',
    date: 'Jan 2026 – May 2026',
    category: 'Open Source',
    description: [
      "Developed scripts for RTL-language validation and translation-coverage checks for Fedora's web infrastructure",
      'Helped identify under-translated locales and RTL formatting issues before production',
      'Contributed multiple successfully merged pull requests',
      'Collaborated with an international distributed team using Git, pull requests and code reviews',
    ],
  },
  {
    title: 'Software Developer',
    company: 'RoyalZSoftware',
    city: 'Weilheim, Bavaria, Germany',
    date: 'Jul 2024 – Aug 2025 · Part-time',
    category: 'Professional Experience',
    description: [
      'Co-developed a React Native iOS application connecting customers with heating and plumbing service providers in the Munich area',
      'Implemented Google Maps integration and location-based features',
      'Built and maintained the company website using Next.js, including an MDX-based blog',
      'Developed frontend components from requirements through implementation and release',
      'Investigated production bugs and improved application stability',
    ],
  },
  {
    title: 'QA Automation Engineer',
    company: 'QPLIX',
    city: 'Munich, Bavaria, Germany',
    date: 'Sep 2023 – Jun 2024',
    category: 'Professional Experience',
    featured: true,
    description: [
      'Built and maintained 50+ automated end-to-end tests using TestCafe and TypeScript for a wealth-management software platform',
      'Analyzed, reproduced and documented defects in collaboration with the development team',
      'Contributed to release processes and quality sign-offs',
      'Worked in a FinTech environment with strong requirements for data quality and software reliability',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-16">
      <motion.h2
        className="text-3xl font-bold mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        Experience
      </motion.h2>

      <ul className="space-y-6">
        {experience.map((exp, index) => (
          <motion.li
            key={`${exp.company}-${exp.title}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeInUp}
            transition={{ delay: index * 0.08 }}
            className={`card transition-all duration-300 hover:shadow-xl ${exp.featured
                ? 'border-l-4 border-primary dark:border-primaryDark'
                : ''
              }`}
          >
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary dark:text-primaryDark">
                {exp.category}
              </span>

              {exp.featured && (
                <span className="text-xs font-semibold text-primary dark:text-primaryDark">
                  Key QA Experience
                </span>
              )}
            </div>

            <h3 className="text-xl font-semibold mb-2">
              {exp.title}
            </h3>

            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-mutedLight dark:text-mutedDark mb-4">
              <span className="flex items-center gap-2">
                <FaBuilding aria-hidden="true" />
                {exp.company}
              </span>

              <span className="flex items-center gap-2">
                <FaMapMarkerAlt aria-hidden="true" />
                {exp.city}
              </span>

              <span className="flex items-center gap-2">
                <FaCalendar aria-hidden="true" />
                {exp.date}
              </span>
            </div>

            <ul className="list-disc list-inside space-y-2 text-sm leading-relaxed">
              {exp.description.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
