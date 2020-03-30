import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'
import Child from './Child'

class Parent extends Component {

  constructor() {
    super()
    this.state = {
      color: getRandomColor(),
      childrenColor: '#FFF'
    }
  }

  changeColor = (newChildColor) => {
    let new_color = getRandomColor()
    this.setState({
      color: new_color,
      childrenColor: newChildColor
    })
    console.log(`color: is ${new_color}`)
    if (newChildColor.length === 4){
      console.log(`newChildColor is: ${newChildColor}`)
    } else {
      console.log(newChildColor)
    }
    console.log('\nbump\n\n')
  }

  render() {
    return (
      <div className="parent" style={{backgroundColor: this.state.color}} 
      onClick={this.changeColor}>
        <Child handleColorChange={this.changeColor}/>
        <Child handleColorChange={this.changeColor}/>
      </div>
    )
  }
}

export default Parent
