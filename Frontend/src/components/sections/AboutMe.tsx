import "./AboutMe.css";

// 👇 podés usar íconos SVG inline (mejor que PNG)
const features = [
  {
    title: "Entrega rápida",
    text: "Recibí tu pedido en menos de 30 minutos",
    icon: "⏱️",
  },
  {
    title: "Envío a domicilio",
    text: "Llegamos hasta la puerta de tu casa",
    icon: "🚚",
  },
  {
    title: "Calidad garantizada",
    text: "Ingredientes frescos todos los días",
    icon: "⭐",
  },
  {
    title: "Chef experto",
    text: "Recetas tradicionales con toque único",
    icon: "👨‍🍳",
  },
];

const About = () => {
  return (
    <section id="about" className="about" >
      <div className="about__container">
        {/* Texto */}
        <div className="about__text">
          <h2>Sobre Nosotros</h2>

          <p>
            Somos una pizzería apasionada por la buena comida. Nos dedicamos a
            crear pizzas artesanales con ingredientes frescos y de la mejor
            calidad.
          </p>

          <p>
            Nuestro objetivo es que disfrutes cada bocado como una experiencia
            única, con entregas rápidas y un servicio confiable.
          </p>
        </div>

        {/* Features */}
        <div className="about__features">
          {features.map((item, index) => (
            <div key={index} className="feature">
              <span className="feature__icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;