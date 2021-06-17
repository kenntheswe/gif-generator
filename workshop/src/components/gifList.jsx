import React, { Component } from 'react';

import Gif from './gif';

export default class GifList extends Component {
  render() {
    return (
      <div className="gif-list">
        <Gif />
        <Gif />
        <Gif />
      </div>
    )
  }
}
