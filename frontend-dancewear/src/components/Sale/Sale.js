import './Sale.css';
import Filter from '../Filter/Filter';
import Parent from '../Test/TestUserList';

const Sale = () => {


    return (
        
        <>
        <Filter />
        <h1>Sale</h1>
        <div className="sale-container">
        <h3>Check out our sale items:</h3>
        <Parent />
        </div>
        </>
    )
}

export default Sale;