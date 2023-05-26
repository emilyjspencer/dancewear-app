import trending  from './TrendingData';
import SingleCard from './SingleCard';

const Cards = (props) => {

    return (
      <div className="card-container">
      <ul>
        {trending.map(trend => {
          return <SingleCard trend={trend} key={trend.id} />;
        })}
      </ul>
      </div>
    );
}

export default Cards;