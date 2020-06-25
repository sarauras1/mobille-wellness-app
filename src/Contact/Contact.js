import React from 'react';
import './Contact.css';

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
      phone: "",
      address: "",
      message: "",
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
    
    const { name, surname, email, phone, address, date, message } = this.state;
    return (
      <div id="contact" className="container">
        <form
          className="myForm"
          onSubmit={this.handleSubmit}
           netlify-honeypot="bot-field"
          method="POST"
          name="contact"
          action="/Thank you for your booking/"
        >
          <input type="hidden" name="contact" value="contact" />
          <h3>Book your treatments</h3>
          <p>
            <label>
              Your Name:{""}
              <input
                name="name"
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
                name="surname"
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
                required
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </label>
          </p>

          <p>
            <label>
              Your phone number:{" "}
              <input
                name="phone"
                required
                value={phone}
                onChange={this.handleChange}
              />
            </label>
          </p>
          <p>
            <label>
              Address:{" "}
              <input
                name="address"
                required
                value={address}
                onChange={this.handleChange}
              />
            </label>
          </p>
          <p>
            <label>
              Select Date:
              <input
                required
                type="date"
                onChange={this.handleChange}
                value={date}
              />
            </label>
          </p>
          <p>
            <label for="appt">
              Select time:
              <input type="time" name="appt"></input>
            </label>
          </p>
          <p>
            <label>
              Message:{" "}
              <textarea
                className="input-textarea"
                required
                name="message"
                value={message}
                onChange={this.handleChange}
              />
            </label>
          </p>

          <p>
            <button className="form-button" type="submit">
              Submit booking
            </button>
          </p>
        </form>
      </div>
    );
  }
}

export default Contact;

