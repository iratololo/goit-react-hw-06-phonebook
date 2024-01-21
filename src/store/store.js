import { configureStore } from "@reduxjs/toolkit";

import { contactsReducer } from "./contacts/reducerContacts";
import { filterReducer } from "./filter/reducerFilter";


const reducer = {
    filter: filterReducer,
    contacts: contactsReducer,
}

export const store = configureStore({reducer});

console.log('store :>> ', store.getState());

