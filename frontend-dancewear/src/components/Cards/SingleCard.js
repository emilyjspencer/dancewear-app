import './SingleCard.css';

const SingleCard = (props) => {
    return (
      <li>
        <div
          className="card-item">
          <p>
            <strong><a href={props.trend.url}>{props.trend.title}</a></strong>
          </p>
          <div>{props.trend.img}</div>
        </div>
      </li>
    );
  };


  export default SingleCard;