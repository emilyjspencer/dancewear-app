import React, { useState } from "react";
import BlogService from '../BlogService';

const AddBlogPost = () => {
  const initialState = {
    id: null,
    title: "",
    body: "",
    date_published: "",
    author_id: ""
  
  };
  const [blogPost, setBlogPost] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setBlogPost({ ...blogPost, [name]: value });
  };

  const saveBlog = () => {
    var data = {
      title: blogPost.title,
      body: blogPost.body,
      date_published: blogPost.date_published,
      author_id: blogPost.author_id
    }
  ;

    BlogService.create(data)
      .then(response => {
        setBlogPost({
          id: response.data.id,
          title: response.data.title,
          body: response.data.body,
          date_published: response.data.published,
          author_id: response.data.author_id
         
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newBlogPost = () => {
    setBlogPost(initialState);
    setSubmitted(false);
  };

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
                  value={blogPost.title}
                  onChange={handleInputChange}
                  name="title"
                />
              </div>
    
              <div className="">
                <label htmlFor="body">Body</label>
                <input
                  type="text"
                  className=""
                  id="body"
                  required
                  value={blogPost.body}
                  onChange={handleInputChange}
                  name="body"
                />
              </div>

              <div className="">
                <label htmlFor="date_published">Date Published</label>
                <input
                  type="date"
                  className=""
                  id="date_published"
                  required
                  value={blogPost.date_published}
                  onChange={handleInputChange}
                  name="date_published"
                />
              </div>
              <div className="">
                <label htmlFor="author_id">Author</label>
                <input
                  type="text"
                  className=""
                  id="author_id"
                  required
                  value={blogPost.author_id}
                  onChange={handleInputChange}
                  name="author_id"
                />
              
              <button onClick={saveBlog} className="">
                Submit
              </button>
            </div>
            </div>
          )}
        </div>
      );
    };
  


export default AddBlogPost;