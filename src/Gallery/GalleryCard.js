import React from 'react';
import Img from '../assets/img/advocacy.jpg'
import { Link } from 'react-router-dom'

const GalleryCard = ({
  id
}) => {
    return (             <div className="xs:w-full  bg-shade mb-6 last:mb-0 h-232 galleryWrapper p-2 box-border">
      <Link to={`gallery/${id}`}>
    <div
      style={
        {
          // background: `url(${Img}) no-repeat`
        }
      }
      className="w-full  relative h-full flex items-end galleryImg"
    >
      <img src={Img} alt="some" className="h-full w-full" />
      <div className="right-0 left-0 top-0 bottom-0  cursor-pointer p-6 absolute flex items-end imgDetailWrapper">
          <div className="imgDetails">
        <h6 className="text-xs font-bold text-text-snow tracking-open font-sans mb-1">
          Some very crazy and not so interesting title which we hope
          people would look at
        </h6>
        <h6 className="font-sans text-text-snow tracking-open font-normal text-xs">
          date
        </h6>
          </div>
      </div>
    </div>
      </Link>
  </div> );
}
 
export default GalleryCard;