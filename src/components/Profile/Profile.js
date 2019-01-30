import React from 'react'
import posed from 'react-pose'
import Img from 'gatsby-image'

import Stats from './Stats'

import './Profile.module.css'

const fromBelow = {
  enter: {
    x: '0%',
    y: '0%',
    opacity: 1,
    transition: { duration: 1000 },
  },
  exit: {
    x: '-20px',
    y: '0%',
    opacity: 1,
    transition: { duration: 1000 },
  },
  props: {},
}

const fromBelowD = {
  enter: {
    x: '0%',
    y: '0%',
    opacity: 1,
    transition: { duration: 1000 },
  },
  exit: {
    x: '-20px',
    y: '0%',
    opacity: 0,
    delay: 1000,
    transition: { duration: 1000 },
  },
  props: {},
}

const toLeft = {
  exit: {
    x: '-100%',
    y: '0%',
    transition: { duration: 2000 },
  },
}

const toRight = {
  exit: {
    x: '100%',
    y: 0,
    transition: { duration: 2000 },
  },
}

const PosedContainer = ({ config, ...props }) => {
  const Component = posed.div(config)
  return <Component {...props} />
}

const Image = ({ image, slug }) => (
  <PosedContainer styleName="picture" config={fromBelow}>
    <Img fluid={image} />
  </PosedContainer>
)

const Text = ({ title, latin, text, wingspan, length }) => (
  <PosedContainer styleName="description" config={fromBelow}>
    <h2>
      {title}
      <span>{latin}</span>
    </h2>
    <div dangerouslySetInnerHTML={{ __html: text }} />
    <Stats {...{ wingspan, length }} />
  </PosedContainer>
)

const ProfileComponent = ({
  title,
  latin,
  image,
  text,
  slug,
  wingspan,
  length,
  ...props
}) => (
  <PosedContainer styleName="container" config={fromBelowD} {...props}>
    <Image {...{ image, slug }} />
    <Text {...{ title, latin, text, wingspan, length }} />
  </PosedContainer>
)

export default ProfileComponent
