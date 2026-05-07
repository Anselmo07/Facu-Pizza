import Hero from "./components/sections/Hero";
import Card from "./components/sections/Card";
import AboutMe from "./components/sections/AboutMe";
import AboutIcons from "./components/sections/AboutIcons";
import "./App.css";
import Deals from "./components/sections/Deals";

function App() {
  return (
    <>
      <Hero />
      <Card />
      <AboutMe />
      <AboutIcons />
      <Deals />

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