import './Cards.css';


import * as React from 'react';


const Cards = ({
  imgSrc, imgAlt, title, text1, text2, text3, text4, text5, text6, text7, text8, text9, text10, button
}) => {


  return (
    <div className="card-container">
      <img src={imgSrc} alt={imgAlt}>

      </img>
      <br />
      <div className="text">
        {title}
        <br />
       {text1}
       <br />
       {text2}
       <br />
       {text3}
       <br />
       {text4}
       <br />
       {text5}
       <br />
       {text6}
       <br />
       {text7}
       <br />
       {text8}
       {button}
      </div>
    </div>
  )

}
 


export default Cards; 