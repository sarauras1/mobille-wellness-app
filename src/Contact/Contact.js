
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
      select:"",
      message: "",
      date: "",
    };
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = (e) => {
    fetch(
      "/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: encode({
          "form-name": "contact",
          ...this.state,
        }),
      }
    )
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
      select,
      date,
      time,
      message,
    } = this.state;
    return (
      <div id="contact">
        <div className="container">
          <form className="myForm" method="post" onSubmit={this.handleSubmit}>
            <input type="hidden" name="contact" value="contact" />
            <h3 className="form-h3">Book your treatments</h3>
            <p className="contact-para">
              Thanks for choosing All Beauty By Sara London Mobile Beauty
              Services. Book your treatments using the form below. If you have
              inqueries about my services do not hesitate to contact me via
              WhatsApp or email. Please note that All Beauty By Sara does not
              accept bookings under £30 or £50 or more... depending on the area
              you live and the time you book. There may be a futher surcharge if
              you live in the congestion charge zone or if you don't have free
              parking readily available.
            </p>
            <p>
              <label>Your Name:</label>
              <input
                id="name"
                placeholder="Your Name"
                type="text"
                name="name"
                className="input"
                value={name}
                onChange={this.handleChange}
                required
              />
            </p>
            <p>
              <label>Your Surname:</label>
              <input
                placeholder="Your Surname"
                id="surname"
                type="text"
                name="surname"
                className="input"
                value={surname}
                onChange={this.handleChange}
                required
              />
            </p>
            <p>
              <label>Your Email: </label>
              <input
                placeholder="Your Email"
                type="email"
                required
                id="email"
                name="email"
                className="input"
                value={email}
                onChange={this.handleChange}
              />
            </p>
            <p>
              <label>Your Phone Number:</label>
              <input
                placeholder="Your Phone Number"
                type="tel"
                name="tel"
                id="tel"
                className="input"
                required
                value={tel}
                onChange={this.handleChange}
              />
            </p>
            <p>
              <label>Your Address: </label>
              <input
                placeholder="Your Home Address"
                type="address"
                name="address"
                id="address"
                required
                className="input"
                value={address}
                onChange={this.handleChange}
              />
            </p>
            <p>
              <label>Treatmets: </label>
              <select
                placeholder="Select Treatment"
                type="select"
                name="select"
                id="select"
                required
                value={select}
                onChange={this.handleChange}
              >
                <option value="Massage">Massage</option>
                <option value="Facial">Facial</option>
                <option value="Nails">Nails</option>
                <option value="Yoga">Yoga</option>
                <option value="Waxing">Waxing</option>
              </select>
            </p>
            <p>
              <label>Select Date: </label>
              <input
                required
                name="date"
                type="date"
                id="date"
                className="input"
                onChange={this.handleChange}
                value={date}
              />
            </p>
            <p>
              <label>Select Time:</label>
              <input
                type="time"
                name="appt"
                id="appt"
                className="input"
                min="07:00"
                max="21:00"
                required
                onChange={this.handleChange}
                value={time}
              ></input>
            </p>
            <p>
              <label>Treatments: </label>
              <textarea
                placeholder="Specify here the treatments you want book"
                className="input-textarea"
                required
                id="message"
                type="message"
                name="message"
                value={message}
                onChange={this.handleChange}
              />
            </p>
            <p>
              <button id="submit" className="form-button" type="submit">
                Submit booking
              </button>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;



