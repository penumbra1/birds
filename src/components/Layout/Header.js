import React from 'react'
import posed, { PoseGroup } from 'react-pose'
import { Link } from 'gatsby'

import Fringe from '../Fringe/Fringe'

import './Header.module.css'

const Nav = posed.nav({
  enter: {
    staggerChildren: 300,
  },
})

const NavItem = React.forwardRef(({ to, children }, ref) => (
  <Link innerRef={ref} to={to}>
    {children}
  </Link>
))

const NavLink = posed(NavItem)({
  enter: { y: '0' },
  exit: { y: '-200%' },
})

const HeaderTitle = posed.h1()

const Header = ({ siteTitle, path }) => (
  <header styleName="header">
    <PoseGroup animateOnMount>
      <Nav key="headerNav">
        <NavLink to="/species/">Все птицы</NavLink>
        <NavLink to="/about">О проекте</NavLink>
      </Nav>

      {/* {path !== '/' && (
        <Fringe key="headerFringe" styleName="fringe" initialPose="above" />
      )} */}

      {path !== '/' && (
        <HeaderTitle key="headerTitle">
          <Link to="/">{siteTitle}</Link>
        </HeaderTitle>
      )}
    </PoseGroup>
  </header>
)

export default Header
