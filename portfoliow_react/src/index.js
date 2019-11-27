import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import JumboHeader from "./JumboHeader";
import Content from "./Content";
import amw from "./images/amw.png";
import MnMTW from "./images/MnMTW.png";

const App = () => {
  return (
    <div>
      <JumboHeader />
      <Content>
        <div className="ContentBlock1">
          <div className="Block1">
            <h3 className="Header1">Affiliate Marketing</h3>
            <p className="para1">
              For whatever items or inventory you are looking to sell, this
              Affiliate Marketing template allows users to update this site and
              have their products ready for sale.
            </p>
            <h2 className="Header2">Technology</h2>
            <p className="para2">
              CSS for the styling of the site along with the use of SASS to
              organize and re-use CSS elements throughout the project. Source
              code for the templates is hosted on Amazon Web Services (AWS).
            </p>
          </div>
          <div className="Block2">
            <img className="image1" src={amw}></img>
          </div>
        </div>
        <br></br>
      </Content>
      <Content>
        <div className="ContentBlock2">
          <div className="Block1">
            <h3 className="Header1">M & M TileWork Site</h3>
            <p className="para1">
              Whether you are looking to remodel your current home, or install a
              sound ground floor on a newly developed home, M & M has the
              skillset to meet your needs.
            </p>
            <h2 className="Header2">Technology</h2>
            <p className="para2">
              Rendered using React.js, along with CSS for the styling of the
              site. Using MongoDB, & Express to complete Full-Stack
              Funcionality, with CRUD.
            </p>
          </div>
          <div className="Block2">
            <img className="image1" src={MnMTW}></img>
          </div>
        </div>
        <br></br>
      </Content>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
