import React from 'react';
import {Col, Row, Button, Form, FormGroup, Label, Input} from 'reactstrap';

const ContactForm = (props) => {
  return (
    <Form name="contact" method="POST" data-netlify="true">
       <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for='firstName'>Fornavn</Label>
            <Input type="text" name="name" id="exampleName" placeholder="Fornavn" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="lastName">Etternavn</Label>
            <Input type="text" name="lastName" id="exampleName" placeholder="Etternavn" />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="E-post" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleAddress">Address</Label>
        <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St"/>
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Text Area</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
}

export default ContactForm
