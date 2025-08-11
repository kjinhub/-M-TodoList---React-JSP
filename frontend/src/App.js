import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  // 처음 렌더링 시 전체 할 일 목록 불러오기
  useEffect(() => {
    fetch('http://localhost:8080/api/todos')
      .then(res => res.json())
      .then(data => setTodos(data))
      .catch(() => setTodos([])); // 에러 시 빈 배열
  }, []);

  // 할 일 추가
  const addTodo = (text) => {
    fetch('http://localhost:8080/api/todos', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ text })
    })
    .then(res => res.json())
    .then(newTodo => setTodos([...todos, newTodo]));
  };

  // 할 일 삭제
  const deleteTodo = (id) => {
    fetch(`http://localhost:8080/api/todos/${id}`, { method: 'DELETE' })
      .then(() => setTodos(todos.filter(todo => todo.id !== id)));
  };

  // 완료 상태 토글
  const toggleTodo = (id) => {
    fetch(`http://localhost:8080/api/todos/${id}`, { method: 'PUT' })
      .then(res => res.json())
      .then(updatedTodo =>
        setTodos(todos.map(todo => (todo.id === id ? updatedTodo : todo)))
      );
  };

  return (
    <div style={{ maxWidth: 400, margin: "40px auto", padding: 16 }}>
      <h2>To-Do List</h2>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
