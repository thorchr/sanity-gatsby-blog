import React from 'react'
import {Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap'

const ContactForm = () => (
  <div>
    <Container>
      <Form
        name='contact'
        method='post'
        data-netlify='true'
        data-netlify-honeypot='bot-field'
      >
        <FormGroup>
          <input type='hidden' name='form-name' value='contact' />
          <Input name='name' placeholder='Ditt navn' type='text' />
        </FormGroup>
        <FormGroup>
          <Input name='email' placeholder='E-post' type='email' />
        </FormGroup>


        <Button>Send</Button>

      </Form>
    </Container>
  </div>
)

export default ContactForm
