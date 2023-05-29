

import { useState, useEffect} from 'react';
import './Blog.css';

const Blog = () => {
const [posts, setPosts] = useState([])

const fetchBlogPosts = () => {
  fetch("http://localhost:8080/api/blog")
    .then(response => {
      return response.json()
    })
    .then(data => {
      setPosts(data)
    })
}

useEffect(() => {
  fetchBlogPosts()
}, [])

return (
  <div>
    {posts.length > 0 && (
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.firstname} {post.lastname}</li>
        ))}
      </ul>
    )}
  </div>
);
}

export default Blog;