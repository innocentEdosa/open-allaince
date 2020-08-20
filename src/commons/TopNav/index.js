import React, { useState, useEffect } from "react";
import navList from "./navList";
import PrimaryButton from "../Button/PrimaryButton";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import Dropdown from "../Dropdown";
import Clicker from "../Dropdown/clicker";
import { Link, useHistory } from "react-router-dom";
import { ReactComponent as Hamburger } from "../../assets/icons/hamburger.svg";
import routes from "../../utilities/routes";
import { Collapse } from "reactstrap";
import { ReactComponent as CloseIcon } from "../../assets/icons/close_menu.svg";

const mobileListItemClass = 'cursor-pointer h-72 flex items-center px-4 text-text-dark hover:text-accent-gold';

const activeMobileListItemClass = `cursor-pointer h-72 flex items-center px-4  hover:text-accent-gold text-accent-gold`

const NavDropDown = ({ pathname, style, close, data = [] }) => {

  const listClass = 'h-45 flex items-center px-4 hover:bg-shade-sky  md:text-xs text-text-dark hover:text-accent-gold lg:text-sm font-normal font-sans cursor-pointer';

  const activeListClass = 'h-45 flex items-center px-4 hover:bg-shade-sky  md:text-xs text-accent-gold hover:text-accent-gold lg:text-sm font-normal font-sans cursor-pointer';

  return (
    <ul
      className="hidden md:block w-166 bg-shade"
      style={{ ...style, boxShadow: "0px 3px 4px rgba(0, 0, 0, 0.12)" }}
    >
      {data.map(({ title, path }) => {
        return (
          <Link to={path}>
            <li className={pathname.indexOf(path) !== -1 ? listClass : listClass}>
              {title}
            </li>
          </Link>
        );
      })}
    </ul>
  );
};

const MobileNavDropdown = ({ list, handleRouting, pathname }) => {
  const [isOpen, setIsOPen] = useState(false);

  const toggleIsOpen = (e) => {
    e.preventDefault();
    setIsOPen((prev) => !prev);
  };

  return (
    <>
      <li
        onClick={toggleIsOpen}
        className=" cursor-pointer h-72 flex items-center px-4 justify-between text-text-dark hover:text-accent-gold"
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
              onClick={() => { handleRouting(innerlist.path)}}
              className={pathname.indexOf(innerlist.path) !== -1  ? activeMobileListItemClass : mobileListItemClass }
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

const TopNav = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const { push, location: {pathname}} = useHistory();

  const closeMobileNav = () => {
    setShowMobileNav(false)
  };


  useEffect(() => {
    window.addEventListener("scroll", closeMobileNav);
    return () => window.removeEventListener("scroll", closeMobileNav);
  }, []);


  const toggleMobileNav = () => setShowMobileNav((prev) => !prev);

  const listItemClass =
    " md:mx-2 lg:mx-28 font-sans font-bold md:text-xs text-base text-text-coal tracking-open flex items-center xl:text-base cursor-pointer hover:text-accent-gold";

    const activeListItemClass =
    " md:mx-2 lg:mx-28 font-sans font-bold md:text-xs text-base text-accent-gold tracking-open flex items-center xl:text-base cursor-pointer hover:text-accent-gold";



  const forwardToAuth = (e) => {
    e.preventDefault();
    window.open("http://admin.openalliance.ng/login");
  };
 
  const handleRouting = (path) => {
push(path);
setShowMobileNav(false)
  }
  return (
    <section className="">
      <nav
        style={{
          boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.14)",
        }}
        className=" flex bg-shade px-6 lg:px-16 h-88 items-center"
      >
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
                  <NavDropDown pathname={pathname} offset={{ top: 20}}data={dropdown} />
                </Dropdown>
              );
            }
            return (
              <Link to={path}>
                <li key={title} className={ pathname.indexOf(path) !== -1 ?listItemClass : listItemClass}>
                  <h6>{title}</h6>
                </li>
              </Link>
            );
          })}
        </ul>
        <div className="flex-grow md:hidden"></div>
        <div className="md:hidden flex items-center w-10 h-8 rounded">
          <button
            onClick={toggleMobileNav}
            type="button"
            className="bg-shade-naija w-full h-full flex justify-center items-center outline-none focus:outline-none active:outline-none rounded"
          >
            {showMobileNav ? <CloseIcon /> : <Hamburger />}
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
      {}
      <div style={{ zIndex: '10000000'}}className="absolute">
        <Collapse isOpen={showMobileNav}>
          <div style={{height: 'calc(100 * var(--vh) - 88px)'}} className="md:hidden bg-shade w-screen flex flex-col pb-10 overflow-y-auto">
            <ul>
              {navList.map((list) => {
                if (list.isDropdown) {
                  return <MobileNavDropdown pathname={pathname} handleRouting={handleRouting} list={list} />;
                }
                return (
                    <li onClick={() => handleRouting(list.path)} className={pathname.indexOf(list.path) !== -1  ? activeMobileListItemClass : mobileListItemClass }>
                      <h6 className="font-sans font-bold tracking-open text-sm ">
                        {list.title}
                      </h6>
                    </li>
                );
              })}
            </ul>
            <div className="flex-grow"></div>
            <div className="flex-shrink-0 h-42  block px-4 mt-4">
              <PrimaryButton onClick={forwardToAuth}>
                <h6 className="outline-none  text-text-snow hover:text-text-dark text-base font-sans tracking-open font-bold h-full flex items-center justify-center">
                  Sign In
                </h6>
              </PrimaryButton>
            </div>
          </div>
        </Collapse>
      </div>
    </section>
  );
};

export default TopNav;
