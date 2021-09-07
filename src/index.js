import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain={'dev-jb0fo5th.us.auth0.com'}
    clientId={'58NToCbvKOnl6MCiw7na2UpwO11MaBfB'}
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);