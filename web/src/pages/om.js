import React from 'react'
import {graphql} from 'gatsby'
import {mapEdgesToNodes} from '../lib/helpers'
import BlogPostPreviewGrid from '../components/blog-post-preview-grid'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Img from "gatsby-image"
import PortableText from '../components/portableText'

import {responsiveTitle1} from '../components/typography.module.css'

export const query = graphql`
  query AboutPageQuery{
               sanityPage(mainImage: {}, title: {eq: "Om Øreåsen borettslag"}) {
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

const AboutPage = props => {
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
        <Img fluid={data.sanityPage.mainImage.asset.fluid} />
        <PortableText blocks={_rawBody} />
      </Container>
    </Layout>
  )
}

export default AboutPage
