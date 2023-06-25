import { useState } from 'react'

function ContactForm() {
  const [fullname, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [success, setSucces] = useState('')

  function hasErrors() {
    if (fullname.trim().length < 5) {
      setError('El nombre debe tener al menos 5 caracteres')
      return true
    }
    const validEmail = new RegExp(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    )
    if (!validEmail.test(email.trim())) {
      setError('El formato de correo es incorrecto')
      return true
    }
    return false
  }

  function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setSucces('')
    if (hasErrors()) return
    setSucces(`
    Gracias ${fullname}, te contactaremos cuanto antes via email al correo ${email}
  `)
    setFullName('')
    setEmail('')
  }

  return (
    <form onSubmit={handleSubmit}>
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
        onChange={(e) => setEmail(e.target.value.toLocaleLowerCase())}
      />
      <button type='submit'>Contácteme</button>
      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
    </form>
  )
}
export default ContactForm
