import "./Contact.css";

import ubicacion from "../../assets/location.png";

const Contact = () => {
  const phone = "5493434284291";

  const handleWhatsApp = () => {
    const message =
      "Hola! Me interesa comercializar sus pizzas 🍕";

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <section id="location" className="contact">

      <div className="contact__overlay" />

      <div className="contact__content">

        <h2>
          Sumá nuestras pizzas a tu negocio
        </h2>

        <p>
          Comercializamos pizzas artesanales pre-hechas
          para kioscos, supermercados, despensas,
          eventos y comercios gastronómicos.
        </p>

        <p>
          Una opción rentable, deliciosa y lista para vender.
        </p>

        {/* INFO */}
        <div className="contact__info">

          <div className="info-card">
            <h3>🍕 Producción Artesanal</h3>

            <p>
              Elaboradas con ingredientes frescos
              y recetas de calidad.
            </p>
          </div>

          <div className="info-card">
            <h3>📦 Venta Mayorista</h3>

            <p>
              Distribución para locales,
              kioscos y supermercados.
            </p>
          </div>

          <div className="info-card">
            <h3>🚚 Entrega y Encargos</h3>

            <p>
              Coordinamos pedidos y entregas
              de forma rápida y eficiente.
            </p>
          </div>

        </div>

        <div className="contact-location">
          <h3> Encontranos</h3>
          <p> 698 Victorio Coco Herbeta, Paraná, Entre Ríos. </p>
            <a
              href="https://maps.app.goo.gl/yF8h6J8THi4bSQrPA"
              className="contact-maps"
            >
              <img
                src={ubicacion}
                alt="location"
              />
            </a>
        </div>

        <button onClick={handleWhatsApp}>
          Consultar por WhatsApp
        </button>

        {/* DIRECCION */}
        {/* <div className="contact-container">

          <h2 className="contact-h2">
            DIRECCIÓN
          </h2>

          <a
            href="https://maps.app.goo.gl/yF8h6J8THi4bSQrPA"
            className="contact-a"
          >
            <p className="contact-p">
              698 Victorio Coco Herbeta,
              Paraná, Entre Ríos.
            </p>
          </a>

          <a
            href="https://maps.app.goo.gl/yF8h6J8THi4bSQrPA"
            className="contact-maps"
          >
            <img
              src={ubicacion}
              alt="location"
            />
          </a>

        </div> */}

      </div>
    </section>
  );
};

export default Contact;