import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import "./index.css";

const TDL = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, { text: inputValue, completed: false, isEdit: false }]);
      setInputValue("");
    }
  };

  const toggleTodo = (index) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  const editTodo = (index, value) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, text: value } : todo
    );
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const toggleEdit = (index) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, isEdit: !todo.isEdit } : todo
    );
    setTodos(newTodos);
  };

  return (
    <div className="bai-1">
      <div style={{ textAlign: "center" , backgroundColor: "#f0f0f0"}}>
        <h1>TodoList</h1>
        <input
          className="input"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Todowork"
        />
        <button class="add" onClick={addTodo}>Thêm</button>
      </div>
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        editTodo={editTodo}
        toggleEdit={toggleEdit}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default TDL;
