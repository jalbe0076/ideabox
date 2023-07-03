import Card from "./card";

const Ideas = ({ ideas }) => {
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
    <>
      {card}
    </>
  );
};

export default Ideas;