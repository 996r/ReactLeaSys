import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.jsx";
import { UserProvider } from "./components/context/UserContext.jsx";
import { CarDataProvider } from "./components/context/CarDataContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserProvider>
      <CarDataProvider>
        <App />
        </CarDataProvider>
    </UserProvider>
  </BrowserRouter>
);
