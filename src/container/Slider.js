import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Slider extends Component {
  render() {
    const { sliderItem } = this.props
    return(
      <div className="slider">
        {sliderItem}
      </div>
    )
  }
}

Slider.PropTypes = {
  sliderItem: PropTypes.object.isRequired
}

export default Slider
