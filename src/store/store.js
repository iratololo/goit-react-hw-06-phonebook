import { combineReducers, createStore } from "redux";

import { contactsReducer } from "./contacts/reducerContacts";
import { filterReducer } from "./filter/reducerFilter";


const rootReducer = combineReducers({
    filter: filterReducer,
    contacts: contactsReducer,
})

export const store = createStore(rootReducer);

console.log('store :>> ', store.getState());

