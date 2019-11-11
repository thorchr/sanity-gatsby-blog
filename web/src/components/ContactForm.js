import React from 'react'

const ContactForm = () => (
  <div>
    <form
      name='contact'
      method='post'
      data-netlify='true'
      data-netlify-honeypot='bot-field'
    >
      <input type="hidden" name="form-name" value="contact" />
      <input name='name' placeholder='Ditt navn' type='text' />
      <button>Send</button>

    </form>
  </div>
)

export default ContactForm
