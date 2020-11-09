import React from "react";
import PropTypes from "prop-types";

class Text extends React.Component {
  render() {
    console.log("Text.render()");
    console.log(this.props);

    return (
      <div className="Text">
        <label htmlFor={this.props.id} className="form__label">
          {this.props.text}:
        </label>
        <input
          type="text"
          name={this.props.id}
          id={this.props.id}
          placeholder={this.props.placeholder}
          className="form__text"
        />
      </div>
    );
  }
}

Text.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

export default Text;
