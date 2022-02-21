import React, { useState } from 'react'
import AppointmentForm from './AppointmentForm'
import emailjs from '@emailjs/browser'
import AppointmentFormSuccess from './AppointmentFormSuccess'

const Appointment = () => {
  const [sent, setSent] = useState(false)

  const sendFeedback = async (variables) => {
    try {
      await emailjs.send(
        "service_bqk9eld",
        "template_r66syqi",
        variables,
        "user_ebmtquP9MWrfdCKIl3rHx"
      )

      setSent(true)
    } catch (err) {
      console.log(err)
    }
  };

  const hideSuccessMsg = () => {
    setSent(false)
  }

  return (
    <div className="appointment col-xl-6 col-lg-7 col-md-11 col-sm-12 mx-auto mb-4">
      <header>
        <h3> Consultation à distance </h3>
        <b> Prendre rendez-vous :</b>
        <p>• Par therapeutes.com ou par téléphone :</p>
        <div>
          <a href="https://www.therapeutes.com/naturopathe/marseille/andrea-sobrero" target="_blank" rel="noreferrer"><button type="button" className="btn btn-success" style={{backgroundColor: "#6ba839", border: 'none'}}> Je réserve par therapeutes.com </button></a>
          <span> ou </span>
          <span> 06.31.52.82.45 </span>
        </div>
        <p>• Directement en ligne avec le formulaire ci-dessous :</p>
      </header>
      { sent ? <AppointmentFormSuccess hideSuccessMsg={hideSuccessMsg} /> : <AppointmentForm sendFeedback={sendFeedback} /> }
    </div>
  )
}

export default Appointment