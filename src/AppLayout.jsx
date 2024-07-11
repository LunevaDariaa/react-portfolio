import About from "./About/About";
import Navbar from "./Navbar/Navbar";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";

function AppLayout() {
  return (
    <div className="flex flex-col justify-between bg-purple-50 ">
      <Navbar />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default AppLayout;
