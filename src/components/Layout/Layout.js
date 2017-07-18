import React from 'react';

const Layout = props => (
  <div className="container">
    <div className="app-title">Oddle exercise app</div>
    {props.children}
  </div>
);
Layout.propTypes = {
  children: React.PropTypes.node.isRequired,
};
export default Layout;
