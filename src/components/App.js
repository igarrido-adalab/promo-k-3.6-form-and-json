import React from "react";
import "./App.scss";
import Header from "./Header";
import ResultJson from "./ResultJson";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.result= {text:"Testing result"};
  }

  render() {
    return (
      <div className="App">
        <Header number="2.6" lesson="Estado" title="Formulario" subtitle="Con JSON!" />
        <main className="container">
          <ResultJson result={this.result} />
        </main>
      </div>
    );
  }
}

export default App;
