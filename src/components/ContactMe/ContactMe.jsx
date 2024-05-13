import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import ContactMeForm from './ContactMeForm/ContactMeForm'

const ContactMe = () => {
  return (
    <section className="contact-container">
      <h5>Contact Me</h5>

      <div className="contact-content">
        <div style={{flex:1}}>
          <ContactInfoCard 
          iconUrl={"./assets/images/gmail .png"}
          text={"Gihanbandara999@gmail.com"}
          />
          <ContactInfoCard 
          iconUrl={"./assets/images/github-sign.png"}
          text={"https://github.com/Gihan1329"}
          />
        </div>
        <div style={{flex:1}}>
          <ContactMeForm/>
        </div>
      </div>
    </section>
  )
}

export default ContactMe