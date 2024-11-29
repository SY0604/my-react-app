import React, { useEffect, useState } from "react";
import "./App.css";

interface User {
  id: number;
  name: string;
  email: string;
}

const App: React.FC = () => {
  // State to store user data
  const [users, setUsers] = useState<User[]>([]);

  // Fetch user data from the API when the component mounts
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => setUsers(data))
        .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
      <div className="App">
        <h1>User List</h1>
        <ul>
          {users.map((user) => (
              <li key={user.id}>
                <strong>{user.name}</strong>: {user.email}
              </li>
          ))}
        </ul>
      </div>
  );
};

export default App;
