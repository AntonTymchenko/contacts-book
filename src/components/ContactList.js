import React, { useRef } from "react";
import { ContactCard } from "./ContactCard";
import { NavLink } from "react-router-dom";

const ContactList = ({ contacts, getContactId, term, searchKeyword }) => {
  const inputEl = useRef("");
  const deleteContacthandler = (id) => {
    getContactId(id);
  };
  const getSearchTerm = () => {
    searchKeyword(inputEl.current.value);
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
      <div className="ui search">
        <div className="ui icon input" style={{ width: "100%" }}>
          <input
            ref={inputEl}
            type="text"
            placeholder="Search Contacts"
            className="prompt"
            value={term}
            onChange={getSearchTerm}
          />
          <i className="search icon"></i>
        </div>
      </div>

      <div className="ui celled list">
        <ContactCard contacts={contacts} clickHandler={deleteContacthandler} />
      </div>
    </div>
  );
};

export { ContactList };
