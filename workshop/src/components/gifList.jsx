import React, { Component } from 'react';

import Gif from './gif';

// eslint-disable-next-line react/prefer-stateless-function
export default class GifList extends Component {
  render() {
    const ids = ["gG6OcTSRWaSis", "13HgwGsXF0aiGY", "13UZisxBxkjPwI", "zOvBKUUEERdNm"];
    return (
      <div className="gif-list">
        { ids.map((id) => {
          return <Gif id={id} key={id} />
        })}
      </div>
    )
  }
}
