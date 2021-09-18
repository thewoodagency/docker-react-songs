import React, { useState } from 'react';
import SongList from "./components/SongList";
import SongDetail from './components/SongDetail'
import SongListRedux from "./components/SongListRedux";
import SongDetailRedux from "./components/SongDetailRedux";

const songList = [
  {
    title: 'A Song',
    detail: 'A Song Detail'
  },
  {
    title: 'B Song',
    detail: 'B Song Detail'
  },
  {
    title: 'C Song',
    detail: 'C Song Detail'
  }
]

const App = () => {
  const [selectedSong, setSelectedSong] = useState(null);

  const onSongClicked = (song) => {
    setSelectedSong(song);
  }
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <p><a href="/counter.html">Redux Counter on Docker</a></p>
          <SongList songlist={songList} onSongClicked={onSongClicked} />
        </div>
        <div className="column eight wide">
          { selectedSong ? <SongDetail song={selectedSong} /> : null }
        </div>
      </div>

      <div className="ui row">
        <div className="column eight wide">
          <SongListRedux />
        </div>
        <div className="column eight wide">
          <SongDetailRedux />
        </div>
      </div>

    </div>
  )
}

export default App