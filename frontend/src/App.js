import logo from './logo.svg';
import './App.css';
import { useEffect } from "react";
import Axios from "axios";


function App() {

  // The URL to make requests to
  const rootUrl = "https://localhost:5000";


  const exampleRequest = async () => {

    try {
      const requestResponse = await Axios.post(
        `http://localhost:5000/users/examplepost`, // URL
        null, // Request Body
      );

      console.log(requestResponse);

    } catch(err) {
      console.log(err);

    }

  }

  //Use Effect: example request
  useEffect(() => {
    requestResponse();
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



}

export default App;
