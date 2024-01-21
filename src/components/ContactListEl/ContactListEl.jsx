import { useDispatch } from "react-redux";
import css from "./ContactListEl.module.css"
import { removeContact } from "store/contacts/actions";

export const ContactListEl = ({ data: { id, name, number } }) => {
        const dispatch = useDispatch();
  return (
        <li className={css.item}>
                <span className={css.span}>{name}</span>
                <span className={css.span}>{number}</span>
                <button onClick={()=> dispatch(removeContact(id))} className={css.button} type="button">Delete</button>
        </li>
        )
}
