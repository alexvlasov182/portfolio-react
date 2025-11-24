type Project = {
  title: string;
  description: string;
  link?: string;
};

const projects: Project[] = [
  {
    title: 'FlowBoard',
    description: 'Notion-style collaboration tool built with React, Node.js, Docker, Kubernetes.',
  },
  {
    title: 'Dashboard App',
    description: 'Interactive dashboard with charts and tables for analytics.',
  },
  {
    title: 'Course Marketplace',
    description: 'Udemy-like platform with Stripe, Mux, PostgreSQL, and Docker.',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-16">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((p) => (
          <li key={p.title} className="card bg-cardLight dark:bg-cardDark">
            <h3 className="font-semibold text-xl mb-2">{p.title}</h3>
            <p>{p.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
