import { Report } from 'notiflix/build/notiflix-report-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import data from '../../data.json'
import { ADDING, REMOVAL } from './types';

const initialState = {
    contacts: data,
}

export const contactsReducer = (state=initialState, action) => {
// console.log('state.contacts :>> ', state.contacts);
    if (action.type === ADDING) {
        const twin = state.contacts.find(({ name }) => name.toLowerCase() === action.payload.name.toLowerCase());
        if (twin) {
            Report.failure(
            'error',
            'There is already a contact with this name',
            'Okay',
            );
        } else {
            Notify.success('A new contact is created');
            return {
            ...state,
            contacts: [...state.contacts, action.payload],
            }
        }
    } else if (action.type === REMOVAL) {
        return {
            ...state,
            contacts: state.contacts.filter(({ id })=>id !== action.payload),
        }
    }
    
    return state;
}