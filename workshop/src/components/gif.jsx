import React, { Component } from 'react'

export default class Gif extends Component {
  render() {
    const { id } = this.props;
    const url = `https://media.giphy.com/media/${id}/giphy.gif`;
    return (
      <img src={url} className="gif" alt="gif"/>
    )
  }
}
