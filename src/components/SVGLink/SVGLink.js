import React from 'react'
import { Link } from 'gatsby'

import posed from 'react-pose'

import styles from './SVGLink.module.css'

// Load all SVGs in images
const svgs = require.context('../../icons', false, /\.svg$/)

const SVGLinkComponent = React.forwardRef(
  ({ src, to, className, activeClassName }, ref) => {
    const Icon = svgs(`./${src}`) // src is a file in the icons folder
    return (
      <Link
        {...{ to, activeClassName }}
        innerRef={ref}
        className={className || styles.link}
      >
        <Icon />
      </Link>
    )
  }
)

const SVGLink = ({ config, ...props }) => {
  const Component = posed(SVGLinkComponent)(config)
  return <Component {...props} />
}

export default SVGLink
