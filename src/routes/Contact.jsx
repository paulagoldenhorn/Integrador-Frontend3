import ContactForm from '../components/ContactForm'
import './Contact.module.css'

function Contact() {
  return (
    <main>
      <h1>Formulario de contacto</h1>
      <h4>Si tenes alguna consulta, te contactaremos a la brevedad</h4>
      <section>
        <ContactForm />
      </section>
    </main>
  )
}
export default Contact
