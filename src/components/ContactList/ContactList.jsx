import { useSelector } from "react-redux";
import { ContactListEl } from "../ContactListEl/ContactListEl"

export const ContactList = () => {
    const {contacts} = useSelector((state) => state.contacts);
    const {filter} = useSelector((state) => state.filter);
    const visibleContacts = contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()));
        return (
            <ul>
                {visibleContacts.map((item) => {
                    return <ContactListEl key={item.id} data={item} />
                })}
            </ul>
        );
}
