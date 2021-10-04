import ReactDOM from "react-dom";
import React, { Component } from "react";
import "./styles.scss";
import { PropertyList }
  from "./components/property-list/property-list.component";

class App extends Component {
  state = {
    properties: [],
    apiReady: false
  }

  componentDidMount() {
    fetch("/api/properties?location=brighton")
      .then(response => response.json())
      .then((json) => {
        console.log(json.result.properties.elements);
        this.setState({ properties: json.result.properties.elements });
        this.setState({ apiReady: true });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <div className="App">
        {
          this.state.apiReady ?
          <PropertyList properties={ this.state.properties } /> :
          <p>Something went wrong. Check the console for details.</p>
        }
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

module.hot.accept();
