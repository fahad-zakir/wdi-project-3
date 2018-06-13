import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'



class Gifts extends Component {
    render() {
        return (
            <div>
                <div className="UserContainer">
                    <div className="firstNameContainer">
                        <div className="gift-name">{this.props.giftName}</div>
                        <div className="gift-userid">{this.props.userID}</div>
                        <Link to={`./gift/${this.props.id}`}>Update</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Gifts