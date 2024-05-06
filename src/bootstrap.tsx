import React from "react";
import { createRoot, Container } from "react-dom/client";
import { HeaderView } from "./Header/HeaderView";

const mount = (rootElement: Container, navigate: () => unknown) => {
  const root = createRoot(rootElement);
  root.render(<HeaderView navigate={navigate} />);
};

export { mount };
