import React from "react";
import "./ContactMeForm.css";

const ContactMeForm = () => {
  return (
    <div className="contact-form-content">
      <form>
        <div className="name-container">
          <input type="text" name="firstname" placeholder="Firstname" />
          <input type="text" name="lastname" placeholder="Lastname" />
        </div>
        <input type="text" name="email" placeholder="Email" />
        <textarea type="text" name="message" placeholder="Message" rows={3}/>

        <button>Send</button>
      </form>
    </div>
  );
};

export default ContactMeForm;
