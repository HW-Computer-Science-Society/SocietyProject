import React, { useEffect } from "react";
import Axios from "axios";
import logo from "../../logo.svg";

export const Home = () => {
  // The URL to make requests to
  const rootUrl = "https://localhost:5000";

  const exampleRequest = async () => {
    await Axios.post(
      `${rootUrl}/users/examplepost`, // URL
      null // Request Body
    ).catch((err) => {
      console.log("remember to turn on the server, lol ");
      console.error(err);
    });
  };

  //Use Effect: example request
  useEffect(() => {
    //requestResponse();
    exampleRequest();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};
