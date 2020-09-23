import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import PrimaryButton from "../commons/Button/PrimaryButton";
import PrimaryInput from "../commons/Input/PrimaryInput";
import PrimaryTextArea from "../commons/Input/PrimaryTextArea";
import FileSelector from "../commons/FileSelector";
import { ReactComponent as UploadIcon } from "../assets/icons/upload.svg";
import { ReactComponent as ChevronLeft } from "../assets/icons/chevron-left.svg";
import { ReactComponent as ButtonLoader } from '../assets/loader.svg';
import "./join.css";

const JoinUsForm = ({ onSubmit, registering }) => {
  const [formInput, setFormInput] = useState({
    email: "",
    name: "",
    description: "",
    file: [],
  });
  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setFormInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [formStep, setFormStep] = useState(1);

  const changeFormStep = (step) => {
    if (registering) {
      return;
    }
    setFormStep(step);
  };

  const onDrop = useCallback((acceptedFiles) => {
    setFormInput((prev) => ({
      ...prev,
      file: acceptedFiles,
    }));
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formStep === 1) {
      return changeFormStep(2);
    }
    onSubmit(formInput);
  };

  const stepOneVariant = {
    initial: {
      x: -300,
      opacity: 0.2,
    },
    enter: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "tween",
      },
    },
    leave: {
      x: -300,
      opacity: 0,
      transition: {
        duration: 0.3,
        type: "tween",
      },
    },
  };

  const stepTwoVariant = {
    initial: {
      x: 300,
      opacity: 0,
    },
    enter: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,

        type: "tween",
      },
    },
    leave: {
      x: 300,
      opacity: 0,
      transition: {
        duration: 0.3,

        type: "tween",
      },
    },
  };
  return (
    <>
      {formStep === 1 && (
        <motion.div
          key="step1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <h6 className="text-text-lemon font-sans font-bold text-sm lg:text-base tracking-open mb-2 lg:mx-6">
            The Alliance is open to adding more members
          </h6>
          <h6 className="lg:text-lg text-text-sm font-sans tracking-open text-text-dark lg:mx-6">
            {" "}
            We are excited you're here please fill the form below
          </h6>
        </motion.div>
      )}
      {formStep === 2 && (
        <motion.div
          key="step2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <h6
            onClick={() => changeFormStep(1)}
            className="text-text-blue xs:text-left font-sans font-bold text-sm lg:text-base tracking-open mb-2 lg:mx-6 cursor-pointer flex items-center"
          >
            <ChevronLeft />
            <p className="">Back</p>
          </h6>
          <h6 className="lg:text-lg text-text-sm font-sans tracking-open text-text-dark lg:mx-6">
            {" "}
            You're almost done
          </h6>
        </motion.div>
      )}
      <AnimatePresence exitBeforeEnter>
        <form
          onSubmit={handleFormSubmit}
          className="border-t xs:mt-5 xs:pt-5 lg:pt-10 border-shade-placeholder border-opacity-70 lg:px-6 join_form overflow-hidden"
        >
          {formStep === 1 && (
            <motion.div
              key="stepOne"
              exit="leave"
              initial="initial"
              animate="enter"
              variants={stepOneVariant}
            >
              <div className="xs:mb-6">
                <PrimaryInput
                  onChange={handleInputChange}
                  name="name"
                  value={formInput.name}
                  required
                  type="text"
                  placeholder="eg. BudgIT Foundation"
                  label={
                    <h6 className="font-sans text-text-dark tracking-open xs:mb-2 text-xs">
                      CSO's Name
                    </h6>
                  }
                />
              </div>
              <div>
                <PrimaryInput
                  onChange={handleInputChange}
                  name="email"
                  value={formInput.email}
                  required
                  type="email"
                  placeholder="eg. ayomide@budgit.com"
                  label={
                    <h6 className="font-sans text-text-dark tracking-open mb-2 text-xs">
                      Company Email Address
                    </h6>
                  }
                />
              </div>
              <div className="mt-10 h-56 ">
                <PrimaryButton type="submit">
                  <h6 className="text-26 font-sans font-semibold tracking-open">
                    Next
                  </h6>
                </PrimaryButton>
              </div>
            </motion.div>
          )}
          {formStep === 2 && (
            <motion.div
              key="stepTwo"
              initial="initial"
              exit="leave"
              animate="enter"
              variants={stepTwoVariant}
            >
              <div className="xs:mb-6 w-full">
                <PrimaryTextArea
                  onChange={handleInputChange}
                  name="description"
                  value={formInput.description}
                  required
                  type="text"
                  label={
                    <h6 className="font-sans text-text-dark tracking-open xs:mb-2 text-xs">
                      Brief Description
                    </h6>
                  }
                />
              </div>
              <div className="flex items-center">
                <div className="w-129 flex-shrink-0">
                  <FileSelector onDrop={onDrop}>
                    <div className="flex items-center justify-center">
                      <h6 className="font-sans tracking-open text-xs font-semibold mr-2 ">
                        Upload logo
                      </h6>
                      <UploadIcon />
                    </div>
                  </FileSelector>
                </div>
                <ul className="mx-3 flex items-center">
                  {formInput.file.map((file) => (
                    <li className="bg-primary-blue bg-opacity-70 h-28 px-4 rounded text-text-snow text-xs font-sans flex items-center justify-center min-w-100 max-w-100 overflow-scroll truncate">
                      <h6 className="px-4"> {file.name}</h6>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 h-56 ">
                <PrimaryButton disabled={registering} type="submit">
                  {!registering && (
                    <h6 className="text-26 font-sans font-semibold tracking-open">
                      Join
                    </h6>
                  )}
                  {registering && <ButtonLoader />}
                </PrimaryButton>
              </div>
            </motion.div>
          )}
        </form>
      </AnimatePresence>
    </>
  );
};

export default JoinUsForm;