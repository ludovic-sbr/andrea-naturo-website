import React, { useEffect, useRef, useState } from 'react'

const ContactForm = ({ sendEmail }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const formRef = useRef()
  const nameRef = useRef()
  const emailRef = useRef()

  const isName = new RegExp(/^[a-z ,.'-]+$/i).test(name)
  const isEmail = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(email)

  useEffect(() => {
    if (isName) {
      nameRef.current.classList.remove('invalid')
    }
    if (isEmail) {
      emailRef.current.classList.remove('invalid')
    }
  }, [isName, isEmail])

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
      if (!isName || !isEmail) throw new Error()

      await sendEmail({
        toEmail: "andrea.naturopathie@gmail.com",
        fromName: name,
        fromEmail: email,
        subject,
        message
      })
    } catch (err) {
      if (!isName) {
        nameRef.current.classList.add('invalid')
      }
      if (!isEmail) {
        emailRef.current.classList.add('invalid')
      }
    }
  }

  return (
    <form className="form-contact" id="form-contact" onSubmit={handleSubmit} ref={formRef}>
      <div className="form-content">
        <div className="chart" ref={nameRef}>
          <label htmlFor="name"> NOM </label>
          <input
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required="required"
          />
          <span className="invalid-msg"> Champ invalide. </span>
        </div>
        <div className="chart" ref={emailRef}>
          <label htmlFor="email"> EMAIL </label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required="required"
          />
          <span className="invalid-msg"> Champ invalide. </span>
        </div>
        <div className="chart">
          <label htmlFor="subject"> OBJET </label>
          <input
            type="text"
            id="subject"
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
            autoComplete="off"
            required="required"
          />
        </div>
        <div className="chart">
          <label htmlFor="text"> MESSAGE </label>
          <textarea
            id="message"
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            required="required"
          />
        </div>
        <button type="button" className="btn btn-primary submit"> ENVOYER </button>
      </div>
    </form>
  )
}

export default ContactForm