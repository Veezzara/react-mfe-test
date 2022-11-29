import React from "react";
import ErrorBoundary from "../error-boundary/error-boundary";
const RemoteApp = React.lazy(() => import("Remote/App"));
const RemoteButton = React.lazy(() => import("Remote/Button"));

export const App = () => {
  return (
    <div>
      <h1>This is the Host!</h1>
      <h2>Remote App:</h2>
      <ErrorBoundary>
        <RemoteApp />
      </ErrorBoundary>
      <h2>Remote Button:</h2>
      <ErrorBoundary>
        <RemoteButton />
      </ErrorBoundary>
      <br />
    <a href="http://localhost:4000">Link to Remote App</a>
    </div>
  );
};
