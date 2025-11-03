import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Dashboard() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);
  return (
    <div>
      <Navbar />
      <h1>Dashboard</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/dashboard/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
