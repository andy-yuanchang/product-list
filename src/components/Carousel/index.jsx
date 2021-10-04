import React, { useState } from 'react';
import './carousel.css';

export default function Carousel(props) {
  const { imageList = [] } = props;

  return (
    <div className="carousel">
      <div className="carousel__prev-indicator"></div>
      <div className="carousel__content">
        <ul>
          {
            imageList.map((url, index) => (
              <li key={index}>
                <img src={url} alt={url}/>
              </li>
            ))
          }
        </ul>
      </div>
      <div className="carousel__next-indicator"></div>
    </div>
  )
}

