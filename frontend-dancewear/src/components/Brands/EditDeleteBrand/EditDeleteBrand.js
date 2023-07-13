import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import BrandsService from '../BrandsService';

import './EditDeleteBrand.css'



const EditDeleteBrand = props => {


const [brand_name, setBrandName ] = useState('');
const [description, setDescription] = useState('');


const [submitted, setSubmitted] = useState(false);


  const { id } = useParams();
  console.log(id);
  let navigate = useNavigate();

  const initialState = {
    id: id,
    brand_name: brand_name,
    description: description
 
  };
  const [currentBrand, setCurrentBrand] = useState(initialState);
  console.log(currentBrand)
  const [message, setMessage] = useState("");

  const getBrand = id => { 
    BrandsService.get(id)
      .then(response => {
        setCurrentBrand(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (id)
      getBrand(id);
  }, [id]);



  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentBrand({ ...currentBrand, [name]: value });
  };


const handleSubmit = (event) => {
    event.preventDefault();

    let data = {
        brand_name: brand_name,
        description: description,
    }

        BrandsService.create(data)
        .then(response => {
                if(response.status === 201) {
                    alert('Brands created');
                    navigate('/brands')
                }
            })
            .catch(error => {
                console.error('Unable to send request')
            })
   
      
    }



  const updateBrand = () => {
    BrandsService.update(currentBrand.brand_id, currentBrand)
      .then(response => {
        console.log(response.data);
        setMessage("Brand information was updated!");
        navigate('/brands')
      })
      .catch(e => {
        console.log(e);
      });
  };


  const deleteBrand = () => {
    BrandsService.remove(currentBrand.brand_id)
      .then(response => {
        console.log(response.data);
        navigate("/brands");
      })
      .catch(e => {
        console.log(e);
      });
  };



  return (
    <div>

      {currentBrand ? (
        <div className="edit-form">
          <h4>Edit brand information/Delete brand</h4>
          <form>
            <div className="form-group">
              <label htmlFor="brand_name">Brand name</label>
              <input
                type="text"
                className="form-control"
                id="brand_name"
                name="brand_name"
                value={currentBrand.brand_name}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text-area"
                className="form-control"
                id="description"
                name="description"
                value={currentBrand.description}
                onChange={handleInputChange}
              />
            </div>

          </form>

         <div className="buttons-container">
          <button className="delete-button" onClick={deleteBrand}>
            Delete
          </button>

          <button
            type="submit"
            className="submit-button"
            onClick={updateBrand}
          >
            Edit
          </button>
          </div>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
        
        </div>
      )}
    </div>


  )
}


export default EditDeleteBrand;