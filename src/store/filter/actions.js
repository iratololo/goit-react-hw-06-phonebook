import { createAction } from "@reduxjs/toolkit"
import { CHANGE } from "./types"

// export const changeFilter = (payload) => {
//     return { type: CHANGE, payload }
// }

export const changeFilter = createAction(CHANGE);