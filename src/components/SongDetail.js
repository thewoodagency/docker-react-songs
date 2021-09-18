const SongDetail = ({ song }) => {
  return (
    <div>
      <h1>{song.title}</h1>
      <p>{song.detail}</p>
    </div>
  )
}

export default SongDetail;