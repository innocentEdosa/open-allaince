import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Collapse } from "reactstrap";

export const NavDropDown = React.forwardRef(({ pathname, style, close, data = [] }) => {


    const listClass = 'h-45 flex items-center px-4 hover:bg-shade-sky hover:text-opacity-100  md:text-xs text-text-coal text-opacity-40 lg:text-sm font-normal font-sans cursor-pointer';

    const activeListClass = 'h-45 flex items-center px-4 hover:bg-shade-sky  md:text-xs text-text-coal  lg:text-sm font-normal font-sans cursor-pointer';
  
    return (
      <ul
        className="hidden md:block w-166 bg-shade"
        style={{ ...style, boxShadow: "0px 3px 4px rgba(0, 0, 0, 0.12)" }}
      >
        {data.map(({ title, path }) => {
          return (
            <Link key={title} to={path}>
              <li className={pathname.indexOf(path) !== -1 ? activeListClass : listClass}>
                {title}
              </li>
            </Link>
          );
        })}
      </ul>
    );
  });


  export const MobileNavDropdown = ({ list, handleRouting, pathname }) => {
    const [isOpen, setIsOPen] = useState(false);

    const mobileListItemClass =
      "cursor-pointer h-72 flex items-center px-4 text-text-dark";

    const activeMobileListItemClass = 'cursor-pointer h-72 flex items-center px-4  text-text-dark';

    const toggleIsOpen = (e) => {
      e.preventDefault();
      setIsOPen((prev) => !prev);
    };

    return (
      <>
        <li
          onClick={toggleIsOpen}
          className=" cursor-pointer h-72 flex items-center px-4 justify-between   text-text-dark"
        >
          <h6 className="font-sans font-bold tracking-open text-sm ">
            {list.title}
          </h6>{" "}
          <span>{isOpen ? list.icon2 : list.icon}</span>
        </li>
        <Collapse isOpen={isOpen}>
          <ul className="px-4 bg-shade-milk">
            {list.dropdown.map((innerlist) => (
              <li
                onClick={() => {
                  handleRouting(innerlist.path);
                }}
                className={
                  pathname.indexOf(innerlist.path) !== -1
                    ? activeMobileListItemClass
                    : mobileListItemClass
                }
              >
                <h6 className="font-sans font-bold tracking-open text-sm ">
                  {innerlist.title}
                </h6>{" "}
              </li>
            ))}
          </ul>
        </Collapse>
      </>
    );
  };