import React from "react";
import { ContactCard } from "./ContactCard";
import { NavLink } from "react-router-dom";

const ContactList = ({ contacts, getContactId }) => {
  const deleteContacthandler = (id) => {
    getContactId(id);
  };
  return (
    <div className="main">
      <h2 style={{ display: "inline-block" }}>
        Contact List
        <NavLink to="/add" style={{ color: "white", marginLeft: "20px" }}>
          <button type="button" className="ui button blue right">
            Add Contact
          </button>
        </NavLink>
      </h2>

      <div className="ui celled list">
        <ContactCard contacts={contacts} clickHandler={deleteContacthandler} />
      </div>
    </div>
  );
};
export { ContactList };
