import React from "react";
import data from "../../data/index.json";
function ContactMe() {
  return (
    <section id="Contact" className="contact-section">
      <div>
        <p className="sub-title">Get in touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          I'm always open to discussing new projects, creative ideas, and
          opportunities. Feel free to reach out!
        </p>
      </div>
      <form className="contact-form-container">
        <div className="container">
          {/* first name */}
          <label htmlFor="first-name" className="contact-label">
            <span className="text-md"> First Name</span>
            <input
              type="text"
              className="contact-input text-md"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          {/* Last name */}
          <label htmlFor="last-name" className="contact-label">
            <span className="text-md"> Last Name</span>
            <input
              type="text"
              className="contact-input text-md"
              name="last-name"
              id="last-name"
              required
            />
          </label>
          {/* Email */}
          <label htmlFor="email" className="contact-label">
            <span className="text-md"> Email</span>
            <input
              type="email"
              className="contact-input text-md"
              name="email"
              id="email"
              required
            />
          </label>
          {/* Phone number */}
          <label htmlFor="phone-number" className="contact-label">
            <span className="text-md"> Phone-Number</span>
            <input
              type="number"
              className="contact-input text-md"
              name="phone-number"
              id="phone-number"
              required
            />
          </label>
        </div>
        {/* message */}
        <div className="contact-message">
          <label htmlFor="message" className="contact-label">
            <span className="text-md">Message</span>
            <textarea
              className="contact-input text-md"
              id="message"
              rows="8"
              placeholder="Type your message"
            />
          </label>
        </div>
        <div>
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </section>
  );
}

export default ContactMe;
