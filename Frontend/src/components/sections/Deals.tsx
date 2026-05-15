import "./Deals.css";

import margarita from "../../assets/receta-pizza-margarita.jpg";
import especial from "../../assets/combo.png";

const deals = [
  {
    title: "Pizza Clásica",
    subtitle: "Mozzarella artesanal recién horneada 🍕",
    price: "$8.500",
    image: margarita,
  },
  {
    title: "Pizza Especial",
    subtitle: "Ingredientes premium y sabor único 🔥",
    price: "$12.000",
    image: especial,
  },
];

const Deals = () => {
  const phone = "5493434284291";

  const handleOrder = (title: string) => {
    const message = `Hola! Quiero pedir una ${title} 🍕`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <section className="deals">
      <div className="deals__header">

        <h2>Rotisería al Paso</h2>

        <p>
          Viernes a Domingo · 14:00 hs a 00:00 hs
        </p>

      </div>

      <div className="deals__grid">
        {deals.map((deal, index) => (
          <div key={index} className="deal-card">

            <img
              src={deal.image}
              alt={deal.title}
            />

            <div className="deal-card__content">

              <h3>{deal.title}</h3>

              <p>{deal.subtitle}</p>

              <span>{deal.price}</span>

              <button onClick={() => handleOrder(deal.title)}>
                Pedir Ahora
              </button>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Deals;