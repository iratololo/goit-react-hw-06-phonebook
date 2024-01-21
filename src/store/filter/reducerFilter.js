import { CHANGE } from "./types";

const initialState = { filter: ""}

export const filterReducer = (state=initialState, action) => {
   
    if (action.type === CHANGE) {
        return {
            ...state,
            filter: action.payload,
        }
    }

    return state;
}