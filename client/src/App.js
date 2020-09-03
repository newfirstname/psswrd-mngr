import React from 'react';
import { Router } from 'react-router-dom';

import 'rsuite/dist/styles/rsuite-default.css';
import 'rsuite/lib/styles/themes/dark/index.less';

import NavbarComp from './components/NavbarComp';

const App = () => {
  return (
    <>
      <NavbarComp />
      {/* <Router></Router> */}
    </>
  );
};

export default App;
