'use client';
import { motion } from 'framer-motion';
import { fadeInUp } from '../lib/microAnimations';
import { FaMapMarkerAlt, FaBuilding } from 'react-icons/fa';

type Experience = { title: string; description: string[]; company: string; city: string };

const experience: Experience[] = [
  {
    title: 'React & React Native Engineer',
    company: 'RoyalZSoftware',
    city: 'Weilheim, Bavaria, Germany',
    description: [
      'Architected and delivered course marketplace platform (Next.js)',
      'Built company landing page and MDX-powered blog, taking full ownership of frontend architecture and deployment',
      'Developed React Native calendar feature with advanced sorting/filtering, reducing user task completion time by 40%',
      'Reduced app crashes by 85% through UI refinements, loading states, and comprehensive testing',
    ],
  },
  {
    title: 'Automation Quality Assurance',
    company: 'QPLix',
    city: 'Munich, Bavaria, Germany',
    description: [
      'Designed and executed exploratory tests to validate new features and bug fixes.',
      'Automated UI tests using TypeScript & TestCafe to streamline regression testing.',
      'Created clear test documentation and filed bug reports in collaboration with dev teams.',
      'Assisted rollout management by reviewing builds and supporting release approvals.',
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
