import React, { Component } from 'react';

import SearchBar from './searchBar';
import GifList from './gifList';
import Gif from './gif';

const giphy = require('giphy-api')({
  apiKey: 'vtu6RkRjP1shLcLCi2J0YwNvQHBNboFu',
  https: true
});
// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: "LmNwrBhejkK9EFP504",
      ids: ["gG6OcTSRWaSis", "13HgwGsXF0aiGY", "13UZisxBxkjPwI", "zOvBKUUEERdNm", "LmNwrBhejkK9EFP504", "PnpkimJ5mrZRe", "5ntdy5Ban1dIY", "ZG719ozZxGuThHBckn", "TilmLMmWrRYYHjLfub", "kHrKpJiCbOmkWD4xT9"]
    };
  }

  changeSelectedGif = (newId) => {
    this.setState({
      selectedId: newId,
    });
  }

  changeGifIds = (keyword) => {
    giphy.search({
      q: keyword,
      rating: 'g',
      limit: 15
    }, (err, res) => {
      this.setState({
        ids: res.data.map((gif) => gif.id)
      });
    });
  }

  render() {
    const { selectedId, ids } = this.state;
    return (
      <div>
        <div className="left-scene">
          <SearchBar changeGifIds={this.changeGifIds} />
          <div className="selected-gif">
            <Gif id={selectedId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList ids={ids} changeSelectedGif={this.changeSelectedGif} />
        </div>
      </div>
    );
  }
}
