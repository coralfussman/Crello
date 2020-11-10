//import logo from "../logo.svg";
//import "../App.css";
import React from "react";
import CrelloList from "./CrelloList";
import { connect } from "react-redux";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Looks like it's Working. Made a change</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <CrelloList title="test" />
      </header>
    </div>
  );
}

export default App;
