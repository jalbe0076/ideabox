import './App.css';
import Ideas from './components/Ideas';
import Form from './Form';
import { useState } from 'react';

function App() {
  const [ideas, setIdeas] = useState([]);

  const addIdea = (idea) => {
    setIdeas([...ideas, idea]);
  };

  const deleteCard = (id) => {
    const filteredCards = ideas.filter(idea => idea.id !== id);
    setIdeas(filteredCards);
  };

  return (
    <main>
      <h1>Ideabox</h1>
      <Form addIdea={addIdea} />
      <Ideas ideas={ideas} deleteCard={deleteCard} />
    </main>
  );
}

export default App;
