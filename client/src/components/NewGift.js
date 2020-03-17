import React, { Component } from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'




class NewGift extends Component {

    state = {
        newGift: [],
        redirect: false
    }
    //this is a function that handles the changes the user makes
    handleChange = (event) => {
        //after user fill's out the form, the information needs to be stored in a variable
        const attribute = event.target.name
        let val = event.target.value
        // update the new information
        // and add it to
        const newGift = { ...this.state.newGift }
        newGift[attribute] = val
        newGift.userID = { ...this.state.userID }
        this.setState({ newGift })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.createGift(this.state.newGift)
        this.setState({ redirect: true })
    }
    render() {
        if (this.state.redirect) {
            return <Redirect to="./gifts" />
        }
        return (
            <NewUserContainer>
                <div>
                    <h2 className="new-gift">Add New Gift</h2>
                </div>
                <form onSubmit={this.handleSubmit}>

                    <div className="gift-form">
                        <input
                            onChange={this.handleChange}
                            name="giftName"
                            placeholder="gift name"
                            type="text" required
                            value={this.state.newGift.giftName} />
                    </div>
                    <button className="button" type="submit">
                        Submit
          </button>
                </form>
            </NewUserContainer>
        )
    }
}

export default NewGift
//background from Taylor Vowell codpen
const NewUserContainer = styled.div`
width:100vw;
height:100vh;
background-image: linear-gradient(45deg, rgba(194, 233, 221, 0.5) 1%, rgba(104, 119, 132, 0.5) 100%), linear-gradient(-45deg, #494d71 0%, rgba(217, 230, 185, 0.5) 80%);
display: flex;
justify-content: center;
-webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 40px;
  width: 100%;
}
form {
  border: 5px solid rgba(0,0,0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  background-color: #D3D3D3;
  width: 300px;
  min-width: 200px;
  margin-top: 200px;
  padding-right: 50px;
  height: 320px;
  font-weight: bold;
  color: black;
  text-align: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: all 0.25s ease;
}
 .button {
  border: 1px solid black;
  max-width: 250px;
  min-width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  transition: all 0.25s ease;
  background: #74942c;
}
`
