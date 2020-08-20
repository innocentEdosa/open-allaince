import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import PrimaryButton from '../Button/PrimaryButton';

function FileSelector({
  onDrop, children
}) {
  // const onDrop = useCallback(acceptedFiles => {
  //   // Do something with the files
  // }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
 
  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <div className="h-36">

          <PrimaryButton variant="outline">
              {children}
          </PrimaryButton>
          </div>
          
      }
    </div>
  )
};

export default FileSelector;
