import React, { Component } from 'react'

export class ConditionalRenderingClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoaded: false,
         isLoggedIn: true
      }
    }
  render() {
    return (
      <div>
        <h1>{this.state.isLoaded ? "Data Loaded" : "Loading..."}</h1>
        {this.state.isLoggedIn ? (
            <div>
                <p>Welcome to the site! Please complete the steps below:</p>
                <ol>
                    <li>Confirm Email</li>
                    <li>Complete Profile</li>
                    <li>Subscribe to Newsletter</li>
                </ol>
            </div>
        ) : (
            <p>Please sign in.</p>
        ) }
      </div>
    )
  }
}

export default ConditionalRenderingClass