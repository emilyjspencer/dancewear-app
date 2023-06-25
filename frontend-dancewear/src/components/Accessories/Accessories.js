import { useState, useEffect} from 'react';
import './Accessories.css';
import Cards from '../Cards/Cards';
import Filter from '../Filter/Filter';

const Accessories = () => {
const [accessories, setAccessories] = useState([])

const fetchAccessoriesData = () => {
  fetch("http://localhost:8080/api/accessories")
    .then(response => {
      return response.json()
    })
    .then(data => {
      setAccessories(data)
    })
}

useEffect(() => {
  fetchAccessoriesData()
}, [])

return (
  <>
    <Filter />
    <div className="">
      {accessories.length > 0 && (
        
          <ul className="container">
            {accessories.map(accessory => (
              <>
               
                <Cards
                  imgSrc=""
                  imgAlt="Accessory placeholder"
                  text1={`Name: ${accessory.name}`}
                />
        
              </>
              
            ))}
            
          </ul>
        

      )}
    </div>
    </>)}

export default Accessories;