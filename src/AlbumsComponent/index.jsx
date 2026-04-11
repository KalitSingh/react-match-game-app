import './index.css'

const AlbumComponent = props => {
  const {albumDetails, onClickedAlbum} = props
  const {id, thumbnailUrl} = albumDetails

  // Event listner at Album
  const onClickAlbum = () => {
    onClickedAlbum(id)
  }

  return (
    <li className="album-items">
      <button onClick={onClickAlbum} type="button" className="album-btn">
        <img className="album" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default AlbumComponent
