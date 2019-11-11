import React from 'react'
import Container from '../components/container'
import Layout from '../containers/layout'
import Link from 'gatsby-link'

export default () => (
  <Layout>
    <Container>
      <h2>You dropped me a new line</h2>
      <h4> Congrats,i&#39;ll be sure to check it out when i can and add a reply</h4>
      <Link to='/'>Til forsiden</Link>
    </Container>
    
  </Layout>
)
