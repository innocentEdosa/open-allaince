import React, { useState } from 'react';
import PrimaryInput from '../Input/PrimaryInput';
import PrimaryButton from '../Button/PrimaryButton';
import { connect } from 'react-redux';
import { signupForNewsletterAction } from '../../store/Newsletter/action';
import { ReactComponent as Loader } from '../../assets/loader.svg'

const NewsLetter = ({
  signupForNewsLetter,
  signingUp
}) => {
  const [formInput, setFormInput] = useState({
    name: '',
    email: '',
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const submitHandler = (e) => {
    e.preventDefault()
    signupForNewsLetter(formInput)
  }
  return (
    <div className="bg-primary-light  ">
      <div className="flex flex-col justify-center xs:px-4 lg:px-68 py-10 w-full xl:w-1140 xl:mx-auto xl:px-0 lg:h-270">



      <div className="mb-8">
        <h6 className="font-normal lg:font-medium tracking-open text-text-guava text-2xl lg:text-4xl font-sans sm:text-center lg:text-left">Subscribe to our newsletter</h6>
      </div>
      <form onSubmit={submitHandler} className="flex items-center flex-col lg:flex-row ">
        <div className="lg:mr-30 w-full flex items-center h-10 xs:mb-4 lg:mb-0">
          <PrimaryInput disabled={signingUp} value={formInput.name} onChange={onChange} required name="name"placeholder="Enter your name" />
        </div>
        <div className="lg:mr-30 w-full flex items-center h-10 xs:mb-4 lg:mb-0">
          <PrimaryInput disabled={signingUp} value={formInput.email} onChange={onChange} type="email" required name="email" placeholder="Enter your email address" />
        </div>
        <div className="w-full lg:w-166 flex-shrink-0 h-52 lg:h-10 sm:mt-2 lg:mt-0">
      <PrimaryButton disabled={signingUp} type="submit" variant="tertiary">
        {
          signingUp && <Loader />
        }
           { !signingUp &&
            <h6 className="text-lg text-text-snow font-semibold tracking-open ">Subscribe</h6>
           } 
        </PrimaryButton>
        </div>
      </form>
      </div>
    </div>
  );
};

const mapStateToProps = ({newsLetter: {
  signingUp
}}) => ({
  signingUp
});

const mapDispatchToProps = (dispatch) => ({
signupForNewsLetter: (params) => dispatch(signupForNewsletterAction(params))
})
export default connect(mapStateToProps, mapDispatchToProps)(NewsLetter);