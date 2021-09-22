import React from "react";

class EditContact extends React.Component {
  constructor(props) {
    super(props);
    const { id, name, email } = props.location.state.items;
    this.state = {
      id,
      name,
      email,
    };
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  update(e) {
    e.preventDefault();
    if (this.state.name === "" && this.state.email === "") {
      alert("All the fields are mandatory!");
      return;
    }
    this.props.updateContactHandler(this.state);
    this.setState({
      name: "",
      email: "",
    });
    this.props.history.push("/");
  }
  render() {
    return (
      <div className="ui main" style={{ marginTop: "70px" }}>
        <h2>Edit Contact</h2>

        <form className="ui form" onSubmit={(e) => this.update(e)}>
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
            Update
          </button>
        </form>
      </div>
    );
  }
}

export { EditContact };
