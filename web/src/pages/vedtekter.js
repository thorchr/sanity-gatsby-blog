import React from 'react'
import Container from '../components/container'
import Layout from '../containers/layout'
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';

import Link from 'gatsby-link'

export default () => (
  <Layout>
    <Container>
    <div class="card box-shadow box-shadow-1x mb-3">
  <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
    Vedtekter
  </Button>
  <UncontrolledCollapse toggler="#toggler">
    <Card>
      <CardBody>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis
        similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed
        dignissimos esse fuga! Minus, alias.
      </CardBody>
    </Card>
  </UncontrolledCollapse>
</div>

    </Container>
    </Layout>
  
)
