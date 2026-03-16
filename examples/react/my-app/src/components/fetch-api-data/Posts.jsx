'use client';
import { useEffect, useState } from "react";

export default function Posts() {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => {
                setPosts(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching posts:", error);
                setLoading(false);
            });
    }, []); // Empty dependency array means this effect runs once on mount

    if (loading) {
        return <p>Loading posts...</p>;
    }

    return (
        <div>
            <h2>Posts</h2>
            {(!posts.length) && <p>No posts found.</p>}
            <ul>
                {posts.length > 0 && posts.map(post => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}