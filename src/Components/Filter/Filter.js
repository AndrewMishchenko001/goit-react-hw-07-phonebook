import React from "react";
import s from "./Filter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getFilter } from "../../redux/contacts/contacts-selector";
import { updateFilter } from "../../redux/contacts/contacts-action";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <label className={s.label}>
      <p className={s.contacts}>
        Find contacts by name
        <input
          className={s.input}
          type="text"
          onChange={(e) => dispatch(updateFilter(e.target.value))}
          value={filter}
        />
      </p>
    </label>
  );
};

export default Filter;
