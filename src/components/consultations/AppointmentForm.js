import React, { useEffect, useRef, useState } from 'react'

const AppointmentForm = ({ sendFeedback }) => {
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [reason, setReason] = useState('')

  const formRef = useRef()
  const nameRef = useRef()
  const emailRef = useRef()
  const phoneRef = useRef()

  const isFullName = new RegExp(/^[a-z ,.'-]+$/i).test(fullname)
  const isEmail = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(email)
  const isPhoneNumber = new RegExp(
    /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im).test(phone)

  useEffect(() => {
    if (isFullName) {
      nameRef.current.classList.remove('invalid')
    }
    if (isEmail) {
      emailRef.current.classList.remove('invalid')
    }
    if (isPhoneNumber) {
      phoneRef.current.classList.remove('invalid')
    }
  }, [isFullName, isEmail, isPhoneNumber])

  useEffect(() => {
    let component = formRef.current
    component.style.opacity = 1

    return () => {
      component.style.opacity = 0
    }
  }, [])

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      if (!isFullName || !isEmail || !isPhoneNumber) throw new Error()

      await sendFeedback({
        toEmail: 'andrea.naturopathie@gmail.com',
        fromName: fullname,
        fromEmail: email,
        fromPhone: phone,
        fromReason: reason,
      })
    } catch (err) {
      if (!isFullName) {
        nameRef.current.classList.add('invalid')
      }
      if (!isEmail) {
        emailRef.current.classList.add('invalid')
      }
      if (!isPhoneNumber) {
        phoneRef.current.classList.add('invalid')
      }
    }
  }

  return (
    <form className="appointment-form" onSubmit={handleSubmit} ref={formRef}>
      <div className="chart" ref={nameRef}>
        <label htmlFor="fullname"> Nom et Prénom * </label>
        <input
          type="text"
          name="fullname"
          required
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
        />
        <span className="invalid-msg"> Champ invalide. </span>
      </div>

      <div className="chart" ref={emailRef}>
        <label htmlFor="email"> Email * </label>
        <input
          type="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          ref={emailRef}
        />
        <span className="invalid-msg"> Champ invalide. </span>
      </div>

      <div className="chart" ref={phoneRef}>
        <label htmlFor="phone"> Téléphone * </label>
        <input
          type="text"
          name="phone"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <span className="invalid-msg"> Champ invalide. </span>
      </div>

      <div className="chart">
        <label htmlFor="subject"> Sujet * </label>
        <input
          type="text"
          name="subject"
          placeholder="Demande de rendez-vous pour un PREMIER BILAN"
          disabled
        />
      </div>

      <div className="chart">
        <label htmlFor="reason"> Motif de la consultation * </label>
        <textarea
          name="reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          required
        />
      </div>
      <button type="button" className="btn btn-primary submit"> ENVOYER </button>
    </form>
  )
}

export default AppointmentForm