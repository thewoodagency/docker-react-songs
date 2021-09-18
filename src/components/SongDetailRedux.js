import {connect} from "react-redux";
import React from "react";

const SongDetailRedux = ({song}) => {

  return (
    <div>
      {song ?
        <React.Fragment>
          <h1>Song Details</h1>
          <h2>{song.title}</h2>
          <h3>{song.detail}</h3>
        </React.Fragment>
        :
        null
      }
    </div>
  )
}

const mapStatetoProps = (state) => {
  return {
    song: state.selectedSong
  }
}

export default connect(mapStatetoProps)(SongDetailRedux)