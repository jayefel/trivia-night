import React from 'react';

interface ErrorBoundaryProps {
  children: JSX.Element;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

/**
 * @class ErrorBoundary
 * An Error Boundary to catch any UI errors and gracefully show an error page.
 * @param ErrorBoundaryProps
 * @returns JSX.Element
 */

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  refreshPage() {
    window.location.reload(false);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary-container">
          <h2>Oops... an error occured, please refresh the page and try again!</h2>
          <button onClick={this.refreshPage} className="btn btn-lg btn-primary">
            <i className="fa fa-refresh"></i> Refresh
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;