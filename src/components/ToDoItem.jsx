import { PropTypes } from 'prop-types';
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
    <li className="todo-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onChange(id)}
      />
      {!editing && <p className="todo-text">{todo}</p>}
      {editing && (
        <input
          type="text"
          value={todo}
          className="todo-text"
          onChange={(e) => onChangeEdit(id, e.target.value)}
        />
      )}
      <button onClick={() => onDelete(id)} type="button">Delete</button>
      <button onClick={handleEdit} type="button">{editing ? 'Save' : 'Edit'}</button>
    </li>
  );
};

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  todo: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onChangeEdit: PropTypes.func.isRequired,
};

export default TodoItem;
