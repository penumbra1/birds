import React from 'react'

import Layout from './Layout/Layout'

import './WrapPageElement.module.css'

const WrapPageElement = ({ element, props }) => {
  const path = props.location.pathname

  return (
    <Layout path={path}>
      <main styleName="container">{element}</main>
    </Layout>
  )
}

export default WrapPageElement
