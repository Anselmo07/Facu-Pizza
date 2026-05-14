import "./Contact.css";

import ubicacion from "../../assets/location.png"

const Contact = () => {
  const phone = "5493434284291";

  const handleWhatsApp = () => {
    const message =
      "Hola! Quiero hacer un pedido y conocer más sobre sus servicios 🍕";

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <section id="location" className="contact">
      <div className="contact__overlay" />

      <div className="contact__content">
        <h2>¿Querés trabajar con nosotros?</h2>

        <p>
          Formá parte de nuestro equipo y llevemos las mejores pizzas a más
          personas todos los días.
        </p>

        {/* Cómo trabajamos */}
        <div className="contact__info">
          <div className="info-card">
            <h3>🍕 Calidad</h3>
            <p>Trabajamos con ingredientes frescos y recetas artesanales.</p>
          </div>

          <div className="info-card">
            <h3>🚚 Rapidez</h3>
            <p>Entregas rápidas y atención eficiente para cada cliente.</p>
          </div>

          <div className="info-card">
            <h3>🤝 Equipo</h3>
            <p>Valoramos el compromiso, la pasión y el trabajo en equipo.</p>
          </div>
        </div>

        <button onClick={handleWhatsApp}>
          Contactar por WhatsApp
        </button>

        <div className="contact-container">
                <h2 className="contact-h2"> DIRECCIÓN </h2>
                <a href="https://maps.app.goo.gl/yF8h6J8THi4bSQrPA" className="contact-a"><p className="contact-p">698 Victorio Coco Herbeta, E3100 Paraná, Entre Ríos.</p></a>
                <a href="https://maps.app.goo.gl/yF8h6J8THi4bSQrPA" className="contact-maps"><img src={ubicacion} alt="location"/> </a>
          </div>

      </div>
    </section>
  );
};

export default Contact;