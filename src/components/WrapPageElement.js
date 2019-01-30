import React from 'react'
import posed, { PoseGroup } from 'react-pose'

import Layout from './Layout/Layout'

const WrapPageElement = ({ element, props }) => {
  const path = props.location.pathname

  const RouteContainer = posed.div({
    enter: {
      opacity: 1,
      transition: { duration: 300 },
      delay: 300,
      beforeChildren: true,
    },
    exit: {
      opacity: path === '/' ? 1 : 0,
      transition: { duration: 300 },
    },
  })

  return (
    <Layout path={path}>
      <PoseGroup animateOnMount={true} enterAfterExit={true}>
        <RouteContainer key={path} className="main">
          {element}
        </RouteContainer>
      </PoseGroup>
    </Layout>
  )
}

export default WrapPageElement
