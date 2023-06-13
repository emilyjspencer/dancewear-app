import { useState, useEffect} from 'react';
import './Gymnastics.css';
import Cards from '../Cards/Cards';
import Filter from '../Filter/Filter';

const GymnasticsPage = () => {
const [gymnastics, setGymnastics] = useState([])

const fetchGymnasticsData = () => {
  fetch("http://localhost:8080/api/gymnastics")
    .then(response => {
      return response.json()
    })
    .then(data => {
      setGymnastics(data)
    })
}

useEffect(() => {
  fetchGymnasticsData()
}, [])

return (
  <>
    <Filter />
    <div className="">
      {gymnastics.length > 0 && (
        
          <ul className="container">
            {gymnastics.map(gymnastic => (
              <>
               
                <Cards
                  imgSrc=""
                  imgAlt="Gymnastic placeholder"
                  text1={`Name: ${gymnastic.name}`}
                />
        
              </>
              
            ))}
            
          </ul>
        

      )}
    </div>
    </>)}

export default GymnasticsPage;