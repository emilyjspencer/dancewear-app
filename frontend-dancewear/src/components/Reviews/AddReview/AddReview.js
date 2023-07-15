import React, { useState, useEffect } from "react";
import ReviewsService from '../ReviewsService';
import {  useNavigate } from 'react-router-dom';
import UsersService from "../../UsersPage/UsersService";
import ProductsService from "../../Products/ProductsService";


const AddReview = () => {
  const initialState = {
    id: "",
    title: "",
    description: "",
    stars: "",
    posted_date: "",
    user: "",
    product: ""
  };
 
  const [submitted, setSubmitted] = useState(false);
  const [users, setUsers] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posted_date, setPostedDate ] = useState("");
  const [ stars, setStars ] = useState("");


  const [selectedUser, setSelectedUsers ] = useState(null);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProducts ] = useState(null);
  const [review, setReview] = useState(null);
  const [reviews, setReviews] = useState([]);


  const navigate = useNavigate();


  const handleUserSelector = (id) => {
    setSelectedUsers(users[id -1])
  }

  const handleProductSelector = (id) => {
    setSelectedProducts(products[id -1 ])
  }

  const handleSubmit = (event) => {
    event.preventDefault();


    let data = {
      title: title,
      description: description,
      posted_date: posted_date,
      stars: stars,
      user: selectedUser,
      product: selectedProduct
    }

    console.log('handle submit method is called')
    console.log(data)


    if( data.product !== undefined
        && data.user !== undefined
        ) {

  ReviewsService.create(data)
    .then(response => {

            if(response.status === 201) {
                alert('Review created');
                navigate('/reviews')
            }
        })
        .catch(error => {
            console.error('Unable to send request')
        })
    }
  };

  const newReview = () => {
    setReview(initialState);
    setSubmitted(false);
  }

  const fetchForeignKeys = () => {
    UsersService.getAll()
        .then(response => {
            if(response.status === 200) {
                setUsers(response.data);
            }
        })
        .catch(error => {
            console.log('Users not found...')
        })

    ProductsService.getAll()
            .then(response => {
                if(response.status === 200) {
                    console.log(response.data.length + ' products found!');
                    setProducts(response.data);
                }
            })
            .catch(error => {
                console.log('Products not found...')
            })

          }
         
          useEffect(() => {
            fetchForeignKeys();
          }, []);
          

  return (
        <div className="submit-form">
          {submitted ? (
            <div>
              <h4>submitted</h4>
              <button className="" onClick={newReview}>
                Add Review
              </button>
            </div>
          ) : (
            <div>
              <div className="">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className=""
                  id="title"
                  required
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  name="title"
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
                <label htmlFor="posted_date">Date Published</label>
                <input
                  type="date"
                  className=""
                  id="posted_date"
                  required
                  value={posted_date}
                  onChange={e => setPostedDate(e.target.value)}
                  name="posted_date"
                />
              </div>

              <div className="">
                <label htmlFor="stars">Stars</label>
                <input
                  type="text"
                  className=""
                  id="stars"
                  required
                  value={stars}
                  onChange={e => setStars(e.target.value)}
                  name="stars"
                />
              </div>

              <div className="form-group">
              <label htmlFor="brand">Author</label>
            <select
                  required
                  onChange={e => handleUserSelector(e.target.value)}>
                    <option>Please select a user</option>
                    {
                        users.map(user =>
                            <option
                            key={user.user_id}
                            value={user.user_id}
                            >{user.first_name}
                            </option>)
                    }
                  </select>
             </div>

             <div className="form-group">
              <label htmlFor="product">Item</label>
            <select
                  required
                  onChange={e => handleProductSelector(e.target.value)}>
                    <option>Please select a product</option>
                    {
                        products.map(product =>
                            <option
                            key={product.product_id}
                            value={product.product_id}
                            >{product.product_name}
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
  


export default AddReview;