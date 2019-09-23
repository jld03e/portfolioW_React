import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import JumboHeader from "./JumboHeader";

const App = () => {
  return (
    <div>
      <JumboHeader />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
