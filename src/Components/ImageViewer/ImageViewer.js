import React, {useState} from "react";
import './ImageViewer.css'

const ImageViewer = ({images}) => {
    const [currentIndex , setCurrentIndex] = useState(0)

    const handleThumbnailClick = (index) => {
        setCurrentIndex(index)
    }

    return(
        <div className="image-viewer">
             <div className="large-view">
                <img src={images[currentIndex]} alt={`Nature`}/>
            </div>

            <div className="thumbnail-gallery">
                {images.map((image, index) => (
                    <img key={index}
                    src={image}
                    alt={`Nature`} className={currentIndex === index ? 'selected-thumbnail' : ''}
                    onClick={() => handleThumbnailClick(index)} />
                ))}
            </div>

           
        </div>
    )
}
export default ImageViewer