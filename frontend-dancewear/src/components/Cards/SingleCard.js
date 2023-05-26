import './SingleCard.css';

const SingleCard = (props) => {
    return (
      <li>
        <div
          className="card-item">
          <p>
            <strong>{props.trend.title}</strong>
          </p>
          <div>{props.trend.img}</div>
        </div>
      </li>
    );
  };


  export default SingleCard;