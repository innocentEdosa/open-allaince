import React from "react";
import { Link } from 'react-router-dom'
import footerNavList from './footerNavList';

const FooterNav = () => {
  const listItemClass =
    "xs:mb-6 lg:mb-0 last:mb-0 mx-28 font-sans font-bold text-2xl lg:text-base text-text-dark tracking-open flex items-center text-lg cursor-pointer";

  return (
    <nav className="flex items-center">
      <ul className="flex-grow flex flex-col lg:flex-row items-center justify-center">
        {footerNavList.map(({ title, path}) => {
          return (
            
            
            <li key={title} className={listItemClass}>
             <Link to={path}>
              <h6 className="text-text-dark hover:text-accent-gold">{title}</h6>
             </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default FooterNav;
