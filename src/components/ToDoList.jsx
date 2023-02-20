import TodoItem from './ToDoItem';
import { useState } from 'react';

const ToDoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Start ToDo App', completed: true },
    { id: 2, title: 'Finish ToDo App', completed: false },
    { id: 3, title: 'Learn React Hooks', completed: false },
    { id: 4, title: 'Learn React Router', completed: false },
    { id: 5, title: 'Learn React Context', completed: false },
    { id: 6, title: 'Learn React Redux', completed: false },
  ]);

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
      })
    );
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className='ToDoList'>
      <ul className='todo-list'>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            todo={todo.title}
            completed={todo.completed}
            onChange={handleChange}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
