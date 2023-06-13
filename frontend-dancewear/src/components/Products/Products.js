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
                  text1={`Product: ${product.name}`}
                  text2={`Description: ${product.description}`}
                  text3={`Price: ${product.price}`}
                />
              
              </>
            ))}
          </ul>
        

      )}
    </div>
    </>)}

export default Products;