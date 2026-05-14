import "./Deals.css";

import margarita from "../../assets/receta-pizza-margarita.jpg";
import combo from "../../assets/combo.png";

const deals = [
  {
    title: "Pizza Individual",
    subtitle: "Ideal para dos personas 🍕",
    price: "$8.500",
    image: margarita,
  },
  {
    title: "Combo Pareja",
    subtitle: "2 pizzas + bebida 🥤",
    price: "$18.000",
    image:combo,
  },
];

const Deals = () => {
  const phone = "5493434284291";

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