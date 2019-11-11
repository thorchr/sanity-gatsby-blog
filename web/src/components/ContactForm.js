import React from 'react'

const ContactForm = () => (
  <div>
    <form
      name='contact'
      method='post'
      data-netlify='true'
      data-netlify-honeypot='bot-field'
    >
      <input name='name' placeholder='Ditt navn' type='text' />
      <button>Send</button>

    </form>
  </div>
)

export default ContactForm
