import React from "react";
import "./App.scss";
import Header from "./Header";
import ResultJson from "./ResultJson";
import Select from "./Select";
import Text from "./Text";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.numberOptions = [1, 2, 3, 4];

    this.state = { };

    this.changeSelect = this.changeSelect.bind(this);
    this.changeText = this.changeText.bind(this);
  }

  changeSelect(newValue) {
    this.setState(
      {
        number: newValue
      }
    );
  }

  changeText(newValue) {
    // Añadimos sólo lo que cambia o lo que es nuevo
    this.setState(
      {
        name: newValue
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
            <Select id="number" text="Escoge un número" options={this.numberOptions} handleChange={this.changeSelect} />
            <Text
              id="name"
              text="Escribe tu nombre"
              placeholder="Kizzmekia Shanta Corbett"
              handleChange={this.changeText}
            />
          </section>

          <ResultJson result={this.state} />
        </main>
      </div>
    );
  }
}

export default App;
