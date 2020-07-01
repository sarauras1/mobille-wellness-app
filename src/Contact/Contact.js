
import React from "react";
import "./Contact.css";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      email: "",
      tel: "",
      address: "",
      message: "",
      date: "",
    };
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: encode({
        "form-name": "contact",
        ...this.state,
      }),
    })
      .then(() =>
        alert(
          "Success! Thank you for your booking! We will contact you as soon has possible time for confirmation"
        )
      )
      .catch((error) => alert(error));

    e.preventDefault();
  };

  handleChange = (e) =>
    this.setState({
      [e.target.name]: e.target.value,
    });

  render() {
    const {
      name,
      surname,
      email,
      tel,
      address,
      date,
      time,
      message,
    } = this.state;
    return (
      <div id="contact" className="container">
        <form
          className="myForm"
          method="post"
          onSubmit={this.handleSubmit}
        >
          <input type="hidden" name="contact" value="contact" />
          <h3>Book your treatments</h3>
          <p>
            <label>
              Your Name:{" "}
              <input
                id=""
                type="text"
                name="name"
                className="input"
                value={name}
                onChange={this.handleChange}
                required
              />
            </label>
          </p>
          <p>
            <label>
              Your Surname:{" "}
              <input
                id="surname"
                type="text"
                name="surname"
                className="input"
                value={surname}
                onChange={this.handleChange}
                required
              />
            </label>
          </p>
          <p>
            <label>
              Your Email:{" "}
              <input
                type="email"
                required
                id="email"
                name="email"
                className="input"
                value={email}
                onChange={this.handleChange}
              />
            </label>
          </p>
          <p>
            <label>
              Your phone number:{" "}
              <input
                type="tel"
                name="tel"
                id="tel"
                className="input"
                required
                value={tel}
                onChange={this.handleChange}
              />
            </label>
          </p>
          <p>
            <label>
              Address:{" "}
              <input
                type="address"
                name="address"
                id="address"
                required
                className="input"
                value={address}
                onChange={this.handleChange}
              />
            </label>
          </p>
          <p>
            <label>
              Select Date:{" "}
              <input
                required
                name="date"
                type="date"
                id="date"
                className="input"
                onChange={this.handleChange}
                value={date}
              />
            </label>
          </p>
          <p>
            <label>
              Select time:{" "}
              <input
                type="time"
                name="appt"
                id="appt"
                className="input"
                onChange={this.handleChange}
                value={time}
              ></input>
            </label>
          </p>
          <p>
            <label>
              treatments to book:{" "}
              <textarea
                className="input-textarea"
                required
                id="message"
                type="message"
                name="message"
                value={message}
                onChange={this.handleChange}
              />
            </label>
          </p>
          <p>
            <button id="submit" className="form-button" type="submit">
              Submit booking
            </button>
          </p>
    
        </form>
      
      </div>
    );
  }
}

export default Contact;



