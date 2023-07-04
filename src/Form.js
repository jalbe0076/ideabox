import './Form.css';
import { useState } from 'react';

const Form = ({ addIdea }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const submitIdea = (event) => {
    event.preventDefault();
    const idea = {
      id: Date.now(),
      title: title,
      description: description
    };
    
    if (title && description) {
      addIdea(idea);
      clearForm();
    }
  };

  const clearForm = () => {
    setTitle('');
    setDescription('');
  };

  return (
    <form className='form-area'>
      <input 
        name='title' 
        type='text' 
        placeholder='Title' 
        value={title} 
        onChange={event => setTitle(event.target.value)} 
      />
      <input 
        name='description' 
        type='text' 
        placeholder='Description' 
        value={description} 
        onChange={event => setDescription(event.target.value)} 
      /> 
      <button type='submit' onClick={(event => submitIdea(event))}>SUBMIT</button>
    </form>
  );
};

export default Form;