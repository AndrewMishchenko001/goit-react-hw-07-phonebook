import { createAction } from "@reduxjs/toolkit";
import {
  ADD_CONTACT_REQUEST,
  ADD_CONTACT_SUCCESS,
  ADD_CONTACT_ERROR,
  FETCH_CONTACT_REQUEST,
  FETCH_CONTACT_SUCCESS,
  FETCH_CONTACT_ERROR,
  DELETE_CONTACT_REQUEST,
  DELETE_CONTACT_SUCCESS,
  DELETE_CONTACT_ERROR,
  FILTER_CONTACT,
} from "./contacts-types";

export const addContactRequest = createAction(ADD_CONTACT_REQUEST);
export const addContactSuccess = createAction(ADD_CONTACT_SUCCESS);
export const addContactError = createAction(ADD_CONTACT_ERROR);

export const fetchContactRequest = createAction(FETCH_CONTACT_REQUEST);
export const fetchContactSuccess = createAction(FETCH_CONTACT_SUCCESS);
export const fetchContactsError = createAction(FETCH_CONTACT_ERROR);

export const deleteContactRequest = createAction(DELETE_CONTACT_REQUEST);
export const deleteContactSuccess = createAction(DELETE_CONTACT_SUCCESS);
export const deleteContactError = createAction(DELETE_CONTACT_ERROR);

export const filterContact = createAction(FILTER_CONTACT);
