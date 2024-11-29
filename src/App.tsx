import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UsersPage from "./UsersPage";
import PostsPage from "./PostsPage";

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                        <li>
                            <Link to="/posts">Posts</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/users" element={<UsersPage />} />
                    <Route path="/posts" element={<PostsPage />} />
                    <Route
                        path="/"
                        element={<div>Welcome! Please select a page from above.</div>}
                    />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
