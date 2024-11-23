import { auth } from "express-oauth2-jwt-bearer";



const verifyAuth0 = async (req, res, next) => {

  const authHeader = req.headers.authorization;

  if (authHeader?.startsWith("Bearer ")) {
    // If Auth0 token is present
    const auth0Token = authHeader.split(" ")[1];
    console.log("At backend token checking");
    console.log(auth0Token);

    const jwtCheck = auth({
      audience: "this is unique identifier", // Replace with your Auth0 API Audience
      issuerBaseURL: "https://dev-2ew0i1nt8dqg7ccz.us.auth0.com/",
      tokenSigningAlg: "RS256",
    });
    console.log(jwtCheck);
    // Use the Auth0 middleware to validate the token


    jwtCheck(req, res, (err) => {
      if (err) {
        console.error("Auth0 Token Validation Error:", err);
        return res.status(403).send({ message: "Invalid Auth0 token." });
      }

      
      // Attach Auth0 user ID to the request
      req.userid = req.auth?.sub; // `sub` contains the unique Auth0 user ID
      next();
    });
  }
};
export default verifyAuth0;
