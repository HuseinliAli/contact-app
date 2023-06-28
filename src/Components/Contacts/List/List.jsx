import React from "react";

const List = ({ contactList }) => {
  return (
    <div>
      <h2>Contact List</h2>
      {contactList.map((contact, index) => (
        <p key={index}>
          {contact.name}: {contact.phone}
        </p>
      ))}
    </div>
  );
};

export default List;
