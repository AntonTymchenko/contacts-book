import React from "react";
import user from "../images/user.png";
import { Link } from "react-router-dom";

const ContactCard = ({ contacts, clickHandler }) => {
  return (
    <>
      {contacts &&
        contacts.map((contact) => {
          return (
            <div className="item" key={contact.id}>
              <img src={user} alt={contact.name} className="ui avatar image" />
              <div className="content">
                <Link
                  to={{
                    pathname: `/contact/${contact.id}`,
                    state: { items: contact },
                  }}
                >
                  <div className="header">{contact.name}</div>
                  <div>{contact.email}</div>
                </Link>
              </div>
              <i
                className="trash alternate outline icon"
                style={{
                  color: "red",
                  marginTop: "7px",
                }}
                onClick={() => clickHandler(contact.id)}
              ></i>
            </div>
          );
        })}
    </>
  );
};

export { ContactCard };
