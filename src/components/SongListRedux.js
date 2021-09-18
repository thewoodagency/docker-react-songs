import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongListRedux extends React.Component {

  renderedList = this.props.songs.map(song => {
    return (
      <div className="item" key={song.title}>
        <div className="right floated content">
          <button className="ui button primary"
                  onClick={()=>this.props.selectSong(song)}>
            Select
          </button>
        </div>
        <div className="content">
          {song.title}
        </div>
      </div>
    )
  })

  render() {
    return (
      <div className="ui divided list">
        {this.renderedList}
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  console.log(store);
  return {
    songs: store.songs
  }
}

export default connect(mapStateToProps, {selectSong})(SongListRedux)