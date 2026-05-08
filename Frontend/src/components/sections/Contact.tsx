import "./Contact.css";

const Contact = () => {
  const phone = "549XXXXXXXXXX";

  const handleWhatsApp = () => {
    const message =
      "Hola! Quiero hacer un pedido y conocer más sobre sus servicios 🍕";

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <section className="contact">
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
      </div>
    </section>
  );
};

export default Contact;