import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

function DashboardItem() {
  const { id } = useParams();
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
      .then(response => response.json())
      .then(data => setTodos(data));
  }, [id]);

  return (
    <div>
      <Navbar />
      <h2>User ID: {id} - Todos</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.title}
            {todo.completed ? " ✅" : ""}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DashboardItem;
