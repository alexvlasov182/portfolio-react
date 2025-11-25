export default function ProjectCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <article className="card hover:-translate-y-1 transition-transform">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-mutedLight dark:text-mutedDark">{description}</p>
    </article>
  );
}
