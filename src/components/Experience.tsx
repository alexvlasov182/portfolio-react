'use client';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaBuilding } from 'react-icons/fa';
import { fadeInUp } from '../lib/microAnimations';

type Experience = { title: string; description: string[]; company: string; city: string };

const experience: Experience[] = [
  {
    title: 'Software Developer',
    company: 'RoyalZSoftware',
    city: 'Weilheim, Bavaria, Germany',
    description: [
      'Co-developed a React Native (iOS) app for a platform matching customers with heating and plumbing tradespeople in the Munich area, including Google Maps integration and location-based features',
      'Built and maintained the company website on Next.js, including a blog system (MDX)',
      'Independently implemented frontend components from requirements through to release',
      'Diagnosed and fixed bugs in production; improved application stability through testing',
    ],
  },
  {
    title: 'QA Automation Engineer',
    company: 'QPLIX',
    city: 'Munich, Bavaria, Germany',
    description: [
      'Built and maintained 50+ automated end-to-end tests with TestCafe (TypeScript) for a wealth-management software platform (FinTech)',
      'Systematic defect analysis, reproduction, and documentation in close coordination with the development team',
      'Contributed to release processes and quality sign-offs',
      'Worked in a regulated environment with high requirements for data quality and stability',
    ],
  },
  {
    title: 'Open Source Contributor',
    company: 'Fedora Project',
    city: 'Munich, Bavaria, Germany',
    description: [
      "Built scripts for RTL-language validation and translation-coverage checks for Fedora's web infrastructure",
      'Helped prevent under-translated locales from reaching production',
      'Several pull requests successfully merged',
      'Worked to professional standards: Git workflow, pull requests, code review',
      'Collaborated with an international, distributed team in English',
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
        variants={fadeInUp}
      >
        Experience
      </motion.h2>
      <ul className="space-y-8">
        {experience.map((exp) => (
          <motion.li
            key={exp.title}
            className="card hover:scale-[1.03] hover:shadow-xl transition-transform duration-300"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
          >
            <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>

            <div className="flex items-center gap-4 text-sm text-mutedLight dark:text-mutedDark mb-2">
              <span className="flex items-center gap-1">
                <FaBuilding /> {exp.company}
              </span>
              <span className="flex items-center gap-1">
                <FaMapMarkerAlt /> {exp.city}
              </span>
            </div>

            <ul className="list-disc list-inside space-y-1 text-sm leading-relaxed">
              {exp.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}