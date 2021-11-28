import { configureStore } from "@reduxjs/toolkit";

import reducers from "./contacts/contacts-reducers";

export const store = configureStore({
  reducer: {
    contacts: reducers,
  },
});
