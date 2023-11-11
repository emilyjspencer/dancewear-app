import Contact from "../Contact/Contact";
import Reviews from "../Reviews/Reviews";
import Carousel from "../Trends/Carousel";
import Sites from "../Sites/Sites";
import Studios from "../Studios/Studios";
import Training from "../Training/Training";
import "./Home.css";
import React, { Component } from "react";


import UserService from "../../services/UserService";
import MainNavigation from "../Navigation/MainNavigation/MainNavigation";


export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      (response) => {
        this.setState({
          content: response.data,
        });
      },
      (error) => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString(),
        });
      }
    );
  }

  render() {
    return (
      <>
      <MainNavigation />
        <Carousel />
        <Sites />
        <Studios />
        <Training />
        <Reviews />
   
      </>
    );
  }
}
