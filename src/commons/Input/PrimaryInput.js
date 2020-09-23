import React from "react";

const PrimaryInput = ({ disabled, onChange, name, placeholder, label, type = "text", required, value }) => {
  return (
    <label className="xs:w-full  xs:m-0 " htmlFor={name}>
      {label}
      <input
      disabled={disabled}
      value={value}
      onChange={onChange}
        type={type}
        required={required}
        placeholder={placeholder}
        name={name}
        className="xs:w-full xs:h-10 rounded xs:px-6 outline-none font-sans font-medium tracking-open border border-shade-placeholder placeholder-text-placeholder text-sm"
      />
    </label>
  );
};

export default PrimaryInput;
