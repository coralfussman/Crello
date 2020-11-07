import React from "react";
import CrelloCards from "./CrelloCards";

const CrelloList = ({ title }) => {
  return (
    <div style={styles.container}>
      <h1>{title}</h1>
      <CrelloCards />
    </div>
  );
};
const styles = {
  container: {
    backgroundColor: "#ccc",
    borderRadius: 3,
    width: 300,
  },
};

export default CrelloList;
