import React, { Component } from 'react'

export class EventsClass extends Component {
    clickHandler(){
        console.log("Clicked the class button.")
    }
  render() {
    return (
        <button onClick={this.clickHandler}>Click Me - Class Component</button>
    )
  }
}

export default EventsClass