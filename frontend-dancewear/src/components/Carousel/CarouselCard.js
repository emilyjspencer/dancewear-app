const CarouselCard = (props) => {
  return (
    <>
      <li>
        <div className="card-container">
          <p>
            <strong>
              <a href={props.url}>{props.title}</a>
            </strong>
          </p>
          <div className="card-img">{props.img}</div>
        </div>
      </li>
    </>
  );
};

export default CarouselCard;
