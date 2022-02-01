import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

//functional component for now
// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log("Success", position),
//     (error) => console.log(error)
//   );
//   return <div>Hello there!</div>;
// };

//class component
class App extends React.Component {
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("Success", position);
        this.setState({ lat: position.coords.latitude });
      },
      (error) => {
        console.log(error);
        this.setState({ errorMessage: error.message });
      }
    );
  }

  state = { lat: null, errorMessage: "" };

  //if you don't use ternery here, you can add a 'loading' state and then a spinner
  render() {
    return this.state.errorMessage !== "" && !this.state.lat ? (
      <div> Error: {this.state.errorMessate}</div>
    ) : (
      <SeasonDisplay lat={this.state.lat}></SeasonDisplay>
    );
  }
}

ReactDOM.render(<App></App>, document.getElementById("root"));
