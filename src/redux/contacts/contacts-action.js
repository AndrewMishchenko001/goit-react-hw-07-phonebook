import { ADD_CONTACTS, UPDATE_FILTER, DELETE_CONTACTS } from "./contacts-types";
import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const addContacts = createAction(ADD_CONTACTS, (name, number) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));

export const deleteContacts = createAction(DELETE_CONTACTS);
export const updateFilter = createAction(UPDATE_FILTER);

// export const addContacts = (id, name, number) => ({
//   type: actionTypes.ADD_CONTACTS,
//   payload: { id, name, number },
// });

// export const deleteContacts = (id) => ({
//   type: actionTypes.DELETE_CONTACTS,
//   payload: { id },
// });

// export const updateFilter = (text) => ({
//   type: actionTypes.UPDATE_FILTER,
//   payload: { text },
// });

// export const deleteFilter = () => ({
//   type: actionTypes.CLEAR_FILTER,
// });
