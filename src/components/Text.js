import React from "react";
import PropTypes from "prop-types";

class Text extends React.Component {
  constructor(props) {
    super(props);

    this.handleBlur = this.handleBlur.bind(this);
  }

  handleBlur(ev) {
    const inputChanged = ev.currentTarget;
    const valueChanged = inputChanged.value;

    console.log("Text.handleBlur()");
    console.log(valueChanged);

    this.props.handleChange(valueChanged);
  }

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
          onBlur={this.handleBlur}
        />
      </div>
    );
  }
}

Text.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func.isRequired
};

export default Text;
