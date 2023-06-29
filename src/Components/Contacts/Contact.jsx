import React, { useState, useEffect } from "react";
import List from "./List/List";
import Form from "./Form/Form";
const Contact = () => {
  const [contacts, setContacts] = useState([]);
  const [contactsData, setContactsData] = useState([]);
  useEffect(() => {
    if (contacts.length !== 0) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
    const json = JSON.parse(localStorage.getItem("contacts"));
    setContactsData(json);
  }, [contacts]);

  return (
    <div>
      <Form addContact={setContacts} contacts={contacts} />
      <List contactList={contactsData ? contactsData : contacts} />
    </div>
  );
};

export default Contact;
