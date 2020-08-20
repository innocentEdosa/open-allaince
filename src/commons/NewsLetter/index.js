import React from 'react';
import PrimaryInput from '../Input/PrimaryInput';
import PrimaryButton from '../Button/PrimaryButton';

const NewsLetter = () => {
  return (
    <div className="bg-primary-light h-270 flex flex-col justify-center px-68">
      <div className="mb-8">
        <h6 className="font-medium tracking-open text-text-guava text-4xl font-sans">Subscribe to our newsletter</h6>
      </div>
      <div className="flex items-center">
        <div className="mr-30 w-full flex items-center h-10">
          <PrimaryInput placeholder="Enter your name" />
        </div>
        <div className="mr-30 w-full flex items-center h-10">
          <PrimaryInput placeholder="Enter your email address" />
        </div>
        <div className="w-166 flex-shrink-0 h-10">
        <PrimaryButton variant="tertiary">
            <h6 className="text-lg text-text-snow font-semibold tracking-open ">Subscribe</h6>
        </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;