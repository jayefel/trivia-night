import React from 'react';
const reactRouteDom = require('react-router-dom');
reactRouteDom.BrowserRouter = ({ children }) => <div>{children}</div>
module.exports = reactRouteDom;