import { ADDING, REMOVAL } from "./types"

export const addContact = (payload) => {
    return { type: ADDING, payload }
}

export const removeContact = (payload) => {
        return { type: REMOVAL, payload }
}