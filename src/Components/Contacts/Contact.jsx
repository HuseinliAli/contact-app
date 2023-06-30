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
    <div
      className="container w-25 bg-dark text-light p-2 mt-2"
      style={{ borderRadius: "0.5rem" }}
    >
      <h2 className="text-center m-4 ">Contact App</h2>
      <Form addContact={setContacts} contacts={contacts} />
      <List contactList={contactsData ? contactsData : contacts} />
    </div>
  );
};

export default Contact;
