import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify"; // Make sure to import ToastContainer
import "react-toastify/dist/ReactToastify.css";
import "./ContactMeForm.css";

const ContactMeForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.firstname + " " + formData.lastname,
      to_name: "Gihan Bandara",
      message: formData.message,
      reply_to: formData.email,
    };

    emailjs
      .send(
        "service_2p4rn08",
        "template_q2shpvj",
        templateParams,
        "txxIPu-A5twwkSY9c"
      )
      .then((response) => {
        console.log("Email sent:", response);
        toast.success("Your message has been sent successfully!", {
          position: "top-right",
        });

 
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        toast.error(
          "An error occurred while sending your message. Please try again later.",
          {
            position: "top-right",
          }
        );
      });
  };

  return (
    <div className="contact-form-content">
      <ToastContainer /> {/* Make sure ToastContainer is included */}
      <form onSubmit={handleSubmit}>
        <div className="name-container">
          <input
            type="text"
            name="firstname"
            placeholder="Firstname"
            value={formData.firstname}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastname"
            placeholder="Lastname"
            value={formData.lastname}
            onChange={handleChange}
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          type="text"
          name="message"
          placeholder="Message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
        />

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactMeForm;
