import './SingleReview.css';

const SingleReview = (props) => {
    return (
      <li>
        <div
          className="review-item">
          <p>
            <strong>{props.review.title}
            {props.review.author}
            {props.review.description}
            {props.review.stars}
            </strong>
          </p>
        </div>
      </li>
    );
  };


  export default SingleReview;