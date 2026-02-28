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
      'Developed RTL language validation scripts for localization workflows',
      'Implemented translation coverage checks (e.g. blocking <80% translated locales from production)',
      'Participated in code reviews and open-source collaboration processes',
      'Worked with internationalization (i18n) and frontend infrastructure',
    ],
  },
  {
    title: 'Junior React & React Native Developer',
    company: 'RoyalZSoftware',
    city: 'Weilheim, Bavaria, Germany',
    description: [
      'Delivered course marketplace end-to-end (Stripe + Mux + Next.js)',
      'Built MDX blog & landing page',
      'Developed React Native calendar → task completion –40%',
      'Reduced crash rate –85% via UI optimization & testing',
      'Helped with DB + Docker containerization',
    ],
  },
  {
    title: 'Quality Assurance Automation Engineer',
    company: 'QPLix',
    city: 'Munich, Bavaria, Germany',
    description: [
      'Automated UI testing workflows → manual QA time –60%',
      'Built test suites for financial software ensuring compliance & stability',
      'Collaborated with DevOps on CI/CD pipeline optimization',
      'Supported developers on bug triage, test coverage & releases',
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
