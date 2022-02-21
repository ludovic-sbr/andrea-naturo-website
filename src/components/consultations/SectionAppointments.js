import React from 'react'
import Appointment from './Appointment'

const SectionAppointments = () => {
  return (
    <div className="row section-appointments" id="appointments">
      <div className="row">
        <h2> PRENDRE RENDEZ-VOUS </h2>
      </div>
      <div className="row">
        <Appointment />
      </div>
    </div>
  )
}

export default SectionAppointments