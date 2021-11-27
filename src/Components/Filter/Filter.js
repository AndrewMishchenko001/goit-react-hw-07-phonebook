import s from "./Filter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { contactsActions, contactsSelectors } from "../../redux/contacts";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(contactsSelectors.getFilter);
  const contacts = useSelector(contactsSelectors.getItems);
  const error = useSelector(contactsSelectors.getError);

  return (
    <>
      {contacts.length > 0 && !error && (
        <label className={s.label}>
          <p className={s.contacts}>
            Find contacts by name
            <input
              className={s.input}
              type="text"
              onChange={(e) =>
                dispatch(contactsActions.filterContact(e.target.value))
              }
              value={filter}
            />
          </p>
        </label>
      )}
    </>
  );
};

export default Filter;
