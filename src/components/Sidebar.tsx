export default function Sidebar() {
  return (
    <aside className="flex flex-col h-full">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold sm:text-5xl">Oleksandr Vlasov</h1>
        <h2 className="mt-3 text-lg font-medium sm:text-xl">Frontend Developer</h2>
        <p className="mt-4 max-w-xs font-heading leading-relaxed">
          I build accessible production web and mobile applications
        </p>
      </div>

      {/* Nav */}
      <nav className="mt-16 flex flex-col space-y-3">
        {['about', 'experience', 'projects'].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className="group flex items-center transition-colors duration-200 hover:text-slate-200"
          >
            <span className="w-8 h-px bg-slate-600 group-hover:w-16 transition-all"></span>
            <span className="ml-4 text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200">
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </span>
          </a>
        ))}
      </nav>
    </aside>
  );
}
