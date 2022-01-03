import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="title">
          {/* Title */}
          <p>CRUD Operation</p>
        </div>
        <p className="sub-title">Web Technologies</p>
        <div className="tech-container">
          <div>
            <h5>
              <i class="fab fa-html5 fa-2x"> HTML</i>
            </h5>
            <h5>
              <i class="fab fa-css3-alt fa-2x"> CSS</i>
            </h5>
            <h5>
              <i class="fab fa-react fa-2x"> React JS</i>

              <ul>
                <li>React Router Dom</li>
                <li>Axios</li>
                <li>React Hooks</li>
              </ul>
            </h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
