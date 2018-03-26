import React from 'react'
import { render } from 'react-dom'
import Slider from './container/Slider'

const rootElement = document.getElementById('root')

const App = () => (
  <section>
    <Slider name='CodeSandbox' />
  </section>
)

render(<App />, rootElement)
