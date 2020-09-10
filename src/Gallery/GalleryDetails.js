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
<div>
  {
    [10,20,30,40,50].map((element) => <div key={element}>
      i honesly do no tunder 
    </div>)
  }
</div>
      </div>
    );
}
 

export default GalleryDetails