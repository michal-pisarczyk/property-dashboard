import ReactDOM from "react-dom";
import React, { Component } from "react";
import "./styles.scss";
import { PropertyList }
  from "./components/property-list/property-list.component";
import { InputSearch }
  from "./components/input-search/input-search.component";

class App extends Component {
  state = {
    properties: [],
    inputSearch: "",
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

  handleChange = event => {
    this.setState({ inputSearch: event.target.value });
  }

  render() {
    const { properties, inputSearch } = this.state;
    const filteredProperties = properties.filter(property =>
      property.display_address.toLowerCase()
        .includes(inputSearch.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Property Dashboard</h1>
        <InputSearch
          placeholder="Search Properties"
          handleChange={ event => this.handleChange(event) } />
        {
          this.state.apiReady ?
          <PropertyList properties={ filteredProperties } /> :
          <p>Something went wrong. Check the console for details.</p>
        }
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

module.hot.accept();
