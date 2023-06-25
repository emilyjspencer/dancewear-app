import React, { useState } from "react";
import ProductsService from "../ProductsService";
import './AddProduct.css';

const AddProduct = () => {
  const initialState = {
    id: null,
    title: "",
    description: "",
    price: "",
    published: false
  };
  const [product, setProduct] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const saveProduct = () => {
    var data = {
      name: product.name,
      description: product.description,
      price: product.price
    };

    ProductsService.create(data)
      .then(response => {
        setProduct({
          id: response.data.id,
          name: response.data.name,
          description: response.data.description,
          price: response.data.price
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newProduct = () => {
    setProduct(initialState);
    setSubmitted(false);
  };

  return (
        <div className="submit-form">
          {submitted ? (
            <div>
              <h4>submitted</h4>
              <button className="" onClick={newProduct}>
                Add
              </button>
            </div>
          ) : (
            <div>
              <div className="">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className=""
                  id="name"
                  required
                  value={product.name}
                  onChange={handleInputChange}
                  name="name"
                />
              </div>
    
              <div className="">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className=""
                  id="description"
                  required
                  value={product.description}
                  onChange={handleInputChange}
                  name="description"
                />
              </div>

              <div className="">
                <label htmlFor="price">Price</label>
                <input
                  type="text"
                  className=""
                  id="price"
                  required
                  value={product.price}
                  onChange={handleInputChange}
                  name="price"
                />
              </div>
    
              <button onClick={saveProduct} className="">
                Submit
              </button>
            </div>
          )}
        </div>
      );
    };
  


export default AddProduct;