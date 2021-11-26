import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { addContacts, deleteContacts, updateFilter } from "./contacts-action";

const items = createReducer([], {
  [addContacts]: (state, { payload }) => [payload, ...state],
  [deleteContacts]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const filter = createReducer("", {
  [updateFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});

// const contactsReducer = (state = [], { type, payload }) => {
//   switch (type) {
//     case ADD_CONTACTS:
//       return [payload, ...state];
//     case DELETE_CONTACTS:
//       return state.filter((contact) => contact.id !== payload.id);
//     default:
//       return state;
//   }
// };

// const filterReducer = (state = "", { type, payload }) => {
//   switch (type) {
//     case UPDATE_FILTER:
//       return payload.text;
//     case CLEAR_FILTER:
//       return;
//     default:
//       return state;
//   }
// };
