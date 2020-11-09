import React from "react";
import PropTypes from "prop-types";
import './ResultJson.scss';

class ResultJson extends React.Component {
  render() {
    console.log("ResultJson.render()");
    console.log(this.props);

    const jsonText = JSON.stringify(this.props.result);

    const jsonPrettyText = jsonText
      .replace("{", "{\n  ")
      .replace("}", "\n}")
      .replace(",", ",\n  ");

    return (
      <section className="result">
        <h3 className="result__title">JSON resultante:</h3>
        <pre className="result__json">{jsonPrettyText}</pre>
      </section>
    );
  }
}

ResultJson.propTypes = {
  result: PropTypes.object.isRequired
};

export default ResultJson;
