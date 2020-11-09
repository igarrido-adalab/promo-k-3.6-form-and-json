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

    this.changeInput = this.changeInput.bind(this);
  }

  changeInput(fieldName, newValue) {
    const newFieldValue = {};
    newFieldValue[fieldName] = newValue;

    this.setState(
      (oldState) => {
        const newState = {
          ...oldState,
          ...newFieldValue
        };
        console.log("setState");
        console.log(newState);
        return newState;
    });
  }

  render() {
    console.log("App.render()");
    console.log(this.state);

    return (
      <div className="App">
        <Header number="2.6" lesson="Estado" title="Formulario" subtitle="Con JSON!" />
        <main className="container">
          <section className="form">
            <Select id="number" text="Escoge un número" options={this.numberOptions} handleChange={this.changeInput} />
            <Text
              id="name"
              text="Escribe tu nombre"
              placeholder="Kizzmekia Shanta Corbett"
              handleChange={this.changeInput}
            />
          </section>

          <ResultJson result={this.state} />
        </main>
      </div>
    );
  }
}

export default App;
