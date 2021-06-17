import React, { Component } from 'react'

import SearchBar from './searchBar';
import GifList from './gifList';
import Gif from './gif';

export default class App extends Component {
  render() {
    return (
      <div>
      <div className="left-scene">
        <SearchBar />
        <div className="selected-gif">
          <Gif id="gG6OcTSRWaSis"/>
        </div>
      </div>
      <div className="right-scene">
        <GifList />
      </div>
      </div>
    )
  }
}
