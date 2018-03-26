import React from 'react'
import { render } from 'react-dom'
import Slider from './container/Slider'
import sliderDat from './assets/fixtures'

const rootElement = document.getElementById('root')

const App = () => (
    <Slider 
      sliderItem={sliderDat} />
)

render(<App />, rootElement)
