import { createAction } from "@reduxjs/toolkit"

export const addContact = createAction('contacts/adding');

export const removeContact = createAction('contacts/removal');