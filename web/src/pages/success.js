import React from 'react'
import Container from '../components/container'
import Layout from '../containers/layout'
import Link from 'gatsby-link'

export default () => (
  <Layout>
    <Container>
      <h2>Beskjeden er sendt til styret</h2>
      <h4> En fra styret vil ta kontakt med deg</h4>
      <Link to='/'>Til forsiden</Link>
    </Container>
    
  </Layout>
)
