package com.example.todo.controller;

import com.example.todo.model.Todo;
import com.example.todo.storage.TodoStorage;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/todos")
@CrossOrigin(origins = "http://localhost:3000") // React 개발 서버 주소 허용
public class TodoController {

    @GetMapping
    public List<Todo> getAllTodos() {
        return TodoStorage.findAll();
    }

    @PostMapping
    public Todo addTodo(@RequestBody Todo todo) {
        return TodoStorage.add(todo.getText());
    }

    @DeleteMapping("/{id}")
    public boolean deleteTodo(@PathVariable long id) {
        return TodoStorage.delete(id);
    }

    @PutMapping("/{id}")
    public Todo toggleTodo(@PathVariable long id) {
        return TodoStorage.toggle(id);
    }
}
