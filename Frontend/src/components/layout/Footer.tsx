import "./Footer.css";

import logo from "../../assets/logo2.png";
import locationImg from "../../assets/location.png";

const Footer = () => {

  const phone = "5493434284291";

  const handleWhatsApp = () => {
    const message = "Hola! Quiero hacer un pedido 🍕";

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <footer className="footer">
      
      <div className="footer__container">

        {/* LOGO */}
        <div className="footer__logo">
          <img src={logo} alt="Pizzería Logo" />
        </div>

        {/* LINKS */}
        <div className="footer__links">
          <div className="footer__row">
            <a href="#menu">Menu</a>
            <a href="#about">Nosotros</a>
            <a href="#location">Ubicacion</a>
            <a href="#">Contacto</a>
          </div>

          <div className="footer__row footer__small">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
            <a href="#">Support</a>
          </div>
        </div>

        {/* UBICACION */}
        <a
          href="https://maps.app.goo.gl/yF8h6J8THi4bSQrPA"
          target="_blank"
          className="footer__location"
        >
          <img
            src={locationImg}
            alt="Ubicación"
          />

          <span> Donde encontrarnos </span>
        </a>

        {/* HORARIOS */}
        <div className="footer__hours">
          <h3>Horarios de atencion</h3>

          <div className="hours__grid">
            <span>Lunes - Viernes</span>
            <span>10:00 - 23:00</span>

            <span>Sabados</span>
            <span>14:00 - 00:00</span>

            <span>Domingos</span>
            <span>14:00 - 00:00</span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="footer__right">
          <div className="footer__icons">
            <div className="circle"> <a
          href="https://maps.app.goo.gl/yF8h6J8THi4bSQrPA"
          target="_blank"
        >📍</a></div>
            <div className="circle">✉️</div>
            <div className="circle">🛒</div>
          </div>

          <button className="footer__button" onClick={handleWhatsApp}>
            Ordenar Online
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;