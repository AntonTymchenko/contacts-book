import React from "react";
import user from "../images/user.png";
import { Link } from "react-router-dom";

const ContactCard = ({ contacts, clickHandler }) => {
  return (
    <>
      {contacts.length === 0 ? (
        <p>No contacts available</p>
      ) : (
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
                  marginLeft: "10px",
                }}
                onClick={() => clickHandler(contact.id)}
              ></i>
              <Link
                to={{
                  pathname: `/edit`,
                  state: { items: contact },
                }}
              >
                <i
                  className="edit alternate outline icon"
                  style={{
                    color: "blue",
                    marginTop: "7px",
                  }}
                ></i>
              </Link>
            </div>
          );
        })
      )}
    </>
  );
};

export { ContactCard };
