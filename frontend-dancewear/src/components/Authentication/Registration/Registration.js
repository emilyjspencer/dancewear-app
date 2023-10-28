import React, { useState } from "react";
import AuthenticationService from "../../../services/AuthenticationService";
import "./Registration.css";
import { useNavigate } from "react-router-dom";
import MainNavigation from "../../Navigation/MainNavigation/MainNavigation";

const Registration = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const navigate = useNavigate();

  // Validation errors state
  const [validationErrors, setValidationErrors] = useState({});

  // State and form handling code for dance teacher registration
  const [danceTeacherFormData, setDanceTeacherFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    emailAddress: "",
    istdMembershipCode: "",
    roleAuthority: "DANCE_TEACHER",
  });

  // State and form handling code for genral user/ non-dance teacher registration
  const [userFormData, setUserFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    emailAddress: "",
    roleAuthority: "USER",
  });

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setRegistrationSuccess(false);
    setValidationErrors({});
  };

  const validateFormData = (formData) => {
    const errors = {};

    for (const key in formData) {
      if (!formData[key]) {
        errors[key] = "This field is required.";
      }
    }

    // Additional validation checks can be added here.
    if (
      formData.emailAddress &&
      !/^[A-Za-z0-9._%+-]+@outlook\.com$/.test(formData.emailAddress)
    ) {
      errors.emailAddress = "Please use a valid outlook address.";
    }

    return errors;
  };

  const handleDanceTeacherRegistration = (e) => {
    e.preventDefault();
    const errors = validateFormData(danceTeacherFormData);

    if (Object.keys(errors).length === 0) {
      AuthenticationService.register(danceTeacherFormData, "danceTeacher")
        .then((response) => {
          setRegistrationSuccess(true);
          setValidationErrors({});
        })
        .catch((error) => {
        
          if (error.response && error.response.data) {
            setValidationErrors({ username: error.response.data });
          }
        });
    } else {
      setValidationErrors(errors);
    }
  };

  const handleUserRegistration = (e) => {
    e.preventDefault();
    const errors = validateFormData(userFormData);

    if (Object.keys(errors).length === 0) {
      AuthenticationService.register(userFormData, "user")
        .then((response) => {
          setRegistrationSuccess(true);
          setValidationErrors({});
        })
        .catch((error) => {
       
          if (error.response && error.response.data) {
            setValidationErrors({ username: error.response.data });
          }
        });
    } else {
      setValidationErrors(errors);
    }
  };

  return (
    <>
      <div>
        <MainNavigation />
      </div>
      <div className="registration-page">
        <h1>Choose Your Registration Type</h1>
        <div className="registration-buttons">
          <button onClick={() => handleRoleSelect("DANCE_TEACHER")}>
            Register as a dance teacher
          </button>
          <button onClick={() => handleRoleSelect("USER")}>
            Register as normal user
          </button>
        </div>

        {selectedRole === "DANCE_TEACHER" && (
          <div className="dance-teacher-registration-form">
            <h2>Dance Teacher Registration Form</h2>
            <form onSubmit={handleDanceTeacherRegistration}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  value={danceTeacherFormData.username}
                  onChange={(e) =>
                    setDanceTeacherFormData({
                      ...danceTeacherFormData,
                      username: e.target.value,
                    })
                  }
                />
                {validationErrors.username && (
                  <div className="validation-message">
                    {validationErrors.username}
                  </div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  value={danceTeacherFormData.password}
                  onChange={(e) =>
                    setDanceTeacherFormData({
                      ...danceTeacherFormData,
                      password: e.target.value,
                    })
                  }
                />
                {validationErrors.password && (
                  <div className="validation-message">
                    {validationErrors.password}
                  </div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={danceTeacherFormData.firstName}
                  onChange={(e) =>
                    setDanceTeacherFormData({
                      ...danceTeacherFormData,
                      firstName: e.target.value,
                    })
                  }
                />
                {validationErrors.firstName && (
                  <div className="validation-message">
                    {validationErrors.firstName}
                  </div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={danceTeacherFormData.lastName}
                  onChange={(e) =>
                    setDanceTeacherFormData({
                      ...danceTeacherFormData,
                      lastName: e.target.value,
                    })
                  }
                />
                {validationErrors.lastName && (
                  <div className="validation-message">
                    {validationErrors.lastName}
                  </div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="emailAddress">Email Address</label>
                <input
                  type="email"
                  name="emailAddress"
                  value={danceTeacherFormData.emailAddress}
                  onChange={(e) =>
                    setDanceTeacherFormData({
                      ...danceTeacherFormData,
                      emailAddress: e.target.value,
                    })
                  }
                />
                {validationErrors.emailAddress && (
                  <div className="validation-message">
                    {validationErrors.emailAddress}
                  </div>
                )}
              </div>
              
               
             
              <div className="form-group">
                <label htmlFor="istdMembershipCode">ISTD Membership Code</label>
                <input
                  type="text"
                  name="status"
                  value={danceTeacherFormData.status}
                  onChange={(e) =>
                    setDanceTeacherFormData({
                      ...danceTeacherFormData,
                      status: e.target.value,
                    })
                  }
                />
                {validationErrors.status && (
                  <div className="validation-message">
                    {validationErrors.status}
                  </div>
                )}
              </div>
              <button type="submit">Register as a Dance Teacher</button>
            </form>
          </div>
        )}
        <div className="registration-form-container">
          {selectedRole === "USER" && (
            <div className="user-registration-form">
              <h2>User Registration Form</h2>
              <form onSubmit={handleUserRegistration}>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    name="username"
                    value={userFormData.username}
                    onChange={(e) =>
                      setUserFormData({
                        ...userFormData,
                        username: e.target.value,
                      })
                    }
                  />
                  {validationErrors.username && (
                    <div className="validation-message">
                      {validationErrors.username}
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={userFormData.password}
                    onChange={(e) =>
                      setUserFormData({
                        ...userFormData,
                        password: e.target.value,
                      })
                    }
                  />
                  {validationErrors.password && (
                    <div className="validation-message">
                      {validationErrors.password}
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={userFormData.firstName}
                    onChange={(e) =>
                      setUserFormData({
                        ...userFormData,
                        firstName: e.target.value,
                      })
                    }
                  />
                  {validationErrors.firstName && (
                    <div className="validation-message">
                      {validationErrors.firstName}
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={userFormData.lastName}
                    onChange={(e) =>
                      setUserFormData({
                        ...userFormData,
                        lastName: e.target.value,
                      })
                    }
                  />
                  {validationErrors.lastName && (
                    <div className="validation-message">
                      {validationErrors.lastName}
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="emailAddress">Email Address</label>
                  <input
                    type="text"
                    name="emailAddress"
                    value={userFormData.emailAddress}
                    onChange={(e) =>
                      setUserFormData({
                        ...userFormData,
                        emailAddress: e.target.value,
                      })
                    }
                  />
                  {validationErrors.emailAddress && (
                    <div className="validation-message">
                      {validationErrors.emailAddress}
                    </div>
                  )}
                </div>
                
                <button type="submit">Register as a User</button>
            </form>
            </div>
          )}
          {registrationSuccess && (
            <div className="success-message">
              User successfully registered. <a href="/">Go to Login page</a>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Registration;