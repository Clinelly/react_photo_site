import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "",
         category: "website",
         comment:""
      }
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleCategoryChange = (event) => {
        this.setState({
            category: event.target.value
        })
    }

    handleCommentChange = (event) => {
        this.setState({
            comment: event.target.value
        })
    }


    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }

//  Computed event statement
    // handleChange = (event) => {
    //     const {name, value} = event.target
    //     this.setState({
    //         [name]: value
    //     })
    // }

  render() {
    return (
      <div>
        <h2>Please fill out the form below:</h2>
        <form onSubmit={this.handleSubmit}>
            <div>
                <label htmlFor="id-name">Your Name:</label>
                <input 
                    value={this.state.name} 
                    onChange={this.handleNameChange}
                    id="id-name" 
                    name="name" 
                    type="text" 
                />
            </div>
            <div>
                <label htmlFor="id-category">Query Category:</label>
                <select
                    value={this.state.category}  
                    onChange={this.handleCategoryChange}
                    id="id-category" 
                    name="category"
                >
                    <option value="website">Website Issue</option>
                    <option value="order">Order Issue</option>
                    <option value="general">General Enqiry</option>
                </select>
            </div>
            <div>
                <label htmlFor="id-comments">User Comments:</label>
                <textarea 
                    id="id-comments"
                    name="comments"
                    onChange={this.handleCommentChange}
                    value={this.state.comment} 
                />
            </div>
            <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default ControlledForm