import './Trends.css';
import trending  from './TrendingData';
import SingleCard from '../Cards/SingleCard';

const Trends = () => {

    return ( 
        <>
        <h1>Trending</h1>
            <div className="">
            <ul>
              {trending.map(trend => {
                return <SingleCard item={trend} key={trend.id} />;
              })}
            </ul>
            </div>
            </>
          );
    
}

export default Trends; 