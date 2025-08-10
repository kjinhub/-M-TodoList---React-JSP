package com.example.todo.storage;

import com.example.todo.model.Todo;
import java.util.*;
import java.util.concurrent.atomic.AtomicLong;

public class TodoStorage {
    private static final List<Todo> TODOS = new ArrayList<>();
    private static final AtomicLong SEQ = new AtomicLong(1);

    public static synchronized List<Todo> findAll() {
        return new ArrayList<>(TODOS);
    }

    public static synchronized Todo add(String text) {
        Todo t = new Todo(SEQ.getAndIncrement(), text, false);
        TODOS.add(t);
        return t;
    }

    public static synchronized boolean delete(long id) {
        return TODOS.removeIf(t -> t.getId() == id);
    }

    public static synchronized Todo toggle(long id) {
        for (Todo t : TODOS) {
            if (t.getId() == id) {
                t.setCompleted(!t.isCompleted());
                return t;
            }
        }
        return null;
    }
}
