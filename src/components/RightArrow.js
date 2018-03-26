import React, { Component } from 'react'
import rightShevron from '../assets/right-shevron.svg'

const RightArrow = (props) => {
  return (
    <div className="nextArrow" onClick={props.nextSlide}>
      <img src={rightShevron} alt=""/>
    </div>
  )
}

export default RightArrow
