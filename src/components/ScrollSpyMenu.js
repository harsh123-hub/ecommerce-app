import React from 'react';

const ScrollSpyMenu = () => (
  <div className="position-sticky" style={{ top: '80px' }}>
    <ul className="nav flex-column" id="scrollspyMenu">
      {/* Remove or comment out the All Products link */}
      {/* <li className="nav-item">
        <a className="nav-link" href="#products">All Products</a>
      </li> */}
      <li className="nav-item">
        <a className="nav-link" href="#top">Back to Top</a>
      </li>
    </ul>
  </div>
);

export default ScrollSpyMenu;
