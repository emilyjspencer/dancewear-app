import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import AuthenticationService from '../../services/AuthenticationService';

import MainNavigationAdmin from '../Navigation/MainNavigation/MainNavigationAdmin';
import MainNavigationDanceTeacher from '../Navigation/MainNavigation/MainNavigationDanceTeacher';
import MainNavigationUser from '../Navigation/MainNavigation/MainNavigationUser';

import MainNavigation from "../Navigation/MainNavigation/MainNavigation";

class UserProfile extends Component {


  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { username: "" }
    };
  }

  componentDidMount() {
  
    const currentUser = AuthenticationService.getCurrentUser();
    console.log(currentUser)

    if (!currentUser) this.setState({ redirect: "/home" });
    this.setState({ currentUser: currentUser, userReady: true })

  }
    
  render() {
    if (this.state.redirect) {
      return <Navigate to={this.state.redirect} />
    } 

    const currentUser = AuthenticationService.getCurrentUser();

    console.log(currentUser)

    return (
      <>
     
     {!currentUser &&
     <MainNavigation />}
     
     {currentUser.user.authorities[0].authority === 'DANCE_TEACHER' && 
      <MainNavigationDanceTeacher />
    }

    {currentUser.user.authorities[0].authority === 'USER' &&
    <MainNavigationUser/>
    }

    {currentUser.user.authorities[0].authority === 'ADMIN' && 
    <MainNavigationAdmin />
    }


<div className="">
          {(this.state.userReady) ?
            <div>
              <header className="">
                <h3>
                  <strong>{currentUser.username}</strong> Profile
                </h3>
              </header>

              <p><strong>Username: </strong></p>
              {currentUser.user.username}
              <p>
                <strong>Id:</strong>{" "}
                {currentUser.id}
                {currentUser.user.userId}
              </p>
              <p>
                <strong>First Name:</strong>{" "}
                {currentUser.user.firstName}
              </p>
              <p>
                <strong>Last Name:</strong>{" "}
                {currentUser.user.lastName}
              </p>
              <p>
                <strong>Email:</strong>{" "}
                {currentUser.email}
                {currentUser.user.emailAddress}
              </p>
              <p>
                <strong>Location:</strong>{" "}
                {currentUser.user.location}
              </p>
              <p>
                <strong>Recruitment type:</strong>{" "}
                {currentUser.user.recruitmentType}
              </p>
              <p>
                <strong>Status:</strong>{" "}
                {currentUser.user.status}
              </p>
              <strong>User type:   </strong>

              {currentUser.user.authorities[0].authority}

           
            </div>: null}
            </div>

    </> )
    
  
    }
    
    }
       
    
  export default UserProfile;
 