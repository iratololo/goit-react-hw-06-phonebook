import { useDispatch } from "react-redux";
import { nanoid } from 'nanoid';
import css from "./ContactForm.module.css"
import { addContact } from "store/contacts/actions";

export const ContactForm = () => {
    const dispatch = useDispatch();

    const handlerOnSubmit = (e) => {
        e.preventDefault();
        const name = e.target.elements.name.value;
        const number = e.target.elements.phone.value;
        const id = nanoid();
        dispatch(addContact({name,number,id}))
        // setName('');
        // setNumber(''); 
    }

  return (
            <form onSubmit={handlerOnSubmit} className={css.form}>
                <div className={css.container}>
                    <div className={css.item}>
                        <input className={css.input} id="name" type="text" name="name" required />
                        <label className={css.label} htmlFor="name">Name</label>
                    </div>
                    <div className={css.item}>
                        <input className={css.input} id="tel" type="tel" name="phone" required />
                        <label className={css.label} htmlFor="tel">Number</label>
                    </div>
                </div>
                <button className={css.button} type='submit'>Add contact</button>
            </form>
            
        );
}