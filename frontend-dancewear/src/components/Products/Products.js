import { useState, useEffect} from 'react';
import './Products.css';
import Pagination from '../Pagination/Pagination';
import Cards from '../Cards/Cards';

const Products = () => {
const [products, setProducts] = useState([])

const fetchProductData = () => {
  fetch("http://localhost:8080/api/products")
    .then(response => {
      return response.json()
    })
    .then(data => {
      setProducts(data)
    })
}

useEffect(() => {
  fetchProductData()
}, [])

return (
  <>

    <div className="">
      {products.length > 0 && (
        
          <ul className="container">
            {products.map(product => (
              <>
                <Cards
                  imgSrc=""
                  imgAlt="Product placeholder"
                  text1={`First name: ${product.name}`}
                  text2={`Last name: ${product.description}`}
                  text3={`Job location: ${product.price}`}
                />
              
              </>
            ))}
          </ul>
        

      )}
    </div>
    </>)}

export default Products;