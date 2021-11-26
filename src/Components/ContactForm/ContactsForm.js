import { useState } from "react";
import s from "../ContactForm/ContactForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../../redux/contacts/contacts-selector";
import { addContacts } from "../../redux/contacts/contacts-action";

function ContactsForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(getItems);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const reset = () => {
    setName("");
    setNumber("");
  };

  const checkName = (name) => {
    return contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  const checkNumber = (number) => {
    return contacts.find((contact) => contact.number === number);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkName(name)) {
      alert(`${name} is alredy in your phonebook`);
    } else if (checkNumber(number)) {
      alert(`${number} is alredy in your phonebook`);
    } else {
      dispatch(addContacts(name, number));
    }
    reset();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label classNam={s.label}>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          value={name}
          onChange={handleChange}
          required
        />
      </label>
      <label classNam={s.label}>
        Number
        <input
          className={s.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          value={number}
          onChange={handleChange}
          required
        />
      </label>
      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
}

export default ContactsForm;
