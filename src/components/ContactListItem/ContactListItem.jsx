import css from '../ContactListItem/ContactListItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

const ContactListItem = ({ id, name, number, onDeleteContact }) => {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(deleteContact(id));
    onDeleteContact(id);
  };

  return (
    <li className={css.contactListItem}>
      {name}: {number}
      <button className={css.deleteBtn} onClick={handleRemove}>
        Delete
      </button>
    </li>
  );
};

export default ContactListItem;
