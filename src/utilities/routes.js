const routes = {
    home: '/v2',
    about: '/about/main',
    nap1: '/commitments/nap1',
    nap2: '/commitments/nap2',
    commitments: '/commitments/:nap',
    blog: '/blog',
    blogDetails: '/blog-details/:id?',
    baseBlogDetails: '/blog-details/',
    signup: '/register',
    document: '/documents/',
    external: '/external',

    gallery: '/gallery',
    galleryDetails: '/gallery/:id',
    
    singleCommitment: '/commitment/:nap/:category/:id',
    joinUs: '/joinus'
};

export default routes;
