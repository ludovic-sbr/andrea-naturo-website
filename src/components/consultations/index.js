import React, { useEffect } from 'react'
import SectionConsultations from './SectionConsultations'
import SectionAppointments from './SectionAppointments'

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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