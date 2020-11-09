import React from "react";
import PropTypes from "prop-types";

function Select(props) {
  const handleChange = (ev) => {
    const selectChanged = ev.currentTarget;
    const selectId = selectChanged.id;
    const valueSelected = selectChanged.value;

    console.log("Select.handleChange()");
    console.log(valueSelected);

    props.handleChange(selectId, valueSelected);
  };

  console.log("Select.render()");
  console.log(props);

  const htmlOptions = props.options.map((eachOption, i) => (
    <option key={eachOption} value={eachOption}>
      {eachOption}
    </option>
  ));

  return (
    <div className="Select">
      <label htmlFor={props.id} className="form__label">
        {props.text}:
      </label>
      <select name={props.id} id={props.id} className="form__select" onClick={handleChange}>
        {htmlOptions}
      </select>
    </div>
  );
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Select;
