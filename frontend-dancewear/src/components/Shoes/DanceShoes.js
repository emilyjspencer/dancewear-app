import { useState, useEffect} from 'react';
import './Danceshoes.css';
import Cards from '../Cards/Cards';
import Filter from '../Filter/Filter';

const DanceShoesPage = () => {
const [danceshoes, setDanceShoes] = useState([])

const fetchDanceShoesData = () => {
  fetch("http://localhost:8080/api/danceshoes")
    .then(response => {
      return response.json()
    })
    .then(data => {
      setDanceShoes(data)
    })
}

useEffect(() => {
  fetchDanceShoesData()
}, [])

return (
  <>
    <Filter />
    <div className="">
      {danceshoes.length > 0 && (
        
          <ul className="container">
            {danceshoes.map(shoe => (
              <>
               
                <Cards
                  imgSrc=""
                  imgAlt="Shoes placeholder"
                  text1={`Name: ${shoe.name}`}
                />
        
              </>
              
            ))}
            
          </ul>
        

      )}
    </div>
    </>)}

export default DanceShoesPage;