import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
	<Auth0Provider
		domain="dev-zj4vb8b8.us.auth0.com"
		clientId="tpLXYYSFIxO3lPaaAwKiliaCOmnx8uZ4"
		redirectUri={window.location.origin}
	>
		<App />
	</Auth0Provider>,
	document.getElementById("root")
);
