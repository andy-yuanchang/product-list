import React, { useState } from 'react';
import './carousel.css';
import { FaGreaterThan, FaLessThan } from 'react-icons/fa';

export default function Carousel(props) {
  const { imageList = [] } = props;

  const [isHover, setIsHover] = useState(false);

  function handleMouseHover(_) {
    setIsHover(true);
  }

  function handleMouseLeave(e) {
    if (!e.target.className.includes("-indicator")) {
      setIsHover(false);
    }
  }

  return (
    <div className="carousel">
      <div className={`carousel__prev-indicator ${isHover && "hovered"}`}>
        <FaLessThan />
      </div>
      <div className="carousel__content" onMouseOver={handleMouseHover} onMouseLeave={handleMouseLeave}>
        <ul className="list">
          {
            imageList.map((url, index) => (
              <li key={index} className="list__item">
                <img src={url} alt={url}/>
              </li>
            ))
          }
        </ul>
      </div>
      <div className={`carousel__next-indicator ${isHover && "hovered"}`}>
        <FaGreaterThan />
      </div>
    </div>
  )
}

