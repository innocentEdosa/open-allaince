import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import GalleryCard from './GalleryCard';
import Skeleton from 'react-loading-skeleton';

const GalleryList = ({
    fetchingGallery,
    gallery
}) => {
    return (
      <div className="px-6 py-10 bg-shade-background newWrapper">
        <div className="flex flex-col md:flex-row md:flex-wrap  gallery xl:mx-auto xl:w-1146">
          {
            fetchingGallery && [1,3,4].map(() => <div className="galleryWrapper" >
              <div className="mb-4">

              <Skeleton height={232}/>
              </div>
            </div>)
          }
          {!fetchingGallery && gallery.map((data) => (
              <GalleryCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    );
}
 
export default GalleryList;