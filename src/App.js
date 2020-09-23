import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import './App.css';
import Documents from './website/containers/documents/index';
import Register from './website/containers/auth/index';
import Notfound from './website/containers/notfound/index';
import CallForExpression from './callForExpression';
import routes from './utilities/routes';
import NewHome from './Home';
import CommitmentContainer from './Commitments';
import TopNav from './commons/TopNav';
import SingleCommitment from './Commitments/singleCommitment/Commitment';
import Join from './JoinUs';
import Footer from './commons/Footer';
import NewBlog from './Blog';
import BlogDetailsV2 from './Blog/BlogDetails';
import Gallery from './Gallery';
import GalleryDetails from './Gallery/GalleryDetails';
import Document from './Document';
import ExternalLinks from './External';
import AboutContainer from './About';
import JoinSuccess from './JoinUs/JoinSuccess';

const siteRoutes = [
  {
    path: '/',
    exact: true,
    main: () => <Redirect to="/v2" />,
  },

  {
    path: '/register/main',
    exact: false,
    main: () => <Register />,
  },
];





const  App = () => {

useEffect(() => {
  handleVh();
  window.addEventListener("resize", handleVh);
  return () => window.removeEventListener("resize", handleVh);
}, []);

// console.log(pathname, 'this i sthe pathna in papp')

  
const handleVh = () => {
  document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
}
const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};


    return (
      <div className="App">
        <Router>
          <div>
            <Route component={ScrollToTop} />
            <Route component={TopNav} />

            <Switch>
              {/* <div className="ml-md-5 pl-md-3"> */}

              {/* {customerRoutes.map((route, index) => (
                <PrivateRoute key={index} exact={route.exact} path={route.path} component={Customer(route.main)} />
                // <PrivateRoute key={index} exact={route.exact} path={route.path} component={route.main} />
              ))} */}
              {siteRoutes.map((route, index) => (
                <Route
                  key={index}
                  exact={route.exact}
                  path={route.path}
                  component={route.main}
                />
              ))}
              {/* <Route path="/blog/main" component={Blog} /> */}
              <Route path="/callforexpression" component={CallForExpression} />
              <Route path={routes.home} component={NewHome} />
              <Route
                path={routes.commitments}
                component={CommitmentContainer}
              />
              <Route
                path={routes.singleCommitment}
                component={SingleCommitment}
              />
              <Route path={routes.joinSuccess} component={JoinSuccess} />
              <Route path={routes.joinUs} component={Join} />
              <Route path={routes.document} component={Document} />
              <Route path={routes.external} component={ExternalLinks} />
              <Route path={routes.blog} component={NewBlog} />
              <Route path={routes.blogDetails} component={BlogDetailsV2} />
              <Route path={routes.galleryDetails} component={GalleryDetails} />
              <Route path={routes.gallery} component={Gallery} />
              <Route path={routes.about} component={AboutContainer} />
              {/* <Route exact path="/login" component={LoginPage} /> */}
              {/* <Route path="/" component={Home} /> */}
              {/* <Route exact path="/reset-password" component={ResetPasswordPage} />
              <Route exact path="/customer-settings" component={OCustomerSettings} /> */}
              <Route component={Notfound} />
              {/* </div> */}
            </Switch>
            <Footer />
          </div>
        </Router>
      </div>
    );
}

export default App;
