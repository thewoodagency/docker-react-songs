import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: 'A Song from reducer',
      detail: 'A Song Detail'
    },
    {
      title: 'B Song from reducer',
      detail: 'B Song Detail'
    },
    {
      title: 'C Song from reducer',
      detail: 'C Song Detail'
    }
  ]
}

const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})