import React from "react";
import { TiTick } from "react-icons/ti";
import { RiCloseCircleLine } from "react-icons/ri";

export default function Todo({ todos, completeTodo, removeTodo }) {
  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "complete todo-div" : "todo-div"}
      key={index}
    >
      <div className="todo-text">{todo.text}</div>
      <div className="icons" key={todo.id}>
        <TiTick
          className={todo.isComplete ? "hide" : "tick"}
          onClick={() => {
            completeTodo(todo.id);
          }}
        ></TiTick>
        <RiCloseCircleLine
          className="cross"
          onClick={() => {
            removeTodo(todo.id);
          }}
        ></RiCloseCircleLine>
      </div>
    </div>
  ));
}
