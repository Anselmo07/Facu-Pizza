import "./AboutMe.css";

import chef from "../../assets/chef.png";
import pizza from "../../assets/pizzaWorking.jpg";

const features = [
  {
    title: "Orden Online",
    icon: "📞",
  },
  {
    title: "Delivery",
    icon: "🛵",
  },
  {
    title: "Rapidez",
    icon: "🚚",
  },
  {
    title: "Ingredientes Frescos",
    icon: "🛍️",
  },
];

const About = () => {

  const phone = "5493434284291";

  const handleWhatsApp = () => {
    const message = "Hola! Quiero hacer un pedido 🍕";

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <section id="about" className="about">
      <div className="about__container">

        {/* LEFT */}
        <div className="about__left">

          <h2>
            El hogar de la<br />
            pizza artesanal
          </h2>

          <p>
            Somos una pizzería apasionada por crear pizzas artesanales
            con ingredientes frescos y sabores únicos.
          </p>

          <p>
            Nuestro objetivo es ofrecer una experiencia deliciosa,
            rápida y de calidad en cada pedido.
          </p>

          {/* BUTTONS */}
          <div className="about__buttons">
            <button className="primary" onClick={handleWhatsApp}>
              Mas info
            </button>

            <button className="secondary">
              <a href="menu">Ver menu</a>
            </button>
          </div>

          {/* FEATURES */}
          <div className="about__features">
            {features.map((item, index) => (
              <div key={index} className="feature">
                <div className="feature__circle">
                  {item.icon}
                </div>

                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="about__right">

          <div className="photo photo--1">
            <img
              src={chef}
              alt="Chef"
            />
          </div>

          <div className="photo photo--2">
            <img
              src={pizza}
              alt="Pizza"
            />
          </div>

          <button className="order-btn" onClick={handleWhatsApp}>
            Ordenar ahora
          </button>

        </div>
      </div>
    </section>
  );
};

export default About;