import React from 'react';
import clsx from 'clsx';

const PrimaryTextarea = ({
  rows,
  name,
  label,
  cols,
  value,
  onChange,
  onBlur,
  disabled,
  required,
  placeholder,
}) => {
  const normalInput = 'xs:w-full rounded xs:px-6 xs:py-2 outline-none font-sans font-medium tracking-open border border-shade-placeholder placeholder-text-placeholder text-sm  h-20 ';
  return (
    <label className="w-full" htmlFor={name}>
      {

     Boolean(label) &&   <span className="text-text-coco font-medium text-10 tracking-widest block">
          {label}
        </span>
      }
      <textarea 
              disabled={disabled}
              onBlur={onBlur}
              onChange={onChange}
              name={name}
              placeholder={placeholder}
              cols={cols}
                required={required}
              rows={rows}
              className={normalInput}
              value={value}
      >

      </textarea>

      {/* <span className="text-xs text-text-ruby">
        <ToggleComponent check={showError}>
          <>
            {error
              && error.map((errorValue) => (
                <>
                  <span className=" ">{errorValue}</span>

                  <br />
                </>
              ))}
          </>
        </ToggleComponent>
      </span> */}
    </label>
  );
};

export default PrimaryTextarea;
