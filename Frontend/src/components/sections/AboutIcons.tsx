import "./AboutIcons.css";

import tiempo from "../../assets/watch.png";
import envio from "../../assets/truck.png";
import confianza from "../../assets/pizza.png";
import chef from "../../assets/chef.png";

const AboutIcons = () => {
  return (
    <section className="about-icons">
      <div className="icons-container">
        <img src={tiempo} alt="Tiempo" />
        <img src={envio} alt="Envío" />
        <img src={confianza} alt="Confianza" />
        <img src={chef} alt="Chef" />
      </div>
    </section>
  );
};

export default AboutIcons;