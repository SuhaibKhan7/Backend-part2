// src/hooks/useAuth0Login.js
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import postRequest from "./service";

const useAuth0Login = () => {

  const { loginWithRedirect, getAccessTokenSilently, user } = useAuth0();
  
  const navigate = useNavigate();
  console.log("useAuth0login");
  const loginWithAuth0 = async (e) => {
    e.preventDefault();
    try {
      console.log("login Auth");
      // Redirect to Auth0 login
      await loginWithRedirect();

      // Fetch the Auth0 access token
      const token = await getAccessTokenSilently({
        audience: "this is unique identifier",
        scope: "openid profile email",
      });
      console.log("Auth0 Token:", token);

      // Send user details and token to your backend
      const data = {
        name: user?.name,
        email: user?.email,
        gender: user?.gender || "Not specified",
      };

      const response = await postRequest(
        "auth/auth0login",
        JSON.stringify(data),
        token
      );

      if (response.error) {
        // Handle error (e.g., show a toast or alert)
        alert(response.message);
      } else {
        // Save user data in localStorage and navigate to the homepage
        localStorage.setItem("user", JSON.stringify(response));
        // navigate("/");
      }
    } catch (error) {
      alert(error.response?.data?.message || "Auth0 Login failed");
    }
  };

  return loginWithAuth0;
};

export default useAuth0Login;
