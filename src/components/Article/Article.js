import React from 'react'
import posed from 'react-pose'

import { revealTextPoses } from '../poses'

import './Article.module.css'

const Element = type =>
  posed[type]({
    ...revealTextPoses,
  })

const ArticleComponent = posed.article({
  enter: {
    staggerChildren: 300,
  },
  exit: {
    staggerChildren: 300,
  },
})

const Article = ({ children, ...props }) => (
  <ArticleComponent styleName="article" {...props}>
    {children.map((child, index) => {
      const Item = Element(child.type)
      return <Item key={index}>{child.props.children}</Item>
    })}
  </ArticleComponent>
)

export default Article
