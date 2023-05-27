import './SingleCard.css';

const SingleCard = (props) => {
    return (
      <li>
        <div
          className="card-container">
          <p>
            <strong><a href={props.item.url}>{props.item.title}</a></strong>
          </p>
          <div className='card-img'>{props.item.img}</div>
        </div>
      </li>
    );
  };


  export default SingleCard;