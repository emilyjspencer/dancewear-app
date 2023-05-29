

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

console.log(posts);

return (
  <div>
    {posts.length > 0 && (
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            {post.title}
            
            <br /> 
            <br />
          {post.body}
          <br />
          {post.date_of_blog_post}</li>
        ))}
      </ul>
    )}
  </div>
);
}

export default Blog;