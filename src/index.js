import React from 'react'
import { render } from 'react-dom'
import Slider from './container/Slider'
import sliderDat from './assets/fixtures'

const rootElement = document.getElementById('root')

const App = () => (
  <section>
    <Slider 
      sliderItem={sliderDat} />
  </section>
)

render(<App />, rootElement)
