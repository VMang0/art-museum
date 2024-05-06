import { Component, ReactNode } from 'react';
import ErrorImage from '@assets/icons/error.png';

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  error: Error | null;
};

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    error: null,
  };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error };
  }

  render() {
    const { error } = this.state;

    if (error) {
      return (
        <div>
          <img src={ErrorImage} alt="error icon" />
          <p>Seems like an error occurred!</p>
        </div>
      );
    }
    return this.props.children;
  }
}
