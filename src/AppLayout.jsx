import About from "./About/About";
import Navbar from "./Navbar/Navbar";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";

function AppLayout() {
  return (
    <div className="flex h-auto 0 bg-purple-50">
      <Navbar />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default AppLayout;
