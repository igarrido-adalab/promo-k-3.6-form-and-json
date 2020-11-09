import React from "react";
import "./App.scss";
import Header from "./Header";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header number="2.6" lesson="Estado" title="Xxx" subtitle="Xxx" />
        <main className="container">
          Content goes here...
        </main>
      </div>
    );
  }
}

export default App;
