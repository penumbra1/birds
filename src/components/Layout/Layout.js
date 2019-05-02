import React from 'react'
import PropTypes from 'prop-types'
import { PoseGroup } from 'react-pose'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './Header'
import ItemNav from '../ItemNav/ItemNav'
import Fringe from '../Fringe/Fringe'

import './Layout.module.css'

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
      <div styleName="layout">
        <Helmet title={data.site.siteMetadata.title}>
          <html lang="en" />
        </Helmet>
        <Header
          title={data.site.siteMetadata.title}
          showTitle={props.path !== '/'}
        />
        {props.children}
        <PoseGroup animateOnMount>
          {props.path !== '/' && <ItemNav key="itemNav" />}
        </PoseGroup>
        <PoseGroup preEnterPose="preEnter" animateOnMount key="fringeGroup">
          {props.path === '/' && <Fringe key="fringe" />}
        </PoseGroup>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
