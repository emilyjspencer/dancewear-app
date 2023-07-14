

import { useState, useEffect} from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';
import BlogPostCard from '../BlogPostCard/BlogPostCard';

const Blog = () => {
const [posts, setPosts] = useState([])
const [post, setPost] = useState("");
const [searchId, setSearchId] = useState("");
const [searchBlogPostTitle, setSearchBlogPostTitle] = useState("");
const [currentIndex, setCurrentIndex] = useState(-1);
const [currentPost, setCurrentPost] = useState(null);
const [id, setId] = useState("");
const [postDetail, setPostDetail] = useState(null);
const [modalOpen, setModalOpen] = useState(false);


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

const setActivePost = (post, index) => {
  setCurrentPost(post);
  setCurrentIndex(index);
};

return (
  <><><>
      <div className="search-add-container"> 
        <Link to={"/blog/add"} className="add-blog">Add new blog post</Link>
      </div>
      <div>
              <div className="main">
                  <div className="search-container">
                      <div className="">
                          <input type="number" placeholder="Search .." name="searchId" onChange={(event) => setId(event.target.value)}></input>
                          <input type="text" placeholder="Search by title" name="searchBlogPostTitle" onChange={(event) => setSearchBlogPostTitle(event.target.value)}></input>
                          
                      </div>
                  </div>
              </div>
      </div>
      {posts.length > 0 && (
        <ul className="blog-post-list-container">
            <>
            {posts.filter((post) => {
                      return searchId === "" ? post : post.id.toString() === searchId
                  }).filter((post) => {
                    return searchBlogPostTitle === "" ? post : post.title.toLowerCase().includes(searchBlogPostTitle)
                  }).map((post, index) => (

              <><div id="card-modal-button" key={post.id}
                      onClick={(e) => {
                        setActivePost(post, index); setPostDetail(post);
                      } }></div><div id="" key={post.id}
                        onClick={(e) => {
                          setActivePost(post, index); setPostDetail(post);
                           setModalOpen(e);
                        } }>
<div className="cards1">
<BlogPostCard
                  imgSrc="https://picsum.photos/seed/picsum/200/300"
                  imgAlt="Post placeholder"
                  text1={`Title : ${post.title}`}
                  text2={`Article: ${post.body}`}
                  text3={`Author: ${post.author_id.name}`}
                  text4={`Date of article: ${post.date_of_blog_post}`} />
                  </div>
                          
                        </div>
                     
                        </>))}
                        </>
                        
                  </ul>
                  
      )}</></></>)}

                        export default Blog;