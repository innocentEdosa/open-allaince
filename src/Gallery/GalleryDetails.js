import React from 'react';
import formatDate from '../utilities/dateFormatter';
// import GalleryModal from './GalleryModal';

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

        <div>some test carp</div>
        <div className="">
          {[1, 2, , 3, 3, 3, 3, 3, 4].map((element) => (
            //   <Link to={}>
            // <GalleryModal type="picture">
            <>
            <div>some toh tese carp</div>
            <div key={element} className="xs:w-full  bg-shade h-232 imgWrapper box-border">
            <div
              className="w-full h-full flex items-end galleryImg"
            >
              <img src={'https://s3.eu-west-2.amazonaws.com/openalliance-storage/news/images/1553863664.jpg'} alt="others" className="h-full w-full" />
            </div>
          </div> 
          </>
            // </GalleryModal>

            //   </Link>
          ))}
        </div>
      </div>
    );
}
 

export default GalleryDetails