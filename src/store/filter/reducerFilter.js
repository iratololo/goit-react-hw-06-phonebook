import { createReducer } from '@reduxjs/toolkit';

import { changeFilter } from "./actions";

const initialState = { filter: ""}

export const filterReducer = createReducer(initialState, (builder) => {
    builder.addCase(changeFilter, (state, {payload}) => {
        //  return {
        //     ...state,
        //     filter: action.payload,
        // }
        state.filter=payload
    })
})