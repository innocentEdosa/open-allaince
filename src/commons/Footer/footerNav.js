import React from "react";
import PrimaryButton from "../Button/PrimaryButton";
import footerNavList from './footerNavList';

const FooterNav = () => {
  const listItemClass =
    "mb-6 lg:mb-0 last:mb-0 mx-28 font-sans font-bold text-2xl lg:text-base text-text-dark tracking-open flex items-center text-lg cursor-pointer";

  return (
    <nav className="flex items-center">
      <ul className="flex-grow flex flex-col lg:flex-row items-center justify-center">
        {footerNavList.map(({ title}) => {
          return (
            <li key={title} className={listItemClass}>
              <h6>{title}</h6>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default FooterNav;
