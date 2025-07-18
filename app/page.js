import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Services from "./components/Services";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Projects />
      <Services />
      <About />
      <Contact />
    </div>
  );
}
