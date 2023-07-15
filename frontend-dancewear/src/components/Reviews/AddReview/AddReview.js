import React, { useState, useEffect } from "react";
import ReviewsService from '../ReviewsService';
import UsersService from '../../UsersPage/UsersService';
import {  useNavigate } from 'react-router-dom';


const AddReview = () => {
  const initialState = {
    id: "",
    title: "",
    description: "",
    stars: "",
    posted_date: "",
    user: ""
  };
  const [blogPost, setBlogPost] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [users, setUsers] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posted_date, setPostedDate ] = useState("");
  const [ stars, setStars ] = useState("");
  const [user, setUser] = useState({})




  const navigate = useNavigate();


  const handleUserSelector = (id) => {
    setSelectedUsers(users[id -1])
  }

  const handleSubmit = (event) => {
    event.preventDefault();


    let data = {
      title: title,
      description: description,
      posted_date: posted_date,
      stars: stars,
      user: selectedUser
    }

    console.log('handle submit method is called')
    console.log(data)


  ReviewsService.create(data)
    .then(response => {

            if(response.status === 201) {
                alert('Review created');
                navigate('/review')
            }
        })
        .catch(error => {
            console.error('Unable to send request')
        })

  };

  const newReview = () => {
    setReview(initialState);
    setSubmitted(false);
  }


  return (
        <div className="submit-form">
          {submitted ? (
            <div>
              <h4>submitted</h4>
              <button className="" onClick={newReview}>
                Add Review
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
                <label htmlFor="post">Description</label>
                <input
                  type="text"
                  className=""
                  id="description"
                  required
                  value={description}
                  onChange={e => setPost(e.target.value)}
                  name="description"
                />
              </div>

              <div className="">
                <label htmlFor="posted_date">Date Published</label>
                <input
                  type="date"
                  className=""
                  id="posted_date"
                  required
                  value={posted_date}
                  onChange={e => setPostedDate(e.target.value)}
                  name="posted_date"
                />
              </div>

              <div className="">
                <label htmlFor="stars">Stars</label>
                <input
                  type="text"
                  className=""
                  id="stars"
                  required
                  value={stars}
                  onChange={e => setStars(e.target.value)}
                  name="stars"
                />
              </div>

              <div className="form-group">
              <label htmlFor="brand">Author</label>
            <select
                  required
                  onChange={e => handleUserSelector(e.target.value)}>
                    <option>Please select a user</option>
                    {
                        users.map(user =>
                            <option
                            key={user.user_id}
                            value={user.user_id}
                            >{user.first_name}
                            </option>)
                    }
                  </select>
             </div>
            
              
              <button onClick={handleSubmit} className="">
                Submit
              </button>
            </div>
          
          )}
        </div>
      );
    };
  


export default AddReview;