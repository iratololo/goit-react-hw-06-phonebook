import { createReducer } from '@reduxjs/toolkit';
import data from '../../data.json'
import { addContact, removeContact } from './actions';

const initialState = {
    contacts: data,
}


export const contactsReducer = createReducer(initialState, (builder) => {
    builder.addCase(addContact, (state, {payload}) => {
        //  return {
        //     ...state,
        //     contacts: [...state.contacts, action.payload],
        //     }
        state.contacts.push(payload)
    }).addCase(removeContact, (state, {payload}) => {
        //  return {
        //     ...state,
        //     contacts: state.contacts.filter(({ id })=>id !== action.payload),
        // }
        state.contacts=state.contacts.filter(({ id })=>id !== payload)
    })
})