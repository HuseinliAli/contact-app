import { useEffect, useState } from "react";

const Form = ({ addContact, contacts }) => {
  const [form, setForm] = useState({ name: "", phone: "" });

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.name === "" || form.phone === "") {
      return false;
    }
    addContact([...contacts, form]);
  };

  useEffect(() => {
    const storedContacts = localStorage.getItem("contacts");
    if (storedContacts) {
      addContact(JSON.parse(storedContacts));
    }
  }, []);
  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          name="name"
          type="text"
          placeholder="Enter contact name"
          onChange={onChangeInput}
          value={form.name}
        />
      </div>
      <div>
        <input
          name="phone"
          type="text"
          placeholder="Enter phone number"
          onChange={onChangeInput}
          value={form.phone}
        />
      </div>
      <div>
        <button>Add</button>
      </div>
    </form>
  );
};

export default Form;
