import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundComponent(): JSX.Element {
  return (
    <div>
      <h1>404</h1>
      <h5>Sorry, the page you are looking for does not exist!</h5>
      <Link to='/'>Home Page</Link>
    </div>
  )
}

export default NotFoundComponent;