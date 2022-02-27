import styled from 'styled-components'

import { BiAward, BiBriefcaseAlt } from 'react-icons/bi'

export const ExperienceIcon = styled(BiAward)`
  width: 1.5rem;
  height: 1.5rem;
  color: var(--first-color);
  margin-bottom: 0.5rem;
`
export const ProjectsIcon = styled(BiBriefcaseAlt)`
  width: 1.5rem;
  height: 1.5rem;
  color: var(--first-color);
  margin-bottom: 0.5rem;
`

export const AboutContainer = styled.div`
  row-gap: 2.5rem;

  @media screen and (max-width: 320px) {
    text-align: center;
  }

  @media screen and (min-width: 992) {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    column-gap: 4rem;
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    column-gap: 4rem;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    column-gap: 4rem;
  }
`

export const ImgAbout = styled.div`
  margin: 0 auto;

  @media screen and (min-width: 767px) {
    text-align: center;
  }
`

export const AboutImg = styled.img`
  width: 220px;
  border-radius: 1.5rem;
  justify-self: center;

  @media screen and (min-width: 992) {
    width: 350px;
  }

  @media screen and (min-width: 1024px) {
    width: 350px;
  }

  @media screen and (min-width: 1440px) {
    width: 350px;
  }
`

export const AboutData = styled.div`
  text-align: center;

  @media screen and (min-width: 992) {
    text-align: initial;
  }

  @media screen and (min-width: 1024px) {
    text-align: initial;
  }

  @media screen and (min-width: 1440px) {
    text-align: initial;
  }
`

export const AboutInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  margin-bottom: 2rem;

  @media screen and (min-width: 576px) {
    justify-content: center;
  }

  @media screen and (min-width: 992) {
    justify-content: initial;
  }

  @media screen and (min-width: 1024px) {
    justify-content: initial;
  }

  @media screen and (min-width: 1440px) {
    justify-content: initial;
  }
`

export const AboutBox = styled.div`
  background-color: var(--container-color);
  border-radius: 0.75rem;
  padding: 0.75rem 0.5rem;

  @media screen and (min-width: 992) {
    text-align: center;
    padding: 1rem 1.25rem;
  }

  @media screen and (min-width: 1024px) {
    text-align: center;
    padding: 1rem 1.25rem;
  }

  @media screen and (min-width: 1440px) {
    text-align: center;
    padding: 1rem 1.25rem;
  }

  .light-theme && {
    box-shadow: 0 2px 8px hsla(var(--second-hue), 48%, 8%, 0.1);
  }
`

export const AboutTitle = styled.h3`
  font-size: var(--small-font-size);
`

export const AboutSubtitle = styled.span`
  font-size: var(--tiny-font-size);
`

export const AboutDescription = styled.p`
  margin-bottom: 2rem;

  @media screen and (min-width: 576px) {
    padding: 0 5rem;
  }

  @media screen and (min-width: 992) {
    padding: 0 4rem 0 0;
    margin-bottom: 2.5rem;
  }

  @media screen and (min-width: 1024px) {
    padding: 0 4rem 0 0;
    margin-bottom: 2.5rem;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 4rem 0 0;
    margin-bottom: 2.5rem;
  }
`
