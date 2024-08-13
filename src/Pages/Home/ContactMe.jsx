import React, { useState } from "react";
import data from "../../data/index.json";
import emailjs from "@emailjs/browser";
function ContactMe() {
  //
  const [formData, setFormData] = useState({
    first: "",
    last: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  // validationg error
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};

    // Validate first name
    if (!formData.first.trim()) {
      newErrors.first = "First name is required";
    }

    // Validate last name
    if (!formData.last.trim()) {
      newErrors.last = "Last name is required";
    }

    // Validate email using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    // Validate phone number using regex (simple validation)
    const phoneRegex = /^(\d{10}|\d{3}-\d{3}-\d{4})$/;
    if (formData.phoneNumber !== "" && !phoneRegex.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be 10 digits (123-456-7890)";
    }
    return newErrors;
  };
  //
  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    // console.log("here", e.target.value);
    setLoading(true);
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false);
    } else {
      // Submit the form
      // console.log(formData);
      setErrors({});
      //* submit here
      // api here

      const template_params = {
        to_name: "Sarang Mistry",
        from_name: formData.first + " " + formData.last,
        from_email: formData.email,
        from_number: formData.phoneNumber,
        message: formData.message,
      };
      // sending email
      emailjs
        .send(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          template_params,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then((res) => {
          // console.log(res);
          setLoading(false);
          // add annimation here for success
          setSuccess(true);
          setFormData({
            first: "",
            last: "",
            email: "",
            phoneNumber: "",
            message: "",
          });
          // alert("Form submitted successfully!");
          setTimeout(() => setSuccess(false), 7000);
        })
        .catch((error) => {
          // console.error(error);
          // alert("Error submitting the form. Please try again later.");
          setLoading(false);
        });
    }
  }
  return (
    <section id="Contact" className="contact-section">
      <div>
        <p className="sub-title">Get in touch</p>
        <h2>Contact Me</h2>
        <p className="text-md">
          I'm always open to discussing new projects, creative ideas, and
          opportunities. Feel free to reach out!
        </p>
      </div>
      <form className="contact-form-container" onSubmit={handleSubmit}>
        <div className="container">
          {/* first name */}
          <label htmlFor="first" className="contact-label">
            <span className="text-md">
              First Name <span style={{ color: "red" }}>*</span>
            </span>
            <input
              type="text"
              className="contact-input text-md"
              name="first"
              id="first"
              value={formData.first}
              onChange={(e) => handleChange(e)}
              required
              placeholder="Enter your First Name"
            />
            {errors.first && <p className="error-text">{errors.first}</p>}
          </label>
          {/* Last name */}
          <label htmlFor="last" className="contact-label">
            <span className="text-md">
              Last Name <span style={{ color: "red" }}>*</span>
            </span>
            <input
              type="text"
              className="contact-input text-md"
              name="last"
              id="last"
              value={formData.last}
              onChange={(e) => handleChange(e)}
              required
              placeholder="Enter your Last Name"
            />
            {errors.last && <p className="error-text">{errors.last}</p>}
          </label>
          {/* Email */}
          <label htmlFor="email" className="contact-label">
            <span className="text-md">
              Email <span style={{ color: "red" }}>*</span>
            </span>
            <input
              type="email"
              className="contact-input text-md"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => handleChange(e)}
              placeholder="Enter your Email"
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </label>
          {/* Phone number */}
          <label htmlFor="phoneNumber" className="contact-label">
            <span className="text-md"> Phone-Number</span>
            <input
              // change this
              type="text"
              className="contact-input text-md"
              name="phoneNumber"
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={(e) => handleChange(e)}
              placeholder="123-456-7890"
            />
            {errors.phoneNumber && (
              <p className="error-text">{errors.phoneNumber}</p>
            )}
          </label>
        </div>
        {/* message */}
        <div className="contact-message">
          <label htmlFor="message" className="contact-label">
            <span className="text-md">Message</span>
            <textarea
              className="contact-input text-md"
              id="message"
              name="message"
              rows="8"
              placeholder="Type your message"
              value={formData.message}
              onChange={(e) => handleChange(e)}
            />
            {errors.message && <p className="error-text">{errors.message}</p>}
          </label>
        </div>
        {success && (
          <div className="success-message">
            <div className="success-icon">&#10003;</div>
            <p>Form submitted successfully!</p>
          </div>
        )}
        <div>
          <button className="btn btn-primary" type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default ContactMe;
