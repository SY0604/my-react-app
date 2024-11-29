import React, { useState, useEffect } from "react";

interface User {
    id: number;
    name: string;
    email: string;
}

const UsersPage: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((error) => console.error("Error fetching users:", error));
    }, []);

    return (
        <div className="container">
            <h1>User List</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <strong>{user.name}</strong> <br />
                        <span>{user.email}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UsersPage;
