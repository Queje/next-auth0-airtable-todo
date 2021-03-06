import { initAuth0 } from "@auth0/nextjs-auth0";

export default initAuth0({
  secret: 'process.env.REACT_APP_AUTH0_SECRET',
  baseURL: process.env.REACT_APP_AUTH0_BASE_URL,
  issuerBaseURL: process.env.REACT_APP_AUTH0_ISSUER_BASE_URL,
  clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
  clientSecret: process.env.REACT_APP_AUTH0_CLIENT_SECRET,
});