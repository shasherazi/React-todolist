import { useState } from 'react';

const Input = ({ addItem }) => {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(input);
    setInput('');
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Add a new todo'
        value={input}
        onChange={handleChange}
        className='todo-input'
      />
      <button className='todo-add-btn' type='submit'>
        Add
      </button>
    </form>
  );
};

export default Input;
