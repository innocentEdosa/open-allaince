import { ReactComponent as ChevronDown } from '../../assets/icons/chevron_down.svg';
import { ReactComponent as ChevronUp} from '../../assets/icons/arrow_up.svg';

import React from 'react';
import routes from '../../utilities/routes';

const navList = [
  {
    title: "About us",
    isDropdown: false,
    path: routes.about,
  },
  {
    title: "National Action Plans",
    isDropdown: true,
    path: "nap",
    icon: <ChevronDown />,
    icon2: <ChevronUp />,
    dropdown: [{
        title: 'NAP 1',
        path: routes.nap1,
    },
    {
        title: 'NAP 2',
        path: routes.nap2,
    }]
  },
  {
    title: "Blog",
    isDropdown: false,
    path: routes.blog,
  },
  {
    title: "Resources",
    isDropdown: true,
    path: "resources",
    icon: <ChevronDown />,
    icon2: <ChevronUp />,
    dropdown: [{
        title: 'Document',
        path: routes.document,
    },
    {
        title: 'External Links',
        path: routes.external
    },
    {
        title: 'Gallery',
        path: routes.gallery,

    }]
  },
];

export default navList;

