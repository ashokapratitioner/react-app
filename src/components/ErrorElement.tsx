import React, { ReactNode, ErrorInfo } from 'react';

interface ErrorElementProps {
  children?: ReactNode;
}

interface ErrorElementState {
  hasError: boolean;
}

class ErrorElement extends React.Component<ErrorElementProps, ErrorElementState> {
  constructor(props: ErrorElementProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorElementState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by ErrorElement:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong. 😢</h2>;
    }

    return this.props.children;
  }
}

export default ErrorElement;
