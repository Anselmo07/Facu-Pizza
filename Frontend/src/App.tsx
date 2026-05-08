import Hero from "./components/sections/Hero";
import Card from "./components/sections/Card";
import AboutMe from "./components/sections/AboutMe";
import AboutIcons from "./components/sections/AboutIcons";
import "./App.css";
import Deals from "./components/sections/Deals";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <>
      <Hero />
      <Card />
      <AboutMe />
      <AboutIcons />
      <Deals />
      <Contact />

      {/* Secciones futuras */}
      {/* <Features /> */}
      {/* <Menu /> */}
      {/* <Promos /> */}
      {/* <Testimonials /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;