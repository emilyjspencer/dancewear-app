
import { useState, useEffect} from 'react';
import './Costumes.css';
import Cards from '../Cards/Cards';

const CostumesPage = () => {
const [costumes, setCostumes] = useState([])

const fetchCostumesData = () => {
  fetch("http://localhost:8080/api/costumes")
    .then(response => {
      return response.json()
    })
    .then(data => {
      setCostumes(data)
    })
}

useEffect(() => {
  fetchCostumesData()
}, [])

return (
  <>

    <div className="">
      {costumes.length > 0 && (
        
          <ul className="container">
            {costumes.map(costume => (
              <>
               
                <Cards
                  imgSrc=""
                  imgAlt="Costume placeholder"
                  text1={`Costume: ${costume.name}`}
                />
        
              </>
              
            ))}
            
          </ul>
        

      )}
    </div>
    </>)}

export default CostumePage;