import "./Deals.css";

import margarita from "../../assets/receta-pizza-margarita.jpg";
import combo from "../../assets/combo.png";
import family from "../../assets/comboFamily.png";

const deals = [
  {
    title: "Pizza Individual",
    subtitle: "Ideal para una persona 🍕",
    price: "$8.500",
    image: margarita,
  },
  {
    title: "Combo Pareja",
    subtitle: "1 pizzas + bebida 🥤",
    price: "$18.000",
    image:combo,
  },
  {
    title: "Combo Familiar",
    subtitle: "3 pizzas grandes 🔥",
    price: "$32.000",
    image: family,
  },
];

const Deals = () => {
  const phone = "549XXXXXXXXXX";

  const handleOrder = (title: string) => {
    const message = `Hola! Quiero pedir el ${title} 🍕`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <section className="deals">
      <div className="deals__header">
        <h2>Promociones Especiales</h2>
        <p>Elegí tu combo favorito y pedí ahora</p>
      </div>

      <div className="deals__grid">
        {deals.map((deal, index) => (
          <div key={index} className="deal-card">
            <img src={deal.image} alt={deal.title} />

            <div className="deal-card__content">
              <h3>{deal.title}</h3>
              <p>{deal.subtitle}</p>

              <span>{deal.price}</span>

              <button onClick={() => handleOrder(deal.title)}>
                Pedir ahora
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Deals;