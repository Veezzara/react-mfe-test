import "./style.css";
import React, { Suspense, useState } from "react";
import ErrorBoundary from "../error-boundary/error-boundary";
const RemoteApp = React.lazy(() => import("Remote/App"));
const RemoteButton = React.lazy(() => import("Remote/Button"));

export const App = () => {
  const [showRemoteApp, setShowRemoteApp] = useState(false);

  return (
    <div>
      <h1>Micro Frontends Demo</h1>
      <h2>
        {showRemoteApp
          ? "Remote App Loaded!"
          : "Click The Button Below To Show Remote App!"}
      </h2>
      {showRemoteApp ? (
        <Suspense fallback={<div>Loading...</div>}>
          <ErrorBoundary>
            <RemoteApp />
          </ErrorBoundary>
        </Suspense>
      ) : (
        <ErrorBoundary>
          <RemoteButton onClick={() => setShowRemoteApp(true)}>
            Click To Show Remote App!
          </RemoteButton>
        </ErrorBoundary>
      )}
    </div>
  );
};
