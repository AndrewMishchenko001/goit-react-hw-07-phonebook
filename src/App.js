import s from "./Components/ContactForm/ContactForm.module.css";
import ContactList from "./Components/ContactList/ContactList";
import Filter from "./Components/Filter/Filter";
import ContactsForm from "./Components/ContactForm/ContactsForm";
import Section from "./Components/Section.js/Section";

export default function App() {
  return (
    <div className={s.container}>
      <Section title="Phonebook">
        <ContactsForm />
      </Section>

      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </div>
  );
}
