import React, { ReactNode } from "react";
import { Button, Result } from "antd";

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    // eslint-disable-next-line no-console
    console.error("Ошибка:", error);
  }

  private handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <Result
          status="500"
          title="Что-то пошло не так"
          subTitle="Произошла непредвиденная ошибка. Попробуйте обновить страницу."
          extra={
            <Button type="primary" onClick={this.handleReload}>
              Обновить
            </Button>
          }
        />
      );
    }

    return this.props.children;
  }
}

