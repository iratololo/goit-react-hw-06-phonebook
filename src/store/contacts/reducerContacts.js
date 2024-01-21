import { createReducer } from '@reduxjs/toolkit';
import data from '../../data.json'
// import { ADDING, REMOVAL } from './types';
import { addContact, removeContact } from './actions';

const initialState = {
    contacts: data,
}

// export const contactsReducer = (state=initialState, action) => {
// // console.log('state.contacts :>> ', state.contacts);
//     if (action.type === ADDING) {
//         return {
//             ...state,
//             contacts: [...state.contacts, action.payload],
//             }
//     } else if (action.type === REMOVAL) {
//         return {
//             ...state,
//             contacts: state.contacts.filter(({ id })=>id !== action.payload),
//         }
//     }
    
//     return state;
// }


export const contactsReducer = createReducer(initialState, (builder) => {
    builder.addCase(addContact, (state, action) => {
         return {
            ...state,
            contacts: [...state.contacts, action.payload],
            }
    }).addCase(removeContact, (state, action) => {
         return {
            ...state,
            contacts: state.contacts.filter(({ id })=>id !== action.payload),
        }
    })
})