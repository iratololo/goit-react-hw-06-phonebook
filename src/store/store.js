import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { contactsReducer } from "./contacts/sliceContacts";
import { filterReducer } from "./filter/sliceFilter";


const persistConfig = {
  key: 'contacts',
  storage,
}

const persistedReducer = persistReducer(persistConfig, contactsReducer)

const reducer = {
    filter: filterReducer,
    contacts: persistedReducer,
}

export const store = configureStore({ reducer });

export const persistor = persistStore(store)

console.log('store :>> ', store.getState());

