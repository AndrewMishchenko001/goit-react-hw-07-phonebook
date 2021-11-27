import { createSelector } from "@reduxjs/toolkit";

export const getItems = (state) => state.contacts.items;
export const getFilter = (state) => state.contacts.filter;
export const getLoading = (state) => state.contacts.loading;
export const getError = (state) => state.contacts.error;

export const filteredContacts = createSelector(
  [getItems, getFilter],
  (contacts, filter) => {
    const lowerCaseFilter = filter.toLowerCase();
    return contacts.filter((person) =>
      person.name.toLowerCase().includes(lowerCaseFilter)
    );
  }
);
