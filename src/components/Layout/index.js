import React from 'react';
import Carousel from '../Carousel';
import Header from '../Header';
import MenuHeader from '../MenuHeader';

/**
* @author
* @function Layout
**/

function Layout(props) {
  
  return(
    <>
        <Header />
        <MenuHeader />
        <Carousel />
        {props.children}
    </>
   )

 }

export default Layout