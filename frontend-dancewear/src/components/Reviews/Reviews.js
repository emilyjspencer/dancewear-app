

import { useState, useEffect } from 'react';
import './Reviews.css';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import ReviewsService from './ReviewsService';
import Cards from '../Cards/Cards';
import moment from 'moment';

const modalStyles = {
  content: {
    backgroundColor: "white",
    border: "solid 4 blue",
    width: 650,
    padding: 40,
    height: 600,
    color: "black",
    top: "50%",
    left: "50%", 
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
   
  },
};

const Reviews = () => {
 

 const [review, setReview ] = useState("");
 const [reviews, setReviews ] = useState([]);
 const [currentReview, setCurrentReview] = useState("");
 const [currentIndex, setCurrentIndex] = useState("");
 const [id, setId] = useState("");
 const [searchId, setSearchId] = useState("");
 const [reviewDetail, setReviewDetail] = useState(null);
 const [reviewTitle, setReviewTitle] = useState("");
 const [searchReviewTitle, setSearchReviewTitle] = useState("");
 const [searchReviewByTitle, setSearchReviewByTitle] = useState("");
 const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    getReviews();
  }, []);


  const getReviews = () => {
    ReviewsService.getAll()
      .then(response => {
        setReviews(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const resetReviews = () => {
    getReviews();
    setCurrentReview(null);
    setCurrentIndex(-1);
  };

  const setActiveReviews = (post, index) => {
    setCurrentReview(post);
    setCurrentIndex(index);
  };

  const deleteAllReviews = () => {
    ReviewsService.removeAll()
      .then(response => {
        console.log(response.data);
        resetReviews();
      })
      .catch(e => {
        console.log(e);
      });
  };

  const formatDatePosted = (posted_date) => {
    let formattedDate = moment(posted_date).format('MMMM Do YYYY');
    console.log(formattedDate);
    return formattedDate;
  }


  const setActiveReview = (review, index) => {
    setCurrentReview(review);
    setCurrentIndex(index);
  };

  return (
    <><><>
      <div className="search-add-container">
        <Link to={"/reviews/add"} className="add-review">Add a review</Link>
      </div>
      <div>
        <div className="main">
          <div className="search-container">
            <div className="">
              <input type="number" placeholder="Search .." name="searchId" onChange={(event) => setId(event.target.value)}></input>
              <input type="text" placeholder="Search by title" name="searchReviewByTitle" onChange={(event) => setSearchReviewByTitle(event.target.value)}></input>

            </div>
          </div>
        </div>
      </div>
      {reviews.length > 0 && (
        <ul className="review-list-container">
          <>
            {reviews.filter((review) => {
              return searchId === "" ? review : review.review_id.toString() === searchId
            }).filter((review) => {
              return searchReviewTitle === "" ? review : review.title.toLowerCase().includes(searchReviewTitle)
            }).map((review, index) => (

              <><div id="card-modal-button" key={review.review_id}
                onClick={(e) => {
                  setActiveReview(review, index); setReviewDetail(review);
                }}></div>
                
                <div className="review-cards" key={review.review_id}
                  onClick={(e) => {
                    setActiveReview(review, index); setReviewDetail(review);
                    setModalOpen(e); formatDatePosted(review.posted_date);
                  }}>
                
                    <Cards
                      imgSrc="https://picsum.photos/seed/picsum/200/300"
                      imgAlt="Post placeholder"
                      text1={`Title : ${review.title}`}
                      text2={`Product: ${review.description}`}
                      text4={`Date: ${review.posted_date}`} 
                      text5={`Stars: ${review.stars }`}
                      text6={`Author: ${review.user.first_name}`}
                      />
                

                  <Link
                    to={"/reviews/" + review.review_id}
                    className=""
                  >
                    Edit Review /Delete
                  </Link>

                </div>

              </>))}
          </>

        </ul>
      )}

{reviewDetail ? <Modal
  isOpen={modalOpen}
  onRequestClose={() => setModalOpen(false)}
  style={modalStyles}
  review={reviewDetail}
>

<ul className="review-detail-list">
      <li><strong>Title: </strong> {reviewDetail.title}</li>
      <li><strong>Description: </strong>{reviewDetail.description}</li>
      <li><strong>Date: </strong>{formatDatePosted(reviewDetail.posted_date)}</li>
      <li><strong>Stars: {reviewDetail.stars}</strong></li>
      <li><strong>Author: {reviewDetail.user}</strong></li>
      </ul>

  <button onClick={() => setModalOpen(false)}>Close Modal</button>
</Modal> : "select a card to view more info" }
    </></></>)
}

export default Reviews;