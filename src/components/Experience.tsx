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
      'Designed and implemented the company’s landing page with full architectural decisions (Next.js).',
      'Built and integrated a blog importing posts from Hashnode using MDX (Next.js).',
      'Currently developing a course marketplace with Mux, Stripe, PostgreSQL, Docker (Next.js).',
      'Prepared a “Newsletter” landing page to promote company courses (Next.js).',
      'Collaborated with cross-functional teams and managed frontend architecture & production delivery timelines.',
      'Developed a calendar feature improving UX for schedule management (React Native).',
      'Implemented advanced sorting options by clients, dates, and orders (React Native).',
      'Enhanced UI by refining styles, adding loaders, ensuring design consistency (React Native).',
      'Reduced bug reports from clients, improving stability (React Native).',
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
