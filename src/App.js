import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import './App.css';
import Home from './website/containers/home';
import About from './website/containers/about';
import Blog from './website/containers/blog';
import BlogDetails from './website/containers/blog/blog-details';
import Documents from './website/containers/documents/index';
import Commitments from './website/containers/commitment/index';
import Register from './website/containers/auth/index';
import Milestones from './website/containers/commitment/milestones';
import Notfound from './website/containers/notfound/index';
import CallForExpression from './callForExpression';
import routes from './utilities/routes';
import NewHome from './Home';
import CommitmentContainer from './Commitments';
import TopNav from './commons/TopNav';
import SingleCommitment from './Commitments/singleCommitment/Commitment';
import Join from './JoinUs';
import Footer from './commons/Footer';


const siteRoutes = [
  {
    path: '/',
    exact: true,
    main: () => <Redirect to="/v2" />,
  },
  {
    path: '/home/',
    exact: true,
    main: () => <Redirect to="/home/main" />,
  },
  {
    path: '/about/',
    exact: true,
    main: () => <Redirect to="/about/main" />,
  },
  {
    path: '/documents/',
    exact: true,
    main: () => <Redirect to="/documents/main" />,
  },
  {
    path: '/blog/',
    exact: true,
    main: () => <Redirect to="/blog/main" />,
  },
  {
    path: '/blog-details/',
    exact: true,
    main: () => <Redirect to="/blog-details/main" />,
  },
  {
    path: '/commitments/',
    exact: true,
    main: () => <Redirect to="/commitments/main" />,
  },
  {
    path: '/register/',
    exact: true,
    main: () => <Redirect to="/register/main" />,
  },
  // {
  //   path: '/admin/reports/',
  //   exact: true,
  //   main: () => <Redirect to="/admin/reports/main" />,
  // },
  {
    path: '/home/main',
    exact: false,
    main: () => <Home />,
  },
  {
    path: '/about/main',
    exact: false,
    main: () => <About />,
  },
  {
    path: '/blog/main',
    exact: false,
    main: () => <Blog />,
  },
  {
    path: '/blog-details/:id',
    exact: false,
    main: () => <BlogDetails />,
  },
  {
    path: '/documents/main',
    exact: false,
    main: () => <Documents />,
  },
  {
    path: '/commitments/main',
    exact: false,
    main: () => <Commitments />,
  },
  {
    path: '/commitments/milestones/:id',
    exact: false,
    main: () => <Milestones />,
  },
  {
    path: '/register/main',
    exact: false,
    main: () => <Register />,
  },
  // {
  //   path: '/s/about/main',
  //   exact: false,
  //   main: () => <CDashboard />,
  // },
  // {
  //   path: '/admin/schemes/main',
  //   exact: false,
  //   main: () => <Schemelist />,
  // },
];





class App extends Component {


  
  render() {

    const ScrollToTop = () => {
      window.scrollTo(0, 0);
      return null;
    };
    return (
      <div className="App">
      <Router>
        <div>


























      <Route component={ScrollToTop} />
      <TopNav />
      
      <Switch>
              {/* <div className="ml-md-5 pl-md-3"> */}
             
              {/* {customerRoutes.map((route, index) => (
                <PrivateRoute key={index} exact={route.exact} path={route.path} component={Customer(route.main)} />
                // <PrivateRoute key={index} exact={route.exact} path={route.path} component={route.main} />
              ))} */}
              {siteRoutes.map((route, index) => (
                <Route key={index} exact={route.exact} path={route.path} component={route.main} />
              ))}
              {/* <Route path="/blog/main" component={Blog} /> */}
              <Route path="/callforexpression" component={CallForExpression} />
              <Route path={routes.home} component={NewHome} />
              <Route path={routes.commitments} component={CommitmentContainer} />
              <Route path={routes.singleCommitment} component={SingleCommitment} />
              <Route path={routes.joinUs} component={Join} />
             
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
}

export default App;
