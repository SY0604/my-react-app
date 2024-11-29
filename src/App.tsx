import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UsersPage from "./UsersPage";
import PostsPage from "./PostsPage";
import ErrorHandlingPage from "./ErrorHandlingPage";

const App: React.FC = () => {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                    <li>
                        <Link to="/posts">Posts</Link>
                    </li>
                    <li>
                        <Link to="/error-handling">Error Handling</Link>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/users" element={<UsersPage />} />
                <Route path="/posts" element={<PostsPage />} />
                <Route path="/error-handling" element={<ErrorHandlingPage />} />
                <Route path="/" element={<div>Welcome! Select a page from above.</div>} />
            </Routes>
        </Router>
    );
};

export default App;
