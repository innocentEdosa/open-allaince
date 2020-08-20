import React from "react";
import clsx from "clsx";

const PrimaryButton = ({ type = "button", children, variant, onClick }) => {
  const buttonClass =
    "bg-primary-blue h-full w-full rounded outline-none hover:outline-none focus:outline-none hover:bg-accent-gold text-text-snow hover:text-text-dark";
  const secondaryClass =
    "bg-primary-blue h-full w-full rounded outline-none hover:outline-none focus:outline-none hover:bg-accent-gold bg-shade hover:bg-shade";
  const tertiaryClass =
    "bg-primary-blue h-full w-full rounded outline-none hover:outline-none focus:outline-none  bg-primary-green hover:bg-primary-green";

  const outlineClass =
    "border-2 border-shade-placeholder  h-full w-full rounded outline-none focus:outline-none hover:outline-none hover:bg-accent-gold text-text-placeholder hover:text-text-dark hover:border-accent-gold";
  return (
    <button
      onClick={onClick}
      className={clsx({
        [buttonClass]: !variant,
        [secondaryClass]: variant === "secondary",
        [tertiaryClass]: variant === "tertiary",
        [outlineClass]: variant === "outline",
      })}
      type={type}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
