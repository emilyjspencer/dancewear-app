import React from "react";
import { useEffect, useState } from "react";
import {  useNavigate } from 'react-router-dom';
import ProductsService from "../ProductsService";
import './AddProduct.css';
import BrandsService from '../../Brands/BrandsService';
import CategoriesService from '../../Category/CategoriesService';

const AddProduct = () => {
  const initialState = {
    id: null,
    product_name: "",
    description: "",
    price: "",
    brand: "",
    category: ""
  };
  const [product, setProduct] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [brand, setBrand] = useState({});
  const [category, setCategory] = useState({});
  const [product_name, setProductName] = useState("");
  const [categories, setCategories] = useState([]);
  const [description, setDescription] = useState("");
  const [brands, setBrands] = useState([]);
  const [price, setPrice] = useState("");
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);


  const navigate = useNavigate();

  const handleInputChange = event => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };
 

const handleCategorySelector = (id) => {
    setSelectedCategory(categories[id - 1]);
}

const handleBrandSelector = (id) => {
  setSelectedBrand(brands[id -1])
}

const fetchForeignKeys = () => {
    BrandsService.getAll()
        .then(response => {
            if(response.status === 200) {
                setBrands(response.data);
            }
        })
        .catch(error => {
            console.log('Brands not found...')
        })

    CategoriesService.getAll()
            .then(response => {
                if(response.status === 200) {
                    console.log(response.data.length + ' categories found!');
                    setCategories(response.data);
                }
            })
            .catch(error => {
                console.log('Categories not found...')
            })

          }
         
          

       


  const newProduct = () => {
    setProduct(initialState);
    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();


    let data = {
        product_name: product_name,
        description: description,
        price: price,
        brand: selectedBrand,
        category: selectedCategory
    }

    console.log('handle submit method is called')
    console.log(data)


    
    if( data.brand !== undefined
        && data.category !== undefined
        ) {
        ProductsService.create(data)
        .then(response => {

                if(response.status === 201) {
                    alert('Product created');
                    navigate('/products')
                }
            })
            .catch(error => {
                console.error('Unable to send request')
            })
    } else {
        setSubmitted(false);
      
    }
}

useEffect(() => {
  fetchForeignKeys();
}, []);


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
                <label htmlFor="product_name">Name</label>
                <input
                  type="text"
                  className=""
                  id="product_name"
                  required
                  value={product_name}
                  onChange={e => setProductName(e.target.value)}
                  name="product_name"
                />
              </div>
    
              <div className="">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className=""
                  id="description"
                  required
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  name="description"
                />
              </div>

              <div className="">
                <label htmlFor="price">Price</label>
                <input
                  type="number"
                  className=""
                  id="price"
                  required
                  value={price}
                  onChange={e => setPrice(e.target.value)}
                  name="price"
                />
              </div>

              <div className="form-group">
              <label htmlFor="brand">Brand</label>
            <select
                  required
                  onChange={e => handleBrandSelector(e.target.value)}>
                    <option>Please select a brand</option>
                    {
                        brands.map(brand =>
                            <option
                            key={brand.brand_id}
                            value={brand.brand_id}
                            >{brand.brand_name}
                            </option>)
                    }
                  </select>
             </div>

             <div className="form-group">
              <label htmlFor="category">Category</label>
            <select
                  required
                  onChange={e => handleCategorySelector(e.target.value)}>
                    <option>Please select a category</option>
                    {
                        categories.map(category =>
                            <option
                            key={category.category_id}
                            value={category.category_id}
                            >{category.category_name}
                            </option>)
                    }
                  </select>
             </div>
    
              <button onClick={handleSubmit} className="">
                Submit
              </button>
         
            
    
       </div>
          )}
          </div>
                
      );
    };
  


export default AddProduct;

