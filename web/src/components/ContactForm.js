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
        <Row>
          <Col xs='6'>
            <FormGroup>
              <Label for='exampleFirstName'>Fornavn</Label>
              <input type='hidden' name='form-name' value='contact' />
              <Input name='firstName' placeholder='Ditt navn' type='text' />
            </FormGroup>
          </Col>
          <Col xs='6'>
            <FormGroup>
              <Label for='exampleLastName'>Etternavn</Label>
              <Input name='lastName' placeholder='Etternavn' type='text' />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs='6'>
              <FormGroup>
              <Label for='exampleEmail'>E-post</Label>
              <Input name='email' placeholder='navn@domene.no' type='email' />
            </FormGroup>
          </Col>
          <Col xs='6'>
            <FormGroup>
                <Label for='exampleAddress'>Telefon</Label>
                <Input name='telephone'type='tel' placeholder='+4712345678' />
            </FormGroup>

          </Col>
        </Row>

        <FormGroup>
          <Label for='exampleAddress'>Addresse</Label>
          <Input type='text' name='address' id='exampleAddress' placeholder='Øreåsen borettslag' />
        </FormGroup>
        <FormGroup>
          <Label for='exampleText'>Beskjed til styret</Label>
          <Input type='textarea' name='text' id='exampleText' />
        </FormGroup>

        <Button>Send</Button>

      </Form>
    </Container>
  </div>
)

export default ContactForm
