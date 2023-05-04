import './App.css'
import Navbar from './components/Navbar'
import './components/Navbar.css'
import logo from './components/logo.png'
import { Product } from './pages/product'
import { Applications } from './pages/applications'
import Home from './pages/home'
import ReachOut from './pages/reachout'
import AboutUs from './pages/aboutus'

import { BrowserRouter as Router, Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Outlet }
    from 'react-router-dom';
import React from "react";

const links = [
    { title: 'Product', url: '/product' },
    { title: 'Applications', url: '/applications' },
];

const links2 = [
  { title: 'About Us', url: '/aboutus' },
  { title: 'Reach Out', url: '/reachout'},
];

/* This code is creating a router using the `createBrowserRouter` function from the `react-router-dom`
library. The router is defined using JSX syntax and includes several nested `Route` components that
define the different pages of the application. The `Navbar` component is also included in the router
and is rendered on every page using the `Outlet` component. The `router` variable is then passed to
the `RouterProvider` component to make it available to the rest of the application. */
const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<>
    <Navbar logo={logo} links_left={links} links_right={links2}/>
    <Outlet />
  </>}>
    <Route path="/" element={<Home />} />
    <Route path="/product" element={<Product />} />
    <Route path="/applications" element={<Applications />} />
    <Route path="/aboutus" element={<AboutUs />} />
    <Route path="/reachout" element={<ReachOut />} />
  </Route>
));

/**
 * This is a functional component that returns a div containing a RouterProvider component with a
 * router prop.
 * @returns A React component called `App` is being returned. It contains a `div` element with a class
 * name of "App" and a child component called `RouterProvider` with a prop of `router` that is being
 * passed in. The value of `router` is not shown in the code snippet provided.
 */
function App() {
  return (
      <div className="App">
          <RouterProvider router={router} />
      </div>    
  )
}

export default App
