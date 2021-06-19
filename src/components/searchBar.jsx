import React, { Component } from 'react';

export default class SearchBar extends Component {
  handleChange = (event) => {
    const { changeGifIds } = this.props;
    changeGifIds(event.currentTarget.value);
  }
  render() {
    return (
      <div>
        <input className="form-search form-control" type="text" placeholder="Search GIF" onChange={this.handleChange}/>
      </div>
    )
  }
}
