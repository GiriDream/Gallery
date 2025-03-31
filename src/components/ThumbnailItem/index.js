import './index.css'

const ThumbnailItem = (props) => {
    const { imagesDetails,updateActiveId , isActive} = props
    const { thumbnailUrl, thumbnailAltText, id } = imagesDetails
    const handleThumbnailClick = () => {
        updateActiveId(id)
    }

    return (
        <div className={`thumbnail-item ${isActive ? 'active-thumbnail' : ''}`}>
            <button className="thumbnail-item" onClick = {handleThumbnailClick}>
                <img src={thumbnailUrl} alt={thumbnailAltText} />
            </button>
        </div>
    )
}

export default ThumbnailItem
