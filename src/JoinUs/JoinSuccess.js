import React from "react";

const JoinSuccess = () => {
  return (
    <div className="joinusThanks-wrapper xs:px-6  flex items-center lg:px-60">
      <div className="xs:flex xs:flex-col justify-center xs:h-full xl:mx-auto xl:w-1146 lg:justify-start lg:pt-166 lg:h-1/2">
        <h6 className="text-2xl text-text-lemon font-sans font-semibold tracking-open leading-8 mb-3 lg:text-5xl lg:leading-none">
          Thanks for joining us <br />
          <span className="text-base lg:text-4xl ">We can’t wait to see what you bring to the table</span>
        </h6>
        <p className="font-sans text-base text-text-strange lg:text-xl ">
        For authenticity purpose, we need to further verify your account, <br/> A link will be sent to your email for verification purposes.
        </p>
      </div>
    </div>
  );
};

export default JoinSuccess;
