import React, { useEffect, useRef } from 'react'

const ContactFormSuccess = ({ hideSuccessMsg }) => {
  const formSuccessRef = useRef()

  useEffect(() => {
    let component = formSuccessRef.current
    component.style.opacity = 1

    return () => {
      component.style.opacity = 0
    }
  }, [])

  return (
    <div className="contact-form-success" ref={formSuccessRef}>
      <h4> Merci !</h4>
      <p>
        <u>Ton message a bien été envoyé !</u>
        <br/><br/>
        Je te recontacte très vite !
      </p>
      <button type="button" className="btn btn-primary submit" onClick={hideSuccessMsg}> OK </button>
    </div>
  )
}

export default ContactFormSuccess