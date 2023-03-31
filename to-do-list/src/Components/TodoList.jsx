import React, { useState } from "react";
import Todo from "../Components/Todo";
import TodoForm from "../Components/TodoForm";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  //Add todos to the list.
  const addTodo = (todo) => {
    if (!todo.text) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  //Remove the todos from the list.
  const removeTodo = (id) => {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  //Task is Completed.
  const completeTodo = (id) => {
    let updateTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = true;
      }
      return todo;
    });
    setTodos(updateTodo);
  };

  return (
    <div className="todo-list-container">
      <TodoForm addTodo={addTodo}></TodoForm>
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
      ></Todo>
    </div>
  );
}
