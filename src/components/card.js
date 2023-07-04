import './Card.css'
const Card = ({ id, title, description, deleteCard }) => {
  return (
    <div className="card-container">
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={() => deleteCard(id)}>🗑️</button>
    </div>
  );
};

export default Card;