import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import AuthenticationService from '../../services/AuthenticationService';

import MainNavigationAdmin from '../Navigation/MainNavigation/MainNavigationAdmin';
import MainNavigationDanceTeacher from '../Navigation/MainNavigation/MainNavigationDanceTeacher';
import MainNavigationUser from '../Navigation/MainNavigation/MainNavigationUser';


export default class UserProfile extends Component {


  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: {  }
    };
  }

  componentDidMount() {
  
    const currentUser = AuthenticationService.getCurrentUser();
    console.log(currentUser)

   if (!currentUser) this.setState({ redirect: "/login" });
    this.setState({ currentUser: currentUser, userReady: true })

  }
    
  render() {
    if (this.state.redirect) {
      return <Navigate to={this.state.redirect} />
    } 

    const currentUser = AuthenticationService.getCurrentUser();

    console.log(`current user is: ${currentUser}`)

    let userType = currentUser.user.authorities[0].authority

    console.log(`current user usertype is ${userType}`)

    return (
      <>
    
    
     {currentUser.user.authorities[0].authority === "DANCE_TEACHER" && (
      <MainNavigationDanceTeacher />
    )}

    {currentUser.user.authorities[0].authority === "USER" && (
    <MainNavigationUser/>
    )}

    {currentUser.user.authorities[0].authority === "ADMIN" && (
    <MainNavigationAdmin />
    )}



  
  <div className="">
          {this.state.userReady ? (
            <div>
              <header className="">
                <h3>
                <strong>{currentUser.user.username}</strong> Profile
                </h3>
              </header>


              <p><strong>Username: </strong>
              {currentUser.user.username}
              </p>

              <p>
                <strong>Id:</strong>
             
                {currentUser.user.userId}
              </p>

              {userType !== 'ADMIN'  && (
              <p>
                
                <strong>First Name:</strong>
                {currentUser.user.firstName}
              </p>
              )}

              {userType !== 'ADMIN' && (
              <p>
                    <strong>Last Name:</strong>
                    {currentUser.user.lastName}
                  </p>
              )}
                  {userType !== 'ADMIN' &&  (
                  <p>
                      <strong>Email:</strong>
                    
                      {currentUser.user.emailAddress}
                    </p>
                   )}
                
 
                {userType !== 'ADMIN'  && userType !== 'USER' && (
                    <p>
                      <strong>istdMemberCode:</strong>
                      {currentUser.user.memberCode}
                    
                    </p>
                    )}

                 
                   <p>
                    <strong>User type:   </strong>

              {currentUser.user.authorities[0].authority}
                  </p>
                  
      
            </div> ) : null}
            </div>

    </> );
    }}


 


 