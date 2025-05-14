import React, { useState } from "react";

const ToDo = () => {
  const [state, setState] = useState({
    input: "",
    todos: [],
  });

  const toDoInput = (e) => {
    setState({ ...state, input: e.target.value });
  };

  const toDoHandler = () => {
    if (state.input.trim() === "") return;
    setState({
      input: "",
      todos: [...state.todos, state.input],
    });
  };

  return (
    <div>
      <input value={state.input} onChange={toDoInput} />
      <button onClick={toDoHandler}>+</button>
      <ul>
        {state.todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
