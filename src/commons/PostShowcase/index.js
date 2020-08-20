import React from 'react';
import postShowcaseContent from './content';

const PostShowcase = () => {

    return (
      <div className="py-20 flex flex-col lg:flex-row lg:flex-wrap items-center justify-center px-6">
        {postShowcaseContent.map(({heading, description, imgUrl}) => {
                const showcaseImgStyle = {
                    background: `url(${imgUrl})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }
            return (
          <div className="w-full lg:w-362 flex-shrink-0 bg-primary-blue h-315 lg:mr-30 last:mr-0 flex flex-col mb-6 last:mb-0 lg:last:mb-6">
            <div 
            style={showcaseImgStyle} className="flex-grow"></div>
            <div className="px-6 pt-30 pb-6 flex-shrink-0 bg-shade">
              <h6 className="mb-4 tracking-open font-semibold text-text-dark font-normal font-sans text-lg ">
                {heading}
              </h6>
              <p className="text-sm md:text-xs tracking-open font-sans text-text-blm leading-5">
               {description}
              </p>
            </div>
          </div>
        )})}
      </div>
    );
}
 
export default PostShowcase;