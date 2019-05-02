import React from 'react'
import Img from 'gatsby-image'
import { graphql, StaticQuery } from 'gatsby'

import posed from 'react-pose'

import './Fringe.module.css'

const FringeContainer = posed.div({
  preEnter: { top: '0' },
  enter: {
    top: '0',
    transition: { duration: 500, ease: 'circOut' },
    delay: 1000,
  },
  exit: { top: '-130vh', transition: { duration: 800, ease: 'circIn' } },
})

const Fringe = props => (
  <StaticQuery
    query={graphql`
      query FringeQuery {
        file(relativePath: { eq: "fringe.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `}
    render={data => (
      <FringeContainer {...props} styleName="container">
        <Img
          fluid={{
            ...data.file.childImageSharp.fluid,
            sizes: `(max-width: 1200px) 1200px, ${
              data.file.childImageSharp.fluid.sizes
            }`,
          }}
          style={{
            minWidth: '1200px',
            maxWidth: '1920px',
          }}
        />
      </FringeContainer>
    )}
  />
)

export default Fringe
