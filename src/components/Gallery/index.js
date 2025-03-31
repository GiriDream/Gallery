import './index.css'

const Gallery = (props) => {
    const { imagesDetails } = props
    const { imageUrl, imageAltText } = imagesDetails

    return (
        <div className="gallery-container">
            <img src={imageUrl} alt={imageAltText} />
        </div>
    )
}

export default Gallery

  