import React from 'react';
import { useHistory } from 'react-router-dom';
import useQuery from '../HOC/useQuery';


const AboutTab = () => {
  const { push } = useHistory();
  const { tab } = useQuery();

  const tabClasses =
    "flex h-10 rounded border-2 xs:border-primary-blue aboutTab";

  const activeTabClasses =
    "flex h-10 rounded border-2 xs:border-primary-blue  aboutTabFlip";

  const tabBtnClasses =
    "w-1/2 focus:outline-none text-sm font-sans font-bold tracking-open text-text-blue";

  const activeTabBtnClasses =
    "w-1/2 focus:outline-none text-sm font-sans font-bold tracking-open text-shade";

  return (
    <div className={tab !== "about" ? tabClasses : activeTabClasses}>
      <button
        onClick={() => push("/about/?tab=about")}
        className={tab !== "about" ? tabBtnClasses : activeTabBtnClasses }
      >
        ABOUT US
      </button>
      <button
        onClick={() => push("/about/?tab=members")}
        className={tab !== "about" ? activeTabBtnClasses : tabBtnClasses }
      >
        MEMBERS
      </button>
    </div>
  );
};

export default AboutTab;