const SongList = ({songlist, onSongClicked}) => {
  const renderedList = songlist.map(song => {
    return (
      <li key={song.title}>
        <a style={{cursor: "pointer"}} onClick={()=>onSongClicked(song)}>{song.title}</a>
      </li>
    )
  })
  return (
    <div>
      {renderedList}
    </div>
  )
}

export default SongList