import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import ProductsService from '../ProductsService';
import './Product'

const Product = props => {
  const { id }= useParams();
  let navigate = useNavigate();

  const initialState = {
    id: null,
    name: "",
    description: "",
    price: ""
  };
  const [currentProduct, setCurrentProduct] = useState(initialState);
  const [message, setMessage] = useState("");

  const getProduct = id => {
    ProductsService.get(id)
      .then(response => {
        setCurrentProduct(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (id)
      getProduct(id);
  }, [id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentProduct({ ...currentProduct, [name]: value });
  };



  const updateProduct = () => {
    ProductsService.update(currentProduct.id, currentProduct)
      .then(response => {
        console.log(response.data);
        setMessage("Product information was updated!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteProduct = () => {
    ProductsService.remove(currentProduct.id)
      .then(response => {
        console.log(response.data);
        navigate("/products");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentProduct ? (
        <div className="edit-form">
          <h4>Product</h4>
          <form>
            <div className="">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={currentProduct.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={currentProduct.description}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input
                type="text"
                className="form-control"
                id="price"
                name="price"
                value={currentProduct.price}
                onChange={handleInputChange}
              />
              </div>

          </form>


          <button className="" onClick={deleteProduct}>
            Delete
          </button>

          <button
            type="submit"
            className=""
            onClick={updateProduct}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please select a product</p>
        </div>
      )}
    </div>
  )}
  ;


export default Product;