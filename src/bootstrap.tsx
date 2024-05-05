import React from "react";
import { createRoot, Container } from "react-dom/client";

const mount = (rootElement: Container) => {
  const root = createRoot(rootElement);
  root.render(<h1>hola header mf</h1>);
};

export { mount };
