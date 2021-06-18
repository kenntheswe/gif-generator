import React, { Component } from 'react'

import SearchBar from './searchBar';
import GifList from './gifList';
import Gif from './gif';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: "gG6OcTSRWaSis",
      ids: ["gG6OcTSRWaSis", "13HgwGsXF0aiGY", "13UZisxBxkjPwI", "zOvBKUUEERdNm"]
    };
  }

  changeSelectedGif = (newId) => {
    this.setState({
      selectedId: newId,
    });
  }
  
  render() {
    const { selectedId, ids } = this.state;
    return (
      <div>
      <div className="left-scene">
        <SearchBar />
        <div className="selected-gif">
          <Gif id={selectedId}/>
        </div>
      </div>
        <div className="right-scene">
          <GifList ids={ids} changeSelectedGif={this.changeSelectedGif} />
        </div>
      </div>
    )
  }
}
