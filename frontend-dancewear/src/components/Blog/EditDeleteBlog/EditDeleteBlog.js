import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import BlogService from '../BlogService';
import './EditDeleteBlog'

const EditDeleteBlog = props => {
  const { id } = useParams();
  let navigate = useNavigate();

  const initialState = {
    id: null,
    title: "",
    body: "",
    date_published: "",
    author_id: ""
  };
  const [currentBlogPost, setCurrentBlogPost] = useState(initialState);
  const [message, setMessage] = useState("");

  const getBlog = id => {
    BlogService.get(id)
      .then(response => {
        setCurrentBlogPost(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (id)
      getBlog(id);
  }, [id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentBlogPost({ ...currentBlogPost, [name]: value });
  };



  const updateBlog = () => {
    BlogService.update(currentBlogPost.id, currentBlogPost)
      .then(response => {
        console.log('Blog post was updated');
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteBlog = () => {
    BlogService.remove(currentBlogPost.blog_id)
      .then(response => {
        console.log(response.data);
        navigate("/blog");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentBlogPost ? (
        <div className="edit-form">
          <h4>Blog Posts</h4>
          <form>
            <div className="">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={currentBlogPost.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="body">Post</label>
              <input
                type="text"
                className="form-control"
                id="body"
                name="body"
                value={currentBlogPost.body}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="date_published">Date Published</label>
              <input
                type="date"
                className="form-control"
                id="date_published"
                name="date_published"
                value={currentBlogPost.date_published}
                onChange={handleInputChange}
              />
              </div>

              <div className="form-group">
              <label htmlFor="author_id">Author</label>
              <input
                type="author_id"
                className="form-control"
                id="author_id"
                name="author_id"
                value={currentBlogPost.author_id}
                onChange={handleInputChange}
              />
              </div>


          </form>


          <button className="" onClick={deleteBlog}>
            Delete
          </button>

          <button
            type="submit"
            className=""
            onClick={updateBlog}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please select a blog post</p>
        </div>
      )}
    </div>
  )}
  ;


export default EditDeleteBlog;