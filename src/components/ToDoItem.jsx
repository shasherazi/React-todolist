import { useState } from 'react';

const TodoItem = ({
  id,
  todo,
  completed,
  onChange,
  onDelete,
  onChangeEdit,
}) => {
  const [editing, setEditing] = useState(false);

  const handleEdit = () => {
    setEditing(!editing);
  };

  return (
    <li className='todo-item'>
      <input
        type='checkbox'
        checked={completed}
        onChange={() => onChange(id)}
      />
      {!editing && <p className='todo-text'>{todo}</p>}
      {editing && (
        <input
          type='text'
          value={todo}
          className='todo-text'
          onChange={(e) => onChangeEdit(id, e.target.value)}
        />
      )}
      <button onClick={() => onDelete(id)}>Delete</button>
      <button onClick={handleEdit}>{editing ? 'Save' : 'Edit'}</button>
    </li>
  );
};

export default TodoItem;
