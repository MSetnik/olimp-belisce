import React from "react";
import ContactInfo from "../../molecules/contact-info";
import ContactForm from "../contact-form";
import "./index.css";

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <div className="container">
        <div className='contact-title-div'>
          <h1>KONTAKTIRAJTE NAS</h1>
        </div>

        <div className="row contact-container-row">
          <div className="col contact-form-col">
            <ContactForm />
          </div>

          <div className="col contact-info-col">
            <ContactInfo />
          </div>

        </div>
      </div>

    </div>
  );
};

export default Contact;
