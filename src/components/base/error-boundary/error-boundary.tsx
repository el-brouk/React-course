import { Component } from 'react';
import type { PropsWithChildren } from 'react';
import type { ErrorInfo } from 'react';

type ErrorBoundaryState = {
  hasError: boolean;
};

export class ErrorBoundary extends Component<PropsWithChildren, ErrorBoundaryState> {
  constructor(props: PropsWithChildren) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  //   меняет состояние компонента на ошибку
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    console.error(error);
    return { hasError: true };
  }

  //   Возможность обработки ошибки в компоненте
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(error, errorInfo);
  }

  //   отображает fallback UI, если состояние ошибки true.
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
