import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import posed from 'react-pose'

import SVGLink from '../SVGLink/SVGLink'

import styles from './ItemNav.module.css'

const ItemNavContainer = posed.ul({
  enter: { staggerChildren: 80, delayChildren: 2000 },
  exit: { staggerChildren: 80 },
})

const ItemNav = props => (
  <StaticQuery
    query={graphql`
      query NavQuery {
        allMarkdownRemark(sort: { fields: [frontmatter___title], order: ASC }) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `}
    render={data => (
      <ItemNavContainer className={styles.nav} {...props}>
        {data.allMarkdownRemark.edges.map(({ node }, index) => (
          <li key={index}>
            <SVGLink
              to={node.fields.slug}
              src={`${node.fields.slug.replace(/\//g, '')}.svg`}
              className={styles.link}
              activeClassName={styles.activeLink}
              config={{
                enter: { y: 0 },
                exit: { y: '150%' },
              }}
            />
          </li>
        ))}
      </ItemNavContainer>
    )}
  />
)

// const PosedItemNav = posed(ItemNav)({
//   enter: {
//     opacity: 1,
//     transition: { duration: 500 },
//   },
//   exit: {
//     opacity: 0,
//     transition: { duration: 500 },
//   },
// })

// export default PosedItemNav
export default ItemNav
