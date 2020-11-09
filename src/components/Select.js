import React from "react";
import PropTypes from "prop-types";

class Select extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(ev) {
    const selectChanged = ev.currentTarget;
    const valueSelected = selectChanged.value;

    console.log(valueSelected);

    this.props.handleChange(valueSelected);
  }

  render() {
    return (
      <div className="Select">
        <label htmlFor={this.props.id} className="form__label">
          {this.props.text}:
        </label>
        <select name={this.props.id} id={this.props.id} className="form__select" onClick={this.handleChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
    );
  }
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Select;
