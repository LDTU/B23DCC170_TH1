import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleTodo, editTodo, toggleEdit, deleteTodo }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          toggleTodo={toggleTodo}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
          toggleEdit={toggleEdit}
        />
      ))}
    </ul>
  );
};

export default TodoList;
