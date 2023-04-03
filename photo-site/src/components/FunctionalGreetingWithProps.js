import React from "react";

// function FunctionalGreeting() {
//     return <h1>Hello from REACT!</h1>
// }

const FunctionalGreetingWithProps = (props) => {
    console.log(props)
    return <h1>Hello! {props.greeting} Your name is: {props.name} and you are{props.age} years old.</h1>
}


export default FunctionalGreetingWithProps