import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import ContactForm from '../components/ContactForm'
import {responsiveTitle1} from '../components/typography.module.css'
import PortableText from '../components/portableText'

export const query = graphql`
  query ContactPageQuery{
    sanityPage(mainImage: {}, title: {eq: "Kontakt"}) {
      body {
        sanityChildren {
          text
        }
      }
      title
      _rawBody
      mainImage {
        asset {
          fluid {
            aspectRatio
            base64
            sizes
            src
            srcSet
            srcSetWebp
            srcWebp
          }
        }
      }
    }

  }
`

const ContactPage = props => {
  const {data, errors} = props
  const {title} = data.sanityPage
  const {_rawBody} = data.sanityPage

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  

  return (
    <Layout>
      <SEO title={title} />
      <Container>
        <h1 className={responsiveTitle1}>{title}</h1>
        <PortableText blocks={_rawBody} />
        <ContactForm />
      </Container>
    </Layout>
  )
}

export default ContactPage
