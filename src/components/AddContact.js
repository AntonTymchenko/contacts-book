import React from "react";
import { NavLink } from "react-router-dom";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };
  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  add(e) {
    e.preventDefault();
    if (this.state.name === "" && this.state.email === "") {
      alert("All the fields are mandatory!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({
      name: "",
      email: "",
    });
    this.props.history.push("/");
  }
  render() {
    return (
      <div className="ui main" style={{ marginTop: "70px" }}>
        <h2>Add Contact</h2>

        <form className="ui form" onSubmit={(e) => this.add(e)}>
          <div className="field">
            <label>
              Name
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={this.state.name}
                onChange={(e) => this.handleInputChange(e)}
              />
            </label>
          </div>
          <div className="field">
            <label>
              Email
              <input
                type="text"
                name="email"
                placeholder="Name"
                value={this.state.email}
                onChange={(e) => this.handleInputChange(e)}
              />
            </label>
          </div>

          <button type="submit" className="ui button blue">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export { AddContact };
