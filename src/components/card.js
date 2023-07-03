const Card = ({ id, title, description }) => {
  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
      <button>🗑️</button>
    </>
  );
};

export default Card;