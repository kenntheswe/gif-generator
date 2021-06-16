import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <input className="form-search form-control" type="text" placeholder="Search GIF" />
      </div>
    )
  }
}
