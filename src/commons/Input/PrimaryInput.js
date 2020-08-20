import React from "react";

const PrimaryInput = ({ onChange, name, placeholder, label, type, required, value }) => {
  return (
    <label className="w-full h-full m-0" htmlFor={name}>
      {label}
      <input
      value={value}
      onChange={onChange}
        type={type}
        required={required}
        placeholder={placeholder}
        name={name}
        className="w-full h-full rounded px-6 outline-none font-sans font-medium tracking-open border border-shade-placeholder placeholder-text-placeholder text-sm"
      />
    </label>
  );
};

export default PrimaryInput;