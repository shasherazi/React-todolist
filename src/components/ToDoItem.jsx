const TodoItem = ({ id, todo, completed, onChange, onDelete }) => {
  return (
    <li className='todo-item'>
      <input
        type='checkbox'
        checked={completed}
        onChange={() => onChange(id)}
      />
      <p className='todo-text'>{todo}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
