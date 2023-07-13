import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import UsersService from '../UsersService';
import './EditDeleteUser'

const EditDeleteUser = props => {
  const { id } = useParams();
  let navigate = useNavigate();

  const initialState = {
    id: null,
    name: "",
    description: "",
    price: ""
  };
  const [currentUser, setCurrentUser] = useState(initialState);
  const [message, setMessage] = useState("");

  const getUser = id => {
    UsersService.get(id)
      .then(response => {
        setCurrentUser(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (id)
      getUser(id);
  }, [id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentUser({ ...currentUser, [name]: value });
  };



  const updateUser = () => {
    UsersService.update(currentUser.id, currentUser)
      .then(response => {
        console.log(response.data);
        setMessage("User details were updated!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteUser = () => {
    UsersService.remove(currentUser.id)
      .then(response => {
        console.log(response.data);
        navigate("/users");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentUser ? (
        <div className="edit-form">
          <h4>User</h4>
          <form>
            <div className="">
              <label htmlFor="first_name">First Name</label>
              <input
                type="text"
                className="form-control"
                id="first_name"
                name="first_name"
                value={currentUser.first_name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="last_name">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="last_name"
                name="last_name"
                value={currentUser.last_name}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="price">Email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                value={currentUser.email}
                onChange={handleInputChange}
              />
              </div>

              <div className="form-group">
              <label htmlFor="phone_number">Phone Number</label>
              <input
                type="text"
                className="form-control"
                id="phone_number"
                name="phone_number"
                value={currentUser.phone_number}
                onChange={handleInputChange}
              />
              </div>

              <div className="form-group">
              <label htmlFor="price">Password</label>
              <input
                type="password"
                className="form-control"
                id="user_password"
                name="user_password"
                value={currentUser.user_password}
                onChange={handleInputChange}
              />
              </div>

              <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                value={currentUser.address}
                onChange={handleInputChange}
              />
              </div>

              <div className="form-group">
              <label htmlFor="price">Account Number</label>
              <input
                type="text"
                className="form-control"
                id="account_number"
                name="account_number"
                value={currentUser.account_number}
                onChange={handleInputChange}
              />
              </div>

          </form>


          <button className="" onClick={deleteUser}>
            Delete
          </button>

          <button
            type="submit"
            className=""
            onClick={updateUser}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please select a user</p>
        </div>
      )}
    </div>
  )}
  ;


export default EditDeleteUser;