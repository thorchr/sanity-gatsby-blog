import React from 'react'
import {graphql} from 'gatsby'
import {mapEdgesToNodes} from '../lib/helpers'
import BlogPostPreviewGrid from '../components/blog-post-preview-grid'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Img from "gatsby-image"
import {responsiveTitle1} from '../components/typography.module.css'

export const query = graphql`
  query SkjemaPageQuery{
     sanityPage(mainImage: {}, title: {eq: "Skjema"}) {
    mainImage {
      asset {
        fluid {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
    }
      title
  }

  }
`

const SkjemaPage = props => {
  const {data, errors} = props
  const {title} = data.sanityPage

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
      </Container>
    </Layout>
  )
}

export default SkjemaPage
