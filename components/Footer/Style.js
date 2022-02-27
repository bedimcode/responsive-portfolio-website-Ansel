import styled from 'styled-components'

import { FiGithub, FiLinkedin, FiCodepen, FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'

export const LinkedinIcon = styled(FiLinkedin)``
export const GithubIcon = styled(FiGithub)``
export const CodepenIcon = styled(FiCodepen)``
export const LeetcodeIcon = styled(SiLeetcode)``
export const FacebookIcon = styled(FiFacebook)``
export const InstagramIcon = styled(FiInstagram)``
export const TwitterIcon = styled(FiTwitter)``

export const Footer = styled.footer`
  background-color: var(--first-color);
`
export const FooterContainer = styled.div`
  padding: 2rem 0;
`

export const FooterTitle = styled.h2`
  color: var(--body-color);
  text-align: center;
  margin-bottom: 2rem;

  .light-theme && {
    color: var(--title-color);
  }
`

export const FooterList = styled.ul`
  display: flex;
  justify-content: center;
  column-gap: 1.5rem;
  margin-bottom: 2rem;
`

export const FooterLink = styled.a`
  color: var(--body-color);

  .light-theme && {
    color: var(--title-color);
  }
`

export const FooterSocial = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 1.25rem;
`

export const FooterSocialLink = styled.a`
  background-color: var(--body-color);
  color: var(--first-color);
  padding: 0.25rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  display: inline-flex;
  transform: 0.5s;

  @media screen and (min-width: 992) {
    font-size: 1.25rem;
    padding: 0.4rem;
    border-radius: 0.5rem;
  }

  @media screen and (min-width: 1024px) {
    font-size: 1.25rem;
    padding: 0.4rem;
    border-radius: 0.5rem;
  }

  @media screen and (min-width: 1440px) {
    font-size: 1.25rem;
    padding: 0.4rem;
    border-radius: 0.5rem;
  }

  &&:hover ${LinkedinIcon} {
    color: var(--title-color);
    transform: 0.5s;
  }

  .light-theme &&:hover ${LinkedinIcon} {
    color: var(--body-color);
    transform: 0.5s;
  }

  &&:hover ${GithubIcon} {
    color: var(--title-color);
    transform: 0.5s;
  }

  .light-theme &&:hover ${GithubIcon} {
    color: var(--body-color);
    transform: 0.5s;
  }

  &&:hover ${CodepenIcon} {
    color: var(--title-color);
    transform: 0.5s;
  }

  .light-theme &&:hover ${CodepenIcon} {
    color: var(--body-color);
    transform: 0.5s;
  }

  &&:hover ${LeetcodeIcon} {
    color: var(--title-color);
    transform: 0.5s;
  }

  .light-theme &&:hover ${LeetcodeIcon} {
    color: var(--body-color);
    transform: 0.5s;
  }

  &&:hover ${FacebookIcon} {
    color: var(--title-color);
    transform: 0.5s;
  }

  .light-theme &&:hover ${FacebookIcon} {
    color: var(--body-color);
    transform: 0.5s;
  }

  &&:hover ${InstagramIcon} {
    color: var(--title-color);
    transform: 0.5s;
  }

  .light-theme &&:hover ${InstagramIcon} {
    color: var(--body-color);
    transform: 0.5s;
  }

  &&:hover ${TwitterIcon} {
    color: var(--title-color);
    transform: 0.5s;
  }

  .light-theme &&:hover ${TwitterIcon} {
    color: var(--body-color);
    transform: 0.5s;
  }

  .light-theme && {
    background-color: var(--title-color);
  }
`

export const FooterCopy = styled.span`
  display: block;
  margin-top: 2rem;
  padding-bottom: 5.5rem;
  color: var(--container-color);
  text-align: center;
  font-size: var(--smaller-font-size);

  .light-theme && {
    color: var(--title-color);
  }
`
