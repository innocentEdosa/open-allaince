import React from 'react';
import { ReactComponent as NewsLetterIcon } from '../../assets/icons/newsletter_success.svg';
import { ReactComponent as CloseIcon } from '../../assets/icons/close_modal_newsletter.svg'
import { ReactComponent as NewsLetterMobile} from '../../assets/icons/newsletter_16.svg';

const NewsLetterModal = ({
    closeModal
}) => {
    return (     <div className="bg-shade-cream rounded-lg xs:mx-4 md:mx-auto self-center flex justify-center items-center p-10 lg:w-953 lg:h-669 relative">
        <button onClick={closeModal} className="absolute top-0 right-0 p-8 ;lg:p-10">
            <CloseIcon />
        </button>
    <div className="flex justify-center flex-col items-center">
        <div className=" flex justify-center xs:w-193 xs:h-140 md:w-full md:h-auto">
        <span className="hidden lg:block">

        <NewsLetterIcon/>
        </span>
        <span className="lg:hidden">
            <NewsLetterMobile />
        </span>
        </div>
        <h6 className="text-base lg:text-4xl text-text-dark font-sans font-semibold xs:mt-36 xs:mb-4 text-center">Thank you for subcribing with us </h6>
        <h6 className="text-center text-xs lg:text-lg font-sans text-text-dark ">You will now be getting the latest updates on open alliance with our newsletters</h6>
    </div>
  </div> );
}
 
export default NewsLetterModal;