import './SingleReview.css';
import moment from 'moment';

const SingleReview = (props) => {

  const formatPostedDate = (postedDate) => {
    let formattedDate = moment(postedDate).format('MMMM Do YYYY');
    console.log(formattedDate)
    return formattedDate;
  }

    return (
      <li>
        <div
          className="review-item">
          <p>

            <strong>Title: </strong>{props.review.title}
            <strong>Author:  </strong>{props.review.authorId}
            <strong>Product: </strong>{props.review.productId}
            <strong>Review: </strong>{props.review.description}
            <strong>Stars: </strong>{props.review.stars}
          <strong>Date of review: </strong> {formatPostedDate(props.review.posted_date)}
           
          </p>
        </div>
      </li>
    );
  };


  export default SingleReview;