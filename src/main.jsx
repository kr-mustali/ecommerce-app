import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ProductProvider from "./context.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import config from "./config.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain={config.domain}
    clientId={config.clientId}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <ProductProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProductProvider>
  </Auth0Provider>
);
