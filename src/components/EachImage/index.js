import './index.css'
const EachImage = props => {
  const {eachImage, getImageId} = props
  const getGetImageId = () => {
    const {eachImage} = props
    getImageId(eachImage)
  }
  return (
    <li>
      <button onClick={getGetImageId} className="btn-each-image-li">
        <img
          alt="thumbnail"
          className="each-thumb-image"
          src={eachImage.thumbnailUrl}
        />
      </button>
    </li>
  )
}
export default EachImage
