import React, { Component } from 'react';

import Gif from './gif';

export default class GifList extends Component {
  render() {
    const ids = ["gG6OcTSRWaSis", "13HgwGsXF0aiGY", "13UZisxBxkjPwI", "zOvBKUUEERdNm"];
    return (
      <div className="gif-list">
        { ids.map((id) => {
          <Gif id={id} key={id}/>
        })}
      </div>
    )
  }
}
