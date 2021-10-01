import ReactDOM from "react-dom";
import React, { Component } from "react";
import "./styles.scss";

class App extends Component {
  state = {
    apiReady: false
  }

  componentDidMount() {
    fetch("/api/properties?location=brighton")
      .then(response => response.json())
      .then((json) => {
        this.setState({ apiReady: true });
        console.log(json.result.properties.elements);
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
          <p>Check the JS console for some data...</p> :
          <p>Something went wrong. Check the console for details.</p>
        }
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

module.hot.accept();
