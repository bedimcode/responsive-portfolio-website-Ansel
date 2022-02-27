import { Fragment, useState, useEffect } from 'react'
import Link from 'next/link'

//icons
import {
  LogoIcon,
  HomeIcon,
  AboutIcon,
  SkillsIcon,
  WorkIcon,
  ContactIcon,
  DarkModeIcon,
  LightModeIcon,
} from './Style'

import { Header, Nav, NavLogo, NavMenu, NavList, NavItem, NavLink, ChangeTheme } from './Style'

const index = () => {
  let sections

  const [dark, setDark] = useState(true)
  const [scrollHeaderShadow, setScrollHeaderShadow] = useState(false)

  useEffect(() => {
    if (localStorage) {
      const selectedTheme = localStorage.getItem('selected-theme')
      const lightTheme = 'light-theme'

      if (selectedTheme === 'light') {
        document.body.classList.add(lightTheme)
        setDark(true)
      } else {
        document.body.classList.remove(lightTheme)
        setDark(false)
      }
    }

    sections = document.querySelectorAll('section[id]')

    window.addEventListener('scroll', scrollHeader)
  }, [])

  const handleTheme = () => {
    const lightTheme = 'light-theme'

    const getCurrentTheme = () => (document.body.classList.contains(lightTheme) ? 'light' : 'dark')

    if (document.body.classList.contains(lightTheme)) {
      document.body.classList.remove(lightTheme)
      setDark(false)
    } else {
      document.body.classList.add(lightTheme)
      setDark(true)
    }

    localStorage.setItem('selected-theme', getCurrentTheme())
  }

  const scrollHeader = () => {
    const scrollY = window.pageYOffset

    setScrollHeaderShadow(scrollY >= 50 ? true : false)

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id')

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
      } else {
        document
          .querySelector('.nav__menu a[href*=' + sectionId + ']')
          .classList.remove('active-link')
      }
    })
  }

  return (
    <Fragment>
      <Header id="header" className={scrollHeaderShadow ? 'scroll-header' : ''}>
        <Nav className="container">
          <Link href="./">
            <NavLogo>
              <LogoIcon />
              Mohammad Abu Mattar
            </NavLogo>
          </Link>

          <NavMenu className="nav__menu">
            <NavList>
              <NavItem>
                <NavLink href="#home" className="active-link">
                  <HomeIcon />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#about" className="">
                  <AboutIcon />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#skills" className="">
                  <SkillsIcon />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#work" className="">
                  <WorkIcon />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#contact" className="">
                  <ContactIcon />
                </NavLink>
              </NavItem>
            </NavList>
          </NavMenu>
          <ChangeTheme onClick={handleTheme}>
            {dark === true ? (
              <Fragment>
                <DarkModeIcon />
              </Fragment>
            ) : (
              <Fragment>
                <LightModeIcon />
              </Fragment>
            )}
          </ChangeTheme>
        </Nav>
      </Header>
    </Fragment>
  )
}

export default index
