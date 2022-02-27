import styled from 'styled-components'

import {
  BiHomeAlt,
  BiUser,
  BiBook,
  BiBriefcaseAlt2,
  BiMessageSquareDetail,
  BiMoon,
  BiSun,
} from 'react-icons/bi'
import Logo from '../../icons/Logo'

// icons
export const LogoIcon = styled(Logo)``
export const HomeIcon = styled(BiHomeAlt)``
export const AboutIcon = styled(BiUser)``
export const SkillsIcon = styled(BiBook)``
export const WorkIcon = styled(BiBriefcaseAlt2)``
export const ContactIcon = styled(BiMessageSquareDetail)``
export const DarkModeIcon = styled(BiMoon)``
export const LightModeIcon = styled(BiSun)``

//style component
export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--body-color);
  z-index: var(--z-fixed);
  transition: 0.4s; /* for light mode animation */
`

export const Nav = styled.nav`
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 992) {
    height: calc(var(--header-height) + 1rem);
  }
`

export const NavLogo = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  color: var(--first-color-alt);
  font-weight: var(--font-medium);
  transform: 0.4s;

  &&::hover {
    color: var(--first-color-alt);
  }
`

export const NavMenu = styled.div`
  position: fixed;
  bottom: 1rem;
  background-color: hsla(var(--second-hue), 32%, 16%, 0.8);
  width: 90%;
  border-radius: 4rem;
  padding: 1rem 2.25rem;
  backdrop-filter: blur(10px);
  transition: 0.4s; /* for light mode animation */

  @media screen and (max-width: 320px) {
    padding: 1rem 1.5rem;
  }

  @media screen and (min-width: 576px) {
    width: 328px;
    left: 0;
    right: 0;
    margin: 0 auto;
  }

  .light-theme && {
    background-color: hsla(var(--second-hue), 32%, 90%, 0.8);
  }
`

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavItem = styled.li``

export const NavLink = styled.a`
  cursor: pointer;
  color: var(--text-color);
  font-size: 1.24rem;
  padding: 8px 12px 8px 12px;
  border-radius: 5rem;
  transition: 0.4s;

  &&:hover {
    background: linear-gradient(
      180deg,
      hsla(var(--second-hue), var(--sat), var(--lig), 1),
      hsla(var(--second-hue), var(--sat), var(--lig), 0.2)
    );
    box-shadow: 0 0 16px hsla(var(--first-hue), var(--sat), var(--lig), 0.2);
    color: var(--title-color);
  }
`

export const ChangeTheme = styled.span`
  cursor: pointer;
  font-size: 1.25rem;
  transition: 0.3s;

  &&:hover {
    color: var(--first-color);
  }
`
