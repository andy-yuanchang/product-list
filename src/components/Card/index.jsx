import React from 'react'
import Carousel from '../Carousel';
import { BsStarFill, BsStarHalf, BsCurrencyDollar } from 'react-icons/bs'
import { TiHeart } from 'react-icons/ti'
import './card.css'

export default function Card(props) {
  const {
    imageList = [],
    title = "",
    price = 0,
    discount = 0,
    isCollected = false,
    stars = 0,
    onClick = () => { }
  } = props;

  const fillStars = Math.floor(stars);
  const halfStars = Math.ceil(stars) - fillStars;

  return (
    <div className="card">
      <div className="card__image">
        {
          <Carousel
            imageList={imageList}
          />
        }
      </div>
      <div className="card__content">
        <div className="title">
          <h2>{title}</h2>
        </div>
        <h3 className="price"><BsCurrencyDollar />{price}</h3>
        <p className="stars">
          {
            halfStars ? (
              <>
                {Array(fillStars).fill(<BsStarFill />)}
                <BsStarHalf />
              </>
            ) : (
              Array(fillStars).fill(<BsStarFill />)
            )
          }
        </p>
      </div>
      {
        discount !== 0 && (
          <div className="card__discount">{`${discount}% off`}</div>
        )
      }
      <div className={`card__collection-icon ${isCollected && "collected"}`} onClick={onClick}>
        <TiHeart />
        {/* {
          isCollected ? <AiFillHeart /> : <AiOutlineHeart />
        } */}
      </div>
    </div>
  )
}
