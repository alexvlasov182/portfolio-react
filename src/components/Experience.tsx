'use client';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaBuilding } from 'react-icons/fa';
import { fadeInUp } from '../lib/microAnimations';

type Experience = { title: string; description: string[]; company: string; city: string };

const experience: Experience[] = [
  {
    title: 'Open Source Contributor',
    company: 'Fedora Project',
    city: 'Munich, Bavaria, Germany',
    description: [
      'Contributed to Fedora web tooling using Vue.js and Node.js',
      'Developed scripts for RTL language and localization validation',
      'Implemented translation coverage checks for localization workflows',
      'Participated in code reviews and open-source collaboration',
      'Worked with internationalization (i18n) and web infrastructure',
    ],
  },
  {
    title: 'Junior Developer',
    company: 'RoyalZSoftware',
    city: 'Weilheim, Bavaria, Germany',
    description: [
      'Developed web and mobile features using React and React Native',
      'Implemented Google Maps integration and location-based features',
      'Built a blog and landing page using MDX',
      'Improved application stability through testing and UI optimization',
    ],
  },
  {
    title: 'QA Automation Engineer',
    company: 'QPLIX',
    city: 'Munich, Bavaria, Germany',
    description: [
      'Developed automated UI testing workflows for financial software',
      'Reduced manual testing through test automation',
      'Worked with CI/CD pipelines and automated test execution',
      'Collaborated with developers on bug investigation and releases',
      'Worked with test coverage, software quality and system stability',
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
