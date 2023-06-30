import React, { useState } from "react";

const List = ({ contactList }) => {
  const [filteredText, setFilteredText] = useState("");

  const filtered = contactList.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filteredText.toLocaleLowerCase())
    );
  });
  return (
    <div>
      <h2>Contact List</h2>
      <input
        placeholder="Seacrh contact"
        type="text"
        value={filteredText}
        onChange={(e) => {
          setFilteredText(e.target.value);
        }}
      />
      {filtered.map((contact, index) => (
        <p key={index}>
          {contact.name}: {contact.phone}
        </p>
      ))}
    </div>
  );
};

export default List;
