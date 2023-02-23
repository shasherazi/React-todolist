import { useState, useEffect } from 'react';
import Input from './Input';
import TodoItem from './ToDoItem';

const ToDoList = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) || [],
  );

  useEffect(() => {
    const data = JSON.stringify(todos);
    localStorage.setItem('todos', data);
  }, [todos]);

  const addItem = (title) => {
    setTodos([...todos, { id: todos.length + 1, title, completed: false }]);
  };

  const handleChange = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    );
  };

  const handleChangeEdit = (id, title) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            title,
          };
        }
        return todo;
      }),
    );
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="ToDoList">
      <Input addItem={addItem} />
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            todo={todo.title}
            completed={todo.completed}
            onChange={handleChange}
            onDelete={handleDelete}
            onChangeEdit={handleChangeEdit}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
