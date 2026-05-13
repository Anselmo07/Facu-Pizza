import "./Navbar.css";

import logo from "../../assets/logo3.png";

const Navbar = () => {
  const phone = "549XXXXXXXXXX";

  const handleWhatsApp = () => {
    const message = "Hola! Quiero hacer un pedido 🍕";

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <header className="navbar">
      {/* Logo */}
      <div className="navbar__logo">
        <img src={logo} alt="Logo Pizzería" />
      </div>

      {/* Links */}
      <nav className="navbar__links">
        <a href="#menu">MENU</a>
        <a href="#about">SOBRE MI</a>
        <a href="#location">UBICACIÓN</a>

        <button onClick={handleWhatsApp}>
          ORDER ONLINE
        </button>
      </nav>
    </header>
  );
};

export default Navbar;