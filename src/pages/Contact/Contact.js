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
          "Success! Thank you for your booking! We will contact you as soon has possible time to confirm"
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
              Services in London. Book your treatments using the form below. If
              you have inquiries about our services do not hesitate to contact
              us via WhatsApp or email.{" "}
            </p>
            <p className="contact-para">
              Please note that All Beauty By Sara does not accept bookings under
              £30 or £50 or more... depending on the area you live in. We cover
              2 miles radio area around Peckham in which we accept bookings with
              a minimum of £ 30 spending. If you live out of our 2 miles radio
              area the minimum for a booking would be £ 50 or more... depending
              on how far you live from us. To find out what is the minimum for a
              booking for your area contact us via WhatsApp or email. In
            </p>
            <p className="contact-para">
              addition, there may be a further surcharge if you live in the
              congestion charge zone or if you don't have free parking readily
              available.
            </p>
            <p>
              <label>Name:</label>
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
              <label>Surname:</label>
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
              <label>Email:</label>
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
              <label>Phone Number:</label>
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
              <label>Address:</label>
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
              <label>Select Date:</label>
              <input
                required
                name="date"
                type="date"
                id="date"
                className="input group"
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
                className="input group"
                min="07:00"
                max="21:00"
                required
                onChange={this.handleChange}
                value={time}
              />
            </p>
            <p>
              <label>Gender:</label>
              <select
                placeholder="Do you have parking available?"
                type="select"
                name="select"
                id="select-gender"
                className="input group"
                required
                value={select}
                onChange={this.handleChange}
              >
                <option value="Female">Female</option>
                <option value="Male">Male</option>
              </select>
            </p>
            <p>
              <label>Car Parking:</label>
              <select
                placeholder="Do you have car park available?"
                type="select"
                name="select"
                className="input group"
                id="select-option"
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
        {/* <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4970.477040020887!2d-0.05985083526588886!3d51.47213600880261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x212befb4389c510f!2sAll%20Beauty%20By%20Sara!5e0!3m2!1sen!2suk!4v1615917264219!5m2!1sen!2suk" 
        /> */}
      </div>
    );
  }
}

export default Contact;
