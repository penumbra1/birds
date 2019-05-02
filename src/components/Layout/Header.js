import React, { forwardRef } from 'react'
import posed, { PoseGroup } from 'react-pose'
import { Link } from 'gatsby'

import { revealTextPoses } from '../poses'

import './Header.module.css'

const Nav = posed.nav(revealTextPoses)

const NavItem = forwardRef(({ to, children }, ref) => (
  <Link ref={ref} to={to}>
    {children}
  </Link>
))

const HeaderTitle = posed.h1({
  enter: { y: '0' },
  exit: { y: '-200%' },
})

const Header = ({ title, showTitle }) => (
  <header styleName="header">
    <PoseGroup animateOnMount>
      <Nav key="headerNav">
        <NavItem to="/species/">Все птицы</NavItem>
        <NavItem to="/about">О проекте</NavItem>
      </Nav>
      {showTitle && (
        <HeaderTitle key="headerTitle">
          <Link to="/">{title}</Link>
        </HeaderTitle>
      )}
    </PoseGroup>
  </header>
)

export default Header
