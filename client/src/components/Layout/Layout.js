import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


const Layout = props => (
  <div>
    <Header />
    {props.children}
    <Footer />
  </div>
);
Layout.propTypes = {
  children: React.PropTypes.node.isRequired,
};
export default Layout;
