
import "./Card.css";

import margarita from "../../assets/receta-pizza-margarita.jpg";
import pepperoni from "../../assets/PizzaPeperoni.jpg";
import cuatroQuesos from "../../assets/Pizza4quesos.jpg";

type Pizza = {
  id: number;
  name: string;
  description: string;
  image: string;
};

const pizzas: Pizza[] = [
  {
    id: 1,
    name: "Comun",
    description: "Salsa de tomate, queso, aceituna, oregano",
    image: margarita,
  },
  {
    id: 2,
    name: "Especial",
    description: "Salsa de tomate, queso, aceituna, jamon cocido, morron y oregano",
    image: pepperoni,
  },
  {
    id: 3,
    name: "Fugazzeta",
    description: "Salsa de tomate, cebolla, queso, aceituna y oregano",
    image: cuatroQuesos,
  },
];

const Card = () => {
    const phone = "5493434284291";

  const handleOrder = (pizzaName: string) => {
    const message = `Hola! Quiero pedir una pizza ${pizzaName} 🍕`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="menu" className="menu">
      <h2>Nuestras Pizzas</h2>

      <div className="menu__grid">
        {pizzas.map((pizza) => (
          <div key={pizza.id} className="card">
            <img src={pizza.image} alt={pizza.name} />

            <div className="card__content">
              <h3>{pizza.name}</h3>
              <p>{pizza.description}</p>

              <button onClick={() => handleOrder(pizza.name)}>
                Pedir por WhatsApp
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Card;