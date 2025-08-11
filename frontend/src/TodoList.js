import React from 'react';

function TodoList({ todos, deleteTodo, toggleTodo }) {
  if (!todos.length) return <p>할 일이 없습니다.</p>;

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {todos.map(todo => (
        <li key={todo.id} style={{
          padding: 8,
          textDecoration: todo.completed ? 'line-through' : 'none',
          display: 'flex',
          alignItems: 'center'
        }}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
            style={{ marginRight: 8 }}
          />
          <span style={{ flex: 1 }}>{todo.text}</span>
          <button onClick={() => deleteTodo(todo.id)} style={{ marginLeft: 8 }}>삭제</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
