import React from 'react';

/**
 * @function LoadingComponent
 * A loading component to be showng while the app is loading data
 * extracted the component for use in lazy loading in the future.
 * @returns JSX.Element
 */

const LoadingComponent = (): JSX.Element => {
  return (
    <img src="/img/loading.svg" alt="loading..." />
  )
};

export default LoadingComponent;