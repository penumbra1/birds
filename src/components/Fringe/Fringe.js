import React from 'react'
import Img from 'gatsby-image'
import { graphql, StaticQuery } from 'gatsby'

import posed from 'react-pose'

import styles from './Fringe.module.css'

const FringeContainer = posed.div({
  below: { y: '100%' },
  above: { y: '-100%' },
  enter: {
    y: 0,
    transition: { duration: 800 },
    delay: 1000,
  },
  exit: { y: '-130vh', transition: { duration: 2000 } },
})

const Fringe = ({ className, ...props }) => (
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
      <FringeContainer className={className || styles.container} {...props}>
        <Img
          fluid={{
            ...data.file.childImageSharp.fluid,
            sizes: `(max-width: 1200px) 1200px, ${
              data.file.childImageSharp.fluid.sizes
            }`,
          }}
          style={{
            position: 'initial',
            minWidth: '1200px',
            maxWidth: '1920px',
          }}
        />
      </FringeContainer>
    )}
  />
)

export default Fringe
