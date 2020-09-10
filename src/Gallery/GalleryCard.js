import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import formatDate from '../utilities/dateFormatter';

const GalleryCard = ({
  data
}) => {

//   id(pin):5
// caption(pin):"Open Alliance Conference 2020"
// created_at(pin):"2020-09-10 12:52:31"
// updated_at(pin):"2020-09-10 12:52:31"
// id(pin):1
// gallery_id(pin):5
// file_name(pin):"1599743293.jpeg"
// file_url(pin):"https://s3.eu-west-2.amazonaws.com/open-alliance-admin-assets/gallery/1599743293.jpeg"
// file_size(pin):"3527"
// created_at(pin):"2020-09-10 13:08:13"
// updated_at(pin):"2020-09-10 13:08:13"
    return (             <div className="xs:w-full  bg-shade mb-6 last:mb-0 h-232 galleryWrapper p-2 box-border">
      <Link to={{
        pathname: `/gallery/${data.id}`,
        state: {data}
      }}>
    <div
      className="w-full  relative h-full flex items-end galleryImg"
    >
      <img src={data.pictures[0].file_url} alt="some" className="h-full w-full" />
      <div className="right-0 left-0 top-0 bottom-0  cursor-pointer p-6 absolute flex items-end imgDetailWrapper">
          <div className="imgDetails">
        <h6 className="text-xs font-bold text-text-snow tracking-open font-sans mb-1">
         {data.caption}
        </h6>
        <h6 className="font-sans text-text-snow tracking-open font-normal text-xs">
          {formatDate(data.created_at)}
        </h6>
          </div>
      </div>
    </div>
      </Link>
  </div> );
}
 
GalleryCard.propTypes = {
  data: PropTypes.shape({})
}
export default GalleryCard;