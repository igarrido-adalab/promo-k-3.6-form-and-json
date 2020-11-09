import React from "react";
import PropTypes from "prop-types";

class Select extends React.Component {
  render() {
    console.log(this.props);
    
    return (
      <div className="Select">
        <label htmlFor={this.props.id} className="form__label">
          {this.props.text}:
        </label>
        <select name={this.props.id} id={this.props.id} className="form__select">
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
