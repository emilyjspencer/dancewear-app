import React, { useState } from "react";
import UsersService from "../UsersService.js";

const AddUser = () => {
  const initialState = {
    id: null,
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    user_password: "",
    address: "",
    account_number: ""
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
        setUser({
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
                <label htmlFor="first_name">First Name</label>
                <input
                  type="text"
                  className=""
                  id="first_name"
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
                  id="last_name"
                  required
                  value={user.last_name}
                  onChange={handleInputChange}
                  name="last_name"
                />
              </div>

              <div className="">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  className=""
                  id="email"
                  required
                  value={user.email}
                  onChange={handleInputChange}
                  name="email"
                />
              </div>
              <div className="">
                <label htmlFor="last_name">Phone Number</label>
                <input
                  type="text"
                  className=""
                  id="phone_number"
                  required
                  value={user.phone_number}
                  onChange={handleInputChange}
                  name="phone_number"
                />
              </div>
              <div className="">
                <label htmlFor="user_password">Password</label>
                <input
                  type="password"
                  className=""
                  id="user_password"
                  required
                  value={user.user_password}
                  onChange={handleInputChange}
                  name="user_password"
                />
              </div>
              <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                value={user.address}
                onChange={handleInputChange}
              />
              </div>
              <div className="form-group">
              <label htmlFor="address">Account Number</label>
              <input
                type="text"
                className="form-control"
                id="account_number"
                name="account_number"
                value={user.account_number}
                onChange={handleInputChange}
              />
              </div>
              <button onClick={saveUser} className="">
                Submit
              </button>
            </div>
          )}
        </div>
      );
    };
  


export default AddUser;