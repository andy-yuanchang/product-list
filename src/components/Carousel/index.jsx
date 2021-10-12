import React, { useState, useRef, useEffect } from 'react';
import './carousel.css';
import { FaGreaterThan, FaLessThan } from 'react-icons/fa';
import useWindowSize from '../../hooks/useWindowSize';

export default function Carousel(props) {
  const { imageList = [] } = props;
  const imageListRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [width, height] = useWindowSize();

  useEffect(() => {
    imageListRef.current.style.transform = `translate3d(${-1 * imageListRef.current.children[selectedIndex].offsetLeft}px, 0px, 0px)`;
  }, [width, height, selectedIndex])

  function handlePrevImage(_) {
    const prevIndex = selectedIndex - 1 < 0 ? imageList.length - 1 : selectedIndex - 1;
    setSelectedIndex(prevIndex);
  }

  function handleNextImage(_) {
    const nextIndex = selectedIndex + 1 > imageList.length - 1 ? 0 : selectedIndex + 1;
    setSelectedIndex(nextIndex);
  }

  return (
    <div className="carousel">
      <div className="carousel__content">
        {
          imageList.length > 1 && (
            <div className="carousel__arrow-mask prev" onClick={handlePrevImage}>
              <FaLessThan />
            </div>
          )
        }
        <ul className="carousel__image-list" ref={imageListRef}>
          {
            imageList.map((url, index) => (
              <li key={index} className="list__item">
                <img src={url} alt={url} />
              </li>
            ))
          }
        </ul>
        {
          imageList.length > 1 && (
            <div className="carousel__arrow-mask next" onClick={handleNextImage}>
              <FaGreaterThan />
            </div>
          )
        }
      </div>
    </div>
  )
}

