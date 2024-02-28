import React from 'react'
import { useColor } from './contextProvider'
import './App.css'

function ComponentB() {
    const {color} = useColor()
  return (
    <div className={color}>
      <h1>Component B</h1>
      <h1>color is</h1>
    </div>
  )
}

export default ComponentB
