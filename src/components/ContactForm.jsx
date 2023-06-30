import { useState } from 'react'
import styles from './ContactForm.module.css'

function ContactForm() {
  const [fullname, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [success, setSucces] = useState(false)

  function hasErrors() {
    if (fullname.trim().length < 5) {
      setError('El nombre debe tener al menos 5 caracteres')
      return true
    }
    const validEmail = new RegExp(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+$/
    )
    if (!validEmail.test(email.trim())) {
      setError('El formato de correo es incorrecto')
      return true
    }
    return false
  }

  function handleSubmit(e) {
    e.preventDefault()
    setError(false)
    setSucces(false)
    if (hasErrors()) return
    setSucces({ fullname, email })
    setFullName('')
    setEmail('')
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <label htmlFor='fullname'>Nombre completo</label>
      <input
        type='text'
        name='fullname'
        value={fullname}
        onChange={(e) => setFullName(e.target.value)}
      />
      <label htmlFor='email'>Correo</label>
      <input
        type='email'
        name='email'
        value={email}
        onChange={(e) => setEmail(e.target.value.toLocaleLowerCase())}
      />
      <button type='submit'>Contácteme</button>
      {error && <p className={styles.error}>{error}</p>}
      {success && (
        <p className={styles.success}>
          Gracias <span>{success.fullname}</span>, te escribiremos a la
          dirección {success.email}
        </p>
      )}
    </form>
  )
}
export default ContactForm
