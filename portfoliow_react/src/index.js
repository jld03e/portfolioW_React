import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import JumboHeader from "./JumboHeader";
import Content from "./Content";
import amw from "./images/amw";

const App = () => {
  return (
    <div>
      <JumboHeader />
      <Content>
        <div className="ContentBlock1">
          <div className="Block1">
            <h3 className="Header1">Affiliate Marketing</h3>
            <p className="para1">
              Whether you are looking to remodel your current home, or install a
              sound ground floor on a newly developed home, M & M has the
              skillset to meet your needs.
            </p>
          </div>
          <div className="Block2">
            <img src={amw}></img>
          </div>
        </div>
        <br></br>
      </Content>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
