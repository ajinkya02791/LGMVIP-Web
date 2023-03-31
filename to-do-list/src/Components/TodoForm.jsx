import React, { useState } from "react";
import { v4 as uuid } from "uuid";
export default function TodoForm(props) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.addTodo({
      id: uuid(),
      text: input,
      isComplete: false
    });
    setInput("");
  };

  return (
    <form className="todo-form ">
      <input
        className="todo-input "
        type="text"
        name="Text"
        value={input}
        placeholder="Add a Todo"
        onChange={handleChange}
      />
      <button className="todo-btn " type="submit" onClick={handleSubmit}>
        Add Todo
      </button>
    </form>
  );
}
