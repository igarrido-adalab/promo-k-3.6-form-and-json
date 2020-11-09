import React from "react";
import "./App.scss";
import Header from "./Header";
import ResultJson from "./ResultJson";
import Select from "./Select";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { };

    this.changeSelect = this.changeSelect.bind(this);
  }

  changeSelect(newValue) {
    this.setState(
      {
        number: newValue
      }
    );
  }

  render() {
    console.log("App.render()");
    console.log(this.state);

    return (
      <div className="App">
        <Header number="2.6" lesson="Estado" title="Formulario" subtitle="Con JSON!" />
        <main className="container">
          <section className="form">
            <Select id="number" text="Escoge un número" handleChange={this.changeSelect} />
          </section>

          <ResultJson result={this.state} />
        </main>
      </div>
    );
  }
}

export default App;
