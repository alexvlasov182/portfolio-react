import Sidebar from '../components/Sidebar';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import TechStack from '@/components/TechStack';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row gap-12 py-20">
      <aside className="hidden lg:block sticky top-20 w-[40%] h-[calc(100vh-5rem)]">
        <Sidebar />
      </aside>

      <main className="w-full lg:w-[60%] space-y-32">
        <About />
        <TechStack />
        <Experience />
        <Projects />
      </main>
    </div>
  );
}
