import routes from '../../utilities/routes';


const footerNavList = [
  { title: "About Us", path: routes.about },
  {
    title: "Commitments",
    path: routes.nap2,
  },
  {
    title: "Blog",
    path: routes.blog
  },
  {
    title: "Documents",
    path: routes.document
  },
  {
    title: "Members",
    path: `${routes.about}?tab=members`
  },
];

export default footerNavList;
