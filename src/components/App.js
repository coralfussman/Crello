//import logo from "../logo.svg";
//import "../App.css";
import React from "react";
import CrelloList from "./CrelloList";
import { connect } from "react-redux";

function App() {
  const { lists } = lists;

  return (
    <div className="App">
      <header className="App-header">
        <p>Looks like it's Working. Made a change</p>
        {lists.map((list) => (
          <CrelloList title={list.title} cards={list.cards} />
        ))}
      </header>
    </div>
  );
}

const mapStateToProps = (state) => ({
  lists: state.lists,
});

export default mapStateToProps(App);
