import React from 'react'
import SectionConsultations from './SectionConsultations'
import SectionAppointments from './SectionAppointments'

const Index = () => {
  return (
    <div className="consultations container-fluid">
      <div className="container">
        <SectionConsultations />
        <SectionAppointments />
      </div>
    </div>
  )
}

export default Index