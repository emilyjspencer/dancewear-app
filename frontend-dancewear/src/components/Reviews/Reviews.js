import {useEffect, useState} from 'react';

import SingleReview from './SingleReview';
import Filter from '../Filter/Filter';

const Reviews = () => {

    const [reviews, setReviews] = useState([])

const fetchReviewData = () => {
  fetch("http://localhost:8080/api/reviews")
    .then(response => {
      return response.json()
    })
    .then(data => {
      setReviews(data)
    })
}

useEffect(() => {
  fetchReviewData()
}, [])


    return (
      <>
      <Filter />
      <div className="review-container">
      <ul>
        {reviews.map(review => {
          
          <SingleReview review={review} key={review.id} />;
        })}
      </ul>
      </div>
      </>
    );
}

export default Reviews;