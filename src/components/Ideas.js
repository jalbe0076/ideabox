import Card from "./Card";
import './Ideas.css'

const Ideas = ( { ideas, deleteCard } ) => {
  const cards = ideas.map((idea) => {
    
    return (
      <Card
        id={idea.id}
        key={idea.id}
        title={idea.title}
        description={idea.description}
        deleteCard={deleteCard}
      />
    );  
  });

  return (
    <div className="idea-container">
      {cards} 
    </div>
  );
};

export default Ideas;
