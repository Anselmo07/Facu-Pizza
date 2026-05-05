import "./Hero.css";

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__overlay" />

            <div className="hero__content">
                <h1>Las mejores <br />
                <span> PIZZAS </span> <br />
                de la ciudad 🍕</h1>
                <p>Ingredientes frescos, sabor increíble y entrega rápida</p>

                <div className="hero__buttons">
                <button className="btn primary">Pedir ahora</button>
                
                </div>
            </div>
        </section>
    );
};

export default Hero;