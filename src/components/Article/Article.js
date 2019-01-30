import React from 'react'
import posed from 'react-pose'

import './Article.module.css'

const Element = type =>
  posed[type]({
    enter: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 400,
        ease: 'easeOut',
      },
    },
    exit: { y: '-10%', opacity: 0 },
  })

const ArticleComponent = posed.article({
  enter: {
    staggerChildren: 300,
  },
  exit: {
    staggerChildren: 300,
  },
})

const Article = ({ children }) => (
  <ArticleComponent styleName="article">
    {children.map((child, index) => {
      const Item = Element(child.type)
      return <Item key={index}>{child.props.children}</Item>
    })}
  </ArticleComponent>
)

export default Article
