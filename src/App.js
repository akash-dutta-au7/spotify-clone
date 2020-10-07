import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./components/LogIn";
import { getAccessToken } from "./utils/spotify.auth";


function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getAccessToken();
    window.location.hash = "";

    //extracting token from hash
    const tempToken = hash.access_token;

    if (tempToken) {
      setToken(tempToken);
    }
    console.log(token);
  }, [token]);

  return <div className="App">{token ? <h1>Logged In</h1> : <Login />}</div>;
}

export default App;
