const TodoItem = ({ id, todo, completed, onChange, onDelete }) => {
  return (
    <li>
      <input
        type='checkbox'
        checked={completed}
        onChange={() => onChange(id)}
      />
      {todo}
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
