import React from 'react'
import { graphql } from 'gatsby'

import Profile from '../components/Profile/Profile'

const BirdPage = ({ data }) => {
  const {
    fields: { slug },
    html: text,
    frontmatter: {
      title,
      latin,
      image: {
        childImageSharp: { fluid: image },
      },
      wingspan,
      length,
    },
  } = data.markdownRemark

  return (
    <Profile
      {...{
        title,
        latin,
        image,
        text,
        slug,
        wingspan,
        length,
      }}
    />
  )
}

export const query = graphql`
  query PageQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      html
      frontmatter {
        title
        latin
        image {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        wingspan
        length
      }
    }
  }
`

export default BirdPage
