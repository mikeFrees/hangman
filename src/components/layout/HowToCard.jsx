import './HowToCard.css';

function HowToCard({ step, title, description }) {
  return (
    <section className="how-to-card">
      <h2>{step}</h2>
      <h3>{title}</h3>
      <p>{description}</p>
    </section>
  );
}

export default HowToCard;
