import { ReactComponent as ChevronDown } from '../../assets/icons/chevron_down.svg';
import React from 'react';
import routes from '../../utilities/routes';

const navList = [
  {
    title: "about us",
    isDropdown: false,
    path: routes.about,
  },
  {
    title: "national action plans",
    isDropdown: true,
    path: "",
    icon: <ChevronDown />,
    dropdown: [{
        title: 'nap 1',
        path: routes.nap1,
    },
    {
        title: 'nap 2',
        path: routes.nap2,
    }]
  },
  {
    title: "blog",
    isDropdown: false,
    path: routes.blog,
  },
  {
    title: "resources",
    isDropdown: true,
    path: "",
    icon: <ChevronDown />,
    dropdown: [{
        title: 'document',
        path: routes.document,
    },
    {
        title: 'external link',
        path: routes.external
    },
    {
        title: 'gallery',
        path: routes.gallery,

    }]
  },
];

export default navList;

