import React, { useState } from "react";
import BrandsService from "../BrandsService";

const AddBrand = () => {
  const initialState = {
    brand_id: null,
    brand_name: "",
    description: "",
  };
  const [brand, setBrand] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setBrand({ ...brand, [name]: value });
  };

  const saveBrand = () => {
    var data = {
      brand_name: brand.brand_name,
      description: brand.description
    }
  ;

    BrandsService.create(data)
      .then(response => {
        setBrand({
          id: response.data.id,
          brand_name: response.data.brand_name,
          description: response.data.description,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newBrand = () => {
    setBrand(initialState);
    setSubmitted(false);
  };

  return (
        <div className="submit-form">
          {submitted ? (
            <div>
              <h4>submitted</h4>
              <button className="" onClick={newBrand}>
                Add Brand
              </button>
            </div>
          ) : (
            <div>
              <div className="">
                <label htmlFor="brand_name">Name</label>
                <input
                  type="text"
                  className=""
                  id="brand_name"
                  required
                  value={brand.brand_name}
                  onChange={handleInputChange}
                  name="brand_name"
                />
              </div>
    
              <div className="">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className=""
                  id="description"
                  required
                  value={brand.description}
                  onChange={handleInputChange}
                  name="description"
                />
              </div>
              <button onClick={saveBrand} className="">
                Submit
              </button>
            </div>
          )}
        </div>
      );
    };
  


export default AddBrand;