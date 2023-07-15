import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import ReviewsService from '../ReviewsService';
import './EditDeleteReview.css'

const EditDeleteReview = props => {
  const { id } = useParams();
  let navigate = useNavigate();

  const initialState = {
    id: "",
    title: "",
    description: "",
    posted_date: "",
    stars: "",
    author: ""
  };
  const [currentReview, setCurrentReview] = useState(initialState);
  const [message, setMessage] = useState("");
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState(null);

  const getReviews = id => {
    ReviewsService.get(id)
      .then(response => {
        setCurrentReview(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (id)
      getReviews(id);
  }, [id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentReview({ ...currentReview, [name]: value });
  };

  const handleAuthorSelector = (id) => {
    setSelectedAuthor(users[id -1])
}


  const updateReview = () => {
    ReviewsService.update(currentReview.reivew_id, currentReview)
      .then(response => {
        console.log('Review was updated');
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteReview = () => {
    ReviewsService.remove(currentReview.review_id)
      .then(response => {
        console.log(response.data);
        navigate("/reviews");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentReview ? (
        <div className="edit-form">
          <h4>Reviews</h4>
          <form>
            <div className="">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={currentReview.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="body">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={currentReview.description}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="posted_date">Date Published</label>
              <input
                type="date"
                className="form-control"
                id="posted_date"
                name="posted_date"
                value={currentReview.posted_date}
                onChange={handleInputChange}
              />
              </div>

              <div className="form-group">
              <label htmlFor="stars">Stars</label>
              <input
                type="text"
                className="form-control"
                id="stars"
                name="stars"
                value={currentReview.stars}
                onChange={handleInputChange}
              />
              </div>

              <div className="form-group">
              <label htmlFor="brand">Author</label>
            <select
                  required
                  onChange={e => handleAuthorSelector(e.target.value)}>
                    <option>Please select an author</option>
                    {
                        user.map(user =>
                            <option
                            key={user.user_id}
                            value={user.user_id}
                            >{user.first_name}
                            </option>)
                    }
                  </select>
             </div>


          </form>


          <button className="" onClick={deleteReview}>
            Delete
          </button>

          <button
            type="submit"
            className=""
            onClick={updateReview}
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


export default EditDeleteReview;