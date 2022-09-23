import React from "react";
import Header from "./Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <span className="autor">
        This project was coded by{" "}
        <a
          href="https://www.linkedin.com/in/maria-macarena-gimenez"
          target="_blank"
          rel="noreferrer"
        >
          Macu Gimenez
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/macarenagimenez/react-final-project"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>
      </span>
    </div>
  );
}

export default App;
