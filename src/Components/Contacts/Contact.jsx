import React, { useState, useEffect } from "react";
import List from "./List/List";
import Form from "./Form/Form";
const Contact = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    console.log(contacts);
    setContacts(contacts);
  }, [contacts]);

  return (
    <div>
      <List contactList={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
};

export default Contact;
