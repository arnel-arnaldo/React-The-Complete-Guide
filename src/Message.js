import React, { Component } from 'react'

export default class Message extends Component {
  render() {
    return <h1>Message: {this.props.message}</h1>
  }
}
