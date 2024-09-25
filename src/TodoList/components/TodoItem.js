import React, { useState } from "react";

const TodoItem = ({
  todo,
  index,
  toggleTodo,
  editTodo,
  deleteTodo,
  toggleEdit,
}) => {
  const [valueInput, setValueInput] = useState(todo.text);

  const handleSave = () => {
    editTodo(index, valueInput);
    toggleEdit(index);
  };

  return (
    <li style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <input onClick={() => toggleTodo(index)} type="checkbox" checked={todo.completed} />
        {!todo.isEdit ? (
          <span style={{ marginLeft: "10px", flex: 1 }}>{todo.text}</span>
        ) : (
          <input
            onChange={(e) => setValueInput(e.target.value)}
            value={valueInput}
            onBlur={handleSave}
            style={{ marginLeft: "10px", flex: 1 }}
          />
        )}
        <div style={{ marginLeft: "10px" }}>
          <button onClick={() => toggleEdit(index)} class="fix">
            {todo.isEdit ? "Lưu lại" : "Chỉnh sửa"}
          </button>
          <button onClick={() => deleteTodo(index)} className="delete">
            Xóa
          </button>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
