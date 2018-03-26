import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Slider extends Component {
  state = {
    sliderCount: 1
  }
  render() {
    const { sliderItem } = this.props
    const sliderImg = sliderItem.map((item) => 
      <img
        key={item.id}
        src={item.src}
        alt={item.title}
      />
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
