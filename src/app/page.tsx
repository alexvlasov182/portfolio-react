import Sidebar from '../components/Sidebar';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';

export default function HomePage() {
  return (
    <div className="min-h-screen flex justify-center">
      <div className="flex w-full max-w-[1280px]">
        {/* LEFT — fixed sidebar */}
        <aside className="hidden lg:flex flex-col sticky top-0 h-screen px-8 py-32 w-[42%] flex-shrink-0 shadow-lg bg-cardLight dark:bg-cardDark rounded-2xl">
          <Sidebar />
        </aside>

        {/* RIGHT — scrollable content */}
        <main className="w-full lg:w-[58%] px-8 py-32 space-y-32 overflow-y-auto">
          <About />
          <Experience />
          <Projects />
        </main>
      </div>
    </div>
  );
}
