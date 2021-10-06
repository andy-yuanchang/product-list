import React from 'react'
import Carousel from '../Carousel';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { BsStarFill, BsStarHalf, BsCurrencyDollar } from 'react-icons/bs'
import './card.css'

const STAR_COLOR_RGB = "#ebc700";

export default function Card(props) {
  const { 
    imageList = [], 
    title = "", 
    price = 0,
    discount = 0,
    isCollected = false,
    stars = 0,
    onClick = () => {}
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
        <h2>{title}</h2>
        <p className="price"><BsCurrencyDollar/>{price}</p>
        <p className="stars">
          {
            halfStars ? (
              <>
                {Array(fillStars).fill(<BsStarFill color={STAR_COLOR_RGB}/>)}
                <BsStarHalf color={STAR_COLOR_RGB}/>
              </>
            ) : (
              Array(fillStars).fill(<BsStarFill color={STAR_COLOR_RGB}/>)
            )
          }
        </p>
      </div>
      {
        discount !== 0 && (
          <div className="card__discount">{`${discount}% off`}</div>
        )
      }
      <div className="card__collection-icon" onClick={onClick}>
        {
          isCollected ? (
            <AiFillHeart color={"red"}/>
          ) : (
            <AiOutlineHeart />
          )
        }
      </div>
    </div>
  )
}
