import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { AppProvider } from "./context/AppProvider.jsx";
import { UserProvider } from "./context/UserProvider.jsx";

createRoot(document.getElementById("root")).render(
  <AppProvider>
    <UserProvider>
      <App />
    </UserProvider>
  </AppProvider>
);
