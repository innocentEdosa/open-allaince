import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import GalleryCard from './GalleryCard';

const GalleryList = ({
    fetchingGallery,
    gallery
}) => {
    return (
      <div className="px-6 py-10 bg-shade-background">
        <div className="flex flex-col md:flex-row md:flex-wrap  gallery xl:mx-auto xl:w-1146">
          {[1, 2, , 3, 3, 3, 3, 3, 4].map((element) => (
              <GalleryCard id={element} />
          ))}
        </div>
      </div>
    );
}
 
export default GalleryList;