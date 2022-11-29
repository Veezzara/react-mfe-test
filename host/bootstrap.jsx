import { createRoot } from "react-dom/client";
import { App } from "./components/app/app";

const rootElement = document.getElementById("root");

if (rootElement) {
  const reactRoot = createRoot(rootElement);
  reactRoot.render(<App />);
}
