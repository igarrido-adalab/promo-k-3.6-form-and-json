import React from "react";
import PropTypes from "prop-types";

function Text(props) {
  const handleBlur = (ev) => {
    const inputChanged = ev.currentTarget;
    const inputId = inputChanged.id;
    const valueChanged = inputChanged.value;

    console.log("Text.handleBlur()");
    console.log(valueChanged);

    props.handleChange(inputId, valueChanged);
  };

  console.log("Text.render()");
  console.log(props);

  return (
    <div className="Text">
      <label htmlFor={props.id} className="form__label">
        {props.text}:
      </label>
      <input
        type="text"
        name={props.id}
        id={props.id}
        placeholder={props.placeholder}
        className="form__text"
        onBlur={handleBlur}
      />
    </div>
  );
}

Text.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

export default Text;
