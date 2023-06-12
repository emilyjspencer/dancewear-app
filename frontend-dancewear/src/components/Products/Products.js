import { useState, useEffect} from 'react';
import './Products.css';
import Pagination from '../Pagination/Pagination';

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

    <div className="products-list">
      {products.length > 0 && (
        
          <ul>
            {products.map(product => (
              <>
                <li key={product.id}>
                </li>
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