import React from 'react'
import Container from '../components/container'
import Layout from '../containers/layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import Link from 'gatsby-link'

export default () => (
  <Layout>
    <Container>
      <h1>Beskjeden er sendt til styret</h1>
      <h4> En fra styret vil ta kontakt med deg</h4>
      <Link to='/'>Til forsiden</Link>
    </Container>
    
  </Layout>
)
