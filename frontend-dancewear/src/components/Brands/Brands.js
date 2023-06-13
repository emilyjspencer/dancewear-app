import { useState, useEffect} from 'react';
import './Brands.css';
import Cards from '../Cards/Cards';
import Filter from '../Filter/Filter';

const BrandsPage = () => {
const [brands, setBrands] = useState([])

const fetchBrandsData = () => {
  fetch("http://localhost:8080/api/brands")
    .then(response => {
      return response.json()
    })
    .then(data => {
      setBrands(data)
    })
}

useEffect(() => {
  fetchBrandsData()
}, [])

return (
  <>
    <Filter />
    <div className="">
      {brands.length > 0 && (
        
          <ul className="container">
            {brands.map(brand => (
              <>
               
                <Cards
                  imgSrc=""
                  imgAlt="Brand placeholder"
                  text1={`Brand: ${brand.name}`}
                />
        
              </>
              
            ))}
            
          </ul>
        

      )}
    </div>
    </>)}

export default BrandsPage;