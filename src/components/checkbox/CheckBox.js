import React, { useState } from "react";
import checkboxes from "./moke.js";

const Checkbox = ({ type = "checkbox", name, checked = false, onChange }) => {
  return (
    <input type={type} name={name} checked={checked} onChange={onChange} />
  );
};

const CheckBox = (props) => {
  const handleChange = (event) => {
    props.setCheckedItems({
      ...props.checkedItems,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <div>
      {checkboxes.map((item) => (
        <label class="form-control-label px-3" key={item.key}>
          <span class="text-danger"> {item.label} </span>
          <Checkbox
            name={item.name}
            checked={props.checkedItems[item.name]}
            onChange={handleChange}
          />
        </label>
      ))}
    </div>
  );
};

export default CheckBox;
