import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvide } from "./Context/AuthContext.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <AuthContextProvide>
        <Auth0Provider
          domain="dev-2ew0i1nt8dqg7ccz.us.auth0.com" //https://dev-2ew0i1nt8dqg7ccz.us.auth0.com/",
          clientId="yCPGhwATW9M9jwoGjwZINMvCE2GXNsuB" //yCPGhwATW9M9jwoGjwZINMvCE2GXNsuB
          authorizationParams={{
            audience: "this is unique identifier",
            redirect_uri: window.location.origin,
          }}
        >
          <App />
        </Auth0Provider>
      </AuthContextProvide>
    </BrowserRouter>
  </>
);
