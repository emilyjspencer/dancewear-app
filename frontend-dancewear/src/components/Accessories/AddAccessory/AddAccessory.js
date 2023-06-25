import React, { useState } from "react";
import AccessoryService from "../AccessoryService";

const AddAccessory = () => {
  const initialState = {
    id: null,
    name: "",
    description: "",
  };
  const [accessory, setAccessory] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setAccessory({ ...accessory, [name]: value });
  };

  const saveAccessory = () => {
    var data = {
      name: accessory.name,
      description: accessory.description
    };

    AccessoryService.create(data)
      .then(response => {
        setAccessory({
          id: response.data.id,
          name: response.data.name,
          description: response.data.description,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newAccessory = () => {
    setAccessory(initialState);
    setSubmitted(false);
  };

  return (
        <div className="submit-form">
          {submitted ? (
            <div>
              <h4>submitted</h4>
              <button className="" onClick={newAccessory}>
                Add Accessory
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
                  value={accessory.name}
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
                  value={accessory.description}
                  onChange={handleInputChange}
                  name="description"
                />
              </div>
    
              <button onClick={saveAccessory} className="">
                Submit
              </button>
            </div>
          )}
        </div>
      );
    };
  


export default AddAccessory;