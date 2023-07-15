import React, { useState, useEffect } from "react";
import BlogService from '../BlogService';
import UsersService from '../../UsersPage/UsersService';
import {  useNavigate } from 'react-router-dom';


const AddBlogPost = () => {
  const initialState = {
    id: "",
    title: "",
    post: "",
    date_published: ""
  
  };
  const [blogPost, setBlogPost] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [users, setUsers] = useState([]);
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  const [date_published, setDatePublished] = useState(null);



  const navigate = useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();


    let data = {
      title: title,
      post: post,
      date_published: date_published
    }

    console.log('handle submit method is called')
    console.log(data)


  BlogService.create(data)
    .then(response => {

            if(response.status === 201) {
                alert('Blog post created');
                navigate('/blog')
            }
        })
        .catch(error => {
            console.error('Unable to send request')
        })

  };

  const newBlogPost = () => {
    setBlogPost(initialState);
    setSubmitted(false);
  }


  return (
        <div className="submit-form">
          {submitted ? (
            <div>
              <h4>submitted</h4>
              <button className="" onClick={newBlogPost}>
                Add Blog Post
              </button>
            </div>
          ) : (
            <div>
              <div className="">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className=""
                  id="title"
                  required
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  name="title"
                />
              </div>
    
              <div className="">
                <label htmlFor="post">Body</label>
                <input
                  type="text"
                  className=""
                  id="post"
                  required
                  value={post}
                  onChange={e => setPost(e.target.value)}
                  name="post"
                />
              </div>

              <div className="">
                <label htmlFor="date_published">Date Published</label>
                <input
                  type="date"
                  className=""
                  id="date_published"
                  required
                  value={date_published}
                  onChange={e => setDatePublished(e.target.value)}
                  name="date_published"
                />
              </div>
            
              
              <button onClick={handleSubmit} className="">
                Submit
              </button>
            </div>
          
          )}
        </div>
      );
    };
  


export default AddBlogPost;