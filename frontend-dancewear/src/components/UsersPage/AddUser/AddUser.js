import React, { useState } from "react";
import UsersService from "../UsersService";

const AddUser = () => {
  const initialState = {
    id: null,
    name: "",
    description: "",
  };
  const [user, setUser] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const saveUser = () => {
    var data = {
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      phone_number: user.phone_number,
      user_password: user.user_password,
      address: user.address,
      account_number: user.account_number
    }
  ;

    UsersService.create(data)
      .then(response => {
        setBrand({
          id: response.data.id,
          first_name: response.data.first_name,
          last_name: response.data.last_name,
          email: response.data.email,
          phone_number: response.data.phone_number,
          user_password: response.data.user_password,
          address: response.data.address,
          account_number: response.data.account_number
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newUser = () => {
    setUser(initialState);
    setSubmitted(false);
  };

  return (
        <div className="submit-form">
          {submitted ? (
            <div>
              <h4>submitted</h4>
              <button className="" onClick={newUser}>
                Add User
              </button>
            </div>
          ) : (
            <div>
              <div className="">
                <label htmlFor="name">First Name</label>
                <input
                  type="text"
                  className=""
                  id="name"
                  required
                  value={user.first_name}
                  onChange={handleInputChange}
                  name="first_name"
                />
              </div>
    
              <div className="">
                <label htmlFor="last_name">Last Name</label>
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