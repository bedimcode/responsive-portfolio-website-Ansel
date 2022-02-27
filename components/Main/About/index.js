import { Fragment } from 'react'

import { SectionTitle, SectionSubtitle } from '../../../styles/Style'

import { ExperienceIcon, ProjectsIcon } from './Style'

import {
  AboutContainer,
  ImgAbout,
  AboutImg,
  AboutData,
  AboutInfo,
  AboutBox,
  AboutTitle,
  AboutSubtitle,
  AboutDescription,
} from './Style'

const index = () => {
  return (
    <Fragment>
      <section className="about section" id="about">
        <SectionSubtitle>My Intro</SectionSubtitle>
        <SectionTitle>About Me</SectionTitle>

        <AboutContainer className="container grid">
          <ImgAbout>
            <AboutImg src="assets/img/profile.png" alt="" />
          </ImgAbout>

          <AboutData>
            <AboutInfo>
              <AboutBox>
                <ExperienceIcon />
                <AboutTitle>Experience</AboutTitle>
                <AboutSubtitle>+1 Years Working</AboutSubtitle>
              </AboutBox>

              <AboutBox>
                <ProjectsIcon />
                <AboutTitle>Completed</AboutTitle>
                <AboutSubtitle>+10 Projects</AboutSubtitle>
              </AboutBox>
            </AboutInfo>

            <AboutDescription>
              I'm a software engineer based in Amman, exceptional websites
              developer (and occasionally designing), and everything in between.
            </AboutDescription>

            <a href="#contact" className="button">
              Contact Me
            </a>
          </AboutData>
        </AboutContainer>
      </section>
    </Fragment>
  )
}

export default index
