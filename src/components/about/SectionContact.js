import React, { useState } from 'react'
import ContactForm from './ContactForm'
import emailjs from '@emailjs/browser'
import ContactFormSuccess from './ContactFormSuccess'

const SectionContact = () => {
  const [sent, setSent] = useState(false)

  const sendEmail = async (variables) => {
    try {
      await emailjs.send(
        "service_bqk9eld",
        "template_vpmw3ha",
        variables,
        "user_ebmtquP9MWrfdCKIl3rHx"
      )

      setSent(true)
    } catch (err) {
      console.log(err)
    }
  }

  const hideSuccessMsg = () => {
    setSent(false)
  }

  return (
    <div className="row container mx-auto section-contact" id="sectionContact">
        <div className="col-md-5 content">
          <h2> ME CONTACTER </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="col-md-7 d-flex justify-content-center">
          { sent ? <ContactFormSuccess hideSuccessMsg={hideSuccessMsg} /> : <ContactForm sendEmail={sendEmail} /> }
        </div>
    </div>
  )
}

export default SectionContact