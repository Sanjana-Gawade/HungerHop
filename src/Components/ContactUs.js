import { useEffect } from "react";

const ContactUs = () => {
  return (
    <div>
      <h1 className="contact-heading">Contact Us Page</h1>
      <form
        className="contact-form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          className="contact-input"
          placeholder="Enter name"
        />

        <textarea
          rows="4"
          cols="50"
          className="contact-textarea"
          placeholder="Send Message"
        />
        <button className="contact-button">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
