import './Card.css'
const Card = ({ id, title, description }) => {
  return (
    <div className="card-container">
      <h2>{title}</h2>
      <p>{description}</p>
      <button>🗑️</button>
    </div>
  );
};

export default Card;