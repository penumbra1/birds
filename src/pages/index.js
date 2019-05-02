import React from 'react'
import { graphql } from 'gatsby'

import { PoseGroup } from 'react-pose'
import Article from '../components/Article/Article'
import SVGLink from '../components/SVGLink/SVGLink'

const IndexPage = ({ data }) => (
  <PoseGroup animateOnMount>
    <Article key="text">
      <h1>{data.site.siteMetadata.title}</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi est
        perferendis obcaecati dolores nemo eum adipisci officia illum excepturi.
        Debitis non magnam laboriosam eum id a quasi culpa quas odit? Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Veritatis, vitae, a
        nemo repellendus.
      </p>
    </Article>
    <SVGLink
      to={data.allMarkdownRemark.edges[0].node.fields.slug}
      src="next.svg"
      key="next"
      config={{
        enter: {
          y: '0%',
          opacity: 1,
          transition: { type: 'spring', stiffness: 250, damping: 8 },
          delay: 1000,
        },
        exit: { y: '-50%', opacity: 0 },
      }}
    />
  </PoseGroup>
)

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1
      sort: { fields: [frontmatter___title], order: ASC }
    ) {
      edges {
        node {
          fields {
            slug
          }
        }
      }
    }
  }
`

export default IndexPage
