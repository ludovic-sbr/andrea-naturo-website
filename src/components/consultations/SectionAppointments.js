import React from 'react'
import Appointment from './Appointment'

const SectionAppointments = () => {
  return (
    <section className="row section-appointments" id="appointments">
      <div className="row">
        <h2> PRENDRE RENDEZ-VOUS </h2>
      </div>
      <div className="row">
        <Appointment />
      </div>
    </section>
  )
}

export default SectionAppointments