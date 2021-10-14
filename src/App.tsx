import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { DataStore } from "@aws-amplify/datastore";
import { User } from "./models";
import { Address } from "./models";

function App() {
  const fetchData = async () => {
    const data = await DataStore.query(User);
  };
  const createData = async () => {
    try {
      const createdUser = await DataStore.save(
        new User({
          email: "n_soufiani@hotmail.com",
          firstName: "Nima",
          lastName: "Soufiani",
        })
      );
      console.log("successful??");
      const users = await DataStore.query(User);
      console.log(users);
    } catch (error) {
      console.log(error);
    }
    try {
      const createdAddress = await DataStore.save(
        new Address({
          line1: "adsd",
          country: "dasd",
          postcode: "sdasd",
        })
      );
      console.log("successful add??");
    } catch (error) {
      console.log("err add");
      console.log(error);
    }
  };
  fetchData();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={createData}>Click to create user</button>
      </header>
    </div>
  );
}

export default App;
