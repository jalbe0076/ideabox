import Card from "./Card";
import './Ideas.css'

const Ideas = ( { ideas } ) => {
  console.log(typeof ideas)
  console.log(Array.isArray(ideas))
  console.log(ideas)
  const card = ideas.map((idea) => {
    console.log(idea.id)
    return (
      <Card
        id={idea.id}
        key={idea.id}
        title={idea.title}
        description={idea.description}
      />
    );  
  });

  return (
    <div className="idea-container">
      {card} 
    </div>
  );
};

export default Ideas;