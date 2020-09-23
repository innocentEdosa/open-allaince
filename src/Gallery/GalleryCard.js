import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import formatDate from '../utilities/dateFormatter';
import routes from '../utilities/routes';

const GalleryCard = ({ data }) => {
  return (
    <div className="xs:w-full  bg-shade mb-6 last:mb-0 h-232 galleryWrapper p-2 box-border">
      <Link
        to={{
          pathname: `${routes.gallery}/${data.id}`,
          state: { data },
        }}
      >
        <div className="w-full  relative h-full flex items-end galleryImg">
          <img
            src={data.pictures[0].file_url}
            alt="some"
            className="h-full w-full"
          />
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
    </div>
  );
};
 
GalleryCard.propTypes = {
  data: PropTypes.shape({})
}
export default GalleryCard;