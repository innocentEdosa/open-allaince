import JoinSuccess from "../JoinUs/JoinSuccess";

const routes = {
    home: '/v2',
    about: '/about',
    nap1: '/commitments/nap1',
    nap2: '/commitments/nap2',
    commitments: '/commitments/:nap',
    blog: '/blog',
    blogDetails: '/blog-details/:id?',
    baseBlogDetails: '/blog-details/',
    signup: '/register',
    document: '/resources/documents/',
    external: '/resources/external-links',

    gallery: '/resources/gallery',
    galleryDetails: '/resources/gallery/:id',
    
    singleCommitment: '/commitment/:nap/:category/:id',
    joinUs: '/joinus',
    joinSuccess: '/joinus/thanks'
};

export default routes;
