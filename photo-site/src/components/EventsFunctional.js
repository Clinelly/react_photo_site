import React from 'react'

function EventsFunctional() {
    function clickHandler(){
        console.log("Clicked the functional button.")
    }
  return (
    <button onClick={clickHandler}>Click Me - Functional Component</button>
  )
}

export default EventsFunctional