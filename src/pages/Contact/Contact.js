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
      select: "",
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
              Services in London. Book your treatments using the form below. 
              If you have inquiries about our services do not hesitate to contact us via
              WhatsApp or email. Please note that All Beauty By Sara does not
              accept bookings under £30 or £50 or more... depending on the area
              you live. Let explain, we cover 2 miles radio area around Peckham with a min of £30 
              per booking. Out of our area the min for a booking will start from £50 and grow
              the more far you live from my area. There may be a further surcharge if
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
              <label>Your Email:</label>
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
              <label>Your Address:</label>
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
              <label>Car Parking:</label>
              <select
                placeholder="Do you have car park available?"
                type="select"
                name="select"
                id="select"
                required
                value={select}
                onChange={this.handleChange}
              >
                <option value="0">Do you have car park available?</option>
                <option value="1">No I don't</option>
                <option value="2">Yes I do</option>
              </select>
            </p>
            <p>
              <label>Gender:</label>
              <select
                placeholder="Do you have parking available?"
                type="select"
                name="select"
                id="select"
                required
                value={select}
                onChange={this.handleChange}
              >
                <option value="Yes">Female</option>
                <option value="No">Male</option>
              </select>
            </p>
            <p>
              <label>Select Date:</label>
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
              <label>Treatments:</label>
              <textarea
                placeholder="Specify here the names of treatmets you would like to book"
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
