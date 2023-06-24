import { useState } from 'react'
import ErrorHandler from './ErrorHandler';


function ContactForm() {
  const [triggerSubmit, setTriggerSubmit] = useState(false)
  const [fullname, setFullName] = useState('')
  const [email, setEmail] = useState('')

  function handleTriggerSubmit(e) {
    e.preventDefault()
    setTriggerSubmit(false)
    setTriggerSubmit(true)
  }

  return (
    <form onSubmit={handleTriggerSubmit}>
      <label htmlFor='fullname'>Nombre completo: </label>
      <input
        type='text'
        value={fullname}
        onChange={(e) => setFullName(e.target.value)}
      />
      <label htmlFor='email'>Correo: </label>
      <input
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type='submit'>Contácteme</button>
    {triggerSubmit ? <ErrorHandler /> : undefined}
    </form>
  )
}
export default ContactForm
