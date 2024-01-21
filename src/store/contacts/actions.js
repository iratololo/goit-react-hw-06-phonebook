import { createAction } from "@reduxjs/toolkit"
// import { ADDING, REMOVAL } from "./types"

// export const addContact = (payload) => {
//     return { type: ADDING, payload }
// }

// export const removeContact = (payload) => {
//         return { type: REMOVAL, payload }
// }


export const addContact = createAction('contacts/adding');

export const removeContact = createAction('contacts/removal');