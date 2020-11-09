import React from "react";
import PropTypes from "prop-types";

class Select extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(ev) {
    const selectChanged = ev.currentTarget;
    const selectId = selectChanged.id;
    const valueSelected = selectChanged.value;

    console.log("Select.handleChange()");
    console.log(valueSelected);

    this.props.handleChange(selectId,valueSelected);
  }

  render() {
    console.log("Select.render()");
    console.log(this.props);

    /*
    const htmlOptions = [];

    for (let i = 0; i < this.props.options.length; i++) {
      const eachOption = this.props.options[i];
      
      htmlOptions.push(
        <option key={eachOption} value={eachOption}>
          {eachOption}
        </option>
      );
    }
    */

    const htmlOptions = this.props.options.map(
      (eachOption, i) =>
        (
        <option key={eachOption} value={eachOption}>
          {eachOption}
        </option>
      )
    );

    return (
      <div className="Select">
        <label htmlFor={this.props.id} className="form__label">
          {this.props.text}:
        </label>
        <select name={this.props.id} id={this.props.id} className="form__select" onClick={this.handleChange}>
          {htmlOptions}
        </select>
      </div>
    );
  }
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default Select;
