import React from 'react';
import { Link } from 'react-router-dom';

/**
 * @function NotFoundComponent
 * The page not found component to show when a user navigates to 
 * a page that is not defined in the app router.
 * @returns JSX.Element
 */

const NotFoundComponent: React.FC = () => {
  return (
    <div>
      <h1>404</h1>
      <h5>Sorry, the page you are looking for does not exist!</h5>
      <Link to='/'>Home Page</Link>
    </div>
  )
}

export default NotFoundComponent;