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
    <div className="p-2">
      <h3 className="mb-2">Contact List</h3>
      <input
        className="w-100 p-1 rounded bg-dark text-white mb-1"
        placeholder="Seacrh contact"
        type="text"
        value={filteredText}
        onChange={(e) => {
          setFilteredText(e.target.value);
        }}
      />
      <ul className="list-group list-group-flush ">
        {filtered.map((contact, index) => (
          <li
            className="list-group-item bg-dark text-light border-secondary"
            key={index}
          >
            <span className="btn rounded-circle btn-primary me-2">
              {contact.name[0].toUpperCase()}
            </span>
            {contact.name}: {contact.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
