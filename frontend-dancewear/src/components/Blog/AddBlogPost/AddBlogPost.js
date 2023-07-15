import React, { useState, useEffect } from "react";
import BlogService from '../BlogService';
import UsersService from '../../UsersPage/UsersService';
import {  useNavigate } from 'react-router-dom';


const AddBlogPost = () => {
  const initialState = {
    id: null,
    title: "",
    post: "",
    date_published: "",
    author_id: ""
  
  };
  const [blogPost, setBlogPost] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [users, setUsers] = useState([]);
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  const [date_published, setDatePublished] = useState(null);
  const [selectedAuthor, setSelectedAuthor] = useState(null);

  const navigate = useNavigate();

  const handleInputChange = event => {
    const { name, value } = event.target;
    setBlogPost({ ...blogPost, [name]: value });
  };

  const saveBlog = () => {
    var data = {
      title: blogPost.title,
      post: blogPost.post,
      date_published: blogPost.date_published,
      author_id: blogPost.user
    }
  ;

    BlogService.create(data)
      .then(response => {
        setBlogPost({
          id: response.data.id,
          title: response.data.title,
          post: response.data.post,
          date_published: response.data.published,
          author_id: response.data.user_id
         
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

  const fetchForeignKeys = () => {
    UsersService.getAll()
        .then(response => {
            if(response.status === 200) {
                setUsers(response.data);
            }
        })
        .catch(error => {
            console.log('Users not found...')
        })
  }

  const handleAuthorSelector = (id) => {
    setSelectedAuthor(users[id - 1]);
}

const handleSubmit = (event) => {
  event.preventDefault();


  let data = {
      title: title,
      post: post,
      date_published: date_published,
      author_id: selectedAuthor,
  }

  console.log('handle submit method is called')
  console.log(data)


  
  if( data.user !== undefined
      ) {
      UsersService.create(data)
      .then(response => {

              if(response.status === 201) {
                  alert('User created');
                  navigate('/users')
              }
          })
          .catch(error => {
              console.error('Unable to send request')
          })
  } else {
      setSubmitted(false);
    
  }}


  useEffect(() => {
    fetchForeignKeys();
  }, []);


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
                <label htmlFor="post">Body</label>
                <input
                  type="text"
                  className=""
                  id="post"
                  required
                  value={blogPost.post}
                  onChange={handleInputChange}
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
                  value={blogPost.date_published}
                  onChange={handleInputChange}
                  name="date_published"
                />
              </div>
             
              <div className="form-group">
              <label htmlFor="user">Author</label>
            <select
                  required
                  onChange={e => handleAuthorSelector(e.target.value)}>
                    <option>Please select a user</option>
                    {
                        users.map(user =>
                            <option
                            key={user.user_id}
                            value={user.user_id}
                            >{user.first_name} {user.last_name}
                            </option>)
                    }
                  </select>
                </div>
              
              <button onClick={saveBlog} className="">
                Submit
              </button>
            </div>
          
          )}
        </div>
      );
    };
  


export default AddBlogPost;