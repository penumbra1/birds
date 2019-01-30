import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './Header'
import ItemNav from '../ItemNav/ItemNav'

import Fringe from '../Fringe/Fringe'

import './Layout.module.css'
import { PoseGroup } from 'react-pose'

const Layout = props => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div styleName={props.path === '/' ? 'viewportHeight' : 'contentHeight'}>
        <Helmet title={data.site.siteMetadata.title}>
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} path={props.path} />
        {props.children}
        <PoseGroup animateOnMount enterAfterExit>
          {props.path !== '/' && <ItemNav key="itemNav" />}
          {/* <Fringe
          styleName={props.path === '/' ? '' : 'fringe'}
          initialPose={props.path === '/' ? 'below' : 'above'}
          pose="enter"
        /> */}
          {props.path === '/' ? (
            <Fringe key="fringeBelow" initialPose="below" pose="enter" />
          ) : (
            <Fringe
              key="fringeAbove"
              styleName="fringe"
              initialPose="above"
              pose="enter"
            />
          )}
        </PoseGroup>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
