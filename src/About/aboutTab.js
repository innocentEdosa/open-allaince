import React from 'react';
import { useHistory } from 'react-router-dom';
import useQuery from '../HOC/useQuery';


const AboutTab = () => {
  const { push } = useHistory();
  const { tab } = useQuery();

  console.log(tab, 'this is the tab we are working on')

  const tabClasses =
    "flex xs:h-10 rounded border-2 xs:border-primary-blue aboutTab";

  const activeTabClasses =
    "flex xs:h-10 rounded border-2 xs:border-primary-blue  aboutTabFlip";

  const tabBtnClasses =
    "w-1/2 focus:outline-none text-sm font-sans font-bold tracking-open text-text-blue";

  const activeTabBtnClasses =
    "w-1/2 focus:outline-none text-sm font-sans font-bold tracking-open text-shade";

  return (
      <div className="lg:w-754 mx-auto">

    <div className={(tab === 'about' || !tab) ? activeTabClasses : tabClasses}>
      <button
        onClick={() => push("/about/?tab=about")}
        className={(tab === "about"  || !tab ) ? activeTabBtnClasses : tabBtnClasses }
      >
        ABOUT US
      </button>
      <button
        onClick={() => push("/about/?tab=members")}
        className={(tab !== "about" && tab) ? activeTabBtnClasses : tabBtnClasses }
      >
        MEMBERS
      </button>
    </div>
      </div>
  );
};

export default AboutTab;