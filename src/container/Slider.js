import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RightArrow from '../components/RightArrow'
import LeftArrow from '../components/LeftArrow'
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
      key={item.id}
      style={{display: Number(item.id) === this.state.sliderCount ? 'block' : 'none'}}
      >
      <img
        className="slider__item-img"
        src={item.src}
        alt={item.title}
      />
    </div>
    )
    return(
      <section>
        <LeftArrow
          previousSlide={this.previousSlide.bind(this)}/>
        <div className="slider">
          {sliderImg}
        </div>
        <RightArrow
          nextSlide={this.nextSlide.bind(this)}/>
      </section>
    )
  }
  nextSlide() {
    this.setState({ sliderCount: this.state.sliderCount + 1 })
}

  previousSlide() {
    this.setState({ sliderCount: this.state.sliderCount - 1 })
  }
}

Slider.propTypes = {
  sliderItem: PropTypes.array.isRequired
}

export default Slider
