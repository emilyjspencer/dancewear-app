import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import ProductsService from '../ProductsService';
import './EditDeleteProduct'
import BrandsService from "../../Brands/BrandsService";
import CategoriesService from "../../Category/CategoriesService";

const EditDeleteProduct = props => {
  const { id } = useParams();
  let navigate = useNavigate();

  const initialState = {
    id: null,
    product_name: "",
    description: "",
    price: "",
    brand: "",
    category: ""
  };
  const [currentProduct, setCurrentProduct] = useState(initialState);
  const [message, setMessage] = useState("");
  const [categories, setCategories] = useState([]);
const [brands, setBrands] = useState([]);
const [selectedBrand, setSelectedBrand] = useState(null);
const [selectedCategory, setSelectedCategory] = useState(null);
const [brand, setBrand] = useState(null);
const [category, setCategory] = useState(null);
const [product_name, setProductName] = useState("");
const [description, setDescription] = useState("");
const [price, setPrice] = useState("");
const [submitted, setSubmitted] = useState(false);


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
    fetchForeignKeys();
  });

  useEffect(() => {
    if (id)
      getProduct(id);
  }, [id]);

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

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentProduct({ ...currentProduct, [name]: value });
  };

  const fetchForeignKeys = () => {
    BrandsService.getAll()
        .then(response => {
            if(response.status === 200) {
                setBrand(response.data);
            }
        })
        .catch(error => {
            console.log('Brands not found...')
        })

    CategoriesService.getAll()
            .then(response => {
                if(response.status === 200) {
                    console.log(response.data.length + ' categories found!');
                    setCategory(response.data);
                }
            })
            .catch(error => {
                console.log('Categories not found...')
            })


          } 

  const updateProduct = () => {
    ProductsService.update(currentProduct.product_id, currentProduct)
      .then(response => {
        console.log(response.data);
        setMessage("Product information was updated!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteProduct = () => {
    ProductsService.remove(currentProduct.product_id)
      .then(response => {
        console.log(response.data);
        navigate("/products");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const handleBrandSelector = (id) => {
    setSelectedBrand(brands[id -1])
}

const handleCategorySelector = (id) => {
    setSelectedCategory(categories[id - 1]);
}

  return (
    <div>
      {currentProduct ? (
        <div className="edit-form">
          <h4>Product</h4>
          <form>
            <div className="">
              <label htmlFor="product_name">Name</label>
              <input
                type="text"
                className="form-control"
                id="product_name"
                name="product_name"
                value={currentProduct.product_name}
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

          </form>


          <button className="" onClick={deleteProduct}>
            Delete
          </button>

          <button
            type="submit"
            className=""
            onClick={handleSubmit}
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


export default EditDeleteProduct;