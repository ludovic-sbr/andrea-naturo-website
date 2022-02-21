import React, { useEffect, useRef } from 'react'

const AppointmentFormSuccess = ({ hideSuccessMsg }) => {
  const formSuccesRef = useRef()

  useEffect(() => {
    let component = formSuccesRef.current
    component.style.opacity = 1

    return () => {
      component.style.opacity = 0
    }
  }, [])

  return (
    <div className="appt-form-success" ref={formSuccesRef}>
      <h4> Merci !</h4>
      <p>
        <u>Votre demande de prise de rendez-vous a bien été envoyée !</u>
        <br/><br/>
        Un mail récapitulatif vous a été envoyé sur l'adresse mail que vous
        avez fourni.
        <br/><br/>
        Je vous recontacte très vite !
      </p>
      <button type="button" className="btn btn-primary submit" onClick={hideSuccessMsg}> OK </button>
    </div>
  )
}

export default AppointmentFormSuccess