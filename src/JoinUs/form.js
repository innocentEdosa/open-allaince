import React, { useState, useCallback } from 'react';
import PrimaryButton from '../commons/Button/PrimaryButton';
import PrimaryInput from '../commons/Input/PrimaryInput';
import FileSelector from '../commons/FileSelector';
import { ReactComponent as UploadIcon } from '../assets/icons/upload.svg';

const JoinUsForm = ({ onSubmit }) => {
  const [formInput, setFormInput] = useState({
    email: "",
    file: [],
  });
  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setFormInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onDrop = useCallback((acceptedFiles) => {
    setFormInput((prev) => ({
      ...prev,
      file: acceptedFiles,
    }));
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(formInput);
  };
  return (
    <form
      onSubmit={handleFormSubmit}
      className="form border-t mt-5 pt-5 border-shade-placeholder border-opacity-70 lg:px-6"
    >
      <div className="h-10 mb-5">
        <PrimaryInput
          onChange={handleInputChange}
          name="email"
          value={formInput.email}
          required
          type="email"
          placeholder="eg. ayomide@budgit.com"
          label={
            <h6 className="font-sans text-text-dark tracking-open mb-2 text-xs">
              Company email address
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
        <PrimaryButton type="submit">
          <h6 className="text-26 font-sans font-semibold tracking-open">
            Join
          </h6>
        </PrimaryButton>
      </div>
    </form>
  );
};

export default JoinUsForm;