import SingleCard from './SingleCard';

const Cards = () => {

 const list = [];

    return (
      <div className="card-container2">
      <ul>
        {list.map(item => {
          return <SingleCard item={item} key={item.id} />;
        })}
      </ul>
      </div>
    );
}

export default Cards;