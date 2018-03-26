import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../style/style.css'

class Slider extends Component {
  state = {
    sliderCount: 1
  }
  render() {
    const { sliderItem } = this.props
    const sliderImg = sliderItem.map((item) => 
    <div
      className="slider__item"
      key={item.id}>
      <img
        className="slider__item-img"
        src={item.src}
        alt={item.title}
      />
    </div>
    )
    return(
      <div className="slider">
        {sliderImg}
      </div>
    )
  }
}

Slider.propTypes = {
  sliderItem: PropTypes.array.isRequired
}

export default Slider
