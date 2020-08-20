import React from "react";
import navList from "./navList";
import PrimaryButton from "../Button/PrimaryButton";
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import Dropdown from "../Dropdown";
import Clicker from "../Dropdown/clicker";
import { Link } from 'react-router-dom';
import { ReactComponent as Hamburger } from '../../assets/icons/hamburger.svg';
import routes from '../../utilities/routes';

const NavDropDown = ({ style, close, data = [] }) => {
  return (
    <ul
      className="w-166 bg-shade"
      style={{ ...style, boxShadow: "0px 3px 4px rgba(0, 0, 0, 0.12)" }}
    >
      {data.map(({ title, path }) => {
        return (
          <Link to={path}>
          
          <li className="h-45 flex items-center px-4 hover:bg-shade-sky uppercase md:text-xs lg:text-sm font-normal font-poppins">
            {title}
          </li>
          </Link>
        );
      })}
    </ul>
  );
};

const TopNav = () => {
  const listItemClass =
    "uppercase md:mx-2 lg:mx-28 font-sans font-bold md:text-xs text-base text-text-coal tracking-open flex items-center xl:text-base";

    const forwardToAuth = (e) => {
      e.preventDefault();
      window.open('http://admin.openalliance.ng/login')
    }
  return (
    <nav style={{
      boxShadow: '0px 1px 6px rgba(0, 0, 0, 0.14)',
    }} className="flex bg-shade px-6 lg:px-16 h-88 items-center">
      <Link to={routes.home}>
      <div className="flex-shrink-0">
        <Logo />
      </div>
      </Link>
      <ul className="flex-grow hidden md:flex items-center justify-center">
        {navList.map(({ isDropdown, title, icon, dropdown, path }) => {
          if (isDropdown) {
            return (
              <Dropdown key={title} selector="#portal">
                <Clicker clicker>
                  <li className={listItemClass}>
                    <h6 className="mr-2">{title}</h6>
                    <span>{icon}</span>
                  </li>
                </Clicker>
                <NavDropDown data={dropdown} />
              </Dropdown>
            );
          }
          return (
            <Link to={path}>
            
            <li key={title} className={listItemClass}>
              <h6>{title}</h6>
            </li>
            </Link>
          );
        })}
      </ul>
      <div className="flex-grow md:hidden"></div>
      <div className="md:hidden flex items-center w-10 h-8 rounded">
        <button type="button" className="bg-shade-naija w-full h-full flex justify-center items-center outline-none active:outline-none rounded">
<Hamburger />
        </button>
      </div>
      <div className="flex-shrink-0 h-42 hidden md:block w-108">
        <PrimaryButton onClick={forwardToAuth}>
          <h6 className="outline-none  text-text-snow hover:text-text-dark text-base font-sans tracking-open font-bold h-full flex items-center justify-center">
            Sign In
          </h6>
        </PrimaryButton>
      </div>
    </nav>
  );
};

export default TopNav;
