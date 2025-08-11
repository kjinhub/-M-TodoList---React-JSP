import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [text, setText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 16 }}>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="새 할 일 입력"
        style={{ padding: 8, width: "70%" }}
      />
      <button type="submit" style={{ padding: 8, marginLeft: 8 }}>추가</button>
    </form>
  );
}

export default TodoForm;
