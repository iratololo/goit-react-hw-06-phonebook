import { CHANGE } from "./types"

export const changeFilter = (payload) => {
    return { type: CHANGE, payload }
}