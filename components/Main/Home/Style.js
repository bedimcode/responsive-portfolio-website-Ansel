import styled from 'styled-components'

import { FiGithub, FiLinkedin, FiCodepen } from 'react-icons/fi'

import { BiMouse } from 'react-icons/bi'

export const LinkedinIcon = styled(FiLinkedin)``
export const GithubIcon = styled(FiGithub)``
export const CodepenIcon = styled(FiCodepen)``
export const HomeScrollIcon = styled(BiMouse)`
  width: 1.24rem;
  height: 1.24rem;

  @media screen and (min-width: 992) {
    width: 2rem;
    height: 2rem;
  }
`

export const HomeContainer = styled.div`
  position: relative;
  row-gap: 4.5rem;
  padding-top: 2rem;
`

export const HomeData = styled.div`
  text-align: center;
`

export const HomeGreeting = styled.span`
  display: block;
  color: var(--title-color);
  margin-bottom: 0.25rem;
  font-size: var(--small-font-size);
  font-weight: var(--font-medium);
`

export const HomeName = styled.h1`
  font-size: var(--biggest-font-size);
`

export const HomeEducation = styled.h3`
  color: var(--text-color);
  margin-bottom: 2.5rem;
  font-size: var(--small-font-size);
  font-weight: var(--font-medium);
`

export const HomeButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  @media screen and (max-width: 320px) {
    flex-direction: column;
  }
`

export const HomeHandle = styled.div`
  justify-self: center;
  width: 190px;
  height: 293px;
  background: linear-gradient(
    180deg,
    hsla(var(--first-hue), var(--sat), var(--lig), 1),
    hsla(var(--first-hue), var(--sat), var(--lig), 0.2)
  );
  border-radius: 10rem 10rem 1rem 1rem;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;

  @media screen and (max-width: 320px) {
    width: 150px;
    height: 253px;
  }

  @media screen and (min-width: 992) {
    width: 290px;
    height: 400px;
  }
`
export const HomeImg = styled.img`
  width: 100%;

  @media screen and (max-width: 320px) {
    width: 130px;
  }

  @media screen and (min-width: 992) {
    width: 220px;
  }
`

export const HomeSocial = styled.div`
  position: absolute;
  bottom: 5rem;
  left: 0;
  display: grid;
  row-gap: 0.5rem;

  &&::after {
    content: '';
    width: 32px;
    height: 2px;
    background-color: var(--first-color);
    transform: rotate(90deg) translate(16px, 3px);

    @media screen and (min-width: 992) {
      transform: rotate(90deg) translate(16px, 0);
    }
  }

  .light-theme &&::after {
    background-color: var(--title-color);
  }
`

export const HomeSocialLink = styled.a`
  width: max-content;
  background-color: var(--container-color);
  color: var(--first-color);
  padding: 0.25rem;
  border-radius: 0.25rem;
  display: flex;
  font-size: 1rem;
  transition: 0.4s;

  &&:hover {
    background-color: var(--first-color);
  }

  &&:hover ${LinkedinIcon} {
    stroke: #fff;
  }

  &&:hover ${GithubIcon} {
    stroke: #fff;
  }

  &&:hover ${CodepenIcon} {
    stroke: #fff;
  }

  @media screen and (min-width: 992) {
    padding: 0.4rem;
    font-size: 1.25rem;
  }

  .light-theme && {
    color: var(--title-color);
    box-shadow: 0 2px 8px hsla(var(--second-hue), 48%, 8%, 0.1);
  }
`

export const HomeScroll = styled.a`
  position: absolute;
  color: var(--first-color);
  right: -1.5rem;
  bottom: 4rem;
  display: grid;
  row-gap: 2.25rem;
  justify-items: center;

  .light-theme && {
    color: var(--title-color);
  }
`
export const HomeScrollName = styled.span`
  font-size: var(--smaller-font-size);
  transform: rotate(-90deg);
`
