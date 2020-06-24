import React from "react";
import ReactFormValidation from "react-form-input-validation";
import './ValidationForm.css';


const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class ValidationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        customer_name: "",
        customer_Surname: "",
        email_address: "",
        phone_number: "",
        house_address: "",
        pickupTratment: "",
        comments: "",
        AddOns: []
      },
      errors: {}
    };
    this.form = new ReactFormValidation(this, { locale: "en" });
    this.form.useRules({
      customer_name: "required|username_available",
      email_address: "required|email",
      house_address: "required|address",
      phone_number: "required|numeric|digits_between:10,12",
      pickup_time: "required|date",
      pickup_treatment: "requred|treatmet",
       comments: "required|max:200",
     
    });

       onsubmit = ( event) => {
     
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...this.state })
      })
        .then(() => alert("Thank you for your booking! We will contact you as soon has possible time for confirmation."))
        .catch(error => alert(error));

      event.preventDefault();
    }
    

   
    ReactFormValidation.registerAsync('username_available', function(username, attribute, req, passes) {
      setTimeout(() => {
        if (username === "foo")
          passes(false, 'Username has already been taken.'); // if username is not available
        else
          passes();
      }, 1000);
    });
    let messages = ReactFormValidation.getMessages('en');
    messages.required = 'Whoops, :attribute field is required.';
    ReactFormValidation.setMessages('en', messages);
    ReactFormValidation.useLang('en')
  }
    // when submit btn is clicked
   
  render() {
    
    return (
     
        <div className="container">
        <form
          data-netlify-honeypot = "bot-field"
          type="hidden"
           value="contact"
            method="POST"
            data-netlify="true"
            name="contact"
            action="/www.allbeautybysara.co.uk/contact"
            className="myForm"
            autoComplete="off"
            onSubmit={this.handleSubmit}
          >
            <p>
            <h3 className="text-centre-form">Book your treatment!</h3>
              <label>
                Name
                <input
                  type="text"
                  name="customer_name"
                  onBlur={this.form.handleBlurEvent}
                  onChange={this.form.handleChangeEvent}
                  value={this.state.fields.customer_name} 
                  data-attribute-name="Customer Name"
                  data-async
                />
              </label>
              <label className="error">
                {this.state.errors.customer_name
                  ? this.state.errors.customer_name
                  : ""}
              </label>
            </p>
            <p>
              <label>
                Surname
                <input
                  type="text"
                  name="customer_Surname"
                  onBlur={this.form.handleBlurEvent}
                  onChange={this.form.handleChangeEvent}
                  value={this.state.fields.customer_surname}
                  // To override the attribute name
                  data-attribute-name="Customer Surname"
                  data-async
                />
              </label>
              <label className="error">
                {this.state.errors.customer_Surname
                  ? this.state.errors.customer_Surname
                  : ""}
              </label>
            </p>

            <p>
              <label>
                Phone
                <input
                  type="tel"
                  name="phone_number"
                  onBlur={this.form.handleBlurEvent}
                  onChange={this.form.handleChangeEvent}
                  value={this.state.fields.phone_number}
                />
              </label>
              <label className="error">
                {this.state.errors.phone_number
                  ? this.state.errors.phone_number
                  : ""}
              </label>
            </p>

            <p>
              <label>
                Email
                <input
                  type="email"
                  name="email_address"
                  onBlur={this.form.handleBlurEvent}
                  onChange={this.form.handleChangeEvent}
                  value={this.state.fields.email_address}
                />
              </label>
              <label className="error">
                {this.state.errors.email_address
                  ? this.state.errors.email_address
                  : ""}
              </label>
            </p>
            <p>
            <label>
                Address
                <input
                  type="text"
                  name="house_address"
                  onBlur={this.form.handleBlurEvent}              
                  onChange={this.form.handleChangeEvent}
                  value={this.state.fields.house_address}
                />
              </label>
              <label className="error">
                {this.state.errors.house_address
                  ? this.state.errors.house_address
                  : ""}
              </label>
            </p>

           
            <p>
              <label>
                Pickup treatments
              
                <select
                  id="pickup_treatment"
                  name="pickup_tratment"
                  value={this.state.fields.pickup_treatment}
                  onChange={this.form.handleChangeEvent}
                  onBlur={this.form.handleBlurEvent}
                >
                  <option value="Waxing">Waxing</option>
                  <option value="Facial">Facial</option>
                  <option value="Massage">Massage</option>
                  <option value="Yoga">Yoga</option>
                  <option value="Manicure">Manicure</option>
                  <option value="Pedicure">Pedicure</option>
                  <option value="">Shellac Manicure</option>
                  <option value="Yoga">Shellac Pedicure</option>
                </select>
              </label>
              <label className="error">
                {this.state.errors.pickup_place
                  ? this.state.errors.pickup_place
                  : ""}
              </label>
            </p>
            <fieldset>
              <legend>Add ons treatments</legend>
              <p>
                <label className="choice">
                  {" "}
                  <input
                    type="checkbox"
                    name="AddOns"
                    onChange={this.form.handleChangeEvent}
                    value="shellac removal"
                  />{" "}
                  Shellac removal{" "}
                </label>
              </p>
              <p>
                <label className="choice">
                  {" "}
                  <input
                    type="checkbox"
                    name="addOns"
                    onChange={this.form.handleChangeEvent}
                    value="Nails Repeir"
                  />{" "}
                  Nails Repeir{" "}
                </label>
              </p>
              <p>
                <label className="choice">
                  {" "}
                  <input
                    type="checkbox"
                    name="addOns"
                    onChange={this.form.handleChangeEvent}
                    value="wax"
                  />{" "}
                  Upper lips wax{" "}
                </label>
              </p>
              <label className="option">
                {this.state.errors.addOns
                  ? this.state.option.addOns
                  : ""}
              </label>
            </fieldset>

            <p>
              <label>
                Pickup Date
                <input
                  type="date"
                  name="pickup_time"
               
                  onChange={this.form.handleChangeEvent}
                  onBlur={this.form.handleBlurEvent}
                  value={this.state.fields.pickup_time}
                />
               
              </label>
              <label className="error">
                {this.state.errors.pickup_time
                  ? this.state.errors.pickup_time
                  : ""}
              </label>
            </p>

            <p>
              <label>
                Specify treatment
                <textarea
                  type="file"
                  name="comments"
                  maxLength="200"
                  value={this.state.fields.comments}
              
                  onChange={this.form.handleChangeEvent}
                  onBlur={this.form.handleBlurEvent}
                ></textarea>
              </label>
              <label className="error">
                {this.state.errors.comments
                  ? this.state.errors.comments
                  : ""}
              </label>
            </p>

            <p>
            <button className="form-button" type="submit">Submit Booking</button>
            </p>
          </form>
        </div>
    );
  }
}

export default ValidationForm;


