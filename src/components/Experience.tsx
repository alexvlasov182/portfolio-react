'use client';
import { motion } from 'framer-motion';
import { fadeInUp } from '../lib/microAnimations';
import { FaMapMarkerAlt, FaBuilding } from 'react-icons/fa';

type Experience = { title: string; description: string[]; company: string; city: string };

const experience: Experience[] = [
  {
    title: 'Junior React & React Native Developer',
    company: 'RoyalZSoftware',
    city: 'Weilheim, Bavaria, Germany',
    description: [
      'Delivered course marketplace (Stripe + Mux + Next.js) end-to-end',
      'Built MDX blog & landing page - full ownership of frontend',
      'Developed React Native calendar → task completion –40%',
      'Reduced crash rate –85% via UI optimization + testing',
      'Helped with DB + Docker containerization',
    ],
  },
  {
    title: 'Automation Quality Assurance',
    company: 'QPLix',
    city: 'Munich, Bavaria, Germany',
    description: [
      'Automated UI tests with TypeScript & TestCafe → cut manual testing by 60%',
      'Built test suites for financial apps ensuring compliance & stability',
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
