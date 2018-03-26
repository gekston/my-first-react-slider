import React, { Component } from 'react'
import leftShevron from '../assets/left-shevron.svg'

const LeftArrow = (props) => {
  return (
    <div className="backArrow" onClick={props.previousSlide}>
      <img src={leftShevron} alt=""/>
    </div>
  )
}

export default LeftArrow
