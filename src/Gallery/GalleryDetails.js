import React from 'react';
import { Link } from 'react-router-dom';
import GalleryCard from './GalleryCard';
import Img from '../assets/img/learning.jpg'
import formatDate from '../utilities/dateFormatter';
import GalleryModal from './GalleryModal';

const GalleryDetails = ({
    fetchingGallery,
    gallery
}) => {
    return (
      <div className="px-6 py-10 bg-shade-background">
        <div className='my-10 flex flex-col items-center'>

        <h6 className="text-text-blue font-sans font-bold text-2xl text-center mb-6">2nd National Steering Committee and Working Group meeting</h6>
    <h6>Uploaded <span>{formatDate(Date.now())}</span></h6>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 col-gap-30 row-gap-6 xl:mx-auto xl:w-1146">
          {[1, 2, , 3, 3, 3, 3, 3, 4].map(() => (
            //   <Link to={}>
            <GalleryModal type="picture">
            <div className="xs:w-full  bg-shade h-232 imgWrapper box-border">
            <div
              className="w-full  relative h-full flex items-end galleryImg"
            >
              <img src={Img} alt="some" className="h-full w-full" />
              <div className="right-0 left-0 top-0 bottom-0  cursor-pointer p-6 absolute flex items-end">
                  {/* <div className="imgDetails">
                <h6 className="text-xs font-bold text-text-snow tracking-open font-sans mb-1">
                  Some very crazy and not so interesting title which we hope
                  people would look at
                </h6>
                <h6 className="font-sans text-text-snow tracking-open font-normal text-xs">
                  date
                </h6>
                  </div> */}
              </div>
            </div>
          </div> 
            </GalleryModal>

            //   </Link>
          ))}
        </div>
      </div>
    );
}
 

export default GalleryDetails