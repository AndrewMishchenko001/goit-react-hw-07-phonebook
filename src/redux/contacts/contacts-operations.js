import {
  addContactError,
  addContactRequest,
  addContactSuccess,
  deleteContactError,
  deleteContactRequest,
  deleteContactSuccess,
  fetchContactRequest,
  fetchContactsError,
  fetchContactSuccess,
} from "./contacts-action";
import * as contactsAPI from "./contacts-api";

export const fetchContacts = () => (dispatch) => {
  dispatch(fetchContactRequest());
  contactsAPI
    .fetchContacts()
    .then(({ data }) => dispatch(fetchContactSuccess(data)))
    .catch((error) => fetchContactsError(error));
};

export const addContact = (name, number) => (dispatch) => {
  const contact = {
    name,
    number,
  };

  dispatch(addContactRequest());
  contactsAPI
    .addContact(contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch((error) => dispatch(addContactError(error)));
};

export const deleteContact = (id) => (dispatch) => {
  dispatch(deleteContactRequest);
  contactsAPI
    .deleteContact(id)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch((error) => deleteContactError(error));
};
