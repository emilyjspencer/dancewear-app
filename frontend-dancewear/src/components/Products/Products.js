import { useState, useEffect} from 'react';
import './Products.css';

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
  <div>
    {products.length > 0 && (
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name} {product.description}  {product.price}</li>
        ))}
      </ul>
    )}
  </div>
);
}

export default Products;