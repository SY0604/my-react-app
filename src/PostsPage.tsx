import React, { useState, useEffect } from "react";

interface Post {
    id: number;
    title: string;
}

const PostsPage: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => {
                setPosts(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching posts:", error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="container">
            <h1>Posts</h1>
            {loading ? (
                <div className="spinner"></div>
            ) : (
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>
                            <strong>{post.title}</strong>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default PostsPage;
